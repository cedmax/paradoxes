---
title: "Banach–Tarski paradox"
format: argument
searchTerms: ["doubling the ball", "pea and the Sun", "Banach Tarski"]
chapter: infinity
order: 90
status: explained
simplification: heavy
noMaths: true
sourcesVerified: true
problem: "Can a solid ball be cut into a few pieces and put back together as two balls, each as big as the first?"
claimA: "Every piece of a ball has a volume, so rearranging the pieces cannot double the total."
claimB: "Pieces of one ball can be rearranged into two balls, each as big as the first."
whatBreaks: "The assumption that every piece of a ball has a volume. The pieces in the proof are too ragged to have one, so no volume goes missing or appears."
statusNote: "the pieces are sets of scattered points with no volume, which the axiom of choice allows, so the rule that volumes add up does not apply to them. The cutting cannot be carried out in practice."
setup: "A mathematical ball can be split into a few sets of points. Slide and turn those sets without stretching them, and they form two balls, each the size of the original. How can moves that preserve volume double the result?"
whyWrong: "The argument that volume must stay fixed assumes every piece has a volume. The construction includes scattered sets of points to which ordinary volume cannot be assigned. They are not chunks a knife could cut out."
resolution:
  - "The finished balls have volumes. The intermediate pieces do not all have the volumes needed for the usual adding-up argument. The hidden assumption about every piece is false."
  - "The construction uses the axiom of choice, which permits selections from infinitely many groups without a specified recipe. It is a result about sets of points, not a way to duplicate physical material. The [Hausdorff paradox](hausdorff-paradox) uses related reasoning on a sphere’s surface."
finePrint: "Without the axiom of choice the result cannot be proved in the standard system of set theory (known as ZF, assuming that system is consistent). The decomposition cannot be carried out in a practical way: it describes sets of points, not objects that could be cut with a tool. The result is sometimes called the pea and the Sun paradox."
sources:
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for the statement, the five-piece result (Robinson, 1947), the dependence on the axiom of choice, the non-measurable pieces, the one- and two-dimensional cases, and the original paper: Banach and Tarski, Fundamenta Mathematicae 6 (1924), 244-277 (not fetched directly)."
---
