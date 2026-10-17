// Shared playback for the audio illusions. One sound at a time, only ever started by a button
// press, and always stoppable. Samples come from ~/scripts/audio-synth, never from a file.

interface Playing {
  source: AudioBufferSourceNode
  gain: GainNode
  onStop?: () => void
}

let context: AudioContext | undefined
let playing: Playing | undefined

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

/** iOS can report "interrupted" as well as "suspended", and resume() may never settle. */
async function wake(audio: AudioContext) {
  if (audio.state === "running") return
  await Promise.race([audio.resume(), new Promise((done) => setTimeout(done, 500))])
}

/** Fade out and stop whatever is playing, then tell its owner so the buttons can reset. */
export function stopAudio() {
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
 */
export async function playSamples(
  render: (sampleRate: number) => Float32Array,
  options: { loop?: boolean; onStop?: () => void } = {},
) {
  stopAudio()
  const audio = ensureContext()
  await wake(audio)
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
}

// Sound must never carry on once the page is hidden or left.
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAudio()
  })
  window.addEventListener("pagehide", stopAudio)
}
