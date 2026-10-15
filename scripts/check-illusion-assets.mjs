// Do not download source media during development or builds.
// These exact original bytes must be committed in public/illustrations/.
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"

const asset = new URL("../public/illustrations/checker-shadow-original.png", import.meta.url)
const expectedSha256 = "21541b15b19854593df57d2ee3104bdadcf8c47c1c944f7f1436f3d088d5e8be"

let png
try {
  png = await readFile(asset)
} catch (error) {
  if (error.code !== "ENOENT") throw error
  throw new Error(
    "Missing Adelson's checker-shadow PNG. Commit " +
    "public/illustrations/checker-shadow-original.png before building.",
    { cause: error },
  )
}
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
if (
  png.length < 24 ||
  !png.subarray(0, 8).equals(signature) ||
  png.readUInt32BE(16) !== 1078 ||
  png.readUInt32BE(20) !== 838
) {
  throw new Error("The self-hosted checker-shadow PNG has an unexpected format or size.")
}
if (createHash("sha256").update(png).digest("hex") !== expectedSha256) {
  throw new Error("The checker-shadow PNG differs from Adelson's supplied original.")
}
