import { z } from "astro/zod"
import { chapterIds } from "./chapters.ts"
import { normaliseSearch } from "./search.ts"
import { lastWord } from "./title.ts"

const text = z.string().trim().min(1)

// All entries share the shell, but only arguments have opposing claims and a paradox status.
const common = z.object({
  title: text,
  // Optional question-first search summary. Falls back to the problem, never the status note.
  description: text.optional(),
  // Final word(s) of the title highlighted on the page. Defaults to the last word, e.g. "paradox"
  // for "Sorites paradox"; set it only for a longer accent, e.g. "toxin puzzle". It must end the
  // title. Resolved in the collection schema, so `data.titleAccent` is always a string.
  titleAccent: text.optional(),
  // Extra search phrases, excluding normalised duplicates of alternativeNames and the title.
  searchTerms: z.array(text).default([]),
  // Displayed search aliases; shorter variants may still appear in searchTerms.
  alternativeNames: z.array(text).default([]),
  chapter: z.enum(chapterIds),
  // An entry with neither relatedTo nor variantOf is canonical. Canonical and related entries
  // always appear on the index; variants are hidden by default. Set at most one of the two.
  // Slug of a canonical or related entry that shares an idea but adds a distinctive twist.
  relatedTo: text.optional(),
  // Slug of a canonical or related entry that this is the same puzzle as, in a new setting.
  variantOf: text.optional(),
  simplification: z.enum(["none", "light", "heavy"]).default("light"),
  noMaths: z.boolean(),
  // Question-first hook shared by cards, entry headers and OG images.
  problem: text,
  sources: z
    .array(
      z.object({
        title: text,
        url: z.url().optional(),
        note: text.optional(),
      }),
    )
    .default([]),
  // Publishing gate: source checks and claims must be manually approved by the site owner.
  sourcesVerified: z.boolean().default(false),
  // Human approval. Set true only by the site owner after personal review; requires sourcesVerified.
  // Controls the "Human reviewed" badge.
  reviewed: z.boolean().default(false),
  // Display order within the chapter.
  order: z.number().default(100),
  // Caveats, research detail and competing accounts kept out of the plain-words body.
  finePrint: text.optional(),
})

const argument = common.extend({
  format: z.literal("argument"),
  status: z.enum(["explained", "defused", "disputed", "unreconciled"]),
  claimA: text,
  claimB: text,
  // Sidebar: what assumption fails, and the status note.
  whatBreaks: text,
  statusNote: text,
  // Long-form argument body, written in plain paragraphs.
  setup: text,
  whyWrong: text,
  resolution: z.array(text).default([]),
  // Optional extra block after the resolution (e.g. Sorites positions).
  positions: z.array(z.object({ title: text, body: text })).default([]),
})

const illusion = common.extend({
  format: z.literal("illusion"),
  // The figure owns setup and proof; this is the short, evidence-based explanation.
  why: text,
})

export const entrySchema = z
  .discriminatedUnion("format", [argument, illusion])
  .superRefine((d, ctx) => {
    if (d.sourcesVerified && d.sources.length === 0) {
      ctx.addIssue({
        code: "custom",
        message: "published entries require sources",
        path: ["sources"],
      })
    }
    if (d.sourcesVerified && d.format === "argument") {
      if (d.resolution.length === 0) {
        ctx.addIssue({
          code: "custom",
          message: "published arguments require a resolution",
          path: ["resolution"],
        })
      }
      if (
        (d.status === "disputed" || d.status === "unreconciled") &&
        (d.positions.length < 2 || d.positions.length > 4)
      ) {
        ctx.addIssue({
          code: "custom",
          message: "published disputed or unreconciled arguments require 2 to 4 positions",
          path: ["positions"],
        })
      }
    }
    const shownNames = new Set(d.alternativeNames.map(normaliseSearch))
    if (d.searchTerms.some((term) => shownNames.has(normaliseSearch(term)))) {
      ctx.addIssue({
        code: "custom",
        message:
          "searchTerms must not repeat alternativeNames (ignoring case and apostrophe style)",
        path: ["searchTerms"],
      })
    }
    if (d.searchTerms.some((term) => normaliseSearch(term) === normaliseSearch(d.title))) {
      ctx.addIssue({
        code: "custom",
        message: "searchTerms must not repeat the title (ignoring case and apostrophe style)",
        path: ["searchTerms"],
      })
    }
    if (d.titleAccent !== undefined && !d.title.endsWith(d.titleAccent)) {
      ctx.addIssue({
        code: "custom",
        message: "titleAccent must be the end of the title",
        path: ["titleAccent"],
      })
    }
    if (d.relatedTo !== undefined && d.variantOf !== undefined) {
      ctx.addIssue({
        code: "custom",
        message: "set either relatedTo or variantOf, not both",
        path: ["variantOf"],
      })
    }
    if (d.reviewed && !d.sourcesVerified) {
      ctx.addIssue({
        code: "custom",
        message: "reviewed requires sourcesVerified",
        path: ["reviewed"],
      })
    }
  })
  .transform((d) => ({ ...d, titleAccent: d.titleAccent ?? lastWord(d.title) }))
