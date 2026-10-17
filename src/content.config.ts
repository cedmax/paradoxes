import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { chapterIds } from "./data/chapters"
import { uniquenessIds } from "./data/uniqueness"
import { normaliseSearch } from "./data/search"

// All entries share the shell, but only arguments have opposing claims and a paradox status.
const common = z.object({
  title: z.string(),
  // Optional question-first search summary. Falls back to the problem, never the verdict.
  description: z.string().trim().min(1).optional(),
  // Title with its final word(s) highlighted on the page, e.g. "Sorites" + "paradox".
  titleAccent: z.string().optional(),
  // Extra search phrases, excluding normalised duplicates of alternativeNames.
  aka: z.array(z.string()).default([]),
  // Displayed search aliases; shorter variants may still appear in aka.
  alternativeNames: z.array(z.string().trim().min(1)).default([]),
  chapter: z.enum(chapterIds),
  // Canonical and related entries always appear on the index; variants are hidden by default.
  // A related entry shares an idea but adds a distinctive twist.
  uniqueness: z.enum(uniquenessIds).default("canonical"),
  // Slug of a canonical or related entry, never a variant. Required for related and variant;
  // forbidden for canonical entries.
  anchor: z.string().optional(),
  simplification: z.enum(["none", "light", "heavy"]).default("light"),
  noMaths: z.boolean().default(true),
  // Question-first hook shared by cards, entry headers and OG images.
  problem: z.string().trim().min(1),
  // Whether the entry's body has been written. False while the body is still empty.
  written: z.boolean().default(false),
  sources: z
    .array(
      z.object({
        title: z.string(),
        url: z.url().optional(),
        note: z.string().optional(),
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
})

const argument = common.extend({
  format: z.literal("argument"),
  status: z.enum(["explained", "defused", "disputed", "unreconciled"]),
  claimA: z.string(),
  claimB: z.string(),
  // One-line "How it ends" on the card.
  verdict: z.string(),
  // Sidebar: what assumption fails, and the status note.
  whatBreaks: z.string(),
  statusNote: z.string(),
  // Long-form argument body, written in plain paragraphs.
  setup: z.string().optional(),
  whyWrong: z.string().optional(),
  resolution: z.array(z.string()).default([]),
  finePrint: z.string().optional(),
  // Optional extra block after the resolution (e.g. Sorites positions).
  positions: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
})

const illusion = common.extend({
  format: z.literal("illusion"),
  // The figure owns setup and proof; this is the short, evidence-based explanation.
  why: z.string().trim().min(1),
  // Caveats, research detail and competing accounts kept out of the plain-words `why`.
  finePrint: z.string().optional(),
})

const entries = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/entries" }),
  schema: z.preprocess(
    // Preserve every existing argument file; new files explicitly choose their format.
    (value) =>
      value && typeof value === "object" && !Array.isArray(value) && !("format" in value)
        ? { ...value, format: "argument" }
        : value,
    z.discriminatedUnion("format", [argument, illusion]).superRefine((d, ctx) => {
      const shownNames = new Set(d.alternativeNames.map(normaliseSearch))
      if (d.aka.some((name) => shownNames.has(normaliseSearch(name)))) {
        ctx.addIssue({
          code: "custom",
          message: "aka must not repeat alternativeNames (ignoring case and apostrophe style)",
          path: ["aka"],
        })
      }
      if ((d.uniqueness === "canonical") !== (d.anchor === undefined)) {
        ctx.addIssue({
          code: "custom",
          message: "anchor is required for related and variant entries, not canonical ones",
          path: ["anchor"],
        })
      }
      if (d.reviewed && !d.sourcesVerified) {
        ctx.addIssue({
          code: "custom",
          message: "reviewed requires sourcesVerified",
          path: ["reviewed"],
        })
      }
    }),
  ),
})

export const collections = { entries }
