---
name: verify-sources
description: Use when validating factual claims, links, quotations, numbers or references in paradox entries, or deciding if their sources are verified.
---

# Verify an entry's sources

Use this skill for an evidence review, not a superficial link check. Read the entire entry,
including claims, setup, positions, fine print and its sources list. If the request is review-only,
report findings without editing anything.

1. Fetch **each** cited source directly. Search snippets, abstracts when full text is needed,
   or a citation you cannot open are not a substitute for checking the supporting text. State
   when only an abstract is accessible.
2. Check every factual assertion, attribution, date, quote and number against the source that
   is supposed to support it. Recompute quantities where practical; check essential caveats,
   contested interpretations and the strength of wording, not only whether names match.
3. Identify unsupported or overstated claims, incorrect citations, missing qualifications and
   sources that do not support their assigned point. Do not invent URLs, evidence or quotes.
4. For each entry, report **supported**, **corrections required**, or **unable to verify**,
   with the exact fields and proposed plain-language changes. Do not say an inaccessible source
   was verified. Recheck changed claims against the underlying sources.
5. If asked to edit, make only approved/requested text changes; do not change any approval
   flag without explicit permission from the site owner.

## Accuracy and approval flags

- Every fact, date, number, quote and attribution must be checked against a source that was
  actually fetched (Wikipedia, Stanford Encyclopedia of Philosophy, the original paper). Never
  invent URLs, quotes or figures. Recompute numbers.
- Only list a URL in `sources` if it was fetched and supports what the entry uses it for.
- For historical attribution, separate first publication from invention or first use. Where
  historians disagree, attribute each account to its source in the source note and fine print
  ("Vicario states…") instead of presenting one reconstruction as settled.
- `sourcesVerified` means the cited sources have been checked and the entry's claims brought into
  line with them, not that every claim is undisputed. New or substantially changed entries start
  at `false`. Set it to `true` only after the site owner has approved doing so for that entry,
  and never on your own initiative.
- `reviewed` is the site owner's human-approval flag. It shows the "Human reviewed" badge on the
  entry page, defaults to `false`, and requires `sourcesVerified: true` (the schema fails the
  build otherwise). Only the site owner sets it. Never set it to `true` yourself.

## Completion

Distinguish evidence validation from publication approval. A conclusion that an entry is
source-supported is **not** permission to set `sourcesVerified` or `reviewed`. When material
changes make a previously verified entry require renewed review, tell the owner it needs its
publishing flag reconsidered; do not silently flip it. That includes adding a source or
changing a claim on an entry already at `sourcesVerified: true`: leave the flag as it is and
list the entry and the new or changed claims in the PR description for the owner to recheck. Provide a concrete correction list
before recommending approval.
