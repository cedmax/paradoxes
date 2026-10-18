// DOM wiring for the index page: search, status chips, the two switches and the chapter
// accordion. The ids and data-attributes come from EntryFilters, ChapterGroup and EntryCard.
import { normaliseSearch } from "~/data/search"

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
const mobile = window.matchMedia("(max-width: 767.98px)")
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const STORE = "open-chapter"
let status = "all"
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
const chapterIds = chapters.map((c) => c.dataset.chapter)
const storedId = readOpen()
let openId = chapterIds.some((id) => id === storedId) ? storedId : (chapterIds[0] ?? null)
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
  hideVariants.disabled = q !== ""
  hideVariants.checked = q === "" && hideChoice
  // Read once, after the switch above has been set.
  const switches: Switches = {
    hideVariants: hideVariants.checked,
    onlyReviewed: onlyReviewed.checked,
  }
  // A search, a status filter or "Only reviewed" opens every chapter that has results.
  filtering = q !== "" || status !== "all" || switches.onlyReviewed
  let shown = 0
  for (const card of cards) {
    const facts = card.dataset
    const ok =
      matchesFilter(facts, status) &&
      (facts.text ?? "").includes(q) &&
      isShownBySwitches(facts, switches)
    card.hidden = !ok
    if (ok) shown++
    // The card ends on the question. A search reveals the claim or verdict it matched, unless
    // the match is already in what the card shows.
    const revealed = ok && q !== "" && !(facts.shown ?? "").includes(q)
    const hits = card.querySelectorAll<HTMLElement>("[data-hit]")
    let any = false
    hits.forEach((hit) => {
      const on = revealed && (hit.dataset.text ?? "").includes(q)
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
        matchesFilter(card.dataset, filter) && isShownBySwitches(card.dataset, switches),
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
    openId = openId === id ? null : id
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
