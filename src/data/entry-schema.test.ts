import assert from "node:assert/strict"
import { test } from "node:test"
import { entrySchema } from "./entry-schema.ts"

const draft = {
  title: "Example paradox",
  format: "argument",
  chapter: "identity",
  noMaths: true,
  problem: "Where does the boundary fall?",
  status: "explained",
  claimA: "No small change matters.",
  claimB: "Enough small changes matter.",
  whatBreaks: "The assumption about small changes.",
  statusNote: "small changes accumulate.",
  setup: "Consider a sequence of changes.",
  whyWrong: "The changes look harmless alone.",
}
const published = {
  ...draft,
  sourcesVerified: true,
  sources: [{ title: "A supporting source", url: "https://example.com/source" }],
  resolution: ["Small changes can accumulate."],
}

test("drafts remain unpublished by default and complete published arguments pass", () => {
  const result = entrySchema.parse(draft)
  assert.equal(result.sourcesVerified, false)
  assert.equal(result.reviewed, false)
  assert(entrySchema.safeParse(published).success)
})

test("published arguments cannot omit their sources or resolution", () => {
  for (const override of [{ sources: [] }, { resolution: [] }]) {
    assert(!entrySchema.safeParse({ ...published, ...override }).success)
  }
})

test("disputed and unreconciled published arguments need two to four substantive positions", () => {
  for (const status of ["disputed", "unreconciled"]) {
    for (const length of [0, 1, 5]) {
      const positions = Array.from({ length }, () => ({
        title: "Position",
        body: "Its argument and cost.",
      }))
      assert(!entrySchema.safeParse({ ...published, status, positions }).success)
    }
    const positions = [
      { title: "One view", body: "An argument and its cost." },
      { title: "Another view", body: "Another argument and cost." },
    ]
    assert(entrySchema.safeParse({ ...published, status, positions }).success)
    assert(
      !entrySchema.safeParse({
        ...published,
        status,
        positions: [{ title: "", body: " " }, ...positions],
      }).success,
    )
  }
})

test("blank claims and source titles are rejected and review still requires verification", () => {
  assert(!entrySchema.safeParse({ ...published, claimA: " " }).success)
  assert(!entrySchema.safeParse({ ...published, sources: [{ title: " " }] }).success)
  assert(!entrySchema.safeParse({ ...draft, reviewed: true }).success)
})
