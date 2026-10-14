import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { chapterIds } from "./data/chapters"
import { uniquenessIds } from "./data/uniqueness"
import { normaliseSearch } from "./data/search"

// All entries share the shell, but only arguments have opposing claims and a paradox status.
const common = z.object({
  title: z.string(),
  description: z.string().trim().min(1).optional(),
  titleAccent: z.string().optional(),
  aka: z.array(z.string()).default([]),
  alternativeNames: z.array(z.string().trim().min(1)).default([]),
  chapter: z.enum(chapterIds),
  uniqueness: z.enum(uniquenessIds).default("canonical"),
  anchor: z.string().optional(),
  simplification: z.enum(["none", "light", "heavy"]).default("light"),
  noMaths: z.boolean().default(true),
  // Question-first hook shared by cards, entry headers and OG images.
  problem: z.string().trim().min(1),
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
  // Human-controlled publishing and review gates; never infer these from completeness.
  sourcesVerified: z.boolean().default(false),
  reviewed: z.boolean().default(false),
  order: z.number().default(100),
})

const argument = common.extend({
  format: z.literal("argument"),
  status: z.enum(["explained", "defused", "disputed", "unreconciled"]),
  claimA: z.string(),
  claimB: z.string(),
  verdict: z.string(),
  whatBreaks: z.string(),
  statusNote: z.string(),
  setup: z.string().optional(),
  whyWrong: z.string().optional(),
  resolution: z.array(z.string()).default([]),
  finePrint: z.string().optional(),
  positions: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
})

const illusion = common.extend({
  format: z.literal("illusion"),
  // The figure owns setup and proof; this is the short, evidence-based explanation.
  why: z.string().trim().min(1),
})

const entries = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/entries" }),
  schema: z.preprocess(
    // Preserve every existing argument file; new files explicitly choose their format.
    (value) =>
      value && typeof value === "object" && !Array.isArray(value) && !("format" in value)
        ? { ...value, format: "argument" }
        : value,
    z
      .discriminatedUnion("format", [argument, illusion])
      .superRefine((d, ctx) => {
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
