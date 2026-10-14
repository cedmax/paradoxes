import { mkdir, writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import { OutsideMarginError, renderTree } from "../src/og/render.ts"
import { defaultTitleSizes, ogDefaultTree } from "../src/og/template.ts"

// Renders the default Open Graph image, public/og.png, with the same template and margin check as
// the entry images. Run it with `pnpm og:default` and commit the result. It is not part of the
// build: regenerate it after any change to src/og/ or to the colour tokens.
// Uses the largest title size that keeps both headline lines inside the margins.
const out = resolve("public/og.png")
for (const size of [...defaultTitleSizes].sort((a, b) => b - a)) {
  try {
    const png = await renderTree("default", ogDefaultTree(size))
    await mkdir(resolve("public"), { recursive: true })
    await writeFile(out, png)
    console.log(`Wrote public/og.png (headline ${size}px).`)
    process.exit(0)
  } catch (error) {
    if (!(error instanceof OutsideMarginError)) throw error
  }
}
throw new Error("The default headline does not fit at any title size in src/og/template.ts.")
