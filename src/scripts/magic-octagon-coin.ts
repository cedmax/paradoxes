// One physical 3D model for the Magic Octagon's inspectors and explanation.
// Rotate in the coin's plane first, then flip about the fixed picture-space Y axis.

export const labels = [
  "up",
  "up-right",
  "right",
  "down-right",
  "down",
  "down-left",
  "left",
  "up-left",
]

export const symbols = ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"]

const wrap = (value: number) => ((value % 8) + 8) % 8
export const directionIndexes = (angle: number) => {
  const steps = Math.round(angle / 45)
  return { front: wrap(steps), flipped: wrap(6 - steps) }
}

const vertices = Array.from({ length: 8 }, (_, index) => {
  const angle = -Math.PI / 2 + (index * Math.PI) / 4
  return { x: 180 + 112 * Math.cos(angle), y: 145 + 112 * Math.sin(angle) }
})
const halfThickness = 16

const projection = (x: number, y: number, z: number, turn: number, flip: number) => {
  const inPlane = (turn * Math.PI) / 180
  const aboutY = (flip * Math.PI) / 180
  const dx = x - 180
  const dy = y - 145
  const localX = dx * Math.cos(inPlane) - dy * Math.sin(inPlane)
  const localY = dx * Math.sin(inPlane) + dy * Math.cos(inPlane)
  return {
    x: 180 + localX * Math.cos(aboutY) + z * Math.sin(aboutY),
    y: 145 + localY,
  }
}

const faceTransform = (turn: number, flip: number, z: number) => {
  const inPlane = (turn * Math.PI) / 180
  const aboutY = (flip * Math.PI) / 180
  const cosTurn = Math.cos(inPlane)
  const sinTurn = Math.sin(inPlane)
  const cosFlip = Math.cos(aboutY)
  const a = cosFlip * cosTurn
  const b = sinTurn
  const c = -cosFlip * sinTurn
  const d = cosTurn
  const e = 180 - a * 180 - c * 145 + z * Math.sin(aboutY)
  const f = 145 - b * 180 - d * 145
  return "matrix(" + [a, b, c, d, e, f].join(" ") + ")"
}

export const drawCoin = (svg: SVGSVGElement, turn: number, flip: number) => {
  const front = svg.querySelector<SVGGElement>("[data-coin-front]")
  const flipped = svg.querySelector<SVGGElement>("[data-coin-flipped]")
  const facets = Array.from(svg.querySelectorAll<SVGPolygonElement>("[data-coin-side]"))
  if (!front || !flipped || facets.length !== 8) return

  front.setAttribute("transform", faceTransform(turn, flip, halfThickness))
  flipped.setAttribute("transform", faceTransform(turn, flip, -halfThickness))

  const faceWidth = Math.cos((flip * Math.PI) / 180)
  front.setAttribute("visibility", faceWidth > 0.015 ? "visible" : "hidden")
  flipped.setAttribute("visibility", faceWidth < -0.015 ? "visible" : "hidden")

  const spin = (turn * Math.PI) / 180
  const flipSin = Math.sin((flip * Math.PI) / 180)
  for (const [index, facet] of facets.entries()) {
    const a = vertices[index]
    const b = vertices[(index + 1) % 8]
    const midX = (a.x + b.x) / 2 - 180
    const midY = (a.y + b.y) / 2 - 145
    const outwardX = midX * Math.cos(spin) - midY * Math.sin(spin)
    const visible = outwardX * flipSin < -0.01
    facet.setAttribute("visibility", visible ? "visible" : "hidden")
    if (!visible) continue
    const quad = [
      projection(a.x, a.y, halfThickness, turn, flip),
      projection(b.x, b.y, halfThickness, turn, flip),
      projection(b.x, b.y, -halfThickness, turn, flip),
      projection(a.x, a.y, -halfThickness, turn, flip),
    ]
    facet.setAttribute(
      "points",
      quad.map((point) => point.x.toFixed(3) + "," + point.y.toFixed(3)).join(" "),
    )
  }
  describeSvg(svg, turn, flip)
}

// Describe the visible projection, not just the slider's numeric value.
// The corner dot is on the same top vertex of both painted faces.
const projectedDirection = (x: number, y: number) => {
  const angle = Math.atan2(y, x)
  return labels[wrap(Math.round((angle + Math.PI / 2) / (Math.PI / 4)))]
}

export const describeCoin = (turn: number, flip: number, marked = false) => {
  const degrees = Math.round(flip)
  const turnRadians = (turn * Math.PI) / 180
  const flipCos = Math.cos((flip * Math.PI) / 180)
  if (Math.abs(flipCos) <= 0.015) {
    return marked
      ? degrees + " degrees. Edge-on: the coin's thickness is visible; neither arrow nor dot is visible."
      : degrees + " degrees. Edge-on: the coin's thickness is visible; neither arrow is visible."
  }

  const front = flipCos > 0
  const x = front ? Math.sin(turnRadians) * flipCos : Math.cos(turnRadians) * flipCos
  const y = front ? -Math.cos(turnRadians) : Math.sin(turnRadians)
  const arrow = projectedDirection(x, y)
  const side = front ? "Front" : "Flipped"
  const cornerX = Math.sin(turnRadians) * flipCos
  const cornerY = -Math.cos(turnRadians)
  return (
    degrees + " degrees. " + side + " face; arrow points " + arrow +
    (marked ? "; marked corner is " + projectedDirection(cornerX, cornerY) : "") + "."
  )
}

// Preserve the contextual SVG description while keeping its current position
// accurate for anyone navigating back to the graphic after using a slider.
const startingDescriptions = new WeakMap<SVGSVGElement, string>()
const describeSvg = (svg: SVGSVGElement, turn: number, flip: number) => {
  const desc = svg.querySelector("desc")
  if (!desc) return
  if (!startingDescriptions.has(svg)) {
    startingDescriptions.set(svg, desc.textContent?.trim() ?? "")
  }
  const marked = svg.querySelector("[data-coin-marker]") !== null
  desc.textContent =
    startingDescriptions.get(svg) + " Current view: " + describeCoin(turn, flip, marked)
}

export const inspectionLabel = (degrees: number) => {
  if (degrees === 0) return "Front · 0°"
  if (degrees === 180) return "Flipped · 180°"
  if (degrees >= 85 && degrees <= 95) return "Edge-on · " + degrees + "°"
  return "Turning over · " + degrees + "°"
}
