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
  pageTitle: string
  introduction: string
}

export const chapters: Chapter[] = [
  {
    id: "what-counts",
    n: "01",
    title: "What counts as what",
    pageTitle: "Paradoxes of identity and boundaries",
    introduction:
      "What makes a ship the same ship after its parts change? When does a heap stop being a heap? These puzzles challenge the idea that a word or a thing has one clear meaning with sharp edges.",
    blurb:
      "Words and things that seem to have clear edges, until you try to say exactly where they are.",
  },
  {
    id: "self-reference",
    n: "02",
    title: "Self-reference",
    pageTitle: "Self-reference paradoxes",
    introduction:
      "These puzzles test what happens when statements or collections refer to themselves. Compare contradictions about truth and sets, and puzzles that ask whether direct self-reference is needed at all.",
    blurb:
      "Contradictions that appear when statements or collections are allowed to refer to themselves.",
  },
  {
    id: "infinity",
    n: "03",
    title: "Infinity misbehaving",
    pageTitle: "Infinity paradoxes",
    introduction:
      "An endless collection is not just a very large finite one. These puzzles test counting, infinite sums and tasks with infinitely many steps, showing where familiar rules need closer attention.",
    blurb: "Endless things that follow different rules from finite ones.",
  },
  {
    id: "probability",
    n: "04",
    title: "Probability tricking intuition",
    pageTitle: "Probability paradoxes",
    introduction:
      "A probability puzzle depends on how the random process is set up and what information is available. Compare doors, birthdays, coins and dice to see why an answer can be correct and still feel wrong.",
    blurb: "Maths that is correct and still feels wrong.",
  },
  {
    id: "numbers-mislead",
    n: "05",
    title: "Numbers that mislead",
    pageTitle: "Paradoxes of samples and averages",
    introduction:
      "An accurate number can still give a misleading picture. These puzzles ask how observations are selected, grouped or compared, and why changing the sample can change the apparent result.",
    blurb: "Figures that are accurate but come from a skewed sample or a bad comparison.",
  },
  {
    id: "collective",
    n: "06",
    title: "Collective outcomes",
    pageTitle: "Paradoxes of collective choices",
    introduction:
      "Choices that seem sensible for each person can combine into a surprising outcome. These puzzles explore voting, shared resources and strategic decisions, where the result depends on what other people do.",
    blurb: "Choices that are sensible one by one but add up to a result nobody wanted.",
  },
  {
    id: "individual",
    n: "07",
    title: "Individual choices",
    pageTitle: "Paradoxes of individual choices",
    introduction:
      "How should one person decide what to do or what to value? These puzzles put rules for choice and moral judgement under pressure, including cases where different principles recommend different answers.",
    blurb: "Rules for deciding and valuing that seem obvious, until one case breaks them.",
  },
  {
    id: "belief",
    n: "08",
    title: "What we should believe",
    pageTitle: "Paradoxes of evidence and belief",
    introduction:
      "These puzzles challenge rules about evidence, knowledge and belief. Follow arguments about what can be known or reasonably expected, and compare the points at which different accounts say the reasoning fails.",
    blurb: "Reasonable-looking rules about evidence and belief that lead somewhere strange.",
  },
  {
    id: "time-causation",
    n: "09",
    title: "Time and causation",
    pageTitle: "Time and causation paradoxes",
    introduction:
      "What counts as happening now, and which event causes which? These puzzles examine motion, the order of events and time travel, testing assumptions about a shared present and a fixed chain of causes.",
    blurb: "The shared “now” and the fixed order of cause and effect come apart.",
  },
  {
    id: "models",
    n: "10",
    title: "Models meeting reality",
    pageTitle: "Paradoxes of models and reality",
    introduction:
      "These puzzles put a theory beside an observation or another theoretical account. The question is which prediction, principle or assumption creates the conflict, and what a proposed repair gives up.",
    blurb: "Tidy theories that clash with what the world does, or with each other.",
  },
  {
    id: "shapes-sums",
    n: "11",
    title: "Shapes and sums deceiving",
    pageTitle: "Paradoxes of shapes and sums",
    introduction:
      "A diagram or quick calculation can look convincing before its details are checked. These puzzles invite a closer look at lengths, areas, movement and arithmetic to find the step that creates the surprise.",
    blurb: "Figures and quick calculations that look right until you measure or count again.",
  },
]

export const chapterById = (id: ChapterId): Chapter => {
  const c = chapters.find((x) => x.id === id)
  if (!c) throw new Error(`Unknown chapter: ${id}`)
  return c
}
