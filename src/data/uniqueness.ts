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

// The canonical entry a related or variant entry points to. Throws on a bad anchor so the build fails.
export function anchorOf<T extends Tagged>(entry: T, all: T[]): T | undefined {
  if (entry.data.uniqueness === "canonical") return undefined
  const anchor = all.find((e) => e.id === entry.data.anchor)
  if (!anchor) throw new Error(`Entry "${entry.id}" has unknown anchor "${entry.data.anchor}"`)
  if (anchor.data.uniqueness !== "canonical") {
    throw new Error(
      `Entry "${entry.id}" must point to a canonical entry, but "${anchor.id}" is ${anchor.data.uniqueness}`,
    )
  }
  return anchor
}
