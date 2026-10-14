---
name: build-illustration
description: Use when creating, editing, moving or reviewing Astro setup and explanation illustrations, SVGs, controls or illustration-kit components.
---

# Building illustrations

Use this skill when creating, editing, relocating or reviewing Astro illustrations. First identify
what the illustration contributes: a **setup** visual introduces the puzzle without revealing its
resolution; an **explanation** visual shows why the puzzle works or what resolves it. Put the file
in the corresponding directory. If a visual already carries the setup more clearly than the
text, simplify duplicated setup prose without removing necessary assumptions.

## Illustrations

An illustration is one file in either `src/components/illustrations/setup/<slug>.astro`
or `src/components/illustrations/explanation/<slug>.astro`, where `<slug>` is the entry id.
The folder determines where the visual appears on the entry page: in “The setup” or in the
explanation section. `PuzzleIllustration` loads only the matching file for that section, so
there is no placement registry or frontmatter flag to maintain. Build illustrations from the kit
in `src/components/illustration-kit/`. Do not copy markup for sliders, tables, panels,
callouts or SVG wrappers into an illustration, and do not write hex colours or per-component
`<style>` blocks.

Illustrations must not change the look of the kit: if something is missing, add it to the kit
(and use it in more than one place) instead of styling around it.

### Components

Import with `~/components/illustration-kit/<Name>.astro`.

| Component            | Use it for                                                                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `IllustrationFigure` | The outer `<figure>`. Props: `lead` (bold line above), `name` (sets `data-illustration`, needed by a script), `frame` (default on; turn off when the figure only holds tables). Slots: `lead`, default, `caption` (the `figcaption`, always after the default slot) and `after` (below the caption, for a `Disclosure`). |
| `SvgFigure`          | Every `<svg>`. Props: `name` (unique on the page, builds the `<name>-title` and `<name>-desc` ids), `title`, `desc` (always give one for new pictures), `viewBox`. `class`, `id` and other attributes go to the `<svg>`.                                                                                                 |
| `Slider`             | A range input with label. Props: `id`, `label`, `labelId` (only when a script rewrites the label), `min`, `max`, `step`, `value`, `startLabel`, `endLabel`, `valuetext`, `describedby`, `accent` (`ink` or `accent`). The default slot holds the readout, which `describedby` points to.                                 |
| `ComparisonTable`    | Any table. Props: `caption`, `columns`, `rows` (first cell of each row is the row header), `highlight` (column indexes shaded), `align`, `dense` (tables with 4 or more columns).                                                                                                                                        |
| `SideBySide`         | Two equal columns of `Panel`s.                                                                                                                                                                                                                                                                                           |
| `Panel`              | A titled block. Without `accent` it is a boxed card. With `accent` (`red`, `blue`, `gold`, `green`) it is a bar down the left edge.                                                                                                                                                                                      |
| `Callout`            | A short note with a bar on the left. `tone` is `ink` (default) or `accent`.                                                                                                                                                                                                                                              |
| `Disclosure`         | A `<details>` for extra detail. Put it in the `after` slot of the figure unless it belongs above the caption.                                                                                                                                                                                                            |

Skeleton:

```astro
---
import IllustrationFigure from "~/components/illustration-kit/IllustrationFigure.astro"
import Slider from "~/components/illustration-kit/Slider.astro"
import SvgFigure from "~/components/illustration-kit/SvgFigure.astro"
---

<IllustrationFigure name="my-paradox" lead="What to look at">
  <SvgFigure
    name="my-paradox"
    class="mx-auto w-full max-w-sm"
    viewBox="0 0 300 200"
    title="…"
    desc="…"
  >
    <path id="my-paradox-path" stroke="var(--color-series-blue)" />
  </SvgFigure>
  <Slider id="my-paradox-slider" label="Move it" describedby="my-paradox-readout">
    <p id="my-paradox-readout" class="text-base" aria-live="polite">
      …
    </p>
  </Slider>
  <Fragment slot="caption">What the picture shows.</Fragment>
</IllustrationFigure>

<script>
  import { bindSlider, find, illustrationRoot } from "~/scripts/illustration"

  const root = illustrationRoot("my-paradox")
  if (root) {
    const slider = find<HTMLInputElement>(root, "#my-paradox-slider")
    const path = find<SVGPathElement>(root, "#my-paradox-path")
    bindSlider(slider, (value) => {
      path.setAttribute("d", `M0 0 L${value} 100`)
      return `${value} percent` // becomes aria-valuetext
    })
  }
</script>
```

### Scripts

- Use `illustrationRoot(name)`, `find(root, selector)` and `bindSlider(input, render)` from
  `~/scripts/illustration`. Always look elements up inside the root, never on `document`, and
  keep ids prefixed with the illustration name.
- `bindSlider` runs `render` once on load and on every `input` event. Return the spoken value
  from `render` to keep `aria-valuetext` current.
- A script that sets `style.display` on a wrapper must give the wrapper its own layout classes
  (for example `flex flex-col`); the kit does not add them for you.
- Astro 7 uses JSX whitespace rules by default: whitespace containing a newline
  around an inline tag disappears, while a same-line space is preserved. Use explicit
  `{" "}` wherever a space is needed across a line break. Prettier's
  `astroCompressHTML: "jsx"` setting mirrors Astro, so formatting should preserve
  rendered spaces. Check the page as well as `prettier --check`.

### Colours and buttons

- Chart colours are tokens: `--color-series-red`, `-blue`, `-gold`, `-green`, plus
  `--color-stroke` for outlines. In SVG attributes use `var(--color-series-blue)`; in Astro
  frontmatter use `series`, `seriesList` and `stroke` from `~/data/palette`; in classes use the
  utilities (`border-series-blue`, `bg-series-gold`). Never write the hex values.
- Toggle buttons use the `btn-toggle` class and `aria-pressed`. Other buttons use `btn-ghost`.
- Spacing between blocks inside a figure comes from `IllustrationFigure` (`gap-4`). Use `gap-4`
  between panels and `gap-3` only where a kit component already does.

### Checking an illustration

Run `pnpm lint`, `pnpm check` and `pnpm build`. Then look at the page at a desktop width and a
phone width (about 350px), move every slider and press every button. When changing the kit
itself, screenshot every illustration before and after and compare them.
