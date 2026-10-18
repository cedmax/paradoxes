---
title: Burali-Forti paradox
format: argument
titleAccent: paradox
searchTerms:
  [
    "set of all ordinals",
    "largest ordinal number",
    "set of all ordinal numbers",
    "Burali-Forti antinomy",
  ]
chapter: self-reference
status: defused
relatedTo: russells-paradox
simplification: heavy
noMaths: false
order: 80
sourcesVerified: true
problem: "Can one set contain every number that marks a position in an ordered list, including positions beyond an infinite list?"
claimA: "There is a set that contains every ordinal number."
claimB: "Any proposed set of all these numbers would produce another one beyond everything it contains."
verdict: "There is no set of all ordinal numbers. Treating them as one set would create a position beyond every position, including itself."
whatBreaks: "The assumption that every ordinal number can be gathered into one set."
statusNote: "the argument rules out a set of all ordinals. Standard set theory accepts the proof and rejects that starting assumption."
setup: "First, second and third describe positions, rather than amounts. Ordinal numbers extend this idea to ordered lists that go on for ever, and to positions beyond those lists. Imagine gathering every ordinal into one set and lining them up in their order."
whyWrong: "Every ordered list of this kind has an ordinal describing its order. If the list contained every ordinal, its own ordinal would have to come after all the ordinals on it. But it would also have to be on the list. It would have to come before itself."
resolution:
  - "The clash is a proof that the proposed set cannot exist. The reasoning works; the assumption that all ordinals form one set fails."
  - "Standard set theory limits which collections count as sets. The ordinals can still be discussed together, but they are too many to be one set. This is closely related to [Russell’s paradox](russells-paradox)."
finePrint: "This is an outline, not the full proof. In the standard definition, each ordinal is the set of the ordinals before it. A supposed set of all ordinals would itself be an ordinal and hence a member of itself, which is impossible. This definition came after Burali-Forti’s 1897 paper; the earlier argument used order types. The historical attribution is complicated: Burali-Forti did not clearly state the paradox, and Russell later recognised the contradiction. Standard set theory rejects the set of all ordinals. Quine’s New Foundations uses different rules and blocks a different step. The [Cantor paradox](cantors-paradox) concerns infinite sizes rather than positions."
sources:
  - title: "Wikipedia: Burali-Forti paradox"
    url: https://en.wikipedia.org/wiki/Burali-Forti_paradox
    note: "Statement; Burali-Forti’s 1897 paper contradicting an earlier result of Cantor, unknown to him; Russell noticing it and crediting the paper in The Principles of Mathematics (1903); the von Neumann proof; the remark that this version is anachronistic, and the order-type version; ZF and ZFC blocking unrestricted comprehension, which naive set theory and Frege’s Basic Law V allowed; New Foundations, where the order types form a set and the order type of the ordinals below an ordinal is not that ordinal; Rosser showing ML inconsistent, and Quine’s revision."
  - title: "Stanford Encyclopedia of Philosophy: Paradoxes and Contemporary Logic"
    url: https://plato.stanford.edu/entries/paradoxes-contemporary-logic/
    note: "Burali-Forti as a mathematician of Peano’s school who attempted to prove that the ordinals are not linearly ordered; publication in 1897; Cantor noticing similar difficulties in 1895; Cantor’s view that the multiplicity of ordinals is well-ordered but not a set; in von Neumann’s system the class of all ordinals is not a set; in Zermelo’s system the collection of all order types does not exist as a set; Russell’s contradiction as the second famous published antinomy."
  - title: "Stanford Encyclopedia of Philosophy: The Early Development of Set Theory (José Ferreirós)"
    url: https://plato.stanford.edu/entries/settheory-early/
    note: "Disagreement among historians over whether Cantor knew of the paradox from 1883 or only from 1896; his use of the argument in a letter to Dedekind in August 1899; Burali-Forti himself failing to formulate the paradox clearly."
---
