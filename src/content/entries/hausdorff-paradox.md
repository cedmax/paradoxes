---
title: "Hausdorff paradox"
titleAccent: "paradox"
aka:
  [
    "Hausdorff",
    "sphere measure",
    "no area for every subset of a sphere",
    "a third, a half and two thirds",
  ]
chapter: infinity
status: explained
uniqueness: variant
anchor: banach-tarski-paradox
simplification: heavy
noMaths: false
order: 212
written: true
sourcesVerified: false
problem: "Can every piece of a sphere’s surface be given an area, so that pieces of the same shape and size always have the same area?"
claimA: "Every piece of a sphere’s surface, however ragged, has an area, the areas of separate pieces add up, and pieces that can be turned onto each other have equal areas."
claimB: "Most of a sphere’s surface can be split into three pieces, each the same shape and size as the other two and as the other two put together."
verdict: "The pieces are scatterings of points too ragged to have an area, so not every piece of a sphere’s surface has one."
whatBreaks: "The assumption that every piece of a sphere’s surface has an area, adding up correctly over separate pieces, that turning it cannot change."
statusNote: "the first claim is wrong. The proof uses the axiom of choice to build pieces that no rule for area, adding up correctly and unchanged by turning, can handle. The construction shows that no assignment of area can cover every set of points on the sphere while adding up correctly and staying unchanged by turning."
setup: "Take the surface of a ball, called a sphere. In 1914 the mathematician Felix Hausdorff showed that, once a certain countable set of points is removed (a set whose points can be listed one by one), the rest of the surface can be split into three separate pieces, A, B and C. Each piece is congruent to the other two, meaning it can be turned onto either of them exactly. Stranger still, A is also congruent to B and C put together. If every piece had an area, then B and C together would have to be a third of the sphere’s area (the same as A), two thirds (twice the area of B) and a half (the same as A, with which it makes up the rest of the sphere) all at once."
whyWrong: "It seems obvious that any patch of a surface has some area, however ragged, and that turning a patch around the sphere cannot change its area. For any patch that could be drawn or cut out, that is true. The pieces in this proof are not like that. Each one is an endless scattering of points, chosen in a way no drawing could follow. The argument shows that no rule can give an area to every set of points on the sphere, add the areas of separate pieces correctly, and give equal areas to congruent pieces. The fault is in the expectation that every set of points has an area, not in the proof."
resolution:
  - "The proof relies on the axiom of choice, a rule of set theory that allows one item to be picked from each of endlessly many groups, even when no rule says which to pick. Rotations of the sphere then turn the resulting pieces onto one another. The pieces are sets of scattered points, not patches that could be drawn or cut out."
  - "The result depends on the setting. It fails on a flat plane and on a line. In 1923 Stefan Banach showed that an “area” can be given to every bounded set of points in the plane, and similarly a “length” on a line, so that congruent sets always get equal values. This kind of area adds up correctly for finitely many pieces, though not always for endlessly many."
  - "This is the same mechanism as the [Banach–Tarski paradox](banach-tarski-paradox), which uses Hausdorff’s ideas: on a sphere’s surface here, in a solid ball there, sets of points are chosen with the axiom of choice so that no area or volume can be given to them. Banach and Tarski’s own proof rests on a similar splitting of the sphere’s surface, which is why the two count as the same puzzle in different settings. In the same 1914 paper, Hausdorff first proved the easier result that no area that adds up correctly over endlessly many pieces, and is unchanged by turning, can be defined for every set of points on the sphere."
finePrint: "The result appeared in the journal Mathematische Annalen in 1914, in a paper titled “Bemerkung über den Inhalt von Punktmengen” (“A remark on the content of point sets”), and in Hausdorff’s book Grundzüge der Mengenlehre the same year. The English title is a translation for this entry."
sources:
  - title: "Wikipedia: Hausdorff paradox"
    url: "https://en.wikipedia.org/wiki/Hausdorff_paradox"
    note: "Source for the statement (countable set removed, A, B, C and B ∪ C all congruent), the fractions 1/3, 1/2 and 2/3, the 1914 publication in Mathematische Annalen (vol. 75, pp. 428-434) and in Grundzüge der Mengenlehre, the reliance on the axiom of choice, the role of the rotation group, the failure on the plane and the line with Banach’s finitely additive measure (Fundamenta Mathematicae 4, 1923), the earlier countably additive result, and Banach-Tarski using Hausdorff’s ideas. The three fractions recomputed."
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for Banach and Tarski building on Hausdorff’s paradoxical decompositions of the sphere, the heart of their proof being a splitting of the sphere’s surface analogous to Hausdorff’s, and the dependence of both constructions on the axiom of choice."
  - title: "Nicolas Monod, Groups of piecewise projective homeomorphisms (PNAS, 2013)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3606974"
    note: "Peer-reviewed. Confirms that the Banach-Tarski duplication was based on Hausdorff’s 1914 work, and that the known paradoxes relied on non-abelian free subgroups."
---
