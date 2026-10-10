// Subjects describe the field an entry belongs to, independently of its "what breaks" chapter.
export const subjectIds = [
  "logic",
  "mathematics",
  "geometry",
  "probability",
  "statistics",
  "physics",
  "biology",
  "economics",
  "psychology",
  "philosophy",
  "ethics",
  "politics",
  "decision-theory",
  "game-theory",
] as const

export type SubjectId = (typeof subjectIds)[number]

export const subjectLabels: Record<SubjectId, string> = {
  "logic": "Logic",
  "mathematics": "Mathematics",
  "geometry": "Geometry",
  "probability": "Probability",
  "statistics": "Statistics",
  "physics": "Physics",
  "biology": "Biology",
  "economics": "Economics",
  "psychology": "Psychology",
  "philosophy": "Philosophy",
  "ethics": "Ethics",
  "politics": "Politics",
  "decision-theory": "Decision theory",
  "game-theory": "Game theory",
}
