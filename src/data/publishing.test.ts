import assert from "node:assert/strict"
import { test } from "node:test"
import { isPublishedEntry } from "./publishing.ts"

test("production never includes an unverified entry, even if the preview toggle is set", () => {
  for (const format of ["argument", "illusion"] as const) {
    assert(
      !isPublishedEntry(
        { sourcesVerified: false, format },
        { development: false, indexing: "index", previewUnverified: "true" },
      ),
    )
    assert(isPublishedEntry({ sourcesVerified: true, format }, { development: false }))
  }
})

test("only an explicit development or noindex preview admits unverified illusions", () => {
  const illusion = { sourcesVerified: false, format: "illusion" } as const
  assert(
    isPublishedEntry(illusion, {
      development: false,
      indexing: "noindex",
      previewUnverified: "true",
    }),
  )
  assert(isPublishedEntry(illusion, { development: true, previewUnverified: "true" }))
  assert(!isPublishedEntry(illusion, { development: false, indexing: "noindex" }))
  assert(
    !isPublishedEntry(
      { sourcesVerified: false, format: "argument" },
      { development: true, previewUnverified: "true" },
    ),
  )
})
