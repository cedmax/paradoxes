---
title: "Banach–Tarski paradox"
titleAccent: "paradox"
aka: ["doubling the ball", "pea and the Sun", "Banach Tarski"]
chapter: infinity
status: explained
simplification: heavy
noMaths: true
written: true
sourcesVerified: true
problem: "Can a solid ball be cut into a few pieces and put back together as two balls, each as big as the first?"
claimA: "Every piece of a solid has a volume that sliding and turning cannot change, so the pieces of one ball cannot make two balls."
claimB: "A solid ball can be cut into a few pieces that, by sliding and turning alone, fit together as two balls, each the same size as the original."
verdict: "The pieces are not chunks of solid. They are scatterings of points, too ragged to have a volume, so the rule that volumes add up does not apply to them."
whatBreaks: "The assumption that every piece of a ball has a volume. The pieces in the proof are too ragged to have one, so no volume goes missing or appears."
statusNote: "the first claim is wrong. The proof relies on the axiom of choice, a rule of set theory that allows pieces with no volume at all, and nothing contradicts anything once such pieces are admitted. The cutting cannot be carried out in practice."
setup: "Take a solid ball. Cut it into a small number of pieces, then move the pieces around by sliding and turning them, with no stretching, bending or overlap. In 1924 the mathematicians Stefan Banach and Alfred Tarski proved that this can be done so that the pieces fit together as two balls, each exactly the size of the original. In 1947 Robinson showed that five pieces are enough, and that fewer than five will not do."
whyWrong: "Volume feels like something every piece of space has, and the volumes of the pieces should add up to the volume of the whole. Sliding and turning do not change a piece’s volume, so the total should stay the same. That works for any piece that could be cut with a knife. The pieces in this proof are not like that. Each one is an endless scattering of points, so ragged that no volume can be given to it at all. The rule that the volumes of the pieces add up to the volume of the whole only works when every piece has a volume."
resolution:
  - "The proof does not use any real blade. It picks the pieces with the axiom of choice, a rule of set theory that lets a proof pick one item from each of endlessly many groups at once, even when nothing says which. That is what makes pieces without a volume available. The two finished balls have a volume, and it is double the volume of the original, but the pieces in between have no volume to keep track of, so nothing is lost or created along the way."
  - "So the second claim is true and the first is false. In three dimensions there is no way to give a volume to every piece of space while keeping it unchanged by sliding and turning. The strong version of the result is false in one and two dimensions, so there is no flat version with a disc."
finePrint: "Without the axiom of choice the result cannot be proved in the standard system of set theory (known as ZF, assuming that system is consistent). The decomposition cannot be carried out in a practical way: it describes sets of points, not objects that could be cut with a tool. The result is sometimes called the pea and the Sun paradox."
sources:
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for the statement, the five-piece result (Robinson, 1947), the dependence on the axiom of choice, the non-measurable pieces, the one- and two-dimensional cases, and the original paper: Banach and Tarski, Fundamenta Mathematicae 6 (1924), 244-277 (not fetched directly)."
---
