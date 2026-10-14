import { Resvg } from "@resvg/resvg-js"
import { mkdir, readFile, readdir, rename, rm, writeFile } from "node:fs/promises"
import { join, resolve } from "node:path"
import satori from "satori"
import {
  BAR_TOP,
  colours,
  CONTENT_BOTTOM,
  fonts,
  HEIGHT,
  MARGIN,
  ogFile,
  ogTree,
  TOP,
  WIDTH,
  type OgInput,
} from "./template"

// Rendered PNGs live here between builds (gitignored with node_modules). The deploy workflow
// restores and saves this directory, so a typical build only renders the images that changed.
const cacheDir = resolve("node_modules/.cache/og")

function rgb(hex: string) {
  const digits = hex.slice(1)
  const full = digits.length === 3 ? [...digits].map((c) => c + c).join("") : digits
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16))
}

// Above the bar, text must stay inside its area: the side margins, the header margin and
// CONTENT_BOTTOM. Anything that is not paper outside it means the title or problem is too long for
// its size step, so fail the build instead of shipping a clipped image. A few pixels of slack
// allow for glyph side bearings and negative tracking.
const BLEED = 4

function assertInsideMargin(slug: string, pixels: Uint8Array) {
  const [pr, pg, pb] = rgb(colours.paper)
  const left = MARGIN - BLEED
  const right = WIDTH - MARGIN + BLEED
  const top = TOP - BLEED
  const bottom = CONTENT_BOTTOM + BLEED
  // Rows from BAR_TOP down are the orange bar, which is drawn on purpose.
  for (let y = 0; y < BAR_TOP; y++) {
    for (let x = 0; x < WIDTH; x++) {
      if (y >= top && y < bottom && x >= left && x < right) {
        x = right - 1
        continue
      }
      const i = (y * WIDTH + x) * 4
      const diff =
        Math.abs(pixels[i] - pr) + Math.abs(pixels[i + 1] - pg) + Math.abs(pixels[i + 2] - pb)
      if (diff > 24) {
        throw new Error(
          `OG image for "${slug}" draws outside its text area at (${x}, ${y}): text must stay inside the ${MARGIN}px side margins, below the header margin and above the orange bar. ` +
            "Add a smaller step in the size steps of src/og/template.ts.",
        )
      }
    }
  }
}

async function render(slug: string, input: OgInput) {
  const svg = await satori(ogTree(input) as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: [...fonts],
  })
  const image = new Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH },
    font: { loadSystemFonts: false },
  }).render()
  assertInsideMargin(slug, image.pixels)
  return image.asPng()
}

// Returns the cached PNG for this exact input and template, or renders and stores it.
export async function ogPng(slug: string, input: OgInput) {
  const file = join(cacheDir, `${ogFile(slug, input)}.png`)
  try {
    return await readFile(file)
  } catch {
    // Not cached yet.
  }
  const png = await render(slug, input)
  await mkdir(cacheDir, { recursive: true })
  // Write then rename, so an interrupted build never leaves a half-written file in the cache.
  const temp = `${file}.${process.pid}.tmp`
  await writeFile(temp, png)
  await rename(temp, file)
  return png
}

// Removes cached images that no current entry uses, so the cache does not grow forever.
export async function pruneOgCache(keep: Set<string>) {
  const files = await readdir(cacheDir).catch(() => [])
  await Promise.all(
    files
      .filter((file) => !keep.has(file))
      .map((file) => rm(join(cacheDir, file), { force: true })),
  )
}
