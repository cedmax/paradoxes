# CLAUDE.md

Logic Benders (logicbenders.com) is an Astro 7 site about **paradoxes in plain words**.
Keep the editorial promise: "Paradoxes in plain words."

## Always-on rules

- Make focused changes only for the requested task. Do not edit generated `dist/` files.
- Never push commits, open or modify a pull request, or merge without the site owner's
  permission. A request to prepare a PR authorises its proposed branch and PR, not a merge.
- Never change `sourcesVerified` or `reviewed` without explicit authorisation from the
  site owner, even when the evidence looks complete. `sourcesVerified` is the publishing
  gate; `reviewed` is a separate human-approval badge. Only the owner may set `reviewed: true`.
  A reviewed entry must also be source-verified.
- Routes at `/entries/<slug>/` are stable; never rename an entry file without a redirect.
- Avoid dependencies unless required. Use Tailwind utilities and theme tokens; resort to
  arbitrary values only when necessary. Preserve semantic heading order and keyboard access.
- Prettier uses no semicolons, 2-space indentation and print width 96. Husky and lint-staged
  run at commit time. Never claim a command passed unless it was run.

## Skills (load when relevant)

- `.claude/skills/edit-paradox/SKILL.md` — create, classify, rewrite or review an entry's
  prose, claims, status, chapter and uniqueness.
- `.claude/skills/verify-sources/SKILL.md` — fetch and audit references and factual claims.
- `.claude/skills/build-illustration/SKILL.md` — build or review interactive or static visuals
  and the illustration kit.
- `.claude/skills/create-illusion/SKILL.md` — create an illusion (visual or auditory) with its original figure,
  measurable reveal, accessible proof and supported explanation.
- `.claude/skills/review-pr/SKILL.md` — review a branch or pull request against its base.

For architecture, routing, search, publishing, SEO, OG images and deployment details, consult
`docs/architecture.md` and then the current implementation. The implementation is authoritative:
`src/content.config.ts` for entry fields, `src/data/chapters.ts` for chapters,
`src/data/status.ts` for status definitions and `src/data/uniqueness.ts` for uniqueness.
Do not copy their tables into guidance files.

## Commands

```bash
pnpm dev          # start development server
pnpm build        # production build
pnpm preview      # serve the build
pnpm lint         # ESLint + Stylelint
pnpm check        # Astro types and content schema
pnpm check:seo    # generated HTML, sitemap, links and structured data; run after build
pnpm format       # Prettier (writes files)
pnpm knip         # unused dependencies/exports
```

There is no test script. Run appropriate checks for the change; normally `pnpm lint`,
`pnpm check` and `pnpm build`. Before pushing substantial changes, also check Prettier and
Knip. After SEO or routing changes run `pnpm check:seo` on the generated production build;
for preview builds use `SITE_INDEXING=noindex pnpm check:seo`.

If schema changes leave cached fields missing, clear `.astro` and `node_modules/.astro`.
