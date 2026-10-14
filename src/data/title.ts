// Split a title like "Sorites paradox" so the accent word(s) can be highlighted. Used by the entry
// page and by the Open Graph image, so both always break the title in the same place.
export function splitTitle(title: string, accent?: string) {
  const plain =
    accent && title.endsWith(accent)
      ? title.slice(0, title.length - accent.length).trimEnd()
      : title
  return { plain, accent }
}
