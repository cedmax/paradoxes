import { statusKeys, type Status } from "./status.ts"

export const catalogueStore = "catalogue-url"

export function catalogueReturnUrl(stored: string | null, origin: string) {
  try {
    const url = new URL(stored ?? "", origin)
    return url.origin === origin && url.pathname === "/" ? url.href : `${origin}/`
  } catch {
    return `${origin}/`
  }
}

export interface CatalogueState {
  query: string
  status: "all" | "illusions" | Status
  hideVariants: boolean
  onlyReviewed: boolean
  chapter?: string | null
}

export function readCatalogueState(
  params: URLSearchParams,
  chapters: readonly string[],
): CatalogueState {
  const filter = params.get("status")
  const chapter = params.get("chapter")
  return {
    query: params.get("q") ?? "",
    status:
      filter === "illusions" || statusKeys.some((key) => key === filter)
        ? (filter as CatalogueState["status"])
        : "all",
    hideVariants: params.get("variants") !== "show",
    onlyReviewed: params.get("reviewed") === "1",
    chapter:
      chapter === "none" ? null : chapter && chapters.includes(chapter) ? chapter : undefined,
  }
}

// Preserve unrelated parameters and the hash. Defaults need no query parameters.
export function catalogueUrl(current: URL, state: CatalogueState) {
  const url = new URL(current)
  for (const key of ["q", "status", "variants", "reviewed", "chapter"])
    url.searchParams.delete(key)
  if (state.query.trim()) url.searchParams.set("q", state.query.trim())
  if (state.status !== "all") url.searchParams.set("status", state.status)
  if (!state.hideVariants) url.searchParams.set("variants", "show")
  if (state.onlyReviewed) url.searchParams.set("reviewed", "1")
  if (state.chapter !== undefined) url.searchParams.set("chapter", state.chapter ?? "none")
  return url
}
