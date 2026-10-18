---
name: create-illusion
description: Create, refine or review a Logic Benders illusion (visual or auditory), preferring licensed originals and including accessible interaction, factual reveal, credit and source checks.
---

# Create an illusion (visual or auditory)

Read `CLAUDE.md`, `docs/architecture.md`, `src/content.config.ts` and the
`build-illustration` skill before working. Never introduce the term "exhibit".
Do not change any existing argument entry to the new format.

## Structure and editorial

- Add `src/content/entries/<recognised-full-name>.md` using the best-known complete title
  and matching slug (e.g. `ebbinghaus-illusion`, not `ebbinghaus`).
- Set `format: illusion`; use the existing entry shell, chapters, aliases, `relatedTo` or
  `variantOf` (neither for a canonical entry) and source/approval fields. `titleAccent` defaults
  to the last word of the title; set it only for a longer accent. `problem` is a standalone
  question-first hook understandable on a text-only home card without seeing the figure.
- Incomplete entries stay on the PR branch, not `main`. Keep `sourcesVerified: false` and
  leave `reviewed` unset (it defaults to `false`) until the owner explicitly authorises
  changing them.
- Do not add `claimA`, `claimB`, `verdict`, `status` or artificial
  "looks / really is" frontmatter.
- `why` is a short factual explanation in plain British English. Distinguish what the
  reveal verifies from theories about the visual mechanism. Where scientific explanations
  compete, say so. Follow the `verify-sources` skill before proposing approval.
- Split detail into three tiers. `why` is the plain mechanism; keep the uncertainty the
  evidence needs there ("some listeners", "can seem"). Optional `finePrint` takes named
  researchers, specific findings, competing accounts and site-specific settings. The
  "Exact sound" or equivalent disclosure in the figure holds only the technical spec;
  plain takeaways belong in the visible reveal, and provenance goes in the caption once.
- Describe what people perceive or report ("can seem to carry on", "many listeners hear"),
  not what the brain or ear does ("the brain assumes", "your ear misses"), unless a source
  establishes that mechanism.
- Keep the conditions a finding holds under (for example "mainly at in-between pitch gaps").
  Call a neighbouring effect "related" unless a source shows it is the same process.
- Captions and other figure copy follow the entry writing rules too: no first person or
  inclusive "we". Use "Synthesised for this site" or "Redrawn for this site", and keep the
  credit to the original researchers or creator.

## Figure → reveal → why

1. Prefer the **original figure or recording**, when its actual reuse licence permits
   the intended site use and it still supports a faithful demonstration or reveal.
   Read the rights statement, choose a lossless or unaltered source where possible,
   credit its creator and link to the original and licence. **Every media asset
   used by the site must be self-hosted and stored in the repository**: no remote
   images, audio, videos, iframes or hotlinked proof media, even on PR previews.
   Source and licence links are ordinary citations and may point elsewhere.
   If the original bytes cannot be obtained, do not silently hotlink or replace
   them with an approximation; leave the entry pending. Do not infer permission
   merely because an asset is visible online. When reuse is not permitted, or a redraw materially
   improves the demonstration, create our own and still credit the originator.
2. Keep each implementation in `src/components/illusions/<slug>.astro`, using the
   existing illustration kit for figures and controls. The initial presentation
   should communicate the effect without repeating the same visible setup in prose.
   For audio, use Play/Stop controls, plus a replay button where the listener judges a
   single short sound or sequence, rather than continuous playback. Capture the
   listener's judgement before exposing explanation. Use source-faithful audio or independently produced
   tones with explicit parameters; don't republish copyrighted samples without
   permission. Exact greys and measurements are **data**, not decorative colours.
3. Reveal: let visitors independently verify a particular fact. First make sure
   the initial illusion is convincing without a control. Then animate or manipulate
   **the conditions that create the illusion**, not just the answer appearing.
   For example, vary a circle's neighbours without resizing the target, rotate
   arrowheads without changing the line, or connect identical pixel values directly within the original figure.
   Simple show/hide toggles alone are rarely sufficient. Provide a fixed numerical or
   geometric reference to establish what stayed unchanged. Never imply more certainty
   than the proof supports. When the evidence shows listeners or viewers respond
   differently to a control, describe the possible outcomes rather than one expected
   result.
4. Why: explain the relevant perceptual effect, visual or auditory, without asserting
   disputed neural mechanisms.
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
  Compare **rendered** pixels, excluding overlaid labels or annotations. Construct
  matching sampled areas as opaque fills, with no compositing above them. Keep
  the visual evidence and its nonvisual text proof in sync.
- Keep proofs in the same figure wherever possible. Avoid separate comparison
  boxes and travelling copies when an in-place proof works. An interactive control must
  change something useful, not just decorate the answer.
- Motion should serve an explicit comparison, respond to user controls, and not
  run automatically. Support reduced motion with an immediate equivalent.
- Format is editorial, not sensory: an existing argument can demonstrate a
  perceptual trick (e.g. the vanishing puzzle) without becoming an illusion entry.
  Auditory illusions, including the tritone paradox, may use the same `illusion`
  format without needing a separate collection. Offer Play/Stop (and replay where
  needed), a textual description, optional hearing/speaker advice, and an accessible alternative that
  does not claim to replicate the subjective auditory experience.
  The strongest reveal often includes an adjustable control rather than
  a single binary toggle.

## Review process

- Check all rendered media sources for remote runtime dependencies. External
  links are allowed only as references, citations or intentional navigation.
  Vendor the exact binary assets and commit them before merge. A vendor tool
  should validate provenance and dimensions and not redownload existing assets.
- Prototype one figure, inspect illusion strength on desktop and ~350px mobile **before
  triggering any reveal**, try every control with mouse and keyboard, and check the
  nonvisual proof before generalising. Compare the result with the original illusion
  and the site's strongest existing visual explanations. If it does not work at rest,
  redesign the figure rather than compensating with explanatory text.
- For audio, listen on real devices, both headphones and speakers at a comfortable volume,
  before proposing approval. Checks and builds do not confirm that the sound works; say so
  if listening was not done.
- Test that changing the context never changes the target measurements. Verify
  that matched pixel samples really share the same rendered values, including
  positions untouched by labels, and that measurement guides stay stationary.
- Fetch and check each citation against every historical and scientific claim, using
  `verify-sources`. Never mark a source verified yourself or change a human review flag.
- Run `pnpm lint`, `pnpm check`, `pnpm exec prettier --check .`,
  `pnpm knip`, `pnpm build`, then `pnpm check:seo`. Be truthful about checks
  which cannot be run.
- Unverified illusions should not be published to production. For local review:
  `PREVIEW_UNVERIFIED=true pnpm dev`. An opt-in noindex PR preview uses the same
  isolated exception; the published collection remains gated.
- No pushing, PR creation or merge without the owner's permission.
