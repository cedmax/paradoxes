import { mkdir, writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import { renderDefaultOg } from "../src/og/default.ts"

// Renders the default Open Graph image, public/og.png, with the same template and margin check as
// the entry images. Run it with `pnpm og:default` and commit the result. It is not part of the
// build: regenerate it after any change to src/og/ or the colour tokens. `pnpm check:seo` fails
// when the committed file is out of date.
const { png, size } = await renderDefaultOg()
await mkdir(resolve("public"), { recursive: true })
await writeFile(resolve("public/og.png"), png)
console.log(`Wrote public/og.png (headline ${size}px).`)
