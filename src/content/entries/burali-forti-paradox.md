---
title: Burali-Forti paradox
titleAccent: paradox
aka: ["set of all ordinals", "largest ordinal number", "set of all ordinal numbers"]
chapter: self-reference
status: defused
uniqueness: related
anchor: russells-paradox
simplification: heavy
noMaths: false
order: 100
written: true
sourcesVerified: false
problem: "Is there a set containing every ordinal number, the numbers that say where something comes in a list?"
claimA: "There is a set that contains every ordinal number."
claimB: "A set of all ordinal numbers would itself be an ordinal number bigger than every ordinal number, including itself."
verdict: "There is no set of all ordinal numbers, and modern set theory does not allow one to be built."
whatBreaks: "The idea that any description, such as “all ordinal numbers”, can be used to gather a set."
statusNote: "the first claim is wrong. Modern set theories do not allow a set of everything with a given property, so there is no set of all ordinals."
setup: "Ordinal numbers are the numbers used for position in a list: first, second, third, and then on past the endless counting numbers. They are lined up in order, and each ordinal comes after all the ones before it. Now try to gather every ordinal into one set, and call it Ω. Wikipedia states the result: building the set of all ordinal numbers leads to a contradiction. Cesare Burali-Forti published a paper in 1897 proving a theorem which, unknown to him, contradicted an earlier result of Georg Cantor. Bertrand Russell noticed the contradiction and published it in his 1903 book Principles of Mathematics. Russell said Burali-Forti’s paper had suggested it, and the paradox took his name."
whyWrong: "It looks harmless to say that all the ordinal numbers can be put in one set. That is the same trust in descriptions that gets [Russell’s paradox](russells-paradox) going. Here the trouble shows up because the ordinals are themselves lined up in order, so the collection of all of them would get an ordinal number of its own."
resolution:
  - "Wikipedia’s argument, in the standard (von Neumann) way of defining ordinals, runs as follows. Suppose Ω is the set of all ordinals. It is ordered by membership, and every member of a member of Ω is also in Ω, so Ω is an ordinal itself. That puts Ω inside Ω. But being inside Ω means being less than Ω, and no ordinal is less than itself. So Ω is both less than itself and not less than itself, which is a contradiction."
  - "The way out is that no such set exists. Wikipedia says modern axioms for set theory such as ZF and ZFC avoid the contradiction by not allowing the construction of sets from terms like “all sets with the property P”, which naive set theory and Frege’s Basic Law V did allow."
  - "Quine’s system New Foundations takes a different route. Wikipedia reports that, in that system, the collection of order types is a set and the paradox is avoided, because the order type of the ordinals below Ω turns out not to be Ω. Wikipedia adds that an earlier system of Quine’s, called ML, was shown by Rosser in 1942 to allow the paradox, and Quine’s revision fixed that."
finePrint: "Wikipedia notes that the von Neumann version of the argument is anachronistic, because that way of defining ordinals was not known when Burali-Forti wrote. A version with fewer assumptions is also given, using order types. This entry gives only the main idea of the proof. [Cantor’s paradox](cantors-paradox) is a close relative about the sizes of infinite sets."
sources:
  - title: "Wikipedia: Burali-Forti paradox"
    url: https://en.wikipedia.org/wiki/Burali-Forti_paradox
---
