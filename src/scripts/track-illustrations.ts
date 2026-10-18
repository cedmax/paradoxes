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

const controlOf = (target: Element): Control => {
  if (target.closest("input[type=range]")) return "range"
  // Checked before SVG: a native button can wrap an svg icon.
  if (target.closest("button")) return "button"
  if (target.closest("summary") || target instanceof HTMLDetailsElement) return "details"
  if (target instanceof SVGElement) return "svg-node"
  if (target.closest("[role=button]")) return "button"
  return "other"
}

function init(entry: string) {
  const interacted = new Set<string>()
  const viewed = new Set<string>()
  const revealed = new Set<string>()

  // Interaction: once per figure per page view. `toggle` does not bubble, so listen in capture.
  const onInteract = (event: Event) => {
    const { target } = event
    const figure = figureOf(target)
    const name = figure?.dataset.illustration
    if (!event.isTrusted || !name || !(target instanceof Element) || interacted.has(name))
      return
    // A script can open a <details> (twin-paradox does when playback passes the turn), and the
    // browser then fires a trusted `toggle`. Count it only while the reader's gesture is fresh.
    if (event.type === "toggle" && navigator.userActivation?.isActive === false) return
    interacted.add(name)
    track("illustration-interact", { entry, figure: name, control: controlOf(target) })
  }
  for (const type of ["pointerdown", "input", "toggle"]) {
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

      const choice = target.closest<HTMLElement>("[data-choice], [data-answer]")
      if (choice && figure.contains(choice)) {
        const answer = choice.dataset.choice ?? choice.dataset.answer ?? ""
        track("illusion-answer", { entry, figure: name, answer })
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

const entry = location.pathname.match(/^\/entries\/([^/]+)/)?.[1]
if (entry) init(entry)

export {}
