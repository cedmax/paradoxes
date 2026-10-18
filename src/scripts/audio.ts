// Shared playback for the audio illusions. One sound at a time, only ever started by a button
// press, and always stoppable. Samples come from ~/scripts/audio-synth, never from a file.

import { find } from "./illustration"

interface Playing {
  source: AudioBufferSourceNode
  gain: GainNode
  onStop?: () => void
}

let context: AudioContext | undefined
let playing: Playing | undefined
/** Bumped by every stop and every new request, so a request still waiting can tell it is stale. */
let generation = 0

type AudioWindow = Window & {
  AudioContext?: typeof AudioContext
  webkitAudioContext?: typeof AudioContext
}

const contextClass = () =>
  typeof window === "undefined"
    ? undefined
    : ((window as AudioWindow).AudioContext ?? (window as AudioWindow).webkitAudioContext)

export const audioAvailable = () => contextClass() !== undefined

/**
 * Create the context inside the click. iOS plays Web Audio as "ambient" by default, which the
 * ringer switch silences, so ask for "playback" where Safari supports it. A silent one-sample
 * buffer started in the same gesture unlocks older iOS versions that ignore resume().
 */
function ensureContext() {
  if (context) return context
  const session = (navigator as Navigator & { audioSession?: { type: string } }).audioSession
  if (session) session.type = "playback"
  const Context = contextClass()
  if (!Context) throw new Error("Web Audio is not available")
  context = new Context()
  const unlock = context.createBufferSource()
  unlock.buffer = context.createBuffer(1, 1, context.sampleRate)
  unlock.connect(context.destination)
  unlock.start()
  return context
}

/**
 * iOS can report "interrupted" as well as "suspended", and resume() may never settle, so give
 * up after a second. The caller must still check the state: a timeout is not a resume.
 */
async function wake(audio: AudioContext) {
  if (audio.state === "running") return
  await Promise.race([audio.resume(), new Promise((done) => setTimeout(done, 1000))])
}

/** Fade out and stop whatever is playing, then tell its owner so the buttons can reset. */
export function stopAudio() {
  generation++
  const current = playing
  if (!current || !context) return
  playing = undefined
  const now = context.currentTime
  current.gain.gain.cancelScheduledValues(now)
  current.gain.gain.setTargetAtTime(0, now, 0.01)
  current.source.onended = null
  current.source.stop(now + 0.06)
  current.onStop?.()
}

/**
 * Render and play a mono buffer. Must be called from a click handler, so the browser allows
 * sound. Replaces anything already playing. `onStop` runs when it ends or is stopped.
 * Resolves to true only if the sound started; false if it was stopped or replaced while the
 * browser was still waking the audio, or the context never began running.
 */
export async function playSamples(
  render: (sampleRate: number) => Float32Array,
  options: { loop?: boolean; onStop?: () => void } = {},
) {
  stopAudio()
  const request = generation
  const audio = ensureContext()
  await wake(audio)
  if (request !== generation || audio.state !== "running") return false
  const samples = render(audio.sampleRate)
  const buffer = audio.createBuffer(1, samples.length, audio.sampleRate)
  buffer.copyToChannel(samples as Float32Array<ArrayBuffer>, 0)
  const gain = audio.createGain()
  const source = audio.createBufferSource()
  source.buffer = buffer
  source.loop = options.loop ?? false
  source.connect(gain).connect(audio.destination)
  const entry: Playing = { source, gain, onStop: options.onStop }
  playing = entry
  source.onended = () => {
    if (playing === entry) {
      playing = undefined
      entry.onStop?.()
    }
  }
  source.start()
  return true
}

// Sound must never carry on once the page is hidden or left.
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAudio()
  })
  window.addEventListener("pagehide", stopAudio)
}

/**
 * Play/Stop button for an illusion that loops one sound until stopped (see AudioControls). Shows
 * the unsupported note and disables the button when Web Audio is missing. The first play enables
 * the listener's answers. Pass `slider` to restart the sound when its value changes mid-play;
 * bind it after the slider's own `bindSlider`, so `render` sees the new value.
 */
export function bindLoopingAudio(
  root: Element,
  name: string,
  options: {
    render: (sampleRate: number) => Float32Array
    choices: { enable: () => void }
    slider?: HTMLInputElement
  },
) {
  const play = find<HTMLButtonElement>(root, `#${name}-play`)
  const isPlaying = () => play.getAttribute("aria-pressed") === "true"
  const setPlaying = (on: boolean) => {
    play.textContent = on ? "Stop" : "Play"
    play.setAttribute("aria-pressed", String(on))
  }
  const start = async () => {
    const started = await playSamples(options.render, {
      loop: true,
      onStop: () => setPlaying(false),
    })
    if (started) setPlaying(true)
  }

  if (audioAvailable()) {
    play.addEventListener("click", () => {
      if (isPlaying()) stopAudio()
      else {
        void start()
        options.choices.enable()
      }
    })
  } else {
    play.disabled = true
    find<HTMLElement>(root, `#${name}-unsupported`).hidden = false
  }
  options.slider?.addEventListener("input", () => {
    if (isPlaying()) void start()
  })
}
