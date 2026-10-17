// Chapters are "what breaks": the thing in your head the paradox attacks.
// Classify by the mechanism that creates the conflict, not by subject or setting.
export const chapterIds = [
  "identity",
  "self-reference",
  "infinity",
  "probability",
  "statistics",
  "collective",
  "individual",
  "belief",
  "time-causation",
  "models",
  "shapes",
] as const

export type ChapterId = (typeof chapterIds)[number]

export interface Chapter {
  id: ChapterId
  n: string
  title: string
  titleAccent: string
  blurb: string
  // Search name for the chapter page: used in <title> and structured data only. Everything a
  // reader sees (index, breadcrumbs, the chapter page H1) uses `title`.
  pageTitle: string
  introduction: string
}

export const chapters: Chapter[] = [
  {
    id: "identity",
    n: "01",
    title: "What counts as what",
    titleAccent: "what",
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
    titleAccent: "reference",
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
    titleAccent: "misbehaving",
    pageTitle: "Infinity paradoxes",
    introduction:
      "An endless collection is not just a very large finite one. These puzzles test counting, infinite sums and tasks with infinitely many steps, showing where familiar rules need closer attention.",
    blurb: "Endless things that follow different rules from finite ones.",
  },
  {
    id: "probability",
    n: "04",
    title: "Probability tricking intuition",
    titleAccent: "intuition",
    pageTitle: "Probability paradoxes",
    introduction:
      "A probability puzzle depends on how the random process is set up and what information is available. Compare doors, birthdays, coins and dice to see why an answer can be correct and still feel wrong.",
    blurb: "Maths that is correct and still feels wrong.",
  },
  {
    id: "statistics",
    n: "05",
    title: "Numbers that mislead",
    titleAccent: "mislead",
    pageTitle: "Statistical paradoxes",
    introduction:
      "An accurate number can still give a misleading picture. These puzzles ask how observations are selected, grouped or compared, and why changing the sample can change the apparent result.",
    blurb: "Figures that are accurate but come from a skewed sample or a bad comparison.",
  },
  {
    id: "collective",
    n: "06",
    title: "Collective outcomes",
    titleAccent: "outcomes",
    pageTitle: "Paradoxes of collective choices",
    introduction:
      "Choices that seem sensible for each person can combine into a surprising outcome. These puzzles explore voting, shared resources and strategic decisions, where the result depends on what other people do.",
    blurb: "Choices that are sensible one by one but add up to a result nobody wanted.",
  },
  {
    id: "individual",
    n: "07",
    title: "Individual choices",
    titleAccent: "choices",
    pageTitle: "Paradoxes of individual choices",
    introduction:
      "How should one person decide what to do or what to value? These puzzles put rules for choice and moral judgement under pressure, including cases where different principles recommend different answers.",
    blurb: "Rules for deciding and valuing that seem obvious, until one case breaks them.",
  },
  {
    id: "belief",
    n: "08",
    title: "What we should believe",
    titleAccent: "believe",
    pageTitle: "Paradoxes of evidence and belief",
    introduction:
      "These puzzles challenge rules about evidence, knowledge and belief. Follow arguments about what can be known or reasonably expected, and compare the points at which different accounts say the reasoning fails.",
    blurb: "Reasonable-looking rules about evidence and belief that lead somewhere strange.",
  },
  {
    id: "time-causation",
    n: "09",
    title: "Time and causation",
    titleAccent: "causation",
    pageTitle: "Time and causation paradoxes",
    introduction:
      "What counts as happening now, and which event causes which? These puzzles examine motion, the order of events and time travel, testing assumptions about a shared present and a fixed chain of causes.",
    blurb: "The shared “now” and the fixed order of cause and effect come apart.",
  },
  {
    id: "models",
    n: "10",
    title: "Models meeting reality",
    titleAccent: "reality",
    pageTitle: "Paradoxes of models and reality",
    introduction:
      "These puzzles put a theory beside an observation or another theoretical account. The question is which prediction, principle or assumption creates the conflict, and what a proposed repair gives up.",
    blurb: "Tidy theories that clash with what the world does, or with each other.",
  },
  {
    id: "shapes",
    n: "11",
    title: "Appearances deceiving",
    titleAccent: "deceiving",
    pageTitle: "Deceptive appearances, illusions and sums",
    introduction:
      "An image, a sound or a quick calculation can look convincing at first. These puzzles ask what is actually drawn, played, measured or counted, and why the first impression can mislead.",
    blurb:
      "Images, sounds and calculations that can mislead until you look closer, listen again, measure or count.",
  },
]

export const chapterById = (id: ChapterId): Chapter => {
  const c = chapters.find((x) => x.id === id)
  if (!c) throw new Error(`Unknown chapter: ${id}`)
  return c
}
