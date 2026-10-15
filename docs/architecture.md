# Architecture

This is a descriptive map, not a replacement for the code. For current chapter IDs, status labels
and uniqueness rules, use `src/data/chapters.ts`, `src/data/status.ts` and
`src/data/uniqueness.ts` respectively.

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
  `title`, `aka`, `alternativeNames`, `problem`, `claimA`, `claimB`, `verdict`, plus the
  anchor's title for related and variant entries. Search matches the query as a contiguous
  phrase. Search ignores case and straight/curly apostrophe differences. The index lists
  canonical and related entries. Variants are hidden by the "Hide variants" switch in the
  filters block (on by default); turning it off shows them.
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
  to published canonical and related entries. On the index, the chapter heading links to its
  page from `md` up; below `md` the heading toggles the chapter, so the open chapter shows an
  "Explore this chapter" link instead. Entry breadcrumbs also link to them.
- `src/components/StructuredData.astro` — safely serialises JSON-LD. `Base` adds `WebSite`
  data on the homepage; entry and chapter pages pass their breadcrumbs and content data.
  Do not invent authors or publication dates for structured data.
- `SITE_INDEXING=noindex` adds a robots `noindex` tag to every HTML page. The deploy workflow
  sets it for pull-request previews and explicitly uses `index` for production builds.
  Preview robots.txt still allows crawling so search engines can read the noindex tag.
- `src/pages/corrections/index.astro` — static Netlify form for corrections, linked from the
  footer, About page and entry pages. An entry link pre-fills the page URL in the browser.
  `corrections/thanks.astro` is always noindex and excluded from the sitemap. Netlify form
  detection must be enabled before deploying the form; optional email notifications are
  configured in Netlify, not in this repository.
- `src/components/PuzzleIllustration.astro` — loads `illustrations/setup/<slug>.astro` or
  `illustrations/explanation/<slug>.astro` based on placement. See the build-illustration skill.
- `src/components/EntryCard.astro` — index card. It shows title, status, anchor link and
  `problem` only, so the card ends on the question. `claimA`, `claimB` and `verdict` stay on
  the entry page; the card carries them hidden and the index script reveals the ones a search
  matched when the match is not in the shown text.
- `src/pages/og/[file].png.ts` and `src/og/` — one 1200×630 Open Graph PNG per published entry
  at `/og/<slug>-<hash>.png`, drawn with `satori` + `@resvg/resvg-js`. Colours come from the
  `--color-*` tokens in `global.css`; fonts are the static `@fontsource/archivo` and
  `@fontsource/jetbrains-mono` files. It has the same icon and orange bar as `/og.png`, with the
  title (split by `splitTitle` in `src/data/title.ts`, shared with the entry page) and `problem`
  between them, never the claims or verdict. Font sizes come from length steps in
  `src/og/template.ts`; the build fails if text leaves its area, so add a step if a new entry
  overflows. The hash covers the drawn text plus a template version (image code, colour tokens,
  font files), so a change to either changes the URL. Other pages keep `/og.png` (`Base.astro`
  takes optional `image` and `imageAlt`).
- OG cache: rendered PNGs live in `node_modules/.cache/og/`, are reused when the hash matches
  and are pruned when no entry uses them. `deploy.yml` restores and saves that directory with
  `actions/cache`. `ci.yml` does not build. `pnpm check:seo` verifies each entry's image is a
  1200×630 PNG in `dist`, that entries do not share one and that other pages use `/og.png`.
- Default image: `public/og.png` is generated, not drawn by hand. `pnpm og:default` renders it
  from the same template as the entry images (same mark, margins and orange bar) and writes the
  file. The headline "It can't be true. It can't be false." is 108px and centred vertically
  between the header and the bar; a smaller step is used only if the margin check rejects 108px.
  It is not part of `pnpm build` or the deploy workflow, so after any change to `src/og/` or the
  colour tokens run it and commit the new `public/og.png`. `pnpm check:seo` re-renders the
  default image and fails if the committed file differs.

Routes (`/entries/<slug>/`) are stable: never rename an entry file without adding a redirect.


## Visual illusions

Entry frontmatter uses `format: illusion` for visual illusions. Legacy entries omit `format`
and default to `argument`; their claim-based schema and layout are otherwise unchanged.
Both formats share `problem` as the question-first catalogue hook, page heading, SEO
description fallback and OG text. Illusions instead require `why`, which follows
an original or appropriately licensed source image, vector or audio demonstration,
loaded by `src/components/IllusionExperience.astro`
from `src/components/illusions/<slug>.astro`. Each demonstration owns its initial and reveal states; no generic "what you see /
what is true" fields are stored. Prefer the original media where reuse is
permitted and faithful; otherwise redraw or synthesise and credit the originator.
All displayed media must be served from this site's own public assets; third-party
URLs may only be used for attribution and source links. Adelson's original PNG
belongs in `public/illustrations/checker-shadow-original.png`; the proof is an
in-place SVG overlay (not a second externally sourced image). The production build
checks the supplied original's dimensions and SHA-256 with
`scripts/check-illusion-assets.mjs`. Missing or altered assets fail the build; no
media are downloaded at runtime or during building. Commit the original PNG
before merging the PR.
`format` describes the editorial structure, not which sense the presentation
uses. A visual vanishing puzzle may remain an argument; audio illusions may be
added later without changing the format schema.

The existing paradox statuses do not apply to illusions. The catalogue shows no new badge
on illusion cards, but adds a "Visual illusions" filter backed by the same `format` field.
Argument status filters exclude illusions; the All filter includes both formats.
Chapters and uniqueness rules continue to apply to both.

New entries start with `sourcesVerified: false` and `reviewed: false` and are never
included in a production build until the owner explicitly approves source verification.
For review, `PREVIEW_UNVERIFIED=true pnpm dev` includes unpublished illusions locally.
A PR deployment with the opt-in `deploy-preview` label enables the same behaviour only
for its noindex preview. `main` never enables this exception.

See `.claude/skills/create-illusion/SKILL.md` for the authoring and accessibility checklist.
