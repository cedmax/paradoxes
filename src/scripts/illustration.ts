// Helpers for the <script> block of an illustration.

/** The element rendered by <IllustrationFigure name="...">. Null when the figure is not on the page. */
export const illustrationRoot = (name: string) =>
  document.querySelector<HTMLElement>(`[data-illustration="${name}"]`)

/** Like querySelector, but fails loudly when the markup and the script drift apart. */
export function find<T extends Element>(root: Element, selector: string): T {
  const element = root.querySelector<T>(selector)
  if (!element) throw new Error(`Illustration element not found: ${selector}`)
  return element
}

/**
 * Wire a range input. `render` runs once now and on every input event. It draws
 * the picture for the value and may return the text to speak (aria-valuetext).
 * Returns the update function, for code that also changes the value itself.
 */
export function bindSlider(input: HTMLInputElement, render: (value: number) => string | void) {
  const update = () => {
    const text = render(Number(input.value))
    if (text) input.setAttribute("aria-valuetext", text)
  }
  input.addEventListener("input", update)
  update()
  return update
}

/**
 * Consistent Play/Pause controls for illustrations with manual range sliders.
 * Each instance is independent. Dragging pauses animation; reduced-motion
 * preferences disable playback without affecting manual scrubbing.
 */
export function bindSliderPlayback(
  input: HTMLInputElement,
  button: HTMLButtonElement,
  render: (value: number) => string | void,
  durationMs = 2600,
) {
  const update = bindSlider(input, render)
  const min = Number(input.min)
  const max = Number(input.max)
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  let position = Number(input.value)
  let direction = 1
  let lastTime: number | null = null
  let frame = 0
  let running = false

  const stop = () => {
    running = false
    cancelAnimationFrame(frame)
    lastTime = null
    button.textContent = "Play"
    button.setAttribute("aria-pressed", "false")
  }
  const tick = (now: number) => {
    if (!running) return
    if (lastTime !== null) {
      position += ((now - lastTime) * direction * (max - min)) / durationMs
      if (position >= max) {
        position = max
        direction = -1
      } else if (position <= min) {
        position = min
        direction = 1
      }
    }
    lastTime = now
    input.value = String(Math.round(position))
    update()
    frame = requestAnimationFrame(tick)
  }

  button.addEventListener("click", () => {
    if (running) {
      stop()
      return
    }
    if (reducedMotion.matches) return
    running = true
    lastTime = null
    button.textContent = "Pause"
    button.setAttribute("aria-pressed", "true")
    frame = requestAnimationFrame(tick)
  })
  input.addEventListener("input", () => {
    position = Number(input.value)
    if (position === max) direction = -1
    if (position === min) direction = 1
    stop()
  })
  const motionChanged = () => {
    stop()
    button.disabled = reducedMotion.matches
    button.title = reducedMotion.matches ? "Use the slider without animation" : ""
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop()
  })
  reducedMotion.addEventListener("change", motionChanged)
  motionChanged()
}

/** Share the same keyboard-operable reveal control on every measurement figure. */
export function bindIllusionProof(
  root: Element,
  name: string,
  label = "Show measurements",
  hideLabel = "Hide measurements",
) {
  const button = find<HTMLButtonElement>(root, `#${name}-guide-toggle`)
  const guides = find<SVGGElement>(root, `#${name}-guides`)
  const proof = find<HTMLElement>(root, `#${name}-proof`)
  button.addEventListener("click", () => {
    const shown = button.getAttribute("aria-pressed") !== "true"
    button.setAttribute("aria-pressed", String(shown))
    button.textContent = shown ? hideLabel : label
    guides.setAttribute("visibility", shown ? "visible" : "hidden")
    proof.hidden = !shown
  })
}

/** Loop a discrete sequence forwards for illusions whose movement has a direction. */
export function bindSliderLoopPlayback(
  input: HTMLInputElement,
  button: HTMLButtonElement,
  render: (value: number) => string | void,
  frameMs = 125,
) {
  const update = bindSlider(input, render)
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  const min = Number(input.min)
  const max = Number(input.max)
  let current = Number(input.value)
  let active = false
  let frame = 0
  let lastTime = 0
  const stop = () => {
    active = false
    cancelAnimationFrame(frame)
    button.textContent = "Play"
    button.setAttribute("aria-pressed", "false")
  }
  const tick = (now: number) => {
    if (!active) return
    if (now - lastTime >= frameMs) {
      current = current >= max ? min : current + 1
      input.value = String(current)
      update()
      lastTime = now
    }
    frame = requestAnimationFrame(tick)
  }
  button.addEventListener("click", () => {
    if (active) return stop()
    if (reducedMotion.matches) return
    active = true
    lastTime = performance.now()
    button.textContent = "Pause"
    button.setAttribute("aria-pressed", "true")
    frame = requestAnimationFrame(tick)
  })
  input.addEventListener("input", () => {
    current = Number(input.value)
    stop()
  })
  const motionChanged = () => {
    stop()
    button.disabled = reducedMotion.matches
    button.title = reducedMotion.matches ? "Use the slider without animation" : ""
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop()
  })
  reducedMotion.addEventListener("change", motionChanged)
  motionChanged()
}

/**
 * Answer buttons for a listening judgement (see ListenerChoice). The answers stay disabled until
 * `enable()` is called, normally after the first play. `onChoice` receives the chosen value, or
 * "skip", and may return text to show beneath the buttons.
 */
export function bindListenerChoice(
  root: Element,
  name: string,
  onChoice: (value: string) => string | void,
) {
  const group = find<HTMLElement>(root, `#${name}-choices`)
  const note = find<HTMLElement>(root, `#${name}-choice-note`)
  const answers = Array.from(group.querySelectorAll<HTMLButtonElement>("button[data-choice]"))
  for (const button of answers) {
    button.addEventListener("click", () => {
      const value = button.dataset.choice ?? ""
      for (const other of answers) {
        if (other.dataset.choice !== "skip")
          other.setAttribute("aria-pressed", String(other === button))
      }
      const text = onChoice(value)
      note.hidden = !text
      note.textContent = text ?? ""
    })
  }
  return {
    enable() {
      for (const button of answers) button.disabled = false
    },
    reset() {
      for (const button of answers) {
        if (button.dataset.choice !== "skip") button.setAttribute("aria-pressed", "false")
      }
      note.hidden = true
      note.textContent = ""
    },
  }
}
