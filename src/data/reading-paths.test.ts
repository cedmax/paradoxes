import assert from "node:assert/strict"
import { test } from "node:test"
import type { CollectionEntry } from "astro:content"
import { pathEntryUrl, readingPaths } from "./reading-paths.ts"

const entry = (id: string, variantOf?: string) =>
  ({ id, data: { variantOf } }) as CollectionEntry<"entries">

test("paths only publish when all their non-variant steps are available", () => {
  assert.deepEqual(readingPaths([entry("monty-hall-problem")]), [])
  assert.deepEqual(
    readingPaths([
      entry("monty-hall-problem"),
      entry("ship-of-theseus"),
      entry("liar-paradox", "other"),
    ]),
    [],
  )
  const paths = readingPaths([
    entry("monty-hall-problem"),
    entry("ship-of-theseus"),
    entry("checker-shadow-illusion"),
    entry("liar-paradox"),
  ])
  assert.equal(paths.length, 1)
  assert.deepEqual(
    paths[0].steps.map(({ entry }) => entry.id),
    ["monty-hall-problem", "ship-of-theseus", "checker-shadow-illusion", "liar-paradox"],
  )
  assert(paths[0].steps.every(({ reason }) => reason.trim()))
  assert.equal(pathEntryUrl(paths[0], 1), "/entries/ship-of-theseus/?path=start-here")
})
