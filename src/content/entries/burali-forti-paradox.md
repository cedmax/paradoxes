---
title: Burali-Forti paradox
format: argument
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
    note: "Main source for the statement, the 1897 paper, Russell’s credit, and how set theories block or allow the collection of all ordinals."
  - title: "Stanford Encyclopedia of Philosophy: Paradoxes and Contemporary Logic"
    url: https://plato.stanford.edu/entries/paradoxes-contemporary-logic/
    note: "Source for Burali-Forti’s aim, the 1897 publication, Cantor’s earlier view, and the class of all ordinals not being a set."
  - title: "Stanford Encyclopedia of Philosophy: The Early Development of Set Theory (José Ferreirós)"
    url: https://plato.stanford.edu/entries/settheory-early/
    note: "Source for historians disagreeing over when Cantor knew of the paradox, and his 1899 letter to Dedekind."
---
