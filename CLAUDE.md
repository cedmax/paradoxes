# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build (NODE_ENV=production)
pnpm preview      # serve the built site
pnpm lint         # ESLint + Stylelint
pnpm check        # astro check (types, content schema)
pnpm format       # Prettier
pnpm knip         # find unused exports/dependencies
```

No test script exists. Validate changes with `pnpm lint`, `pnpm check` and `pnpm build`.
If the dev server or a build reports schema fields as missing after a schema change, clear the
content cache: `rm -rf .astro node_modules/.astro`.

## Architecture

Logic Benders (logicbenders.com) is a static **Astro 7** site of paradoxes explained in plain words, built in GitHub Actions and deployed to Netlify with the CLI (`.github/workflows/deploy.yml`; needs the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets). Netlify does not build; `netlify.toml` only holds headers. Package manager is **pnpm** (version pinned in `package.json`); Node version in `.nvmrc`.
Tailwind CSS 4 via the Vite plugin. Fonts are self-hosted with `@fontsource-variable/*`, imported
in `src/styles/global.css`. `~` maps to `/src`.

- `src/content/entries/*.md` — one paradox per file, YAML frontmatter only, no Markdown body.
  Schema in `src/content.config.ts`.
- `src/data/chapters.ts` — chapter ids, titles and blurbs. An entry's `chapter` must be one of
  these ids.
- `src/data/status.ts` — status and simplification labels and definitions (shown on the site).
- `src/data/uniqueness.ts` — uniqueness labels and definitions, and `anchorOf`, which resolves
  an entry's anchor and fails the build if it is unknown, a variant, or part of a loop.
- `src/pages/index.astro` — index with search and status filter (client script). Search matches
  `title`, `aka`, `alternativeNames`, `problem`, `claimA`, `claimB`, `verdict`, plus the anchor's title for related
  and variant entries. The index lists canonical and related entries. Variants are hidden by
  the "Hide variants" switch in the filters block (on by default); turning it off shows them.
  The switch is disabled and off while a search is active, so search always includes variants.
  A second switch, "Only reviewed" (off by default), lists only entries with `reviewed: true`.
  It works with or without a search. Both switches sit in their own row below the status chips.
  The index and entry pages only include entries with `sourcesVerified: true`
  (`getPublishedEntries()` in `src/data/entries.ts`).
  Chapters are always open from `md` up. Below `md` they fold up, one open at a time (the first
  by default, the last one opened is kept in `sessionStorage`). A search or a filter opens every
  chapter with results and the headings stop toggling until it is cleared.
- `src/pages/entries/[slug].astro` — entry page. `src/pages/about.astro` — "How we write these".
- `src/pages/chapters/[chapter].astro` — chapter landing pages with introductions and links
  to published canonical and related entries. The index and entry breadcrumbs link to them.
- `src/components/PuzzleIllustration.astro` — lazy loader for `illustrations/<slug>.astro`, see
  Illustrations below.
- `src/components/EntryCard.astro` — index card. It shows title, status, anchor link and
  `problem` only, so the card ends on the question. `claimA`, `claimB` and `verdict` stay on
  the entry page; the card carries them hidden and the index script reveals the ones a search
  matched when the match is not in the shown text.

Routes (`/entries/<slug>/`) are stable: never rename an entry file without adding a redirect.

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

## Entries

### Chapters

A chapter is "what breaks": the assumption, rule or expectation in the reader's head that the
paradox challenges. Classify by the mechanism that creates the conflict, not by the subject or
the setting used to explain it. Read the entry's `whatBreaks` and place it where that assumption
lives. For disputed and unreconciled entries, the chapter names what is contested, not what has
been shown wrong; the chapter never implies a status.

| Chapter                        | The assumption it challenges                                        |
| ------------------------------ | ------------------------------------------------------------------- |
| What counts as what            | A word or a thing picks out one clear thing with sharp edges.       |
| Self-reference                 | A statement or collection can safely refer to itself.               |
| Infinity misbehaving           | Endless things behave like very big finite ones.                    |
| Probability tricking intuition | Odds, chance and random set-ups are what they look like.            |
| Numbers that mislead           | A sample, average or comparison gives a fair picture.               |
| Collective outcomes            | Choices that are sensible one by one add up to a sensible whole.    |
| Individual choices             | One consistent rule for deciding or valuing works in every case.    |
| What we should believe         | Reasonable rules about evidence and belief lead somewhere sensible. |
| Time and causation             | Everyone shares one “now” and one order of cause and effect.        |
| Models meeting reality         | A tidy model or theory matches the world and the other theories.    |
| Shapes and sums deceiving      | Figures and quick calculations are right at first look.             |

- **What counts as what**: the conflict is over how a word or concept applies: classification,
  boundaries, or whether something stays the same thing. The conflict need not disappear once a
  definition is fixed (Sorites and Ship of Theseus are disputed). If self-application is what
  breaks, it is Self-reference. If the question is whether observed examples justify a general
  claim, it is What we should believe.
- **Self-reference**: direct self-reference, and closely related truth and set contradictions,
  including cases such as Yablo's paradox that test whether direct self-reference is needed. Do
  not move an entry out only because its statements do not refer to themselves directly.
- **Probability tricking intuition** vs **Numbers that mislead**: if the surprise comes from the
  odds or structure of a random process, it is Probability tricking intuition. If it comes from
  how observations are sampled, grouped, measured or compared, it is Numbers that mislead.
- **Collective outcomes** vs **Individual choices**: if the conflict arises from combining
  people's choices, aggregating preferences or reacting strategically to one another, it is
  Collective outcomes. If it concerns how one decision or moral judgement should be evaluated,
  it is Individual choices, even when other people are involved (Trolley, Moral luck, Paradox of
  voting).
- **Models meeting reality**: the central conflict must be between a model's prediction and an
  observation, or between two established theoretical accounts. A surprising observation alone
  is not enough. Identify the conflicting prediction or principles before assigning it.
- Place an entry by its own `whatBreaks`, not by its anchor's chapter.
- Chapter sizes are not a reason to move an entry. A small coherent chapter is fine.
- An entry's `anchor` may sit in another chapter; do not change uniqueness to match chapters.
- `order` sorts entries within a chapter.

### Status definitions (locked, do not change)

- **explained**: the contradiction was only apparent. One claim rests on a mistake in reasoning
  or intuition, and once you see why, nothing contradicts anything.
- **defused**: the contradiction is real and never goes away, but it proves one of the claims
  false, and experts agree which.
- **disputed**: experts agree it's a real puzzle but disagree on which claim to give up.
- **unreconciled**: every known fix costs something big and none is widely accepted.

How to apply them:

- `claimA` and `claimB` must genuinely conflict: they cannot both be true.
- If the real wrong step is a hidden premise, make that premise one of the displayed claims.
- **explained** and **defused**: `verdict`, `whatBreaks`, `statusNote` and `resolution` all
  name the same wrong claim. The test between them: if the reasoning that produces the clash
  contains an error, it is explained; if the reasoning is sound and the clash knocks out a
  premise (barber, Russell, Olbers), it is defused. If experts agree the claim fails but disagree
  only on how to describe the slip, the status still applies, provided the failure itself has been
  shown (two envelopes: no proper odds make the claim true); say the diagnosis is open in
  `statusNote` or `finePrint`. If there is no agreed error to point to, and every candidate fix
  carries a big cost, the entry is unreconciled (St Petersburg).
- **disputed**: the two claims are the positions expert camps actually hold; each camp gives up
  a different one (`newcombs-paradox.md` is the model). `whatBreaks`, `verdict`, `whyWrong` and
  `resolution` must not pick a side; phrase `whatBreaks` as the contested choice. Attribute
  arguments to the people who make them and include replies where sources give them.
- **unreconciled**: every listed position carries a big, sourced cost. "None is widely accepted"
  is the unreconciled test; never use it to justify disputed.
- Disputed and unreconciled entries need `positions` (2 to 4), each ending with its cost, all
  costs written in the same register.

### Uniqueness

- **canonical** (the default, no field needed): works by its own mechanism. Listed on the index.
- **related**: shares an idea with another entry but adds a twist of its own. Listed on the
  index, with a "Related to" strip.
- **variant**: the identical puzzle as another entry, in a different setting. Hidden from the
  index by default (the "Hide variants" switch); always linked from its anchor's page.
- `related` and `variant` entries must set `anchor` to the slug of a canonical or related entry,
  never a variant. `canonical` entries must not set `anchor`. Anchors must not form a loop. The
  schema and `anchorOf` enforce all three. Publish an anchor before the entries anchored on it,
  or the build fails.
- Judge by mechanism, not by topic. Two entries are variants only if the same step in the
  reasoning fails in both. Pick the closest anchor: a related entry if it shares the mechanism
  more closely than its own canonical anchor. An entry's page lists the variants and related
  entries anchored directly on it.

### Writing rules

- `description` is an optional search-result summary. Without it, metadata uses the entry's
  title and verdict. `alternativeNames` holds recognised names shown on the entry page and
  included in search; `aka` also accepts loose search phrases and is not shown.
- Plain words, short sentences, British spelling. Explain any technical term.
- No em or en dashes (except inside a proper name such as "Grelling–Nelson"), no emojis, no
  hype, no first person and no inclusive "we".
- `verdict` should make sense without the claims, because a search hit can show it alone on the
  index card. Never write “the first claim” or “the second claim” in it.
- When a body field (`setup`, `whyWrong`, `resolution`, `positions`, `finePrint`, `whatBreaks`,
  `statusNote`) mentions another entry, link it as `[shown text](entry-slug)`. The build fails on
  an unknown slug. A link to an entry that is not published yet shows as plain text until it is. Never put links in `title`, `problem`, `claimA`, `claimB` or `verdict`.
- `problem` is a question. `statusNote` starts lowercase, completes "Explained: …" etc., and is
  specific to the entry.
- Political and religious entries take no side, including through word choice or which view
  gets the last word.
- Wrap every free-text YAML value in double quotes (plain strings containing `: ` break the
  parser); use curly quotes inside.

### Claims

- `claimA` and `claimB` are one short sentence each, ideally under 20 words. Cut the reasons
  (mechanism, examples, figures, evidence) and move them to `setup` or `whyWrong`.
- Never cut scope or strength words ("every", "any", "no plan", "must", "at every depth"), nor an
  assumption both sides share ("endless time", "the same lives saved"). Without them the claims stop
  clashing.
- Write the pair in parallel: same subject, opposite predicate, so the clash shows in few words.
- **explained** and **defused**: `claimA` states the wrong premise in the words `whatBreaks` and
  `statusNote` use, and `claimB` states the fact that breaks it. **disputed** and **unreconciled**:
  each claim is one camp's commitment; common ground goes in `setup`.
- Before keeping a pair, check that the claims clash under the same assumptions (for a scientific
  paradox, a prediction against an observation counts), and that the premise `whatBreaks` calls
  wrong appears in the claim.

### Sources and accuracy

- Every fact, date, number, quote and attribution must be checked against a source that was
  actually fetched (Wikipedia, Stanford Encyclopedia of Philosophy, the original paper). Never
  invent URLs, quotes or figures. Recompute numbers.
- Only list a URL in `sources` if it was fetched and supports what the entry uses it for.
- `sourcesVerified` means the cited sources have been checked and the entry's claims brought into
  line with them, not that every claim is undisputed. New or substantially changed entries start
  at `false`. Set it to `true` only after the site owner has approved doing so for that entry,
  and never on your own initiative.
- `reviewed` is the site owner's human-approval flag. It shows the "Human reviewed" badge on the
  entry page, defaults to `false`, and requires `sourcesVerified: true` (the schema fails the
  build otherwise). Only the site owner sets it. Never set it to `true` yourself.

## Editing rules

- Make focused changes only for the requested task.
- Do not edit `dist/` (generated output).
- Avoid adding dependencies unless the task requires it.
- Tailwind: use standard utilities and theme tokens. Use a bracketed arbitrary value (e.g.
  `text-[clamp(...)]`) only when nothing standard can express it.
- Preserve semantic heading order and keyboard navigability.
- Prettier: no semicolons, 2-space indent, print width 96. Husky + lint-staged run on commit.
