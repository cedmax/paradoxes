import type { CollectionEntry } from "astro:content"
import type { ChapterId } from "./chapters"

type Entry = CollectionEntry<"entries">
type Pick = { slug: string; reason: string }

// Editorial starting points. Resolve against published entries so drafts never leak into links.
const starters: Pick[] = [
  {
    slug: "monty-hall-problem",
    reason: "Start with three doors and a choice that feels like 50/50.",
  },
  {
    slug: "ship-of-theseus",
    reason: "Ask what makes something the same thing when all its parts change.",
  },
  {
    slug: "checker-shadow-illusion",
    reason: "Try an illusion, then remove the surroundings to check what you saw.",
  },
]

// Four per chapter leave three choices even when the current entry is one of them.
const chapterPicks: Record<ChapterId, Pick[]> = {
  identity: [
    {
      slug: "ship-of-theseus",
      reason: "Follow a ship whose parts are replaced, one at a time.",
    },
    {
      slug: "sorites-paradox",
      reason: "See how a tiny change challenges the boundary of a word.",
    },
    {
      slug: "parfits-teletransporter",
      reason: "Take the question of identity from a ship to a person.",
    },
    {
      slug: "problem-of-the-many",
      reason: "Look for one cloud among many possible collections of droplets.",
    },
  ],
  "self-reference": [
    { slug: "liar-paradox", reason: "Start with a sentence that talks about its own truth." },
    {
      slug: "russells-paradox",
      reason: "Move from sentences to collections that may contain themselves.",
    },
    {
      slug: "berry-paradox",
      reason: "Try naming a number that supposedly cannot be named so briefly.",
    },
    {
      slug: "currys-paradox",
      reason: "See how an innocent-looking conditional can create a new trap.",
    },
  ],
  infinity: [
    {
      slug: "hilberts-hotel",
      reason: "Find room for another guest in a hotel that is already full.",
    },
    {
      slug: "achilles-and-the-tortoise",
      reason: "Follow a race split into endlessly smaller stages.",
    },
    {
      slug: "galileos-paradox",
      reason: "Compare a whole infinite collection with part of itself.",
    },
    { slug: "thomsons-lamp", reason: "Ask what happens after infinitely many switches." },
  ],
  probability: [
    {
      slug: "monty-hall-problem",
      reason: "See why the host's knowledge changes the choice between doors.",
    },
    {
      slug: "birthday-paradox",
      reason: "Count the pairs hiding inside a surprisingly small group.",
    },
    {
      slug: "boy-or-girl-paradox",
      reason: "Check how the way information arrives changes the odds.",
    },
    {
      slug: "nontransitive-dice",
      reason: "Try dice whose winning relationships go round in a circle.",
    },
  ],
  statistics: [
    {
      slug: "simpsons-paradox",
      reason: "Compare the story told by separate groups with their combined result.",
    },
    {
      slug: "base-rate-fallacy",
      reason: "Put a positive test result beside how rare the condition is.",
    },
    {
      slug: "berksons-paradox",
      reason: "See how selecting a sample can create an apparent connection.",
    },
    {
      slug: "inspection-paradox",
      reason: "Find out why a typical wait can exceed the expected one.",
    },
  ],
  collective: [
    {
      slug: "prisoners-dilemma",
      reason: "Compare what helps each person with what helps them together.",
    },
    {
      slug: "condorcet-paradox",
      reason: "Combine sensible votes and watch the group preference loop.",
    },
    {
      slug: "braess-paradox",
      reason: "Add a road and follow how drivers change their choices.",
    },
    {
      slug: "abilene-paradox",
      reason: "Ask how a group agrees to something none of its members wants.",
    },
  ],
  individual: [
    {
      slug: "newcombs-paradox",
      reason: "Choose between two boxes after a predictor has already acted.",
    },
    {
      slug: "st-petersburg-paradox",
      reason: "Weigh an infinite average prize against the price of one game.",
    },
    {
      slug: "ellsberg-paradox",
      reason: "Compare a bet with known odds and one with unknown odds.",
    },
    {
      slug: "absent-minded-driver",
      reason: "Test a plan when a driver cannot remember which exit she has reached.",
    },
  ],
  belief: [
    {
      slug: "sleeping-beauty-problem",
      reason: "Ask what waking up tells a person about a hidden coin toss.",
    },
    {
      slug: "raven-paradox",
      reason: "Consider whether a green apple says anything about black ravens.",
    },
    {
      slug: "lottery-paradox",
      reason: "Compare confidence about each ticket with certainty about the draw.",
    },
    {
      slug: "preface-paradox",
      reason: "Ask how an author can trust every claim and still expect a mistake.",
    },
  ],
  "time-causation": [
    {
      slug: "grandfather-paradox",
      reason: "Test a trip to the past that prevents the traveller's birth.",
    },
    {
      slug: "bootstrap-paradox",
      reason: "Follow an object round a time loop and look for its origin.",
    },
    {
      slug: "twin-paradox",
      reason: "Compare how much time passes for twins who take different journeys.",
    },
    {
      slug: "ladder-paradox",
      reason: "See why observers disagree about whether a moving ladder fits.",
    },
  ],
  models: [
    {
      slug: "olbers-paradox",
      reason: "Use the dark night sky to test a picture of the universe.",
    },
    {
      slug: "fermi-paradox",
      reason: "Put the size and age of the galaxy beside the absence of visitors.",
    },
    { slug: "schrodingers-cat", reason: "Follow quantum alternatives from an atom to a cat." },
    {
      slug: "black-hole-information-paradox",
      reason: "Ask what an evaporating black hole leaves behind.",
    },
  ],
  shapes: [
    {
      slug: "checker-shadow-illusion",
      reason: "Remove the surroundings and compare two matching grey squares.",
    },
    {
      slug: "muller-lyer-illusion",
      reason: "Rotate the arrowheads while the measured line lengths stay fixed.",
    },
    {
      slug: "ebbinghaus-illusion",
      reason: "Change the neighbouring circles without changing the centre circles.",
    },
    {
      slug: "missing-square-puzzle",
      reason: "Inspect the edge of a triangle that seems to lose a square.",
    },
  ],
}

function resolve(picks: Pick[], all: Entry[], exclude?: string) {
  const available = new Map(all.map((entry) => [entry.id, entry]))
  return picks
    .flatMap(({ slug, reason }) => {
      const entry = available.get(slug)
      return entry && entry.id !== exclude && !entry.data.variantOf ? [{ entry, reason }] : []
    })
    .slice(0, 3)
}

export const starterEntries = (all: Entry[]) => resolve(starters, all)

export const nextEntries = (entry: Entry, all: Entry[]) =>
  resolve(chapterPicks[entry.data.chapter], all, entry.id)
