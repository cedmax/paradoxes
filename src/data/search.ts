// Use the same spelling rules for queries, searchable text and alias comparisons.
export const normaliseSearch = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim()
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")

// Both arguments are normalised. Keep phrase ranking separate from token matching.
export const matchesSearch = (text: string, query: string) =>
  query.split(" ").every((term) => text.includes(term))

// The shown text of a `[shown text](entry-slug)` link, for places that cannot render links.
export const stripLinks = (text: string) => text.replace(/\[([^\]]+)\]\([a-z0-9-]+\)/g, "$1")
