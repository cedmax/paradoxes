import assert from "node:assert/strict"
import { test } from "node:test"
import type { CollectionEntry } from "astro:content"
import { nextEntries, starterEntries } from "./recommendations.ts"

type Entry = CollectionEntry<"entries">
const entry = (id: string, variantOf?: string) =>
  ({ id, data: { chapter: "probability", variantOf } }) as Entry

test("starting points only link to available, non-variant entries", () => {
  const all = [entry("monty-hall-problem"), entry("ship-of-theseus", "other")]
  assert.deepEqual(
    starterEntries(all).map(({ entry }) => entry.id),
    ["monty-hall-problem"],
  )
})

test("read next excludes the current entry, variants and unpublished choices", () => {
  const current = entry("monty-hall-problem")
  const all = [current, entry("birthday-paradox"), entry("boy-or-girl-paradox", current.id)]
  assert.deepEqual(
    nextEntries(current, all).map(({ entry }) => entry.id),
    ["birthday-paradox"],
  )
})

test("a featured entry still gets three distinct next reads with reasons", () => {
  const all = [
    "monty-hall-problem",
    "birthday-paradox",
    "boy-or-girl-paradox",
    "nontransitive-dice",
  ].map((id) => entry(id))
  for (const current of all) {
    const next = nextEntries(current, all)
    assert.equal(next.length, 3)
    assert.equal(new Set(next.map(({ entry }) => entry.id)).size, 3)
    assert(next.every(({ entry, reason }) => entry.id !== current.id && reason.length > 0))
  }
})
