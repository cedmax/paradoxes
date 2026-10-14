import { ogFile, type OgInput } from "./template"

// Where an entry's Open Graph image is published, and its alt text.
export const ogPath = (slug: string, input: OgInput) => `/og/${ogFile(slug, input)}.png`
export const ogAlt = ({ title, problem }: OgInput) => `Logic Benders: ${title}. ${problem}`
