import type { CollectionEntry } from "astro:content"

interface PathDefinition {
  id: string
  title: string
  introduction: string
  steps: { slug: string; reason: string }[]
}

const definitions: PathDefinition[] = [
  {
    id: "start-here",
    title: "Start here",
    introduction:
      "Try a probability puzzle, a question about identity, an illusion and a sentence that turns on itself. Four stops introduce the different kinds of explanation in the collection.",
    steps: [
      {
        slug: "monty-hall-problem",
        reason:
          "Begin with three doors. Compare the answer that feels right with the rules of the game.",
      },
      {
        slug: "ship-of-theseus",
        reason:
          "Move from a settled calculation to a question about what makes something the same thing.",
      },
      {
        slug: "checker-shadow-illusion",
        reason:
          "Leave words for a moment. Try an illusion whose appearance can be checked directly.",
      },
      {
        slug: "liar-paradox",
        reason:
          "Finish with a sentence whose proposed repairs change different rules about truth.",
      },
    ],
  },
  {
    id: "probability-that-feels-wrong",
    title: "Probability that feels wrong",
    introduction:
      "Follow four ways that odds can resist intuition. At each stop, ask what is random, what has been learned and which possibilities are being counted.",
    steps: [
      {
        slug: "monty-hall-problem",
        reason: "Start with information supplied by a host who knows where the prize is.",
      },
      {
        slug: "birthday-paradox",
        reason: "Next, shift from one person's chances to all the pairs inside a group.",
      },
      {
        slug: "boy-or-girl-paradox",
        reason: "Return to information: does the way a fact was learned matter?",
      },
      {
        slug: "bertrands-chord-paradox",
        reason: "Finally, ask whether the words “at random” have specified a process at all.",
      },
    ],
  },
  {
    id: "how-numbers-mislead",
    title: "How numbers mislead",
    introduction:
      "An accurate count can still answer the wrong question. Look at missing observations, mixed groups, rare conditions and the experience of a person waiting for a bus.",
    steps: [
      {
        slug: "survivorship-bias",
        reason: "Begin by asking which observations are missing from the sample.",
      },
      {
        slug: "simpsons-paradox",
        reason:
          "Then compare separate groups with the picture produced when they are combined.",
      },
      {
        slug: "base-rate-fallacy",
        reason:
          "Put a positive test result beside how common the condition was before the test.",
      },
      {
        slug: "inspection-paradox",
        reason:
          "Finish by comparing an average gap with the gap a waiting passenger encounters.",
      },
    ],
  },
  {
    id: "identity-and-change",
    title: "Identity and change",
    introduction:
      "Explore what stays the same, where words draw boundaries and whether those boundaries select one object. Each step changes the setting while keeping the assumptions in view.",
    steps: [
      {
        slug: "ship-of-theseus",
        reason: "Start with a familiar object whose parts are gradually replaced.",
      },
      {
        slug: "sorites-paradox",
        reason: "Move from replacement to removal: when does a heap stop being a heap?",
      },
      {
        slug: "parfits-teletransporter",
        reason:
          "Bring the identity question back to a person whose body is reconstructed elsewhere.",
      },
      {
        slug: "problem-of-the-many",
        reason: "Finally, ask how a blurry boundary can leave many candidates for one cloud.",
      },
    ],
  },
  {
    id: "try-an-illusion",
    title: "Try an illusion",
    introduction:
      "Compare what appears to change with what is actually drawn. Begin with still images, then try a moving pattern. Each demonstration has a way to inspect or explain the effect.",
    steps: [
      {
        slug: "checker-shadow-illusion",
        reason: "Start by removing a scene's surroundings to compare two patches of grey.",
      },
      {
        slug: "ebbinghaus-illusion",
        reason: "Next, change the neighbours while leaving the centre circles unchanged.",
      },
      {
        slug: "muller-lyer-illusion",
        reason: "Rotate the arrowheads and check the fixed lengths with measurement guides.",
      },
      {
        slug: "lilac-chaser",
        reason:
          "Finish with movement and fixation. Manual controls remain available without animation.",
      },
    ],
  },
]

export function readingPaths(all: CollectionEntry<"entries">[]) {
  const available = new Map(
    all.filter((entry) => !entry.data.variantOf).map((entry) => [entry.id, entry]),
  )
  return definitions.flatMap((path) => {
    const steps = path.steps.flatMap(({ slug, reason }) => {
      const entry = available.get(slug)
      return entry ? [{ entry, reason }] : []
    })
    return steps.length === path.steps.length && steps.length >= 2 ? [{ ...path, steps }] : []
  })
}

export type ReadingPath = ReturnType<typeof readingPaths>[number]

export const pathEntryUrl = (path: ReadingPath, index: number) =>
  `/entries/${path.steps[index].entry.id}/?path=${encodeURIComponent(path.id)}`
