import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { chapterIds } from "./data/chapters"
import { subjectIds } from "./data/subjects"
import { uniquenessIds } from "./data/uniqueness"

const entries = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/entries" }),
  schema: z
    .object({
      title: z.string(),
      // Title with the last word(s) highlighted on the entry page, e.g. "Sorites" + "paradox".
      titleAccent: z.string().optional(),
      // Other names people search for (e.g. "Zeno", "surprise exam"). Search only, not shown.
      aka: z.array(z.string()).default([]),
      chapter: z.enum(chapterIds),
      // One primary field of study, separate from the assumption challenged by the chapter.
      subject: z.enum(subjectIds),
      status: z.enum(["explained", "defused", "disputed", "unreconciled"]),
      // Canonical and related entries are always listed on the index. Variants (the same puzzle in
      // a different setting) are hidden by the index's "Hide variants" switch, which is on by
      // default. They are always reachable from the entry named in `anchor`.
      uniqueness: z.enum(uniquenessIds).default("canonical"),
      // Slug of a canonical or related entry, never a variant. Required for related and variant,
      // not allowed for canonical.
      anchor: z.string().optional(),
      simplification: z.enum(["none", "light", "heavy"]).default("light"),
      noMaths: z.boolean().default(true),

      // The problem, as a question. Shown big on cards and entry pages.
      problem: z.string(),
      claimA: z.string(),
      claimB: z.string(),
      // One-line "How it ends", shown on the card.
      verdict: z.string(),
      // Sidebar.
      whatBreaks: z.string(),
      statusNote: z.string(),

      // Long-form body. Plain paragraphs only. Empty until the entry is written.
      written: z.boolean().default(false),
      setup: z.string().optional(),
      whyWrong: z.string().optional(),
      resolution: z.array(z.string()).default([]),
      finePrint: z.string().optional(),
      // Optional extra block after the resolution (e.g. the three Sorites positions).
      positions: z.array(z.object({ title: z.string(), body: z.string() })).default([]),

      sources: z
        .array(
          z.object({
            title: z.string(),
            url: z.url().optional(),
            note: z.string().optional(),
          }),
        )
        .default([]),
      sourcesVerified: z.boolean().default(false),
      // Human approval. Set to true only by the site owner, after personally reviewing the entry.
      // Shows the "Human reviewed" badge. Requires sourcesVerified.
      reviewed: z.boolean().default(false),
      // Display order within a chapter.
      order: z.number().default(100),
    })
    .refine((d) => (d.uniqueness === "canonical") === (d.anchor === undefined), {
      message:
        "anchor is required for related and variant entries, and not allowed for canonical ones",
      path: ["anchor"],
    })
    .refine((d) => !d.reviewed || d.sourcesVerified, {
      message:
        "reviewed requires sourcesVerified: an entry cannot be approved before its sources are verified",
      path: ["reviewed"],
    }),
})

export const collections = { entries }
