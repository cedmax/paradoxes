---
title: Von Neumann paradox
titleAccent: paradox
aka:
  [
    "two squares from one",
    "area-preserving paradox",
    "planar Banach–Tarski",
    "paradoxical decomposition in the plane",
  ]
chapter: infinity
status: explained
uniqueness: variant
anchor: banach-tarski-paradox
simplification: heavy
noMaths: false
order: 215
written: true
sourcesVerified: false
problem: "Can a square be cut into pieces that are moved without changing any area, to make two squares of the same size?"
claimA: "Moving pieces with area-preserving transformations cannot change the total area, so one square cannot become two."
claimB: "A square can be broken into sets of points that, moved by area-preserving transformations, make two squares of the same size."
verdict: "The pieces are sets of points so scattered that no area can be given to them."
whatBreaks: "The idea that every piece of a shape has an area that survives being moved."
statusNote: "the first claim is wrong. The pieces are built using the axiom of choice, and no measure of area works on all of them."
setup: "John von Neumann proved in 1929, assuming the axiom of choice, that a flat figure such as a unit square can be broken into sets of points. Each set can then be moved by a transformation that preserves area, so that the result is two figures of the same size as the original. Wikipedia says the result is built on the earlier Banach–Tarski paradox, which in turn is based on the Hausdorff paradox. Banach and Tarski had shown that, if only moves such as slides and turns are allowed, a flat figure cannot be reassembled into one of a different area."
whyWrong: "Wikipedia says von Neumann realised that the trick of these paradoxical decompositions was to use a group of transformations that contains a free group with two generators. The area-preserving transformations contain such groups, which opens the way to paradoxical decompositions that use them. The pieces are sets of points, and the construction picks one point from each orbit of the group, using the axiom of choice."
resolution:
  - "Wikipedia explains that the consequence is a statement about area. Already in the plane, there is no non-negative additive measure, with the unit square measuring 1, that stays the same under all area-preserving affine transformations. The Banach measure of sets in the plane is kept by slides and turns, but it is not kept by non-isometric transformations, even when they preserve the area of polygons."
  - "The reason is that the points of the plane, other than the origin, can be divided into two dense sets, A and B. If the A points of a polygon are moved by one area-preserving transformation and the B points by another, both sets can end up as parts of the B points of two new polygons. The new polygons have the same area as the old one, but the two moved sets cannot have the same measure as before, since they contain only part of the B points. So there is no measure that works."
  - "The class of groups that von Neumann identified in this work, called amenable groups, turned out to be important in many areas of mathematics. Wikipedia says that, generally, paradoxical decompositions arise when the group used for equivalence is not amenable."
finePrint: "This entry gives the idea and not the proof. Wikipedia describes the method only informally and says it glosses over details such as fixed points. It also reports that Miklós Laczkovich proved in 2000 that a paradoxical decomposition exists for a related group, SL(2,R). It is related to the [Hausdorff paradox](hausdorff-paradox)."
sources:
  - title: "Wikipedia: Von Neumann paradox"
    url: https://en.wikipedia.org/wiki/Von_Neumann_paradox
---
