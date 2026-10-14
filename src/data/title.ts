// Split a title so the accent word(s) can be highlighted. Shared by entry and chapter H1s
// and Open Graph images. Keep the original separator, including a hyphen in "Self-reference".
export function splitTitle(title: string, accent?: string) {
  if (accent && title.endsWith(accent)) {
    const prefix = title.slice(0, -accent.length)
    const plain = prefix.trimEnd()
    return { plain, accent, separator: prefix.slice(plain.length) }
  }
  return { plain: title, accent, separator: " " }
}
