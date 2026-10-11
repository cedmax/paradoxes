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
