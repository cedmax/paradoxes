// DOM wiring for the index page: search, status chips, the two switches and the chapter
// accordion. The rules live in ./home-filter-rules. The ids and data-attributes come from
// EntryFilters, ChapterGroup and EntryCard.
import { normaliseSearch } from "~/data/search"
import {
  initialOpenId,
  isFiltering,
  isHitShown,
  isShownBySwitches,
  matchesFilter,
  matchesQuery,
  revealsHits,
  toggledOpenId,
} from "./home-filter-rules"

const input = document.getElementById("q") as HTMLInputElement
const chips = Array.from(document.querySelectorAll<HTMLButtonElement>("#chips button"))
const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-card]"))
const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"))
const none = document.getElementById("none") as HTMLElement
const hideVariants = document.getElementById("hide-variants") as HTMLInputElement
const onlyReviewed = document.getElementById("only-reviewed") as HTMLInputElement
const mobile = window.matchMedia("(max-width: 767.98px)")
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const STORE = "open-chapter"
let status = "all"
// What the visitor chose with the switch. While a search is active the switch is forced off
// and disabled, and this is restored when the search is cleared.
let hideChoice = input.value.trim() ? true : hideVariants.checked

const switches = () => ({
  hideVariants: hideVariants.checked,
  onlyReviewed: onlyReviewed.checked,
})

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
let openId = initialOpenId(
  chapters.map((c) => c.dataset.chapter),
  readOpen(),
)
let filtering = false

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

function apply() {
  const q = normaliseSearch(input.value)
  filtering = isFiltering(q, status, switches())
  hideVariants.disabled = q !== ""
  hideVariants.checked = q === "" && hideChoice
  let shown = 0
  for (const card of cards) {
    const ok =
      matchesFilter(card.dataset, status) &&
      matchesQuery(card.dataset, q) &&
      isShownBySwitches(card.dataset, switches())
    card.hidden = !ok
    if (ok) shown++
    const revealed = revealsHits(card.dataset, q, ok)
    const hits = card.querySelectorAll<HTMLElement>("[data-hit]")
    let any = false
    hits.forEach((hit) => {
      const on = revealed && isHitShown(hit.dataset.text, q)
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
        matchesFilter(card.dataset, filter) && isShownBySwitches(card.dataset, switches()),
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
}

for (const chapter of chapters) {
  chapter.querySelector("[data-toggle]")?.addEventListener("click", () => {
    if (!mobile.matches || filtering) return
    const id = chapter.dataset.chapter ?? null
    openId = toggledOpenId(openId, id)
    if (id && openId) writeOpen(id)
    renderChapters()
    // Opening one closes the one above it, which would push the heading off screen.
    if (openId) {
      chapter.scrollIntoView({
        block: "start",
        behavior: reducedMotion.matches ? "auto" : "smooth",
      })
    }
  })
}
mobile.addEventListener("change", renderChapters)

input.addEventListener("input", apply)
hideVariants.addEventListener("change", () => {
  hideChoice = hideVariants.checked
  apply()
})
onlyReviewed.addEventListener("change", apply)
for (const button of chips) {
  button.addEventListener("click", () => {
    status = button.dataset.filter ?? "all"
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === button)))
    apply()
  })
}
// Browsers can restore the switch and the search box on reload, so sync the page to them.
apply()
