import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { join, resolve } from "node:path"
import css from "~/styles/global.css?raw"
import { splitTitle } from "~/data/title"
import renderSource from "./render.ts?raw"
import templateSource from "./template.ts?raw"

// Per-entry Open Graph image: the layout, the sizing steps and the hash that names the file.
// `render.ts` turns the tree below into a PNG. Both files are part of `templateVersion`, so
// editing either one changes every image URL.

export const WIDTH = 1200
export const HEIGHT = 630
// Text never goes into this margin. `render.ts` fails the build if it does.
export const MARGIN = 72

export interface OgInput {
  title: string
  titleAccent?: string
  problem: string
}

// Colours come from the tokens in `src/styles/global.css`. This is the only place the image code
// reads them.
function token(name: string) {
  const match = css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{3,8})\\s*;`))
  if (!match) throw new Error(`OG image: no hex --color-${name} token in src/styles/global.css`)
  return match[1]
}
export const colours = { ink: token("ink"), paper: token("paper"), accent: token("accent") }

// satori reads static .woff files, not the variable woff2 files the site loads.
function font(pkg: string, file: string) {
  const dir = resolve("node_modules/@fontsource", pkg)
  const { version } = JSON.parse(readFileSync(join(dir, "package.json"), "utf8")) as {
    version: string
  }
  return { data: readFileSync(join(dir, "files", file)), version }
}
const archivo = font("archivo", "archivo-latin-800-normal.woff")
const mono = font("jetbrains-mono", "jetbrains-mono-latin-500-normal.woff")
export const fonts = [
  { name: "Archivo", data: archivo.data, weight: 800, style: "normal" },
  { name: "JetBrains Mono", data: mono.data, weight: 500, style: "normal" },
] as const

// Font size steps, picked from the text length: [longest text for the step, font size in px].
// The same margins apply to every entry, so the longest title and problem take the smallest step.
// Add a step here if `render.ts` reports an overflow.
const titleSteps = [
  [12, 150],
  [16, 128],
  [20, 108],
  [28, 96],
  [Infinity, 84],
] as const
const problemSteps = [
  [60, 48],
  [100, 42],
  [140, 36],
  [Infinity, 32],
] as const
const pick = (steps: readonly (readonly [number, number])[], length: number) =>
  steps.find(([longest]) => length <= longest)![1]

// Advance of the space glyph in Archivo ExtraBold, in em. The title is set word by word (satori
// cannot wrap a line that mixes colours), so the gap between words has to be added by hand.
const SPACE_EM = 0.189
const TITLE_TRACKING_EM = -0.05 // Tailwind tracking-tighter, as on the entry H1
const PROBLEM_TRACKING_EM = -0.025 // tracking-tight, as on the entry problem

interface Node {
  type: string
  props: { style: Record<string, string | number>; children?: Node | Node[] | string }
}
const el = (
  style: Node["props"]["style"],
  children?: Node["props"]["children"],
  type = "div",
): Node => ({ type, props: { style, children } })

export function ogTree({ title, titleAccent, problem }: OgInput) {
  const { plain, accent } = splitTitle(title, titleAccent)
  const titleSize = pick(titleSteps, title.length)
  const problemSize = pick(problemSteps, problem.length)
  const word = (text: string, color: string) =>
    el({ display: "flex", flexShrink: 0, whiteSpace: "nowrap", color }, text)
  const words = [
    ...plain.split(/\s+/).map((text) => word(text, colours.ink)),
    ...(accent ? accent.split(/\s+/).map((text) => word(text, colours.accent)) : []),
  ]

  return el(
    {
      display: "flex",
      flexDirection: "column",
      width: WIDTH,
      height: HEIGHT,
      boxSizing: "border-box",
      padding: MARGIN,
      background: colours.paper,
      color: colours.ink,
    },
    [
      el(
        {
          fontFamily: "JetBrains Mono",
          fontWeight: 500,
          fontSize: 22,
          letterSpacing: 22 * 0.08,
        },
        "LOGIC BENDERS",
      ),
      el(
        {
          display: "flex",
          flexWrap: "wrap",
          columnGap: (SPACE_EM + TITLE_TRACKING_EM) * titleSize,
          marginTop: 44,
          fontFamily: "Archivo",
          fontWeight: 800,
          fontSize: titleSize,
          lineHeight: 1,
          letterSpacing: TITLE_TRACKING_EM * titleSize,
        },
        words,
      ),
      el(
        {
          marginTop: 40,
          fontFamily: "Archivo",
          fontWeight: 800,
          fontSize: problemSize,
          lineHeight: 1.25,
          letterSpacing: PROBLEM_TRACKING_EM * problemSize,
        },
        problem,
      ),
    ],
  )
}

// Everything that changes how every image looks: the image code, the colour tokens and the font
// files and package versions. Any change to one of them changes every hash, so every URL.
export const templateVersion = createHash("sha256")
  .update(
    JSON.stringify([
      templateSource,
      renderSource,
      colours,
      archivo.version,
      mono.version,
      createHash("sha256").update(archivo.data).digest("hex"),
      createHash("sha256").update(mono.data).digest("hex"),
    ]),
  )
  .digest("hex")

// `<slug>-<hash>`: the hash covers exactly what is drawn (title, accent split, problem) plus the
// template version.
export function ogFile(slug: string, { title, titleAccent, problem }: OgInput) {
  const { plain, accent } = splitTitle(title, titleAccent)
  const hash = createHash("sha256")
    .update(JSON.stringify([templateVersion, plain, accent ?? null, problem]))
    .digest("hex")
    .slice(0, 10)
  return `${slug}-${hash}`
}
