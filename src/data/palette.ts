// Illustration colours as CSS variables, for SVG attributes and scripts.
// The values live in `@theme` in src/styles/global.css. In markup prefer the
// Tailwind utilities (fill-series-red, border-series-blue, stroke-stroke).
export const series = {
  red: "var(--color-series-red)",
  lilac: "var(--color-series-lilac)",
  blue: "var(--color-series-blue)",
  gold: "var(--color-series-gold)",
  green: "var(--color-series-green)",
} as const

export const seriesList = [series.red, series.blue, series.gold, series.green] as const

export const stroke = "var(--color-stroke)"

export const illusionSurface = {
  neutral: "var(--color-illusion-neutral)",
  midGrey: "var(--color-illusion-mid-grey)",
  ink: "var(--color-ink)",
  paper: "var(--color-paper)",
} as const
