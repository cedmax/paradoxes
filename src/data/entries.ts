import { getCollection, type CollectionEntry } from "astro:content"
import { chapters, type Chapter } from "~/data/chapters"
import { statusKeys } from "~/data/status"

type Entry = CollectionEntry<"entries">

// The frontmatter of an entry in the argument format (two claims and a status).
export type ArgumentData = Extract<Entry["data"], { format: "argument" }>

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

// The chapters that have entries, each with its entries in the order given.
export const groupByChapter = (entries: Entry[]) =>
  chapters
    .map((chapter) => ({
      chapter,
      items: entries.filter((e) => e.data.chapter === chapter.id),
    }))
    .filter((group) => group.items.length > 0)

// The numbers on the index page. The filter chips count listed entries only; the two switches
// show how many entries they hold back or keep.
export function countEntries(entries: Entry[]) {
  const listed = entries.filter(isListed)
  return {
    all: listed.length,
    illusions: listed.filter((e) => e.data.format === "illusion").length,
    status: Object.fromEntries(
      statusKeys.map((k) => [
        k,
        listed.filter((e) => e.data.format === "argument" && e.data.status === k).length,
      ]),
    ),
    variants: entries.length - listed.length,
    reviewed: entries.filter((e) => e.data.reviewed).length,
  }
}

// Related and variant entries that point at this one, and its neighbours in the chapter.
export function relatedEntries(entry: Entry, all: Entry[]) {
  const echoes = all.filter((e) => e.data.anchor === entry.id).sort(byTitle)
  // Variants are not listed as neighbours. They are reached through their anchor. Entries already
  // shown in the box above are not repeated.
  const siblings = all
    .filter(
      (e) =>
        e.data.chapter === entry.data.chapter &&
        e.id !== entry.id &&
        isListed(e) &&
        !echoes.some((x) => x.id === e.id),
    )
    .sort((a, b) => a.data.order - b.data.order)
  return { echoes, siblings }
}

// The entries listed on a chapter page, in reading order. Variants are reached through their anchor.
export const chapterEntries = (chapter: Chapter, all: Entry[]) =>
  all.filter((entry) => entry.data.chapter === chapter.id && isListed(entry)).sort(byOrder)

// The other chapters that have at least one published entry.
export const otherChapters = (chapter: Chapter, all: Entry[]) =>
  chapters.filter(
    (other) => other.id !== chapter.id && all.some((entry) => entry.data.chapter === other.id),
  )
