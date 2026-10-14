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
// Vertical bands, in px. The header (icon and label) starts TOP from the top. The orange bar at
// the bottom matches /og.png: a 3px ink rule at BAR_TOP, then the accent fill. Title and problem
// stay above CONTENT_BOTTOM, clear of the bar.
export const TOP = 56
export const BAR_TOP = 517
export const CONTENT_BOTTOM = BAR_TOP - 36
const ICON = 44 // the favicon mark, scaled

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
const archivoRegular = font("archivo", "archivo-latin-400-normal.woff")
const mono = font("jetbrains-mono", "jetbrains-mono-latin-500-normal.woff")
export const fonts = [
  { name: "Archivo", data: archivo.data, weight: 800, style: "normal" },
  { name: "Archivo", data: archivoRegular.data, weight: 400, style: "normal" },
  { name: "JetBrains Mono", data: mono.data, weight: 500, style: "normal" },
] as const

// Font size steps, picked from the text length: [longest text for the step, font size in px].
// The same margins apply to every entry, so the longest title and problem take the smallest step.
// Add a step here if `render.ts` reports an overflow.
const titleSteps = [
  [12, 150],
  [14, 128],
  [20, 108],
  [Infinity, 84],
] as const
const problemSteps = [
  [60, 44],
  [100, 38],
  [140, 34],
  [Infinity, 30],
] as const
const pick = (steps: readonly (readonly [number, number])[], length: number) =>
  steps.find(([longest]) => length <= longest)![1]

// Advance of the space glyph in Archivo ExtraBold, in em. The title is set word by word (satori
// cannot wrap a line that mixes colours), so the gap between words has to be added by hand.
const SPACE_EM = 0.189
const TITLE_TRACKING_EM = -0.05 // Tailwind tracking-tighter, as on the entry H1
const PROBLEM_TRACKING_EM = -0.025 // tracking-tight, as on the entry problem
const TITLE_GAP = 40 // header to title
const PROBLEM_GAP = 32 // title to problem

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

  // The mark from /og.png: an accent square under an ink square, shifted down and right.
  const square = 25
  const offset = ICON - square
  const mark = el({ display: "flex", position: "relative", width: ICON, height: ICON }, [
    el({
      position: "absolute",
      left: offset,
      top: offset,
      width: square,
      height: square,
      background: colours.accent,
    }),
    el({
      position: "absolute",
      left: 0,
      top: 0,
      width: square,
      height: square,
      background: colours.ink,
    }),
  ])
  const label = (text: string) =>
    el(
      { fontFamily: "JetBrains Mono", fontWeight: 500, fontSize: 22, letterSpacing: 22 * 0.08 },
      text,
    )

  return el(
    {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxSizing: "border-box",
      width: WIDTH,
      height: HEIGHT,
      padding: `${TOP}px ${MARGIN}px 0`,
      background: colours.paper,
      color: colours.ink,
    },
    [
      el({ display: "flex", alignItems: "center", gap: 18 }, [mark, label("LOGIC BENDERS")]),
      el(
        {
          display: "flex",
          flexWrap: "wrap",
          columnGap: (SPACE_EM + TITLE_TRACKING_EM) * titleSize,
          marginTop: TITLE_GAP,
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
          marginTop: PROBLEM_GAP,
          fontFamily: "Archivo",
          fontWeight: 800,
          fontSize: problemSize,
          lineHeight: 1.25,
          letterSpacing: PROBLEM_TRACKING_EM * problemSize,
        },
        problem,
      ),
      // The orange bar from /og.png: tagline left, address right.
      el(
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          left: 0,
          top: BAR_TOP,
          width: WIDTH,
          height: HEIGHT - BAR_TOP,
          boxSizing: "border-box",
          padding: `6px ${MARGIN - 1}px 0 ${MARGIN}px`,
          borderTop: `3px solid ${colours.ink}`,
          background: colours.accent,
        },
        [
          el(
            { fontFamily: "Archivo", fontWeight: 400, fontSize: 32 },
            "Paradoxes in plain words.",
          ),
          label("LOGICBENDERS.COM"),
        ],
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
      createHash("sha256").update(archivoRegular.data).digest("hex"),
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
