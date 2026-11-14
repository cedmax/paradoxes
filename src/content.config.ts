import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { entrySchema } from "./data/entry-schema"

const entries = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/entries" }),
  schema: entrySchema,
})

export const collections = { entries }
