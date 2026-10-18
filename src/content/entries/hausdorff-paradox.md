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
order: 160
sourcesVerified: true
problem: "Can every piece of a sphere’s surface be given an area, so that pieces of the same shape and size always have the same area?"
claimA: "Every piece of a sphere’s surface, however ragged, has an area that adds up and survives turning."
claimB: "Most of a sphere’s surface splits into three pieces, each of which can be turned to match the other two put together."
verdict: "The pieces are scatterings of points too ragged to have an area, so not every piece of a sphere’s surface has one."
whatBreaks: "The assumption that every piece of a sphere’s surface has an area, adding up correctly over separate pieces, that turning it cannot change."
statusNote: "no area rule can cover every set of points on the sphere while adding up correctly and surviving rotations. The pieces expose that limit."
setup: "Take a sphere’s surface and remove a set of points that can be listed one by one. The remaining surface can be split into three scattered pieces. Each can be turned to match either of the others exactly. Stranger still, one can be turned to match the other two put together."
whyWrong: "If each piece had an area, all three would have equal areas. But one piece would also have the area of two pieces. Ordinary area cannot behave that way while the pieces together cover almost the whole sphere."
resolution:
  - "These are not patches that could be drawn or cut out. They are scattered sets of points made using the axiom of choice, a rule allowing selections from infinitely many groups."
  - "The construction shows that no area rule can cover every such set, add areas correctly and keep them unchanged under turning. The expectation that every piece has such an area is what fails, just as volume fails for the pieces in the [Banach–Tarski paradox](banach-tarski-paradox)."
finePrint: "The removed set is countable. The claim that it occupies no ordinary area is important: the three pieces together still account for the sphere’s area if the proposed rule agrees with ordinary area. The proof uses carefully chosen rotations and the axiom of choice; those details are omitted. Hausdorff published the result in 1914. In a flat plane, an extended area can survive slides and turns while adding correctly over finitely many pieces. The geometry of rotations on a sphere allows a different result."
sources:
  - title: "Wikipedia: Hausdorff paradox"
    url: "https://en.wikipedia.org/wiki/Hausdorff_paradox"
    note: "Source for the statement (countable set removed, A, B, C and B ∪ C all congruent), the fractions 1/3, 1/2 and 2/3, the 1914 publication in Mathematische Annalen (vol. 75, pp. 428-434) and in Grundzüge der Mengenlehre, the reliance on the axiom of choice, the role of the rotation group, the failure on the plane and the line with Banach’s finitely additive measure (Fundamenta Mathematicae 4, 1923), the earlier countably additive result, and Banach-Tarski using Hausdorff’s ideas. The three fractions recomputed."
  - title: "E. C. Milner, Hausdorff's paradox - or two for one (Mathematical Medley, National University of Singapore)"
    url: "https://sms.math.nus.edu.sg/html/smsmedley/Vol-09-1/Hausdorff%27s%20paradox%20-%20or%20two%20for%20one(EC%20Milner).pdf"
    note: "Text of a lecture given at the National University of Singapore in 1981. Confirms the result as Hausdorff’s (1914), the partition of the sphere into A, B, C and a countable set D with A, B, C congruent and A congruent to B ∪ C, D as the points fixed by the non-identity rotations of the group (two per rotation, countably many rotations), the two rotations used (a half turn and a turn through 2π/3 about another axis, with the angle chosen so that no other combination gives the identity), and the axiom of choice picking one point from each family of points the rotations link."
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for Banach and Tarski building on Hausdorff’s paradoxical decompositions of the sphere, the heart of their proof being a splitting of the sphere’s surface analogous to Hausdorff’s, and the dependence of both constructions on the axiom of choice."
  - title: "Nicolas Monod, Groups of piecewise projective homeomorphisms (PNAS, 2013)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3606974"
    note: "Peer-reviewed. Confirms that the Banach-Tarski duplication was based on Hausdorff’s 1914 work, and that the known paradoxes relied on non-abelian free subgroups."
---
