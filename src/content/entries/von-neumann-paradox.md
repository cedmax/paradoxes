---
title: "Von Neumann paradox"
titleAccent: "paradox"
aka:
  [
    "two squares from one",
    "area-preserving paradox",
    "planar Banach–Tarski",
    "paradoxical decomposition in the plane",
    "amenable groups",
  ]
chapter: infinity
status: explained
uniqueness: variant
anchor: banach-tarski-paradox
simplification: heavy
noMaths: false
order: 215
written: true
sourcesVerified: true
problem: "Can a square be cut into pieces that are moved without changing any area, to make two squares of the same size?"
claimA: "Every piece of a flat figure has an area that area-preserving moves cannot change, so the pieces of one square cannot make two."
claimB: "A square can be split into sets of points that, moved by area-preserving stretches and shears, make two squares the same size as the first."
verdict: "The pieces are scatterings of points with no area in the ordinary sense. No rule that gives an area to every such piece can both add up correctly and stay unchanged under all the stretches and shears used, even though those moves keep the area of every ordinary shape."
whatBreaks: "The assumption that every piece of a flat figure has an area that area-preserving moves cannot change."
statusNote: "the first claim is wrong. Area-preserving moves keep the area of ordinary shapes, but the pieces here are chosen with the axiom of choice, and no rule for area can cover every set of points, add up correctly and stay unchanged under all such moves."
setup: "In 1929 the mathematician John von Neumann proved, assuming the axiom of choice, that a flat figure such as a square can be broken into sets of points, and each set moved, so that the result is two figures the same size as the original. The moves are not just slides and turns. They are area-preserving affine maps: combinations of slides, turns, stretches, squeezes and shears of the whole plane that keep straight lines straight, leave the area of every triangle or square unchanged, and do not flip the plane over. For example, stretching the plane to twice its width while squeezing it to half its height keeps every area the same."
whyWrong: "With slides and turns alone, this is impossible in the plane. Stefan Banach showed that an “area” can be given to every bounded set of points in the plane, adding up correctly for finitely many pieces and unchanged by slides and turns, and Banach and Tarski concluded that taking a flat figure apart and reassembling it that way always keeps its area. That is why the [Banach–Tarski paradox](banach-tarski-paradox) has no flat version with rigid moves. Von Neumann saw that everything depends on the group of moves allowed, and that no such area can exist when the moves include two that combine freely, meaning that no sequence of them ever cancels out unless it obviously should (a move followed directly by its own undoing). The slides and turns of the plane include no such pair. The area-preserving stretches and shears do."
resolution:
  - "With such a pair of moves, the points of the plane other than the origin, a point both moves leave fixed, can be sorted, using the axiom of choice to pick one point from each family of points the moves link together. The result is two sets, A and B, spread densely through the plane. If the A points of a square are moved by one area-preserving map and the B points by another, both sets can end up inside the B points of two new figures. The new figures have the same area as the old one, yet each moved set fills only part of its figure. So no rule for area can work for every set of points and stay unchanged under every area-preserving affine map."
  - "Von Neumann drew exactly this conclusion: “already in the plane there is no nonnegative additive measure (for which the unit square has a measure of 1), which is invariant with respect to all transformations” in the group of area-preserving affine maps. He added that the whole of the Hausdorff, Banach and Tarski strangeness already repeats itself in the plane once moves that keep lengths are replaced by moves that keep areas. Banach’s area survives slides and turns, but it does not survive stretches and shears, even though those keep the area of every polygon."
  - "So the first claim fails for the same reason as in the [Banach–Tarski paradox](banach-tarski-paradox): the pieces have no area that the allowed moves keep. Only the setting differs, a flat square and area-preserving maps in place of a solid ball and rigid moves. Von Neumann identified the property of a group of moves that rules such paradoxes out. Groups with it are now called amenable, and Alfred Tarski later showed that this is the only obstruction: paradoxes of this kind arise exactly when the group of moves is not amenable."
finePrint: "The result can be strengthened: any two bounded flat figures that each contain a small disc can be cut into pieces that turn one into the other using area-preserving affine maps. Von Neumann left open whether a square can still be split paradoxically when slides are not allowed, using only the area-preserving maps that keep one point of the plane fixed and do not flip it over (the group called SL(2, R)). Miklós Laczkovich later showed that it does, for the inside of the square. Amenable groups, introduced in von Neumann’s 1929 paper, became important across many areas of mathematics."
sources:
  - title: "Wikipedia: Von Neumann paradox"
    url: "https://en.wikipedia.org/wiki/Von_Neumann_paradox"
    note: "Source for the statement and its 1929 date, area-preserving affine maps, the axiom of choice, the Banach and Tarski result for isometries in the plane, the free group with two generators, the sketch with sets A and B, the strengthened version, von Neumann’s quoted conclusion (Fundamenta Mathematicae 13, p. 85, with the source’s English translation), the remark on Banach measure, amenable groups, and Laczkovich’s answer for SL(2,R). The page dates Laczkovich’s proof to 2000 but cites a 1999 paper, so no year is given here."
  - title: "J. von Neumann, Zur allgemeinen Theorie des Masses, Fundamenta Mathematicae 13 (1929), 73-116"
    url: "http://matwbn.icm.edu.pl/ksiazki/fm/fm13/fm1316.pdf"
    note: "The original paper (scan, read by text recognition). Pages 84 and 85 confirm that whether such a measure exists depends only on the group of moves, that none exists if the group contains a free subgroup with two generators, that the group of area-preserving affine maps (determinant 1) has one in the plane, the German sentence quoted in translation, and the remark that the whole Hausdorff-Banach-Tarski pathology repeats in the plane when length-preserving maps are replaced by area-preserving ones (paraphrased in this entry). The English wording of the quotation is the translation given on the Wikipedia page."
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for the plane being safe under rigid moves because its group of rigid motions is solvable, while rotations in three dimensions include a free group with two generators, for a paradoxical square under area-preserving affine maps being counterintuitive for the same reasons as the doubled ball, and for Tarski’s result that amenable groups are exactly those without paradoxical decompositions."
  - title: "Nicolas Monod, Groups of piecewise projective homeomorphisms (PNAS, 2013)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3606974"
    note: "Peer-reviewed. Source for von Neumann introducing amenable groups in his 1929 study of the Hausdorff-Banach-Tarski paradox, Tarski’s result that amenability is the only obstruction to paradoxical decompositions, and the reliance of the known paradoxes on free subgroups."
  - title: "Wikipedia: Hausdorff paradox"
    url: "https://en.wikipedia.org/wiki/Hausdorff_paradox"
    note: "Source for Banach’s finitely additive “area” on all bounded subsets of the plane, unchanged by congruence."
---
