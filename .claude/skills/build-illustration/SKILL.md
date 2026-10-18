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

| Component            | Use it for                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IllustrationFigure` | The outer `<figure>`. Props: `lead` (bold line above), `name` (sets `data-illustration`; required on every figure, see Analytics), `frame` (default on; turn off when the figure only holds tables). Slots: `lead`, default, `caption` (the `figcaption`, always after the default slot) and `after` (below the caption, for a `Disclosure`). |
| `SvgFigure`          | Every `<svg>`. Props: `name` (unique on the page, builds the `<name>-title` and `<name>-desc` ids), `title`, `desc` (always give one for new pictures), `viewBox`. `class`, `id` and other attributes go to the `<svg>`.                                                                                                                      |
| `Slider`             | A range input with label. Props: `id`, `label`, `labelId` (only when a script rewrites the label), `min`, `max`, `step`, `value`, `startLabel`, `endLabel`, `valuetext`, `describedby`, `accent` (`ink` or `accent`). The default slot holds the readout, which `describedby` points to.                                                      |
| `ComparisonTable`    | Any table. Props: `caption`, `columns`, `rows` (first cell of each row is the row header), `highlight` (column indexes shaded), `align`, `dense` (tables with 4 or more columns).                                                                                                                                                             |
| `SideBySide`         | Two equal columns of `Panel`s.                                                                                                                                                                                                                                                                                                                |
| `Panel`              | A titled block. Without `accent` it is a boxed card. With `accent` (`red`, `blue`, `gold`, `green`) it is a bar down the left edge.                                                                                                                                                                                                           |
| `Callout`            | A short note with a bar on the left. `tone` is `ink` (default) or `accent`.                                                                                                                                                                                                                                                                   |
| `Disclosure`         | A `<details>` for extra detail. Put it in the `after` slot of the figure unless it belongs above the caption.                                                                                                                                                                                                                                 |

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

- Chart colours are tokens, not hand-written CSS variables. Import `series`, `seriesList`,
  `stroke` and (where necessary) `illusionSurface` from `~/data/palette` in Astro frontmatter.
  In SVG attributes, use `stroke={series.blue}`, `fill={series.red}` or `stroke={stroke}`.
  Use Tailwind utilities in CSS classes (`border-series-blue`, `bg-series-gold`). Never
  duplicate palette string values or put hex colours in illustrations.
- Use shared `IllusionControls` for Play/Pause and Show/Hide measurement buttons, with
  `MeasurementGuides` for red SVG guide lines. Use `bindIllusionProof` and
  `bindSliderPlayback` from `~/scripts/illustration` rather than duplicating behaviour.
  Toggle buttons use `btn-toggle` and `aria-pressed`; other buttons use `btn-ghost`.
- `IllusionControls` builds its element IDs from its `name` prop: `${name}-play`,
  `${name}-guide-toggle` and `${name}-proof`. Scripts must select exactly those IDs, not a
  shortened or renamed version. A wrong selector is still valid TypeScript, so lint, type
  checks and the build will not catch it.
- Spacing between blocks inside a figure comes from `IllustrationFigure` (`gap-4`). Use `gap-4`
  between panels and `gap-3` only where a kit component already does.

### Analytics

Umami tracking for every illustration and illusion lives in one delegated script,
`src/scripts/track-illustrations.ts`, loaded only by `src/pages/entries/[slug].astro`. Figures
carry no tracking code: the script reads everything off the DOM. Do not add `umami.track`
calls or `data-umami-event` attributes to illustrations. Follow these conventions so a new
figure is tracked without touching the script:

- **Name every figure.** Give each `IllustrationFigure` a `name`, static figures included, so
  it gets `data-illustration`. Names must be unique across the site (setup and explanation
  files for one entry need different names, e.g. `ladder-paradox-setup`). A figure without a
  name is invisible to analytics. When auditing, check the `IllustrationFigure` tag itself:
  `SvgFigure` also takes `name`, which hides misses from a plain grep.
- **Events sent**, all with `entry` (the slug) and `figure` (the name):
  - `illustration-view`: once per figure per page view, when half of it (or half the
    viewport, for tall figures) is visible.
  - `illustration-interact`: once per figure per page view, on the first trusted `click`,
    `input`, `toggle` or Enter/Space on a real control, with `control` set to `range`,
    `button`, `details` or `svg-node`. Presses on text, captions or the picture do not count.
  - `illusion-answer`: every click on a `[data-choice]` or `[data-answer]` button, with
    `answer` set to its value, and `pair` set to the `data-label` of the last
    `button[data-label]` clicked in that figure, when there is one.
  - `illusion-reveal`: once per figure per page view, when an `IllusionControls` proof
    toggle (`<name>-guide-toggle`) is switched on.
- **Controls must be real controls.** Use `<button>`, range inputs, checkboxes or radios, or
  `<summary>` via `Disclosure`. Clickable SVG elements need `role="button"` and `tabindex="0"`
  (as in `friendship-paradox`), which keyboard access requires anyway; without them clicks
  are not tracked.
- **Answers.** Mark judgement buttons with `data-answer="<value>"` or use `ListenerChoice`
  (`data-choice`). A "can't play or hear this" button is tracked as `skip` either through
  `data-choice="skip"` or an id ending in `-skip` (as in `tritone-paradox`, whose script
  collects `button[data-answer]` and so must not see the skip button). Do not reuse the
  `-skip` id suffix for anything that is not an answer skip. When an answer depends on which
  stimulus was picked, put `data-label` on the picker buttons so answers carry `pair`.
- **Reveals** use `IllusionControls` with `proof`, so the toggle id is
  `<name>-guide-toggle`. A hand-made proof toggle with another id is not tracked.
- **Never fake user events.** Only trusted events count, and `bindSliderPlayback` sets
  values without dispatching events, so autoplay is not counted. Do not
  `dispatchEvent(new Event("input"))` or call `.click()` to simulate the reader. A script
  that opens a `<details>` without a recent gesture is ignored.
- **Event names stay within 50 characters.** Add a new event type or payload field only in
  `track-illustrations.ts`, and update this section with it.

### Checking an illustration

Run `pnpm lint`, `pnpm check` and `pnpm build`. Then look at the page at a desktop width and a
phone width (about 350px), move every slider and press every button. When changing the kit
itself, screenshot every illustration before and after and compare them.

Passing lint, `pnpm check` and the build is not enough. Before calling an interactive
illustration finished, check in a browser that moving each slider changes the figure, Play
starts the animation, Pause stops it, each toggle changes its state, and the console reports
no JavaScript errors. If this could not be done, say so.

For analytics, stub `window.umami = { track: (n, d) => console.log(n, d) }` before the page
scripts run and confirm the figure sends one `illustration-view` when scrolled into view, one
`illustration-interact` on the first real control use and nothing on clicks on text or the
picture. For illusions, also check `illusion-answer` (including skip) and `illusion-reveal`.
