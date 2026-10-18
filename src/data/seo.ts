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
    title: `${d.title}: ${d.written ? "explanation" : "the puzzle"} | Logic Benders`,
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
      ...(d.written
        ? [
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
          ]
        : []),
    ],
  }
}
