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
simplification: "heavy"
noMaths: false
order: 120
written: true
sourcesVerified: true
problem: "If every number describable in English is on a list, can English describe a number missing from it?"
claimA: "English gives a precise, fixed test for which phrases define a number, even phrases about that test itself."
claimB: "Using that test, a short English recipe defines a number different from every number on the list."
verdict: "“Definable in English” cannot be a precise test that English can freely apply to all its own definitions. The proposed list relies on that impossible assumption."
whatBreaks: "The assumption that English can precisely identify all its own number definitions, including definitions about that very list."
statusNote: "the contradiction rules out the assumed test for English definitions. The trick that makes a number differ from every listed number is sound."
setup: "Some phrases define numbers exactly, such as “one divided by three”. List all finite English phrases, shortest first and alphabetically within each length. Keep only those that define a number. This seems to give a list of every number that English can describe."
whyWrong: "Now make a decimal number that differs from the first number in its first decimal place, from the second in its second place, and so on. It cannot equal any listed number. Yet that recipe is written in English. The new number should therefore be on the list it was built to escape."
resolution:
  - "The trap is in the instruction “keep only those that define a number”. It assumes a precise test that English can apply to all its own phrases, including the new recipe about that test. Such an unrestricted test cannot work."
  - "The decimal trick is not the mistake. It is a sound way to show that a proposed list misses a number. Here it exposes the impossible assumption behind the list, much as the [Berry paradox](berry-paradox) exposes trouble with an unrestricted idea of definition."
finePrint: "Richard published the paradox in 1905, using French. “Number” here means a real number, which can have an endless decimal expansion. One precise recipe uses only digits 1 and 2: at place n, use 2 if the nth digit of the nth listed number is 1, and use 1 otherwise. That also avoids ambiguity from decimals ending in recurring 9s. Listing finite phrases is possible; precisely selecting every successful definition within the same unrestricted language is the problematic step. This is more than a claim that checking definitions is slow or difficult. In formal languages, defining numbers from outside a theory must be distinguished from defining the whole list inside it. Poincaré expressed the lesson as the absence of a definable listing of all definable real numbers."
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
