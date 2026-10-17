---
name: review-pr
description: Use when asked to review a pull request or branch for correctness, regressions, editorial quality or merge readiness.
---

# Review a pull request

Review the **actual diff against its base**, not just the title or PR description. A review
request does not authorise edits, commits, pushes or flag changes.

1. Read the diff and nearby implementation. Check that the PR description and claims about
   the changed behaviour match the code and that unrelated files are untouched.
2. For edited entries, use the `edit-paradox` skill; for factual or source claims, use
   `verify-sources`. Check that `sourcesVerified` and `reviewed` remain untouched unless the
   owner explicitly approved them.
3. For illustrations, use `build-illustration`. Check whether they belong in setup or
   explanation, whether the visual is genuinely useful, and whether controls, keyboard
   behaviour, responsiveness and accessibility work. For illusions, use `create-illusion`.
   An audio illusion is not ready to merge until it has been listened to on real devices
   (headphones and speakers); if nobody has done that, report it as an open acceptance step.
4. Verify build/config/routing changes against `docs/architecture.md`. Pay special attention
   to publication gates, stable slugs, page indexing, generated OG assets and previews.
5. Run the applicable checks when an executable checkout is available: `pnpm lint`,
   `pnpm check`, `pnpm exec prettier --check .`, `pnpm knip`, `pnpm build`, then
   `pnpm check:seo` if generated pages, metadata or routing may change. Use
   `SITE_INDEXING=noindex pnpm check:seo` for preview builds.
6. Report actionable findings first, with files/lines and severity. Distinguish verified
   failures from potential issues. Explicitly name checks and visual tests you could not run.

Do not merge, approve, push or modify the PR without the owner's request.
