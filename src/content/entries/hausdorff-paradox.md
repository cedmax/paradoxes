---
title: Hausdorff paradox
titleAccent: paradox
aka: ["Hausdorff", "sphere measure", "no area for every subset of a sphere"]
chapter: infinity
status: explained
uniqueness: variant
anchor: banach-tarski-paradox
simplification: heavy
noMaths: false
order: 212
written: true
sourcesVerified: false
problem: "Can every piece of a sphere’s surface be given an area, so that identical pieces have identical areas?"
claimA: "Every piece of a sphere’s surface, however odd, has an area, and identical pieces have equal areas."
claimB: "A sphere’s surface can be cut into pieces so that one of them would have to be a third, a half and two thirds of the whole at once."
verdict: "Some pieces are so odd that no area can be given to them, so not every piece has one."
whatBreaks: "The idea that every subset of a sphere’s surface has an area."
statusNote: "the first claim is wrong. Wikipedia reports that no area can be assigned to every subset of the sphere so that congruent pieces get equal areas."
setup: "Take the surface of a ball in three dimensions, called S². Felix Hausdorff showed in 1914 that if a certain countable set of points is removed, the rest can be split into three separate pieces A, B and C. The three pieces A, B and C are identical in shape and size (congruent), and so is the piece made by joining B and C. If every piece had an area, and identical pieces had equal areas, the area of B joined with C would be a third, a half and two thirds of the whole sphere’s area at the same time."
whyWrong: "It is natural to assume that any region of a surface has some area, however ragged. The argument shows there is no way to give an area to every subset of a sphere that is equal on congruent pieces. Wikipedia states the result as: there is no finitely additive measure on a sphere defined on all subsets which is equal on congruent pieces."
resolution:
  - "The proof relies on the axiom of choice. Wikipedia says the structure of the group of rotations on the sphere plays a crucial role. The statement is not true on the plane or the line. Banach later showed that it is possible to define an area for all bounded subsets of the plane, and a length on the line, so that congruent sets have equal area."
  - "Wikipedia adds that Hausdorff first showed, in the same 1914 paper, the easier result that there is no countably additive measure defined on all subsets of the sphere."
  - "The same ideas lie behind the [Banach–Tarski paradox](banach-tarski-paradox). Wikipedia says the proof of that more famous paradox uses Hausdorff’s ideas."
finePrint: "This entry gives only the idea. The paper appeared in Mathematische Annalen in 1914 and the result was also published in Hausdorff’s book, Grundzüge der Mengenlehre, the same year. The article names no scholarly dispute about the result."
sources:
  - title: "Wikipedia: Hausdorff paradox"
    url: https://en.wikipedia.org/wiki/Hausdorff_paradox
---
