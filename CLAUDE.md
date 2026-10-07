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
- `src/pages/index.astro` — index with search and status filter (client script). Search matches
  `title`, `aka`, `problem`, `claimA`, `claimB`, `verdict`.
- `src/pages/entries/[slug].astro` — entry page. `src/pages/about.astro` — "How we write these".
- `src/components/EntryCard.astro` — index card.

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

### Writing rules

- Plain words, short sentences, British spelling. Explain any technical term.
- No em or en dashes (except inside a proper name such as "Grelling–Nelson"), no emojis, no
  hype, no first person and no inclusive "we".
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
- `sourcesVerified` stays `false` until a human has reviewed the entry. Do not set it to `true`.

## Editing rules

- Make focused changes only for the requested task.
- Do not edit `dist/` (generated output).
- Avoid adding dependencies unless the task requires it.
- Tailwind: use standard utilities and theme tokens. Use a bracketed arbitrary value (e.g.
  `text-[clamp(...)]`) only when nothing standard can express it.
- Preserve semantic heading order and keyboard navigability.
- Prettier: no semicolons, 2-space indent, print width 96. Husky + lint-staged run on commit.
