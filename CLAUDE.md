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

Logic Benders (logicbenders.com) is a static **Astro 7** site of paradoxes explained in plain words, deployed to Netlify (`netlify.toml`). Package manager is **pnpm** (version pinned in `package.json`); Node version in `.nvmrc`.
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
  `title`, `aka`, `problem`, `claimA`, `claimB`, `verdict`, plus the anchor's title for related
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
- `src/components/EntryCard.astro` — index card. It shows title, status, anchor link and
  `problem` only, so the card ends on the question. `claimA`, `claimB` and `verdict` stay on
  the entry page; the card carries them hidden and the index script reveals the ones a search
  matched when the match is not in the shown text.

Routes (`/entries/<slug>/`) are stable: never rename an entry file without adding a redirect.

## Entries

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
