---
title: "Richard's paradox"
titleAccent: "paradox"
aka:
  [
    "definable real numbers",
    "Jules Richard",
    "diagonal definition",
    "Richardian numbers",
    "Richard's antinomy",
  ]
chapter: self-reference
status: defused
uniqueness: related
anchor: berry-paradox
simplification: light
noMaths: false
order: 105
written: true
sourcesVerified: true
problem: "Can the numbers that English can define be listed, and then a new number defined that is not on the list?"
claimA: "It is settled exactly which English phrases define a real number, so those phrases form one fixed list."
claimB: "The paragraph that builds a new number from that list is an English phrase, and it defines a number that is not on the list."
verdict: "The argument shows that “definable in English” cannot be treated as a precise, fixed test that applies to every English definition, including the one the argument itself builds."
whatBreaks: "The assumption that it is settled which English phrases define a real number, so that they form one fixed list."
statusNote: "the assumption that the phrases defining real numbers form one fixed list is false, and the clash itself is what shows it. As with the [Berry paradox](berry-paradox), the trouble lies in treating “definable” as a fixed test that can also be applied to a definition that talks about definability. Richard’s own diagnosis, a vicious circle, is not the one generally accepted today."
setup: "Jules Richard, a mathematician teaching at a school in Dijon, published this paradox in 1905 in the Revue générale des sciences pures et appliquées. He worked in French. Here it is in English. Some English phrases define a real number exactly. “The real number the integer part of which is 17 and the nth decimal place of which is 0 if n is even and 1 if n is odd” defines 17.1010…, which is 1693/99. Other phrases, such as “the capital of England”, define no number. Every phrase is a finite string of letters, so all phrases can be put in order: shortest first, and alphabetically among phrases of the same length. Keep only the phrases that define a real number. This gives a list of numbers r1, r2, r3 and so on. Now define a new number r. Its whole part is 0. Its nth decimal place is 1 if the nth decimal place of rn is not 1, and 2 if it is 1. Then r differs from r1 in the first decimal place, from r2 in the second, and so on, so it is not on the list. Yet the description of r just given is itself a finite English phrase that defines a real number, so r must be on the list."
whyWrong: "Each step looks safe. Finite phrases can be listed, so the defining ones can be too. The rule for building r is Georg Cantor’s diagonal argument, the same trick used to prove that the real numbers cannot all be listed: from any list of numbers it builds one that differs from each entry in one decimal place, and that part is sound. What is not safe is the first step. The definition of r mentions definability in English itself, because it is built from the list of all English definitions. The paradox only works if English can settle, without any doubt, which of its own phrases define a real number, including phrases like the one that defines r."
resolution:
  - "That assumption is the one to give up. There is no way to determine exactly which English sentences are definitions of real numbers, a point made by the mathematician I. J. Good in 1966. If there were such a way, the paradox would go through. Such a method would also have to solve the halting problem, the task of telling in advance whether any given computer program will ever stop, which is known to be impossible. So the list r1, r2, r3 that the argument needs cannot be built, and the recipe for r has nothing to work on."
  - "Henri Poincaré restated the result as a sharpening of Cantor’s theorem: there is no definable listing of the definable real numbers. Read that way, Richard’s argument is a proof, not a contradiction. The same thing happens in formal set theory. In ZFC, the standard axioms of modern mathematics, the set of formulas that define real numbers may exist, but no formula of the theory defines it without reference to other sets. This is related to Tarski’s undefinability theorem, a result of Alfred Tarski about what a formal language cannot define about itself."
  - "Richard himself gave a different answer. He held that the definition of r refers to the whole collection of definable numbers, which is supposed to include r, and that such a circular definition defines nothing. Poincaré built on this idea, which became a motive for predicative mathematics, where a thing may only be defined in terms of things already available. Mathematicians today agree that the definition of r fails, but for a different reason: there is no settled notion of when an English phrase defines a real number. Predicative mathematics, first studied in detail by Hermann Weyl, remains an important part of the study of the foundations of mathematics."
finePrint: "Richard’s paradox is a close relative of the [Berry paradox](berry-paradox), which uses whole numbers and the length of their shortest definition in place of real numbers and a diagonal. Giuseppe Peano, in 1906, said Richard’s example belongs to linguistics, not mathematics. Kurt Gödel, in his 1931 paper on incompleteness, cited Richard’s antinomy as a semantic analogue of his own result, which is about what a formal system can prove rather than what a language can define. A second version, with whole numbers called Richardian numbers, is not covered here."
sources:
  - title: "Wikipedia: Richard's paradox"
    url: "https://en.wikipedia.org/wiki/Richard%27s_paradox"
    note: "Source for the statement in English (the 17.1010… example, the ordering of phrases, the digits 1 and 2 in the definition of r), Richard 1905, the link to Cantor’s diagonal argument and Berry, I. J. Good 1966 (Mind), the halting problem, the ZFC and Tarski points, Gödel’s citation, Richard’s predicative answer and the different reason accepted today, and Weyl. The value 1693/99 = 17.1010… was recomputed."
  - title: "Stanford Encyclopedia of Philosophy: Paradoxes and Contemporary Logic"
    url: "https://plato.stanford.edu/entries/paradoxes-contemporary-logic/"
    note: "Source for Richard teaching at a lycée in Dijon and working in French, his vicious-circle diagnosis, Poincaré’s restatement as “no definable enumeration of definable reals” and his predicativism, Peano 1906, Gödel’s remark, and Berry’s paradox as a finite-number relative."
  - title: "MathWorld: Richard's Paradox"
    url: "https://mathworld.wolfram.com/RichardsParadox.html"
    note: "Source for the publication details of Richard 1905 in the Revue générale des sciences pures et appliquées."
---
