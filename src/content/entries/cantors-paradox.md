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
sourcesVerified: false
problem: "Is there a biggest infinity, or a set that holds every possible size of a set?"
claimA: "There is a set that contains every cardinal number, that is, every possible size of a set."
claimB: "For any set of sizes, there is a size bigger than every size in it."
verdict: "There is no set of all sizes. Any set of sizes leaves out a bigger one, so the sizes are too many to form a set."
whatBreaks: "The idea that all the possible sizes of sets can be gathered into one set."
statusNote: "the idea that there is a set of all sizes is wrong. The argument against it is a sound proof built on Cantor’s theorem, and set theory today treats the collection of all sizes as too big to be a set."
setup: "Two sets have the same size, or cardinality, if their members can be matched one to one. Georg Cantor showed that infinite sets come in different sizes. His theorem says that the set of all subsets of a set, called its power set, is always bigger than the set itself. A set of three things has eight subsets, and the rule holds for infinite sets too. So there is no biggest size: take any set, and its power set is bigger. Now suppose there were a set holding every size there is. Pour together the members of all the sets in it into one big set. Its power set has a size bigger than every size on the list, so that size is missing from a list that was supposed to hold them all. Cantor knew this argument by the late 1890s. In 1897 he passed it on to David Hilbert, though not in full detail."
whyWrong: "Each size is a perfectly good mathematical object, and putting things together into a set is the most basic move in set theory. Around 1900 Gottlob Frege and Bertrand Russell built on the principle that any clearly described collection is a set, and Richard Dedekind took the collection of everything to be a set. Nothing in the argument against a set of all sizes is faulty. Every step follows from Cantor’s theorem, which is proved. So the clash cannot be blamed on the reasoning. It knocks out the assumption that such a set exists."
resolution:
  - "Cantor drew this lesson himself. In his letters of 1899, to Dedekind among others, he separated collections that can safely be treated as one thing, which are sets, from what he called “inconsistent multiplicities”, collections too big to be sets. He gave no clear rule for telling them apart, and the historian José Ferreirós calls this “simply a verbal answer to the problem”."
  - "Axiomatic set theory made the rule precise. Ernst Zermelo published his axioms in 1908, showing how they blocked the known paradoxes. Under them a description no longer makes a set on its own: it can only pick out members of a set that already exists. So a set of all sizes is never built, and in fact the axioms prove that there is none. Later systems, such as von Neumann–Bernays–Gödel set theory, also allow collections too big to be sets, called proper classes. The collection of all sizes is one of them."
  - "Russell believed there was a universal set, a set of everything, which would have to be the biggest of all. He found Cantor’s result that there is no biggest size “paradoxical” for that reason. Applying Cantor’s argument to the supposed set of everything led him, in about 1901, to [Russell’s paradox](russells-paradox), which needs no talk of sizes at all and is fixed by the same kind of restriction."
  - "The infinite sizes can be numbered in order by the ordinal numbers, the numbers that give positions in a list. A parallel puzzle about the ordinals, the Burali-Forti paradox, shows there is no set of all ordinals, and combined with that numbering it gives a second proof that the sizes do not form a set."
finePrint: "This entry is marked Defused, like Russell’s paradox, because the argument is a valid proof and its conclusion is accepted: there is no set of all sizes. Some accounts describe the paradox instead as a mistaken intuition about infinity rather than a true contradiction, which comes to the same verdict. Some books give it in another form, for the set of all sets: that set would be its own power set, so by Cantor’s theorem its size would have to be bigger than itself. Cantor is often credited with finding it, in 1899 or between 1895 and 1897, though some mathematicians give the credit to Russell, for a similar result in 1899 or 1901. The step that pours the sizes together relies on the standard way of treating each size as a set of that size. The details of cardinals, ordinals and proper classes are beyond what is covered here."
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
