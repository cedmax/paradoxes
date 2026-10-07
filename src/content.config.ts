import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { chapterIds } from "./data/chapters"

const entries = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/entries" }),
  schema: z.object({
    title: z.string(),
    // Title with the last word(s) highlighted on the entry page, e.g. "Sorites" + "paradox".
    titleAccent: z.string().optional(),
    // Other names people search for (e.g. "Zeno", "surprise exam"). Search only, not shown.
    aka: z.array(z.string()).default([]),
    chapter: z.enum(chapterIds),
    status: z.enum(["explained", "defused", "disputed", "unreconciled"]),
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
    // Display order within a chapter.
    order: z.number().default(100),
  }),
})

export const collections = { entries }
