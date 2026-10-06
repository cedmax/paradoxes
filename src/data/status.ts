export type Status = "resolved" | "disputed" | "unreconciled"
export type Simplification = "none" | "light" | "heavy"

// `bg` holds full Tailwind class names so the scanner can see them.
export const statuses: Record<Status, { label: string; bg: string; definition: string }> = {
  resolved: {
    label: "Resolved",
    bg: "bg-resolved",
    definition: "One of the two claims turns out to be wrong, and experts agree which.",
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
