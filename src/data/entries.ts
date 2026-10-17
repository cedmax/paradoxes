import { getCollection, type CollectionEntry } from "astro:content"

type Entry = CollectionEntry<"entries">

// Production never includes entries lacking human-approved source verification.
// Explicit noindex PR previews can show new illusions for review without changing either flag.
export function getPublishedEntries() {
  const preview =
    (import.meta.env.DEV || process.env.SITE_INDEXING === "noindex") &&
    process.env.PREVIEW_UNVERIFIED === "true"
  return getCollection(
    "entries",
    ({ data }) => data.sourcesVerified || (preview && data.format === "illusion"),
  )
}

// Variants are not listed on their own. They are reached through their anchor.
export const isListed = (entry: Entry) => entry.data.uniqueness !== "variant"

export const byTitle = (a: Entry, b: Entry) => a.data.title.localeCompare(b.data.title)

export const byOrder = (a: Entry, b: Entry) => a.data.order - b.data.order || byTitle(a, b)
