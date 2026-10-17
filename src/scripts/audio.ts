// Shared playback for the audio illusions. One sound at a time, only ever started by a button
// press, and always stoppable. Samples come from ~/scripts/audio-synth, never from a file.

interface Playing {
  source: AudioBufferSourceNode
  gain: GainNode
  onStop?: () => void
}

let context: AudioContext | undefined
let playing: Playing | undefined

export const audioAvailable = () => typeof window !== "undefined" && "AudioContext" in window

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
  context ??= new AudioContext()
  if (context.state === "suspended") await context.resume()
  const samples = render(context.sampleRate)
  const buffer = context.createBuffer(1, samples.length, context.sampleRate)
  buffer.copyToChannel(samples as Float32Array<ArrayBuffer>, 0)
  const gain = context.createGain()
  const source = context.createBufferSource()
  source.buffer = buffer
  source.loop = options.loop ?? false
  source.connect(gain).connect(context.destination)
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
