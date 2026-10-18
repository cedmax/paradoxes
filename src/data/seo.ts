import type { CollectionEntry } from "astro:content"
import { ogAlt, ogPath } from "~/og/meta"
import type { Chapter } from "~/data/chapters"

interface Breadcrumb {
  name: string
  path: string
}

export const breadcrumbData = (items: Breadcrumb[], site: URL | undefined) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: new URL(item.path, site).href,
  })),
})

// Everything Base needs for an entry page: title, description, social image and structured data.
export function entrySeo(
  entry: CollectionEntry<"entries">,
  chapter: Chapter,
  site: URL | undefined,
) {
  const d = entry.data
  const description = d.description ?? d.problem
  const og = { title: d.title, titleAccent: d.titleAccent, problem: d.problem }
  const url = new URL(`/entries/${entry.id}/`, site).href
  return {
    url,
    title: `${d.title}: explanation | Logic Benders`,
    description,
    image: ogPath(entry.id, og),
    imageAlt: ogAlt(og),
    structuredData: [
      breadcrumbData(
        [
          { name: "Index", path: "/" },
          { name: chapter.title, path: `/chapters/${chapter.id}/` },
          { name: d.title, path: `/entries/${entry.id}/` },
        ],
        site,
      ),
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: d.title,
        description,
        inLanguage: "en-GB",
        mainEntityOfPage: url,
        isPartOf: { "@id": new URL("/#website", site).href },
        ...(d.alternativeNames.length > 0 ? { alternateName: d.alternativeNames } : {}),
        citation: d.sources.filter((source) => source.url).map((source) => source.url),
      },
    ],
  }
}

// Everything Base needs for a chapter page. `entries` are the ones listed, in order.
export function chapterSeo(
  chapter: Chapter,
  entries: CollectionEntry<"entries">[],
  site: URL | undefined,
) {
  const url = new URL(`/chapters/${chapter.id}/`, site).href
  return {
    title: `${chapter.pageTitle} | Logic Benders`,
    description: chapter.introduction,
    structuredData: [
      breadcrumbData(
        [
          { name: "Index", path: "/" },
          { name: chapter.title, path: `/chapters/${chapter.id}/` },
        ],
        site,
      ),
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: chapter.pageTitle,
        description: chapter.introduction,
        inLanguage: "en-GB",
        isPartOf: { "@id": new URL("/#website", site).href },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: entries.map((entry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: entry.data.title,
            url: new URL(`/entries/${entry.id}/`, site).href,
          })),
        },
      },
    ],
  }
}
