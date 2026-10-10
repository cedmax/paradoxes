export const uniquenessIds = ["canonical", "related", "variant"] as const

export type Uniqueness = (typeof uniquenessIds)[number]

export const uniqueness: Record<
  Uniqueness,
  { label: string; relation: string; definition: string }
> = {
  canonical: {
    label: "Canonical",
    relation: "Canonical",
    definition: "Works by its own mechanism. Listed on the index.",
  },
  related: {
    label: "Related",
    relation: "Related to",
    definition: "Shares an idea with the entry above, but adds a twist of its own.",
  },
  variant: {
    label: "Variant",
    relation: "Variant of",
    definition: "The same puzzle as the entry above, in a different setting.",
  },
}

interface Tagged {
  id: string
  data: { uniqueness: Uniqueness; anchor?: string }
}

// The canonical or related entry a related or variant entry points to. Throws on an unknown
// anchor, a variant anchor or a loop of anchors, so the build fails.
export function anchorOf<T extends Tagged>(entry: T, all: T[]): T | undefined {
  if (entry.data.uniqueness === "canonical") return undefined
  const anchor = all.find((e) => e.id === entry.data.anchor)
  if (!anchor)
    throw new Error(
      `Entry "${entry.id}" has anchor "${entry.data.anchor}", which is unknown or not published yet`,
    )
  if (anchor.data.uniqueness === "variant") {
    throw new Error(`Entry "${entry.id}" cannot point to "${anchor.id}", which is a variant`)
  }
  // Follow the chain of anchors up to a canonical entry, so a loop cannot slip through.
  const seen = new Set([entry.id])
  for (let e: T | undefined = anchor; e && e.data.uniqueness !== "canonical";) {
    if (seen.has(e.id)) throw new Error(`Entry "${entry.id}" is part of a loop of anchors`)
    seen.add(e.id)
    const next: string | undefined = e.data.anchor
    e = all.find((x) => x.id === next)
  }
  return anchor
}
