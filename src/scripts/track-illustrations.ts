// One delegated Umami tracker for every illustration and illusion on an entry page.
// Figures carry no tracking code. Everything is read off the DOM from document-level listeners,
// keyed on the `data-illustration` attribute that IllustrationFigure renders from its `name` prop.
//
// Only trusted events count. bindSliderPlayback sets input.value without dispatching events, and
// scripts that dispatch synthetic ones are ignored, so autoplay never registers as interaction.

type Control = "button" | "range" | "details" | "svg-node" | "other"

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void }
  }
}

// A late or blocked Umami script must never throw, hence the optional chain.
const track = (event: string, data: Record<string, string>) => window.umami?.track(event, data)

const figureOf = (target: EventTarget | null) =>
  target instanceof Element ? target.closest<HTMLElement>("[data-illustration]") : null

// "other" is anything that is not a control: lead text, captions, the picture itself.
const controlOf = (target: Element): Control => {
  // A label stands for the control it labels.
  const element = target.closest("label")?.control ?? target
  if (element.closest("input[type=range]")) return "range"
  // Checked before SVG: a native button can wrap an svg icon.
  if (element.closest("button, input[type=checkbox], input[type=radio]")) return "button"
  if (element.closest("summary")) return "details"
  // Only focusable or role=button nodes are controls, not the svg picture around them.
  if (element.closest("svg [role=button], svg [tabindex]")) return "svg-node"
  if (element.closest("[role=button]")) return "button"
  return "other"
}

function init(entry: string) {
  const interacted = new Set<string>()
  const viewed = new Set<string>()
  const revealed = new Set<string>()
  // The tritone effect depends on the starting note, so answers carry the pair last picked.
  const pairs = new Map<string, string>()
  const answered = (figure: string, answer: string) => {
    const pair = pairs.get(figure)
    track("illusion-answer", { entry, figure, answer, ...(pair ? { pair } : {}) })
  }

  // Interaction: once per figure per page view. A <details> opened by a script (twin-paradox
  // does when playback passes the turn) never counts: only a click on its <summary> does.
  const onInteract = (event: Event) => {
    const { target } = event
    const figure = figureOf(target)
    const name = figure?.dataset.illustration
    if (!event.isTrusted || !name || !(target instanceof Element) || interacted.has(name))
      return
    // Not a control: leave the figure out of the set so a later real interaction still counts.
    const control = controlOf(target)
    if (control === "other") return
    // A range counts only when its value changes. Clicking its label, or its thumb without
    // dragging, only moves focus.
    if (control === "range" && event.type !== "input") return
    interacted.add(name)
    track("illustration-interact", { entry, figure: name, control })
  }
  // `click`, not `pointerdown`: a finger that lands to scroll past a figure never clicks.
  for (const type of ["click", "input"]) {
    document.addEventListener(type, onInteract, true)
  }
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Enter" || event.key === " ") onInteract(event)
    },
    true,
  )

  // Answers on every click, skip included. Reveal once, and only when switching on. The capture
  // listener runs before the control's own handler, so aria-pressed still holds the old value.
  document.addEventListener(
    "click",
    (event) => {
      const { target } = event
      const figure = figureOf(target)
      const name = figure?.dataset.illustration
      if (!event.isTrusted || !figure || !name || !(target instanceof Element)) return

      const note = target.closest<HTMLElement>("button[data-label]")
      if (note?.dataset.label && figure.contains(note)) pairs.set(name, note.dataset.label)

      const choice = target.closest<HTMLElement>("[data-choice], [data-answer]")
      if (choice && figure.contains(choice)) {
        answered(name, choice.dataset.choice ?? choice.dataset.answer ?? "")
        return
      }
      // The tritone skip has no data-answer: its script collects button[data-answer] as answers.
      const skip = target.closest<HTMLElement>("[id$='-skip']")
      if (skip && figure.contains(skip)) {
        answered(name, "skip")
        return
      }

      const toggle = target.closest<HTMLElement>("[id$='-guide-toggle']")
      if (!toggle || !figure.contains(toggle) || revealed.has(name)) return
      if (toggle.getAttribute("aria-pressed") === "true") return
      revealed.add(name)
      track("illusion-reveal", { entry, figure: name })
    },
    true,
  )

  // Views are the denominator: once per figure at half visible. A figure taller than twice the
  // viewport can never reach half its own height, so half a viewport also counts.
  const observer = new IntersectionObserver(
    (records) => {
      for (const record of records) {
        const name = (record.target as HTMLElement).dataset.illustration
        if (!name || viewed.has(name) || !record.isIntersecting) continue
        const half = record.intersectionRatio >= 0.5
        if (!half && record.intersectionRect.height < window.innerHeight / 2) continue
        viewed.add(name)
        observer.unobserve(record.target)
        track("illustration-view", { entry, figure: name })
      }
    },
    { threshold: Array.from({ length: 21 }, (_, step) => step / 20) },
  )
  for (const figure of document.querySelectorAll("[data-illustration]"))
    observer.observe(figure)
}

// The entry page renders `data-entry` on the <article> that holds every figure.
const entry = document.querySelector<HTMLElement>("[data-entry]")?.dataset.entry
if (entry) init(entry)

export {}
