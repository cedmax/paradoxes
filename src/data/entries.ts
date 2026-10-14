import { getCollection } from "astro:content"

// Production never includes entries lacking human-approved source verification.
// Explicit noindex PR previews can show new illusions for review without changing either flag.
export function getPublishedEntries() {
  const preview = process.env.SITE_INDEXING === "noindex" &&
    process.env.PREVIEW_UNVERIFIED === "true"
  return getCollection(
    "entries",
    ({ data }) => data.sourcesVerified || (preview && data.format === "illusion"),
  )
}
