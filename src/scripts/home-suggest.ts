// Autocomplete for the index search box. It adds no filtering of its own: it lists titles from
// the cards the search already left visible, and tells the visitor how many results there are
// below the filter bar. The ids come from EntryFilters.
import { statuses, type Status } from "~/data/status"
import { normaliseSearch } from "~/data/search"

const MAX = 6
const LIVE_DELAY = 500

interface Suggestion {
  title: string
  href: string
  tag: string
}

interface Options {
  input: HTMLInputElement
  cards: HTMLElement[]
  chapters: HTMLElement[]
  reducedMotion: MediaQueryList
}

export function createSuggest({ input, cards, chapters, reducedMotion }: Options) {
  const list = document.getElementById("q-list") as HTMLUListElement
  const count = document.getElementById("q-count") as HTMLElement
  const live = document.getElementById("q-live") as HTMLElement
  let items: Suggestion[] = []
  let total = 0
  let active = -1
  let liveTimer: ReturnType<typeof setTimeout> | undefined

  const rows = () => Array.from(list.children) as HTMLElement[]
  const isOpen = () => !list.hidden
  // The last row jumps to the results; it is option number `items.length`.
  const lastIndex = () => (total > 0 ? items.length : -1)

  function setActive(index: number) {
    active = index
    rows().forEach((row, i) => row.setAttribute("aria-selected", String(i === index)))
    if (index >= 0) {
      input.setAttribute("aria-activedescendant", `q-opt-${index}`)
      rows()[index]?.scrollIntoView({ block: "nearest" })
    } else {
      input.removeAttribute("aria-activedescendant")
    }
  }

  function close() {
    list.hidden = true
    input.setAttribute("aria-expanded", "false")
    setActive(-1)
  }

  function open() {
    if (!list.children.length) return
    list.hidden = false
    input.setAttribute("aria-expanded", "true")
  }

  function jumpToResults() {
    close()
    const first = chapters.find((chapter) => !chapter.hidden)
    first?.scrollIntoView({
      block: "start",
      behavior: reducedMotion.matches ? "auto" : "smooth",
    })
  }

  function choose(index: number) {
    if (index < items.length) location.assign(items[index].href)
    else jumpToResults()
  }

  function row(id: number, text: string, tag: string) {
    const li = document.createElement("li")
    li.id = `q-opt-${id}`
    li.setAttribute("role", "option")
    li.setAttribute("aria-selected", "false")
    li.className =
      "flex min-h-11 cursor-pointer items-center justify-between gap-4 px-4 py-2 aria-selected:bg-ink aria-selected:text-paper"
    const name = document.createElement("span")
    name.className = "font-display leading-tight font-extrabold tracking-tight"
    name.textContent = text
    li.append(name)
    if (tag) {
      const label = document.createElement("span")
      label.className = "mono-label shrink-0 text-xs opacity-65"
      label.textContent = tag
      li.append(label)
    }
    return li
  }

  function render() {
    const children = items.map((item, i) => row(i, item.title, item.tag))
    if (total > 0) {
      const more = row(
        items.length,
        `Show ${total === 1 ? "the result" : `all ${total} results`} ↓`,
        "",
      )
      more.classList.add("border-t-2", "border-ink")
      children.push(more)
    }
    list.replaceChildren(...children)
    setActive(-1)
  }

  // Title matches first, in page order, then entries found through an alias or the problem text.
  function suggestions(q: string): Suggestion[] {
    const ranked: { rank: number; suggestion: Suggestion }[] = []
    for (const card of cards) {
      if (card.hidden) continue
      const link = card.querySelector<HTMLAnchorElement>("[data-main]")
      const title = link?.textContent?.trim() ?? ""
      if (!link || !title) continue
      const name = normaliseSearch(title)
      const rank = name.startsWith(q) ? 0 : name.includes(q) ? 1 : 2
      const { status, format } = card.dataset
      const tag = format === "illusion" ? "Illusion" : (statuses[status as Status]?.label ?? "")
      ranked.push({ rank, suggestion: { title, href: link.href, tag } })
    }
    return ranked.sort((a, b) => a.rank - b.rank).map((r) => r.suggestion)
  }

  // Called after every filter pass. `shown` is the number of cards left visible.
  function update(q: string, shown: number, filtering: boolean, typed: boolean) {
    total = shown
    const results =
      shown === 0 ? "No results" : `${shown} ${shown === 1 ? "result" : "results"}`
    count.textContent = filtering ? `${results} ↓` : ""
    clearTimeout(liveTimer)
    liveTimer = setTimeout(() => {
      live.textContent = filtering ? results : ""
    }, LIVE_DELAY)
    if (q === "") {
      items = []
      render()
      close()
      return
    }
    items = suggestions(q).slice(0, MAX)
    render()
    if (typed && shown > 0) open()
    else close()
  }

  input.addEventListener("keydown", (event) => {
    const last = lastIndex()
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (last < 0) return
      event.preventDefault()
      if (!isOpen()) open()
      const step = event.key === "ArrowDown" ? 1 : -1
      setActive(
        active === -1 ? (step === 1 ? 0 : last) : (active + step + last + 1) % (last + 1),
      )
    } else if (event.key === "Enter") {
      if (!input.value.trim()) return
      event.preventDefault()
      if (isOpen() && active >= 0) choose(active)
      else jumpToResults()
    } else if (event.key === "Escape" && isOpen()) {
      // Close the list first; a second Escape clears the box as the browser normally does.
      event.preventDefault()
      close()
    }
  })
  input.addEventListener("focus", () => {
    if (input.value.trim() && total > 0) open()
  })
  input.addEventListener("blur", close)
  // Keep focus in the input while the list is pressed, so a tap is not swallowed by the blur.
  list.addEventListener("mousedown", (event) => event.preventDefault())
  list.addEventListener("click", (event) => {
    const index = rows().indexOf((event.target as HTMLElement).closest("li") as HTMLElement)
    if (index >= 0) choose(index)
  })
  list.addEventListener("mousemove", (event) => {
    const index = rows().indexOf((event.target as HTMLElement).closest("li") as HTMLElement)
    if (index >= 0 && index !== active) setActive(index)
  })

  return update
}
