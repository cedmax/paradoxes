// Fetch source PNGs once; all pages serve media from the site's own origin.
// Commit these unchanged binaries before merge to avoid any build-time fetch.
import { readFile, mkdir, writeFile, rename, rm } from "node:fs/promises"
import { join } from "node:path"

const assets = [
  {
    name: "checker-shadow-original.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Same_color_illusion.png",
    width: 1078,
    height: 838,
  },
  {
    name: "checker-shadow-proof.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Same_color_illusion_proof2.png",
    width: 1087,
    height: 844,
  },
]

const outputDir = join(process.cwd(), "public", "illustrations")
const pngMagic = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

function validatePng(bytes, asset) {
  if (
    bytes.length < 24 ||
    !bytes.subarray(0, 8).equals(pngMagic) ||
    bytes.toString("ascii", 12, 16) !== "IHDR"
  ) {
    throw new Error(asset.name + ": invalid PNG signature or header")
  }
  const width = bytes.readUInt32BE(16)
  const height = bytes.readUInt32BE(20)
  if (width !== asset.width || height !== asset.height) {
    throw new Error(
      asset.name + ": expected " + asset.width + "x" + asset.height +
      ", got " + width + "x" + height,
    )
  }
}

async function ensureAsset(asset) {
  const path = join(outputDir, asset.name)
  try {
    const existing = await readFile(path)
    validatePng(existing, asset)
    return
  } catch (error) {
    if (error.code !== "ENOENT") throw error
  }

  console.log("Fetching original illusion asset: " + asset.name)
  const response = await fetch(asset.url, {
    signal: AbortSignal.timeout(30000),
  })
  if (!response.ok) {
    throw new Error("Cannot fetch " + asset.name + ": HTTP " + response.status)
  }
  const bytes = Buffer.from(await response.arrayBuffer())
  validatePng(bytes, asset)
  const tmp = path + ".tmp-" + process.pid
  try {
    await writeFile(tmp, bytes)
    await rename(tmp, path)
  } finally {
    await rm(tmp, { force: true })
  }
  console.log("Saved " + asset.name + " (" + bytes.length + " bytes)")
}

await mkdir(outputDir, { recursive: true })
for (const asset of assets) await ensureAsset(asset)
