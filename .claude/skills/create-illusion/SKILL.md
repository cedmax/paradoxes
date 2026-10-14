---
name: create-illusion
description: Create, refine or review a Logic Benders visual illusion, including original SVG figure, interactive reveal, accessible text proof, editorial copy and source checks.
---

# Create a visual illusion

Read `CLAUDE.md`, `docs/architecture.md`, `src/content.config.ts` and the
`build-illustration` skill before working. Never introduce the term "exhibit".
Do not change any existing argument entry to the new format.

## Structure and editorial

- Add `src/content/entries/<recognised-full-name>.md` using the best-known complete title
  and matching slug (e.g. `ebbinghaus-illusion`, not `ebbinghaus`).
- Set `format: illusion`; use the existing entry shell, chapters, title accent, aliases,
  uniqueness and source/approval fields. `problem` is a standalone question-first hook
  understandable on a text-only home card without seeing the figure.
- Set `written: true` for completed PR entries. Incomplete entries stay on the PR branch,
  not `main`. Keep `sourcesVerified: false` and `reviewed: false` until the owner
  explicitly authorises changing them.
- Do not add `claimA`, `claimB`, `verdict`, `status` or artificial
  "looks / really is" frontmatter.
- `why` is a short factual explanation in plain British English. Distinguish what the
  reveal verifies from theories about the visual mechanism. Where scientific explanations
  compete, say so. Follow the `verify-sources` skill before proposing approval.

## Figure → reveal → why

1. Create an original figure in `src/components/illusions/<slug>.astro`. Do not copy
   copyrighted images; attribute the original illusion and cite supporting research.
2. Figure: do the visual setup, without a second prose explanation of what is visible.
   Use the existing `IllustrationFigure`, `SvgFigure`, buttons, tokens and helpers from
   the illustration kit; don't duplicate its primitives. For a checkerboard, literal
   greys may be necessary as **measured data**; never treat arbitrary hex colours as
   decorative branding.
3. Reveal: let visitors independently verify a particular fact. Removing context,
   connecting equal-valued tiles, showing measurements or a clear overlay all qualify.
   Do not merely replace one statement with another. The reveal must not imply more
   certainty than its evidence establishes.
4. Why: explain the relevant perceptual effect without asserting disputed neural mechanisms.
   Avoid replaying the setup or proof in the body copy.

## Accessibility

- Every figure needs a useful accessible title and description. Accessibility text is
  intentionally allowed to repeat information omitted from visible prose.
- Use real buttons and range inputs, keyboard access, visible focus and text equivalents.
  Do not rely exclusively on motion, colour discrimination, hovering, dragging or fine
  pointer movements. Respect reduced-motion preferences for any animation.
- The reveal's measurable evidence must also be available as text (e.g. exact RGB numbers,
  equal diameters or line lengths). Keep button labels and `aria-pressed` state in sync.
- Avoid opacity and colour filters over areas claimed to have matching final RGB values.
  Compare **rendered** pixels, excluding overlaid labels or annotations.

## Review process

- Prototype one figure, inspect illusion strength on desktop and ~350px mobile, try every
  control with mouse and keyboard, and check the nonvisual proof before generalising.
- Fetch and check each citation against every historical and scientific claim, using
  `verify-sources`. Never mark a source verified yourself or change a human review flag.
- Run `pnpm lint`, `pnpm check`, `pnpm exec prettier --check .`,
  `pnpm knip`, `pnpm build`, then `pnpm check:seo`. Be truthful about checks
  which cannot be run.
- Unverified illusions should not be published to production. For local review:
  `PREVIEW_UNVERIFIED=true pnpm dev`. An opt-in noindex PR preview uses the same
  isolated exception; the published collection remains gated.
- No pushing, PR creation or merge without the owner's permission.
