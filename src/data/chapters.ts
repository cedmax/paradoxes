// Chapters are "what breaks": the thing in your head the paradox attacks.
// Classify by the mechanism that creates the conflict, not by subject or setting.
export const chapterIds = [
  "what-counts",
  "self-reference",
  "infinity",
  "probability",
  "numbers-mislead",
  "collective",
  "individual",
  "belief",
  "time-causation",
  "models",
  "shapes-sums",
] as const

export type ChapterId = (typeof chapterIds)[number]

export interface Chapter {
  id: ChapterId
  n: string
  title: string
  blurb: string
}

export const chapters: Chapter[] = [
  {
    id: "what-counts",
    n: "01",
    title: "What counts as what",
    blurb:
      "Words and things that seem to have clear edges, until you try to say exactly where they are.",
  },
  {
    id: "self-reference",
    n: "02",
    title: "Self-reference",
    blurb:
      "Contradictions that appear when statements or collections are allowed to refer to themselves.",
  },
  {
    id: "infinity",
    n: "03",
    title: "Infinity misbehaving",
    blurb: "Endless things that follow different rules from finite ones.",
  },
  {
    id: "probability",
    n: "04",
    title: "Probability tricking intuition",
    blurb: "Maths that is correct and still feels wrong.",
  },
  {
    id: "numbers-mislead",
    n: "05",
    title: "Numbers that mislead",
    blurb: "Figures that are accurate but come from a skewed sample or a bad comparison.",
  },
  {
    id: "collective",
    n: "06",
    title: "Collective outcomes",
    blurb: "Choices that are sensible one by one but add up to a result nobody wanted.",
  },
  {
    id: "individual",
    n: "07",
    title: "Individual choices",
    blurb: "Rules for deciding and valuing that seem obvious, until one case breaks them.",
  },
  {
    id: "belief",
    n: "08",
    title: "What we should believe",
    blurb: "Reasonable-looking rules about evidence and belief that lead somewhere strange.",
  },
  {
    id: "time-causation",
    n: "09",
    title: "Time and causation",
    blurb: "The shared “now” and the fixed order of cause and effect come apart.",
  },
  {
    id: "models",
    n: "10",
    title: "Models meeting reality",
    blurb: "Tidy theories that clash with what the world does, or with each other.",
  },
  {
    id: "shapes-sums",
    n: "11",
    title: "Shapes and sums deceiving",
    blurb: "Figures and quick calculations that look right until you measure or count again.",
  },
]

export const chapterById = (id: ChapterId): Chapter => {
  const c = chapters.find((x) => x.id === id)
  if (!c) throw new Error(`Unknown chapter: ${id}`)
  return c
}
