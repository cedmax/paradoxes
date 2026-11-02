---
title: "Hausdorff paradox"
format: argument
searchTerms:
  [
    "Hausdorff",
    "sphere measure",
    "no area for every subset of a sphere",
    "a third, a half and two thirds",
  ]
chapter: infinity
status: explained
variantOf: banach-tarski-paradox
simplification: heavy
noMaths: false
order: 160
sourcesVerified: true
problem: "Can every piece of a sphere’s surface be given an area, so that pieces of the same shape and size always have the same area?"
claimA: "Every piece of a sphere’s surface, however ragged, has an area that adds up and survives turning."
claimB: "Most of a sphere’s surface splits into three pieces, each of which can be turned to match the other two put together."
whatBreaks: "The assumption that every piece of a sphere’s surface has an area, adding up correctly over separate pieces, that turning it cannot change."
statusNote: "the pieces are scattered sets of points built with the axiom of choice, not patches that could be cut out, so no area rule can cover every such set, add areas correctly and survive rotations."
setup: "Take a sphere’s surface and remove a set of points that can be listed one by one. The remaining surface can be split into three scattered pieces. Each can be turned to match either of the others exactly. Stranger still, one can be turned to match the other two put together."
whyWrong: "If each piece had an area, all three would have equal areas. But one piece would also have the area of two pieces. Ordinary area cannot behave that way while the pieces together cover almost the whole sphere."
resolution:
  - "These are not patches that could be drawn or cut out. They are scattered sets of points made using the axiom of choice, a rule allowing selections from infinitely many groups."
  - "The construction shows that no area rule can cover every such set, add areas correctly and keep them unchanged under turning. The expectation that every piece has such an area is what fails, just as volume fails for the pieces in the [Banach–Tarski paradox](banach-tarski-paradox)."
finePrint: "The removed set is countable. The claim that it occupies no ordinary area is important: the three pieces together still account for the sphere’s area if the proposed rule agrees with ordinary area. The proof uses carefully chosen rotations and the axiom of choice; those details are omitted. Hausdorff published the result in 1914. In a flat plane, an extended area can survive slides and turns while adding correctly over finitely many pieces. The geometry of rotations on a sphere allows a different result."
sources:
  - title: "Wikipedia: Hausdorff paradox"
    url: "https://en.wikipedia.org/wiki/Hausdorff_paradox"
    note: "Main source for the statement, the fractions, the 1914 publication, the axiom of choice and Banach’s measure on the plane. Fractions recomputed."
  - title: "E. C. Milner, Hausdorff's paradox - or two for one (Mathematical Medley, National University of Singapore)"
    url: "https://sms.math.nus.edu.sg/html/smsmedley/Vol-09-1/Hausdorff%27s%20paradox%20-%20or%20two%20for%20one(EC%20Milner).pdf"
    note: "Source for Hausdorff’s 1914 partition of the sphere, the two rotations used, and the role of the axiom of choice."
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for Banach and Tarski building on Hausdorff’s splitting of the sphere."
  - title: "Nicolas Monod, Groups of piecewise projective homeomorphisms (PNAS, 2013)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3606974"
    note: "Peer-reviewed. Confirms that the Banach-Tarski duplication was based on Hausdorff’s 1914 work, and that the known paradoxes relied on non-abelian free subgroups."
---
