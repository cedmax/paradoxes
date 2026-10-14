import { OutsideMarginError, renderTree } from "./render.ts"
import { defaultTitleSizes, ogDefaultTree } from "./template.ts"

// Renders the default Open Graph image (public/og.png) at the largest title size that keeps both
// headline lines inside the margins. Shared by `scripts/og-default.ts`, which writes the file,
// and `scripts/check-seo.mjs`, which checks the committed file is current.
export async function renderDefaultOg() {
  for (const size of defaultTitleSizes) {
    try {
      return { png: await renderTree("default", ogDefaultTree(size)), size }
    } catch (error) {
      if (!(error instanceof OutsideMarginError)) throw error
    }
  }
  throw new Error("The default headline does not fit at any title size in src/og/template.ts.")
}
