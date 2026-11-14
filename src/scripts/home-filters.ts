// DOM wiring for the index page: search, status chips, the two switches and the chapter
// accordion. The ids and data-attributes come from EntryFilters, ChapterGroup and EntryCard.
import { matchesSearch, normaliseSearch } from "~/data/search"
import { createSuggest } from "~/scripts/home-suggest"
import {
  catalogueUrl,
  catalogueStore,
  readCatalogueState,
  type CatalogueState,
} from "~/data/catalogue-state"

interface Switches {
  hideVariants: boolean
  onlyReviewed: boolean
}

const input = document.getElementById("q") as HTMLInputElement
const chips = Array.from(document.querySelectorAll<HTMLButtonElement>("#chips button"))
const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-card]"))
const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"))
const none = document.getElementById("none") as HTMLElement
const hideVariants = document.getElementById("hide-variants") as HTMLInputElement
const onlyReviewed = document.getElementById("only-reviewed") as HTMLInputElement
const reset = document.getElementById("clear-filters") as HTMLButtonElement
const filters = document.getElementById("entry-filters") as HTMLDetailsElement
const filterSummary = document.getElementById("filter-summary") as HTMLElement
const starters = document.getElementById("starter-entries")
const directory = document.getElementById("chapter-directory")
const mobile = window.matchMedia("(max-width: 767.98px)")
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const STORE = "open-chapter"
let status: CatalogueState["status"] = "all"
let chapterChoice: string | null | undefined
// What the visitor chose with the switch. While a search is active the switch is forced off
// and disabled, and this is restored when the search is cleared.
let hideChoice = input.value.trim() ? true : hideVariants.checked

const matchesFilter = (card: DOMStringMap, filter: string) =>
  filter === "all" ||
  (filter === "illusions" ? card.format === "illusion" : card.status === filter)

// The two switches. "Only reviewed" is independent of the search: it applies to every result.
const isShownBySwitches = (card: DOMStringMap, { hideVariants, onlyReviewed }: Switches) =>
  !(hideVariants && card.variant === "true") && (!onlyReviewed || card.reviewed === "true")

// Below md the chapters fold up and only one is open. A search or a filter opens every chapter
// that has results, and the headings stop toggling until the filter is cleared.
const readOpen = () => {
  try {
    return sessionStorage.getItem(STORE)
  } catch {
    return null
  }
}
const writeOpen = (id: string) => {
  try {
    sessionStorage.setItem(STORE, id)
  } catch {
    // Storage can be blocked. The page still works without it.
  }
}
// Below md only one chapter is open: the one remembered from last time, else the first.
const chapterIds = chapters.map((c) => c.dataset.chapter ?? "")
const storedId = readOpen()
let openId = chapterIds.some((id) => id === storedId) ? storedId : (chapterIds[0] ?? null)
let filtering = false
// True only for a pass caused by typing, so a restored search box does not open the list.
let typing = false
const updateSuggest = createSuggest({ input, cards, chapters, reducedMotion })

function renderChapters() {
  for (const chapter of chapters) {
    const open = filtering || chapter.dataset.chapter === openId
    const toggle = chapter.querySelector<HTMLButtonElement>("[data-toggle]")
    chapter.toggleAttribute("data-open", open)
    if (!toggle) continue
    // From md up the toggle is hidden: chapters are always open and the heading is a link.
    toggle.tabIndex = mobile.matches ? 0 : -1
    toggle.disabled = mobile.matches && filtering
    if (mobile.matches) toggle.setAttribute("aria-expanded", String(open))
    else toggle.removeAttribute("aria-expanded")
  }
}

function apply(historyMode?: "push" | "replace") {
  const q = normaliseSearch(input.value)
  hideVariants.disabled = q !== ""
  hideVariants.checked = q === "" && hideChoice
  // Read once, after the switch above has been set.
  const switches: Switches = {
    hideVariants: hideVariants.checked,
    onlyReviewed: onlyReviewed.checked,
  }
  // A search, a status filter or "Only reviewed" opens every chapter that has results.
  filtering = q !== "" || status !== "all" || switches.onlyReviewed
  const activeFilters =
    Number(status !== "all") + Number(switches.onlyReviewed) + Number(!hideChoice)
  filterSummary.textContent = activeFilters
    ? `More filters (${activeFilters} active)`
    : "More filters"
  reset.hidden = q === "" && activeFilters === 0
  if (starters) starters.hidden = filtering || !hideChoice
  if (directory) directory.hidden = filtering
  let shown = 0
  for (const card of cards) {
    const facts = card.dataset
    const ok =
      matchesFilter(facts, status) &&
      matchesSearch(facts.text ?? "", q) &&
      isShownBySwitches(facts, switches)
    card.hidden = !ok
    if (ok) shown++
    // The card ends on the question. A search reveals the claim or status note it matched, unless
    // the match is already in what the card shows.
    const revealed = ok && q !== "" && !matchesSearch(facts.shown ?? "", q)
    const hits = card.querySelectorAll<HTMLElement>("[data-hit]")
    let any = false
    hits.forEach((hit) => {
      const on =
        revealed && q.split(" ").some((term) => (hit.dataset.text ?? "").includes(term))
      hit.hidden = !on
      any ||= on
    })
    const box = card.querySelector<HTMLElement>("[data-hits]")
    if (box) box.hidden = !any
  }
  for (const chip of chips) {
    const filter = chip.dataset.filter ?? "all"
    const count = cards.filter(
      (card) =>
        matchesFilter(card.dataset, filter) &&
        matchesSearch(card.dataset.text ?? "", q) &&
        isShownBySwitches(card.dataset, switches),
    ).length
    const label = chip.querySelector("[data-count]")
    if (label) label.textContent = String(count)
  }
  for (const chapter of chapters) {
    const visible = chapter.querySelectorAll("[data-card]:not([hidden])").length
    chapter.hidden = visible === 0
    const count = chapter.querySelector("[data-chapter-count]")
    if (count) count.textContent = String(visible)
  }
  none.hidden = shown !== 0
  renderChapters()
  updateSuggest(q, shown, filtering, typing)
  typing = false
  if (historyMode) {
    const url = catalogueUrl(new URL(location.href), {
      query: input.value,
      status,
      hideVariants: hideChoice,
      onlyReviewed: onlyReviewed.checked,
      chapter: chapterChoice,
    })
    if (url.href !== location.href) {
      try {
        if (historyMode === "push") history.pushState(history.state, "", url)
        else history.replaceState(history.state, "", url)
      } catch {
        // History can be restricted. Filtering still works in the current page.
      }
    }
  }
  try {
    sessionStorage.setItem(catalogueStore, location.href)
  } catch {
    // Return links fall back to the plain index when storage is unavailable.
  }
}

function restoreFromLocation() {
  const state = readCatalogueState(new URLSearchParams(location.search), chapterIds)
  input.value = state.query
  status = state.status
  hideChoice = state.hideVariants
  onlyReviewed.checked = state.onlyReviewed
  chapterChoice = state.chapter
  const remembered = readOpen()
  openId =
    state.chapter === undefined
      ? chapterIds.includes(remembered ?? "")
        ? remembered
        : (chapterIds[0] ?? null)
      : state.chapter
  chips.forEach((chip) =>
    chip.setAttribute("aria-pressed", String(chip.dataset.filter === status)),
  )
  apply()
}

for (const chapter of chapters) {
  chapter.querySelector("[data-toggle]")?.addEventListener("click", () => {
    if (!mobile.matches || filtering) return
    const id = chapter.dataset.chapter ?? null
    openId = openId === id ? null : id
    chapterChoice = openId
    if (id && openId) writeOpen(id)
    apply("push")
    // Opening one closes the one above it, which would push the heading off screen.
    if (openId) {
      chapter.scrollIntoView({
        block: "start",
        behavior: reducedMotion.matches ? "auto" : "smooth",
      })
    }
  })
}
const syncViewport = () => {
  filters.open = !mobile.matches
  renderChapters()
}
mobile.addEventListener("change", syncViewport)
syncViewport()

reset.addEventListener("click", () => {
  input.value = ""
  status = "all"
  hideChoice = true
  onlyReviewed.checked = false
  chips.forEach((chip) =>
    chip.setAttribute("aria-pressed", String(chip.dataset.filter === "all")),
  )
  apply("push")
  input.focus()
})

input.addEventListener("input", () => {
  typing = true
  apply("replace")
})
hideVariants.addEventListener("change", () => {
  hideChoice = hideVariants.checked
  apply("push")
})
onlyReviewed.addEventListener("change", () => apply("push"))
for (const button of chips) {
  button.addEventListener("click", () => {
    status = (button.dataset.filter ?? "all") as CatalogueState["status"]
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === button)))
    apply("push")
  })
}
window.addEventListener("popstate", restoreFromLocation)
window.addEventListener("pageshow", (event) => {
  if (event.persisted) restoreFromLocation()
})
restoreFromLocation()
