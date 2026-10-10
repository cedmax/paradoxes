// Chapters are "what breaks": the thing in your head that the paradox attacks.
export const chapterIds = [
  "self-reference",
  "vague-words",
  "infinity",
  "probability",
  "choice-identity",
  "belief",
  "time-physics",
  "biology",
  "geometry-arithmetic",
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
    id: "self-reference",
    n: "01",
    title: "Self-referential sentences",
    blurb: "Contradictions that appear the moment a statement refers to itself.",
  },
  {
    id: "vague-words",
    n: "02",
    title: "Vagueness",
    blurb: "Everyday words and measurements with no sharp edge, pushed until they break.",
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
    id: "choice-identity",
    n: "05",
    title: "Choices and identity",
    blurb:
      "Questions about what stays the same, what to do when others are choosing too, and what counts as a good decision.",
  },
  {
    id: "belief",
    n: "06",
    title: "What we should believe",
    blurb: "Reasonable-looking rules about evidence and belief that lead somewhere strange.",
  },
  {
    id: "time-physics",
    n: "07",
    title: "Time and physics",
    blurb:
      "Puzzles from the physical world, where the laws we trust seem to contradict each other.",
  },
  {
    id: "biology",
    n: "08",
    title: "Biology",
    blurb: "Puzzles from living things, where what should happen by the numbers does not.",
  },
  {
    id: "geometry-arithmetic",
    n: "09",
    title: "Geometry and arithmetic",
    blurb: "Figures and sums that look fine until you measure or count them again.",
  },
]

export const chapterById = (id: ChapterId): Chapter => {
  const c = chapters.find((x) => x.id === id)
  if (!c) throw new Error(`Unknown chapter: ${id}`)
  return c
}
