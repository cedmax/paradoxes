---
name: edit-paradox
description: Use when creating, rewriting, classifying or reviewing paradox entries, including claims, chapter, status, uniqueness and entry prose.
---

# Edit a paradox entry

Read the target `src/content/entries/<slug>.md` and `src/content.config.ts` before editing.
Treat "Paradoxes in plain words" as the editorial promise. Apply the global constraints in
`CLAUDE.md`; do not modify approval flags. If a task includes source validation, also use the
`verify-sources` skill.

Every entry sets `format`, placed directly after `title`. Entries edited here are arguments
(`format: argument`); illusions follow the `create-illusion` skill.

Before finishing, verify that the two claims actually clash under the same assumptions, each
required field agrees about the wrong or contested premise, status and uniqueness are defensible,
and the prose remains understandable without specialist background.

## Chapters

The current chapter IDs, names, introductions and blurbs live in `src/data/chapters.ts`. Read
that file before assigning or renaming a chapter. Do not maintain another chapter table here.

A chapter is "what breaks": the assumption, rule or expectation in the reader's head that the
paradox challenges. Classify by the mechanism that creates the conflict, not by the subject or
the setting used to explain it. Read the entry's `whatBreaks` and place it where that assumption
lives. For disputed and unreconciled entries, the chapter names what is contested, not what has
been shown wrong; the chapter never implies a status.

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
- The entry named by `relatedTo` or `variantOf` may sit in another chapter; do not change
  uniqueness to match chapters.
- `order` sorts entries within a chapter.

## Status

The status definitions are **locked** in `src/data/status.ts`: `explained`, `defused`,
`disputed`, `unreconciled`. Read the canonical definitions; do not alter them here or in code
without explicit authorisation.

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

## Uniqueness

Read `src/data/uniqueness.ts` for the canonical definitions of `canonical`, `related`, and
`variant`; its `uniquenessOf` helper derives an entry's kind from its fields and `anchorOf`
enforces anchor integrity. Do not duplicate definitions here.

- A `related` entry sets `relatedTo` and a `variant` entry sets `variantOf`, each to the slug of
  a canonical or related entry, never a variant. A `canonical` entry sets neither. Setting both
  is a validation error, and `anchorOf` fails the build on an unknown anchor, a variant anchor or
  a loop of anchors. Publish an anchor before the entries anchored on it, or the build fails.
- Judge by mechanism, not by topic. Two entries are variants only if the same step in the
  reasoning fails in both. Pick the closest anchor: a related entry if it shares the mechanism
  more closely than its own canonical anchor. An entry's page lists the variants and related
  entries anchored directly on it.

## Writing rules

- `description` is an optional question-first search summary that holds back the answer. Without
  it, metadata uses `problem`, never `verdict`. `alternativeNames` holds recognised names shown
  on the entry page and included in search; `searchTerms` contains additional search phrases and
  is not shown. The schema rejects a `searchTerms` value that repeats `alternativeNames` or the
  `title`, after normalising case, apostrophe style and whitespace. Shorter phrases such as
  "surprise exam" alongside "Surprise exam paradox" are allowed, and so is a spelling that
  differs from the title only in hyphens or punctuation ("absentminded driver"), because search
  matches contiguous text.
- `titleAccent` is the part of the title shown in the accent colour. Leave it out and it is the
  last word of the title; set it only when the accent is longer ("toxin puzzle" in "Kavka's toxin
  puzzle"). The schema fails the build if it does not end the title.
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

## Claims

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
