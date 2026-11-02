---
title: "Von Neumann paradox"
format: argument
searchTerms:
  [
    "two squares from one",
    "area-preserving paradox",
    "planar Banach–Tarski",
    "paradoxical decomposition in the plane",
    "amenable groups",
  ]
chapter: infinity
status: explained
variantOf: banach-tarski-paradox
simplification: heavy
noMaths: false
order: 190
sourcesVerified: true
problem: "Can scattered points from one square be rearranged into two equal squares using moves that preserve ordinary area?"
claimA: "Every set of points has an area that adds up correctly and survives moves that preserve the area of ordinary shapes."
claimB: "One square can be split and moved by area-preserving stretches and shears into two squares of the same size."
whatBreaks: "The assumption that every possible set of points has an area preserved by these moves."
statusNote: "the proof rules out an area for every set of points that both adds up correctly and survives all the allowed moves. Ordinary shapes still keep their area."
setup: "Imagine stretching a square to twice its width while squeezing it to half its height. Its area stays the same. Von Neumann’s puzzle allows moves like this, as well as shears, which slant a shape sideways. It also allows pieces that are scattered sets of points, rather than shapes that scissors could cut out."
whyWrong: "The points of a square can be divided into such pieces and moved to form two squares of the original size. Every move preserves the area of ordinary shapes. So it seems that an area has doubled without any piece gaining area."
resolution:
  - "The hidden assumption is that every possible piece has an area. These pieces are so scattered that ordinary area cannot be assigned to them. There is no rule that gives every set of points an area, adds those areas correctly and preserves them under all the allowed moves."
  - "The [Banach–Tarski paradox](banach-tarski-paradox) uses the same mechanism for a solid ball. In a flat plane, slides and turns alone do not suffice. The stretches and shears are essential here."
finePrint: "Von Neumann’s 1929 result assumes the axiom of choice, which permits selections from infinitely many collections without a specified recipe. The allowed moves are area-preserving affine maps: they keep straight lines straight but need not keep lengths or angles. The proof concerns sets of points, not physical material. Banach showed that an extended area can cover every bounded set in the plane while adding correctly over finitely many pieces and surviving slides and turns. It cannot survive all the extra moves used here. The detailed proof studies how the moves combine; that machinery is omitted. Later work strengthens the result to other bounded figures containing a small disc."
sources:
  - title: "Wikipedia: Von Neumann paradox"
    url: "https://en.wikipedia.org/wiki/Von_Neumann_paradox"
    note: "Main source for the statement and 1929 date, the free group, the sketch proof, and amenable groups."
  - title: "J. von Neumann, Zur allgemeinen Theorie des Masses, Fundamenta Mathematicae 13 (1929), 73-116"
    url: "http://matwbn.icm.edu.pl/ksiazki/fm/fm13/fm1316.pdf"
    note: "Von Neumann’s original paper. Source for the measure depending only on the group of moves, and the quoted conclusion."
  - title: "Wikipedia: Banach–Tarski paradox"
    url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    note: "Source for the plane being safe under rigid moves, and Tarski’s result on amenable groups."
  - title: "Nicolas Monod, Groups of piecewise projective homeomorphisms (PNAS, 2013)"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3606974"
    note: "Source for von Neumann introducing amenable groups, and Tarski’s result."
  - title: "Wikipedia: Hausdorff paradox"
    url: "https://en.wikipedia.org/wiki/Hausdorff_paradox"
    note: "Source for Banach’s finitely additive “area” on all bounded subsets of the plane, unchanged by congruence."
---
