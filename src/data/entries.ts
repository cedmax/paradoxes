import { getCollection } from "astro:content"

// Entries that are allowed on the site. An entry with `sourcesVerified: false` is left out of the
// build entirely: no page, no index card, no search result, and it cannot be linked to.
export function getPublishedEntries() {
  return getCollection("entries", ({ data }) => data.sourcesVerified)
}
