---
title: Burali-Forti paradox
titleAccent: paradox
aka:
  [
    "set of all ordinals",
    "largest ordinal number",
    "set of all ordinal numbers",
    "Burali-Forti antinomy",
  ]
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
claimB: "No set can contain every ordinal number, because such a set would itself be an ordinal number bigger than every ordinal, including itself."
verdict: "There is no set of all ordinal numbers. The ordinals are too many to form a set, and standard set theory treats them as a collection too big to be one."
whatBreaks: "The idea that all the ordinal numbers can be gathered into one set, which rests on the belief that any description at all gathers a set."
statusNote: "the idea that there is a set of all ordinals is wrong. The argument against it is a sound proof, and standard set theory counts the ordinals as a collection too big to be a set."
setup: "Ordinal numbers are the numbers used for position in a list: first, second, third, and then on past all the endless counting numbers. They are lined up in order, and each ordinal comes after all the ones before it. Now try to gather every ordinal into one set, and call it Ω. Cesare Burali-Forti, a mathematician of Peano’s school, published a result in 1897 that, unknown to him, contradicted an earlier result of Georg Cantor. Bertrand Russell noticed the contradiction. When he published it in his 1903 book The Principles of Mathematics, he said Burali-Forti’s paper had suggested it to him, and so the paradox took Burali-Forti’s name. It was the first of the famous paradoxes of set theory to be published, and [Russell’s paradox](russells-paradox) the second."
whyWrong: "It looks harmless to say that all the ordinal numbers can be put in one set. That is the same trust in descriptions that gets [Russell’s paradox](russells-paradox) going. The twist here is that the ordinals are themselves lined up in order, and any well-ordered set has an ordinal of its own. So the collection of all of them would get an ordinal number too, and that number would have to be on the list and also come after everything on it."
resolution:
  - "Here is the argument in the standard way of defining ordinals, due to John von Neumann, where each ordinal is the set of all the ordinals before it. Suppose Ω is the set of all ordinals. Every member of an ordinal is an ordinal, so every member of a member of Ω is also in Ω. Ω is also well-ordered by membership, which means that any non-empty part of it has a first member. Those two facts make Ω an ordinal itself. So Ω is a member of Ω. In this definition, being a member of Ω means being less than Ω, so Ω is less than itself. But no ordinal is less than itself. Every step is proved, so the clash knocks out the starting assumption: Ω is not a set."
  - "Cantor drew this lesson himself. He held that the collection of all ordinals is well-ordered but is not a set, so no ordinal can be given to it, and the contradiction goes away. Axiomatic set theory made the rule precise. In Ernst Zermelo’s system, the collection of all order types, the general form of ordinals, does not exist as a set. The standard systems today, ZF and ZFC, block the paradox by not allowing a set to be built just from a description such as “all things with the property P”, which naive set theory and Gottlob Frege’s Basic Law V allowed. In von Neumann’s system, which also has proper classes, collections too big to be sets, the paradox shows that the class of all ordinals is not a set."
  - "Quine’s system New Foundations takes a different route, and there the collection of order types is a set. The contradiction is avoided because a different step fails: the order type of the ordinals below a given ordinal turns out not to be that ordinal. Rosser showed that an earlier system of Quine’s, called ML, allowed the paradox and so was inconsistent. Quine revised it."
finePrint: "This entry is marked Defused, like [Russell’s paradox](russells-paradox), because the argument is a valid proof and its conclusion is accepted in standard set theory. New Foundations is a minority system that avoids the clash in its own way, as described above. One account says Cantor had noticed similar difficulties by 1895. Historians disagree on whether he knew of the paradox as early as 1883 or only from 1896. He used the argument in a letter to Richard Dedekind in 1899. Burali-Forti himself did not state the paradox clearly. He was trying to prove that the ordinal numbers are not all lined up in one order. The von Neumann version of the proof is anachronistic, because that definition of ordinals was not known in 1897. A version with fewer assumptions uses order types instead. Cantor’s paradox, about the sizes of infinite sets, is a close relative. This entry gives only the main idea of the proof."
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
