import assert from "node:assert/strict"
import { test } from "node:test"
import { matchesSearch, normaliseSearch } from "./search.ts"

const matches = (text: string, query: string) =>
  matchesSearch(normaliseSearch(text), normaliseSearch(query))

test("search accepts accents, decomposed characters, apostrophes and whitespace", () => {
  for (const query of [
    "schrodinger",
    "Schrödinger",
    "Schro\u0308dinger",
    " SCHRÖDINGER’S  CAT ",
  ]) {
    assert(matches("Schrödinger's cat", query), query)
  }
})

test("search accepts reordered words but still requires every word", () => {
  assert(matches("Monty Hall problem", "hall monty"))
  assert(matches("Monty Hall problem", "  hall   monty "))
  assert(!matches("Monty Hall problem", "hall birthday"))
  assert(matches("Monty Hall problem", ""))
})
