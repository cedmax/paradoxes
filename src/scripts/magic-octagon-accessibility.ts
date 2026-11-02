// Spoken equivalents for the Magic Octagon controls.
// Deliberately independent of drawCoin and the figure event handlers: a failure
// here must not prevent anyone from manipulating the coins.

const angles = [0, 45, 90, 135, 180, 225, 270, 315]
const directions = [
  "up",
  "up-right",
  "right",
  "down-right",
  "down",
  "down-left",
  "left",
  "up-left",
]
const corners = [
  "top",
  "upper-right",
  "right",
  "lower-right",
  "bottom",
  "lower-left",
  "left",
  "upper-left",
]
const wrap = (n: number) => ((n % 8) + 8) % 8
const position = (x: number, y: number) =>
  wrap(Math.round((Math.atan2(y, x) + Math.PI / 2) / (Math.PI / 4)))

const describe = (turn: number, flip: number, marked: boolean) => {
  const radians = (turn * Math.PI) / 180
  const cosFlip = Math.cos((flip * Math.PI) / 180)
  const degrees = Math.round(flip)
  if (Math.abs(cosFlip) <= 0.015) {
    return degrees + " degrees. Edge-on; neither face is visible."
  }

  const front = cosFlip > 0
  const arrowX = front ? Math.sin(radians) * cosFlip : Math.cos(radians) * cosFlip
  const arrowY = front ? -Math.cos(radians) : Math.sin(radians)
  const arrow = directions[position(arrowX, arrowY)]
  const markerX = Math.sin(radians) * cosFlip
  const markerY = -Math.cos(radians)
  return (
    degrees + " degrees. " + (front ? "Front" : "Flipped") +
    " face; arrow points " + arrow +
    (marked ? "; marked corner at " + corners[position(markerX, markerY)] : "") + "."
  )
}

const coinDescriptions = new WeakMap<Element, string>()
const updateCoinDescription = (id: string, turn: number, flip: number, marked: boolean) => {
  const svg = document.querySelector<SVGSVGElement>('[data-magic-coin="' + id + '"]')
  const desc = svg?.querySelector("desc")
  if (!desc) return
  if (!coinDescriptions.has(desc)) coinDescriptions.set(desc, desc.textContent?.trim() ?? "")
  desc.textContent =
    coinDescriptions.get(desc) + " Current view: " + describe(turn, flip, marked)
}

const gallerySummary = (degrees: number, marked: boolean) =>
  angles
    .map((angle) => angle + "° rotation: " + describe(angle, degrees, marked))
    .join(" ")

const update = (slider: HTMLInputElement, updateGraphicDescription: boolean) => {
  const id = slider.id
  const degrees = Number(slider.value)
  if (!Number.isFinite(degrees)) return

  let spoken: string
  let descriptions: Array<[string, number, number, boolean]>

  if (id === "magic-octagon-inspect-slider") {
    spoken = describe(0, degrees, false)
    descriptions = [["inspect", 0, degrees, false]]
  } else if (id === "magic-octagon-puzzle-slider") {
    spoken = describe(45, degrees, false)
    descriptions = [["puzzle", 45, degrees, false]]
  } else if (id === "magic-octagon-proof-slider") {
    spoken =
      "First view: " + describe(45, degrees, true) +
      " Second view: " + describe(45, 180 - degrees, true)
    descriptions = [
      ["proof-front", 45, degrees, true],
      ["proof-flipped", 45, 180 - degrees, true],
    ]
  } else if (id === "magic-octagon-variants-shared" ||
             id === "magic-octagon-proof-variants-shared") {
    const marked = id === "magic-octagon-proof-variants-shared"
    spoken = "All eight coins. " + describe(45, degrees, marked)
    const summaryId = marked
      ? "magic-octagon-proof-variants-description"
      : "magic-octagon-variants-description"
    const summary = document.getElementById(summaryId)
    if (summary) summary.textContent = gallerySummary(degrees, marked)
    descriptions = angles.map((angle) => [
      (marked ? "proof-variant-" : "variant-") + angle,
      angle,
      degrees,
      marked,
    ])
  } else {
    const proofMatch = /^magic-octagon-proof-variant-(\d+)$/.exec(id)
    const puzzleMatch = /^magic-octagon-variant-(\d+)$/.exec(id)
    const match = proofMatch ?? puzzleMatch
    if (!match) return
    const turn = Number(match[1])
    const marked = Boolean(proofMatch)
    spoken = describe(turn, degrees, marked)
    descriptions = [[(marked ? "proof-variant-" : "variant-") + turn, turn, degrees, marked]]
  }

  slider.setAttribute("aria-valuetext", spoken)
  // SVG descriptions are refreshed on release, not on every animation frame.
  // Keeping the rendering hot path untouched avoids interfering with scrubbing.
  if (updateGraphicDescription) {
    for (const [coinId, turn, flip, marked] of descriptions) {
      updateCoinDescription(coinId, turn, flip, marked)
    }
  }
}

const initialise = () => {
  if (!document.querySelector('[data-entry="magic-octagon"]')) return
  const sliders = Array.from(
    document.querySelectorAll<HTMLInputElement>('input[type="range"][id^="magic-octagon-"]'),
  )
  const sync = (includeGraphics: boolean) => {
    for (const slider of sliders) update(slider, includeGraphics)
  }

  // Bubbling listeners run after the figure's own slider handlers.
  document.addEventListener("input", (event) => {
    if (event.target instanceof HTMLInputElement && sliders.includes(event.target)) {
      update(event.target, false)
    }
  })
  document.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement && sliders.includes(event.target)) {
      update(event.target, true)
    }
  })
  document.addEventListener("click", (event) => {
    const target = event.target
    if (!(target instanceof Element)) return
    if (target.closest("#magic-octagon-reset")) {
      queueMicrotask(() => sync(true))
    } else if (target.closest("#magic-octagon-reveal")) {
      // The revealed coin animates for 1.8 s (or changes instantly for reduced motion).
      const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1850
      window.setTimeout(() => sync(true), delay)
    }
  })
  window.matchMedia("(min-width: 48rem)").addEventListener("change", () => {
    queueMicrotask(() => sync(true))
  })

  sync(true)
  window.addEventListener("load", () => sync(false), { once: true })
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialise, { once: true })
} else {
  initialise()
}
