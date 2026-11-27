import type { Status } from "./status"

// How the claims of an argument are labelled and joined. The labels follow the role the claims
// play, so a reader is never told that a fact "also seems true".
export type ClaimFraming = "model" | "arguments"

type ClaimFields = { status: Status; claimFraming?: ClaimFraming; claimC?: string }

export type ClaimLayout = {
  labels: string[]
  // The word between each pair of neighbouring claims, one fewer than the labels.
  joiners: string[]
}

export const claimLayout = ({ status, claimFraming, claimC }: ClaimFields): ClaimLayout => {
  // A triad: three claims that each seem true but cannot all be, so no camp is named.
  if (claimC) {
    return { labels: Array(3).fill("Seems true"), joiners: ["and", "but"] }
  }
  if (claimFraming === "model") {
    return { labels: ["Theory says", "Observation shows"], joiners: ["but"] }
  }
  if (claimFraming === "arguments") {
    return { labels: ["One argument", "The other argument"], joiners: ["but"] }
  }
  switch (status) {
    case "explained":
    case "defused":
      return { labels: ["Seems true", "Is true"], joiners: ["but"] }
    case "disputed":
      return { labels: ["One view", "The other view"], joiners: ["or"] }
    case "unreconciled":
      return { labels: ["Seems true", "Also seems true"], joiners: ["but"] }
  }
}

// The claims of an argument that are set, in order, with their labels.
export const claimsOf = (d: ClaimFields & { claimA: string; claimB: string }) => {
  const { labels } = claimLayout(d)
  return [d.claimA, d.claimB, ...(d.claimC ? [d.claimC] : [])].map((text, i) => ({
    label: labels[i],
    text,
  }))
}
