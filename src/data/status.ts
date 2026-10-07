export type Status = "explained" | "defused" | "disputed" | "unreconciled"
export type Simplification = "none" | "light" | "heavy"

// `bg` holds full Tailwind class names so the scanner can see them.
export const statuses: Record<Status, { label: string; bg: string; definition: string }> = {
  explained: {
    label: "Explained",
    bg: "bg-explained",
    definition:
      "The contradiction was only apparent. One claim rests on a mistake in reasoning or intuition, and once you see why, nothing contradicts anything.",
  },
  defused: {
    label: "Defused",
    bg: "bg-defused",
    definition:
      "The contradiction is real and never goes away, but it proves one of the claims false, and experts agree which.",
  },
  disputed: {
    label: "Disputed",
    bg: "bg-disputed",
    definition: "Experts agree it's a real puzzle but disagree on which claim to give up.",
  },
  unreconciled: {
    label: "Unreconciled",
    bg: "bg-unreconciled",
    definition:
      "Every known fix costs something big, such as changing the rules of logic, and none is widely accepted.",
  },
}

export const simplifications: Record<Simplification, { label: string; definition: string }> = {
  none: { label: "Simplification: none", definition: "Nothing material is left out." },
  light: {
    label: "Simplification: light",
    definition: "Plain wording, with a caveat spelled out in the fine print.",
  },
  heavy: {
    label: "Simplification: heavy",
    definition: "Significant technical content is left out. Read the sources.",
  },
}
