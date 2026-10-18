// Use the same spelling rules for queries, searchable text and alias comparisons.
export const normaliseSearch = (text: string) =>
  text.trim().toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, " ")

// The shown text of a `[shown text](entry-slug)` link, for places that cannot render links.
export const stripLinks = (text: string) => text.replace(/\[([^\]]+)\]\([a-z0-9-]+\)/g, "$1")
