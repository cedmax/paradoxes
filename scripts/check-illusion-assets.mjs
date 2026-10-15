// All visual illusion media is committed and served from this site's own origin.
// Reject missing, corrupted or substituted source assets without downloading anything.
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"

const assets = [
  {
    name: "checker-shadow-original.png",
    type: "png",
    width: 1078,
    height: 838,
    sha256: "21541b15b19854593df57d2ee3104bdadcf8c47c1c944f7f1436f3d088d5e8be",
  },
  {
    name: "checker-shadow-proof.gif",
    type: "gif",
    width: 540,
    height: 420,
    sha256: "5c6d8fff1e4371f11b63fa6531731876a37bed991cad4d6f94e9d0aef9eda85e",
  },
  {
    name: "checker-shadow-scrub-frames.png",
    type: "png",
    width: 3240,
    height: 1680,
    sha256: "ac51047f77ae2f400f4bc165efcbee811b3eb84297e4c659b2e8648a21b6986a",
  },
]

const pngMagic = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

for (const asset of assets) {
  const path = new URL("../public/illustrations/" + asset.name, import.meta.url)
  let bytes
  try {
    bytes = await readFile(path)
  } catch (error) {
    if (error.code !== "ENOENT") throw error
    throw new Error("Missing self-hosted illusion asset: " + asset.name, { cause: error })
  }

  const isPng =
    asset.type === "png" &&
    bytes.length >= 24 &&
    bytes.subarray(0, 8).equals(pngMagic) &&
    bytes.readUInt32BE(16) === asset.width &&
    bytes.readUInt32BE(20) === asset.height
  const isGif =
    asset.type === "gif" &&
    bytes.length >= 10 &&
    bytes.toString("ascii", 0, 6) === "GIF89a" &&
    bytes.readUInt16LE(6) === asset.width &&
    bytes.readUInt16LE(8) === asset.height

  if (!isPng && !isGif) {
    throw new Error("Unexpected format or dimensions for " + asset.name)
  }
  if (createHash("sha256").update(bytes).digest("hex") !== asset.sha256) {
    throw new Error("Original bytes changed for " + asset.name)
  }
}
