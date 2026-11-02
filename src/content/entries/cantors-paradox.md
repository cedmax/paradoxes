---
title: Cantor's paradox
format: argument
searchTerms:
  [
    "set of all cardinals",
    "largest infinity",
    "set of all sets",
    "paradox of the alephs",
    "no greatest cardinal",
  ]
chapter: infinity
status: defused
relatedTo: russells-paradox
simplification: heavy
noMaths: false
order: 130
sourcesVerified: true
problem: "Is there a biggest infinity, or a set that holds every possible size of a set?"
claimA: "There is a set that contains every cardinal number, that is, every possible size of a set."
claimB: "For any set of sizes, there is a size bigger than every size in it."
whatBreaks: "The idea that all the possible sizes of sets can be gathered into one set."
statusNote: "the proof rules out a set of all sizes. Standard set theory accepts the proof and rejects that starting assumption."
setup: "Infinite sets can have different sizes. Two sets have the same size if their members can be matched one to one. Cantor proved that collecting every subset of a set always gives something bigger than that set, even when the original is infinite. There is therefore no biggest size."
whyWrong: "Now suppose one set contained every possible size. Combining the sets representing those sizes would give a set at least as big as each of them. Its collection of subsets would be bigger still. That produces a size beyond every size in a set meant to contain them all."
resolution:
  - "The proof is sound. What fails is the assumption that all sizes can be gathered into one set."
  - "Standard set theory places limits on forming sets. Infinite sizes remain valid mathematical objects, but their whole collection is too big to be a set. The same kind of restriction blocks [Russell’s paradox](russells-paradox)."
finePrint: "The proof treats each size, or cardinal number, as a set of that size, takes their union, then its power set, the set of all subsets. This is an outline within standard set theory. Some accounts give the paradox using a supposed set of all sets instead. Cantor distinguished sets from collections too large to be sets in letters of 1899, and later axiomatic systems made the restrictions precise. [Burali-Forti’s paradox](burali-forti-paradox) makes a parallel argument about positions, or ordinals, rather than sizes. Details of alternative foundations and historical attribution are omitted."
sources:
  - title: "Wikipedia: Cantor's paradox"
    url: https://en.wikipedia.org/wiki/Cantor%27s_paradox
    note: "Main source for the statement and proof, proper classes, the link to Burali-Forti, and the credit to Cantor and Russell."
  - title: "Stanford Encyclopedia of Philosophy: The Early Development of Set Theory (José Ferreirós)"
    url: https://plato.stanford.edu/entries/settheory-early/
    note: "Source for Cantor’s 1897 and 1899 letters, “inconsistent multiplicities”, and Zermelo’s 1908 axioms blocking the paradoxes."
  - title: "Wolfram MathWorld: Cantor's Paradox (Eric W. Weisstein)"
    url: https://mathworld.wolfram.com/CantorsParadox.html
    note: "Source for the version with the set of all sets, which would have to be bigger than itself."
  - title: "Stanford Encyclopedia of Philosophy: Russell's Paradox"
    url: https://plato.stanford.edu/entries/russell-paradox/
    note: "Source for Russell reaching his own paradox from Cantor’s argument in 1901, and collections too large to be sets."
---
