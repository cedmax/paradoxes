import assert from "node:assert/strict"
import { test } from "node:test"
import { catalogueReturnUrl, catalogueUrl, readCatalogueState } from "./catalogue-state.ts"

test("shared catalogue state round trips without losing unrelated URL data", () => {
  const state = {
    query: "Schrödinger's cat",
    status: "unreconciled",
    hideVariants: false,
    onlyReviewed: true,
    chapter: "models",
  } as const
  const url = catalogueUrl(new URL("https://logicbenders.com/?ref=friend#catalogue"), state)
  assert.deepEqual(readCatalogueState(url.searchParams, ["models"]), state)
  assert.equal(url.searchParams.get("ref"), "friend")
  assert.equal(url.hash, "#catalogue")
})

test("invalid filters and chapters fall back safely; an explicitly closed chapter survives", () => {
  const state = readCatalogueState(
    new URLSearchParams("status=unknown&chapter=missing&reviewed=yes"),
    ["models"],
  )
  assert.equal(state.status, "all")
  assert.equal(state.chapter, undefined)
  assert.equal(state.onlyReviewed, false)
  assert.equal(readCatalogueState(new URLSearchParams("chapter=none"), []).chapter, null)
})

test("clearing state removes stale search parameters", () => {
  const url = catalogueUrl(
    new URL(
      "https://logicbenders.com/?q=old&status=explained&reviewed=1&variants=show&chapter=models",
    ),
    { query: "", status: "all", hideVariants: true, onlyReviewed: false },
  )
  assert.equal(url.search, "")
})

test("return links preserve a catalogue search but reject external and non-index URLs", () => {
  const origin = "https://logicbenders.com"
  assert.equal(catalogueReturnUrl(`${origin}/?q=monty`, origin), `${origin}/?q=monty`)
  for (const stored of [
    "https://example.com/",
    "javascript:alert(1)",
    `${origin}/about/`,
    null,
  ]) {
    assert.equal(catalogueReturnUrl(stored, origin), `${origin}/`)
  }
})
