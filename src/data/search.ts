// Use the same spelling rules for queries, searchable text and alias comparisons.
export const normaliseSearch = (text: string) =>
  text.trim().toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, " ")
