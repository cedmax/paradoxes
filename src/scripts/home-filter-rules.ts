// The rules behind the index filters, with no DOM. home-filters.ts feeds in each card's
// data-attributes (the card's dataset) and the state of the controls.

export interface CardFacts {
  format?: string
  status?: string
  variant?: string
  reviewed?: string
  text?: string
  shown?: string
}

export interface Switches {
  hideVariants: boolean
  onlyReviewed: boolean
}

export const matchesFilter = (card: CardFacts, filter: string) =>
  filter === "all" ||
  (filter === "illusions" ? card.format === "illusion" : card.status === filter)

export const matchesQuery = (card: CardFacts, query: string) =>
  !query || (card.text ?? "").includes(query)

// The two switches. "Only reviewed" is independent of the search: it applies to every result.
const isShownByVariantRule = (card: CardFacts, { hideVariants }: Switches) =>
  !(hideVariants && card.variant === "true")
const isShownByReviewedRule = (card: CardFacts, { onlyReviewed }: Switches) =>
  !onlyReviewed || card.reviewed === "true"
export const isShownBySwitches = (card: CardFacts, switches: Switches) =>
  isShownByVariantRule(card, switches) && isShownByReviewedRule(card, switches)

// A search, a status filter or "Only reviewed" opens every chapter that has results.
export const isFiltering = (query: string, status: string, switches: Switches) =>
  query !== "" || status !== "all" || switches.onlyReviewed

// The card ends on the question. A search reveals the claim or verdict it matched, unless the
// match is already in what the card shows.
export const revealsHits = (card: CardFacts, query: string, isShown: boolean) =>
  isShown && query !== "" && !(card.shown ?? "").includes(query)

export const isHitShown = (hitText: string | undefined, query: string) =>
  (hitText ?? "").includes(query)

// Below md only one chapter is open: the one remembered from last time, else the first.
export const initialOpenId = (ids: (string | undefined)[], stored: string | null) =>
  ids.some((id) => id === stored) ? stored : (ids[0] ?? null)

export const toggledOpenId = (openId: string | null, id: string | null) =>
  openId === id ? null : id
