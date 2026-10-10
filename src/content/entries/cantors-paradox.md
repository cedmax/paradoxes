---
title: Cantor's paradox
titleAccent: paradox
aka:
  [
    "set of all cardinals",
    "largest infinity",
    "set of all sets",
    "paradox of the alephs",
    "no greatest cardinal",
  ]
chapter: infinity
status: defused
uniqueness: related
anchor: russells-paradox
simplification: heavy
noMaths: false
order: 206
written: true
sourcesVerified: true
problem: "Is there a biggest infinity, or a set that holds every possible size of a set?"
claimA: "There is a set that contains every cardinal number, that is, every possible size of a set."
claimB: "For any set of sizes, there is a size bigger than every size in it."
verdict: "There is no set of all sizes. Any set of sizes leaves out a bigger one, so the sizes are too many to form a set."
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
    note: "Statement and proof that no set contains every cardinal, using the union of the members and its power set; proper classes; the link to the Burali-Forti paradox; the description as a mistaken intuition; credit to Cantor (1899, or 1895 to 1897) and to Russell (1899 or 1901)."
  - title: "Stanford Encyclopedia of Philosophy: The Early Development of Set Theory (José Ferreirós)"
    url: https://plato.stanford.edu/entries/settheory-early/
    note: "The paradox of the alephs as a consequence of Cantor’s theorem; Cantor communicating it to Hilbert in 1897, not in full detail; the 1899 letters, including the term “inconsistent multiplicities” in those to Dedekind; “simply a verbal answer to the problem”; Zermelo’s 1908 axioms blocking the known paradoxes; Frege and Russell relying on the principle of comprehension and Dedekind taking the universe to be a set; Russell’s belief in a universal set."
  - title: "Wolfram MathWorld: Cantor's Paradox (Eric W. Weisstein)"
    url: https://mathworld.wolfram.com/CantorsParadox.html
    note: "The version stated for the set of all sets: it would be its own power set, so its size would have to be bigger than itself."
  - title: "Stanford Encyclopedia of Philosophy: Russell's Paradox"
    url: https://plato.stanford.edu/entries/russell-paradox/
    note: "Russell found the absence of a greatest cardinal “paradoxical” because he believed in a universal set, and reached his own paradox, probably in the late spring of 1901, by applying the reasoning of Cantor’s diagonal argument to a “supposed class of all imaginable objects”; Cantor’s view that some collections are too large to be sets; Zermelo’s Separation axiom; proper classes in von Neumann’s approach."
---
