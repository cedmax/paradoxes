// Pure, deterministic sample generators for the audio illusions. Nothing here touches the
// browser, so every stimulus can be rendered and inspected outside a page.
// Parameters are explicit and also shown to the reader beside each figure.

const TWO_PI = 2 * Math.PI
const mod = (n: number, m: number) => ((n % m) + m) % m

/** Raised-cosine edge: 0 at `i = 0`, 1 at `i = length`. */
const raise = (i: number, length: number) =>
  Math.sin((Math.PI / 2) * Math.min(1, i / length)) ** 2

/* ------------------------------------------------------------------------------------------ */
/* Tritone paradox                                                                            */
/* ------------------------------------------------------------------------------------------ */
// After Deutsch (1986, 1987), Deutsch, North & Ray (1990), Deutsch (1991):
//  - six octave-spaced sinusoids (beta = 2, gamma = 6) so the envelope spans fmin .. 64 * fmin;
//  - A(f) = 0.5 - 0.5 * cos(2π * log2(f / fmin) / 6) on that range;
//  - envelope centred on C4, F#4, C5 or F#5 (centre = 8 * fmin);
//  - 500 ms per tone, no gap within a pair, equal level, second tone a half-octave away.
// Not stated in the papers: the short crossfades and edge ramps added here to avoid clicks.

export const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const

/** Envelope centres, in semitones above C4. */
export const TRITONE_ENVELOPES = [
  { name: "C4", hz: 262, semitones: 0 },
  { name: "F#4", hz: 370, semitones: 6 },
  { name: "C5", hz: 523, semitones: 12 },
  { name: "F#5", hz: 740, semitones: 18 },
] as const

const C4_HZ = 440 * 2 ** (-9 / 12)
const OCTAVES = 6
const TONE_RMS = 0.265

export interface SpectralPartial {
  freq: number
  /** Relative amplitude from the envelope, 0 to 1. */
  amp: number
}

/** The six partials of pitch class `pitchClass` (0 = C) under an envelope centred `centre` semitones above C4. */
export function tritonePartials(pitchClass: number, centre: number): SpectralPartial[] {
  const fminSemitones = centre - (OCTAVES / 2) * 12
  const fmin = C4_HZ * 2 ** (fminSemitones / 12)
  const offset = mod(pitchClass - fminSemitones, 12)
  return Array.from({ length: OCTAVES }, (_, octave) => {
    const s = offset + 12 * octave
    return {
      freq: fmin * 2 ** (s / 12),
      amp: 0.5 - 0.5 * Math.cos((TWO_PI * s) / (12 * OCTAVES)),
    }
  })
}

/** Two 500 ms tones, `firstPitchClass` then the pitch class a half-octave (six semitones) away. */
export function renderTritonePair(
  firstPitchClass: number,
  centre: number,
  sampleRate: number,
): Float32Array {
  const toneMs = 500
  const rampMs = 5
  const tones = [firstPitchClass, firstPitchClass + 6].map((pitchClass) => {
    const parts = tritonePartials(mod(pitchClass, 12), centre)
    // Sinusoids are orthogonal, so power is the sum of a^2 / 2: this gives every tone equal RMS.
    const scale = TONE_RMS / Math.sqrt(parts.reduce((sum, p) => sum + (p.amp * p.amp) / 2, 0))
    return parts.map((p) => ({ freq: p.freq, amp: p.amp * scale }))
  })

  const length = Math.round((2 * toneMs * sampleRate) / 1000)
  const boundary = (toneMs / 1000) * sampleRate
  const half = (rampMs / 2000) * sampleRate
  const edge = (rampMs / 1000) * sampleRate
  const out = new Float32Array(length)

  for (let i = 0; i < length; i++) {
    const t = i / sampleRate
    // Equal-power crossfade centred on the boundary between the two tones.
    const u = Math.min(1, Math.max(0, (i - (boundary - half)) / (2 * half)))
    const weights = [Math.cos((Math.PI / 2) * u), Math.sin((Math.PI / 2) * u)]
    let sample = 0
    for (let k = 0; k < 2; k++) {
      if (weights[k] === 0) continue
      let tone = 0
      for (const p of tones[k]) tone += p.amp * Math.sin(TWO_PI * p.freq * t)
      sample += weights[k] * tone
    }
    out[i] = sample * raise(i, edge) * raise(length - 1 - i, edge)
  }
  return out
}

/* ------------------------------------------------------------------------------------------ */
/* Auditory streaming                                                                         */
/* ------------------------------------------------------------------------------------------ */
// A repeating A B A _ pattern (van Noorden, 1975; Bregman, 1990). A is fixed at 440 Hz and B is
// `semitones` above it. Timing never changes: four 125 ms slots per triplet.

export const STREAMING = {
  lowHz: 700,
  /** 12.5 ms rise, 88 ms steady, 12.5 ms decay, then 12 ms silence within the 125 ms slot. */
  toneMs: 113,
  fadeMs: 12.5,
  slotMs: 125,
  triplets: 8,
  /** Default separation, in semitones: 18 puts the high note near 2 kHz. */
  defaultSemitones: 18,
  /** Largest separation offered, in semitones. */
  maxSemitones: 24,
  /** Levels follow the demonstration this was matched to: the low note is 6 dB louder. */
  lowAmplitude: 0.063,
  highAmplitude: 0.0315,
} as const

export const streamingHighHz = (semitones: number) => STREAMING.lowHz * 2 ** (semitones / 12)

export function renderStreaming(semitones: number, sampleRate: number): Float32Array {
  const { lowHz, toneMs, fadeMs, slotMs, triplets, lowAmplitude, highAmplitude } = STREAMING
  const slot = Math.round((slotMs * sampleRate) / 1000)
  const tone = Math.round((toneMs * sampleRate) / 1000)
  const edge = Math.round((fadeMs * sampleRate) / 1000)
  const out = new Float32Array(slot * 4 * triplets)
  const highHz = streamingHighHz(semitones)
  // Slots in a triplet: A, B, A, silence.
  const slots = [lowHz, highHz, lowHz, 0]
  const amplitudes = [lowAmplitude, highAmplitude, lowAmplitude, 0]

  for (let n = 0; n < triplets; n++) {
    slots.forEach((hz, k) => {
      if (hz === 0) return
      const start = (n * 4 + k) * slot
      for (let i = 0; i < tone; i++) {
        out[start + i] =
          amplitudes[k] *
          Math.sin((TWO_PI * hz * i) / sampleRate) *
          raise(i, edge) *
          raise(tone - 1 - i, edge)
      }
    })
  }
  return out
}

/* ------------------------------------------------------------------------------------------ */
/* Auditory continuity illusion                                                               */
/* ------------------------------------------------------------------------------------------ */
// A 1 kHz tone, interrupted every second for `gapMs` by a burst of white noise (low-passed at
// 12 kHz). The tone is absent while the noise plays. Timing, levels and the hard tone edges are
// matched to the apparent-continuity demonstration measured in Bregman & Ahad (1996), demo 28: a
// 900 ms tone and a 100 ms noise burst repeat, and the noise is raised in steps up to about
// 22 dB above the tone's RMS. Cf. Warren & Obusek (1972), Bregman & Dannenbring (1977).

export const CONTINUITY = {
  toneHz: 1000,
  toneAmplitude: 0.012,
  segmentMs: 900,
  gapMs: 100,
  noiseLowpassHz: 12000,
  /** Noise level relative to the tone's RMS, in dB, one entry per slider step. Step 0 is silence. */
  levels: [null, -10, -4, 2, 8, 16, 22],
} as const

export const continuityLevelLabel = (step: number) => {
  const level = CONTINUITY.levels[step]
  return level === null
    ? "no noise (silence)"
    : `${level > 0 ? "+" : ""}${level} dB re the tone`
}

/** Deterministic Gaussian noise (xorshift32 + Box–Muller) so every rendering is identical. */
function gaussianNoise(length: number, seed: number): Float32Array {
  let state = seed >>> 0 || 1
  const uniform = () => {
    state ^= state << 13
    state >>>= 0
    state ^= state >>> 17
    state ^= state << 5
    state >>>= 0
    return (state + 1) / 4294967297
  }
  const out = new Float32Array(length)
  for (let i = 0; i < length; i += 2) {
    const r = Math.sqrt(-2 * Math.log(uniform()))
    const theta = TWO_PI * uniform()
    out[i] = r * Math.cos(theta)
    if (i + 1 < length) out[i + 1] = r * Math.sin(theta)
  }
  return out
}

/** Second-order (RBJ) high-pass or low-pass, applied in place. */
function biquad(
  samples: Float32Array,
  type: "high" | "low",
  cutoff: number,
  sampleRate: number,
) {
  const w0 = (TWO_PI * cutoff) / sampleRate
  const alpha = Math.sin(w0) / (2 * Math.SQRT1_2)
  const cos = Math.cos(w0)
  const sign = type === "high" ? 1 : -1
  const b0 = (1 + sign * cos) / 2
  const b1 = -sign * (1 + sign * cos)
  const b2 = b0
  const a0 = 1 + alpha
  const a1 = -2 * cos
  const a2 = 1 - alpha
  let x1 = 0
  let x2 = 0
  let y1 = 0
  let y2 = 0
  for (let i = 0; i < samples.length; i++) {
    const x0 = samples[i]
    const y0 = (b0 * x0 + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2) / a0
    x2 = x1
    x1 = x0
    y2 = y1
    y1 = y0
    samples[i] = y0
  }
}

/** One cycle: `segmentMs` of tone, then `gapMs` of noise (or silence). Looped, it repeats exactly. */
export function renderContinuity(levelStep: number, sampleRate: number): Float32Array {
  const { toneHz, toneAmplitude, segmentMs, gapMs, noiseLowpassHz } = CONTINUITY
  const ms = (value: number) => Math.round((value * sampleRate) / 1000)
  const segment = ms(segmentMs)
  const gap = ms(gapMs)
  const out = new Float32Array(segment + gap)
  // The tone is held at full level up to a 2 ms edge, too short to hear as a fade: a tone that
  // fades before the noise weakens the illusion (Bregman & Dannenbring, 1977). The tone's phase
  // is continuous from one cycle to the next, as if it had never stopped.
  const cut = Math.round(0.002 * sampleRate)
  for (let i = 0; i < segment; i++) {
    out[i] =
      toneAmplitude *
      Math.sin((TWO_PI * toneHz * i) / sampleRate) *
      raise(i, cut) *
      raise(segment - 1 - i, cut)
  }

  const level = CONTINUITY.levels[levelStep]
  if (level !== null) {
    const noise = gaussianNoise(gap, 20261017)
    biquad(noise, "low", noiseLowpassHz, sampleRate)
    let power = 0
    for (const v of noise) power += v * v
    const noiseRms = Math.sqrt(power / noise.length)
    const target = (toneAmplitude / Math.SQRT2) * 10 ** (level / 20)
    for (let i = 0; i < gap; i++) {
      out[segment + i] =
        (noise[i] / noiseRms) * target * raise(i, cut) * raise(gap - 1 - i, cut)
    }
  }
  return out
}

/* ------------------------------------------------------------------------------------------ */
/* Risset rhythm                                                                              */
/* ------------------------------------------------------------------------------------------ */
// Five click trains whose tempi are always an octave apart (ratio 2). Every train speeds up
// exponentially by one octave per loop; a raised-cosine weight on log-tempo fades each in at the
// slow end and out at the fast end, as in a Shepard tone. At the loop boundary train k has the
// tempo, weight and click phase that train k + 1 has at the start, so the loop is seamless.
// With `a` = r0 * T / ln 2 an integer, click phases line up exactly; see the construction below.

export const RISSET = {
  layers: 5,
  /** Slowest starting tempo, in clicks per second. */
  slowestHz: 0.2,
  /** Click count constant: a = slowestHz * seconds / ln 2. Must be an integer for a seamless loop. */
  a: 8,
  /** Each click is a low thump with a short, bright tick on top, so it carries on small speakers. */
  bodyHz: 140,
  bodyDecayMs: 35,
  tickHz: 1800,
  tickDecayMs: 3,
  tickGain: 0.25,
  clickMs: 160,
} as const

/** A fractional click phase shared by all layers, which keeps clicks off the loop boundary. */
const RISSET_PHASE = 0.37

/** Loop length in seconds: the time for each train to double its speed. */
export const RISSET_LOOP_SECONDS = (RISSET.a * Math.LN2) / RISSET.slowestHz

/** Tempo of layer `k` (0-based) at the start of the loop, in clicks per second. */
export const rissetStartHz = (k: number) => RISSET.slowestHz * 2 ** k

/** Click times (seconds into the loop) and weights (0 to 1) for layer `k`, 0-based. */
export function rissetClicks(k: number): { time: number; weight: number }[] {
  const { a } = RISSET
  const seconds = RISSET_LOOP_SECONDS
  const clicks = a * 2 ** k
  return Array.from({ length: clicks }, (_, index) => {
    const n = index + 1
    // Phase of layer k is a * 2^k * (2^(t/T) - 1) + phase; a click happens at each integer.
    const time = seconds * Math.log2(1 + (n - RISSET_PHASE) / clicks)
    return {
      time,
      weight: 0.5 - 0.5 * Math.cos((TWO_PI * (k + time / seconds)) / RISSET.layers),
    }
  })
}

/**
 * Render one loop. `solo` plays only that layer (0-based), which is *not* seamless: it jumps back
 * to its slow tempo at the loop point. `solo = null` plays all layers.
 */
export function renderRisset(sampleRate: number, solo: number | null = null): Float32Array {
  const { layers, bodyHz, bodyDecayMs, tickHz, tickDecayMs, tickGain, clickMs } = RISSET
  const length = Math.round(RISSET_LOOP_SECONDS * sampleRate)
  const clickLength = Math.round((clickMs * sampleRate) / 1000)
  const click = new Float32Array(clickLength)
  for (let i = 0; i < clickLength; i++) {
    const t = i / sampleRate
    click[i] =
      Math.sin(TWO_PI * bodyHz * t) * Math.exp(-t / (bodyDecayMs / 1000)) +
      tickGain * Math.sin(TWO_PI * tickHz * t) * Math.exp(-t / (tickDecayMs / 1000))
  }
  const mix = (only: number | null) => {
    const out = new Float32Array(length)
    for (let k = 0; k < layers; k++) {
      if (only !== null && only !== k) continue
      for (const { time, weight } of rissetClicks(k)) {
        const start = Math.round(time * sampleRate)
        for (let i = 0; i < clickLength; i++) {
          out[(start + i) % length] += weight * click[i]
        }
      }
    }
    return out
  }

  // One gain, set by the full mix, so a solo layer is never louder than the whole pattern.
  const full = mix(null)
  let peak = 0
  for (const v of full) peak = Math.max(peak, Math.abs(v))
  const gain = 0.3 / (peak || 1)
  const out = solo === null ? full : mix(solo)
  for (let i = 0; i < length; i++) out[i] *= gain
  return out
}
