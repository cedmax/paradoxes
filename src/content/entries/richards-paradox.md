---
title: "Richard's paradox"
titleAccent: paradox
aka: ["definable real numbers", "Jules Richard", "diagonal definition", "Richardian numbers"]
chapter: self-reference
status: defused
uniqueness: related
anchor: liar-paradox
simplification: heavy
noMaths: false
order: 105
written: true
sourcesVerified: false
problem: "Can the numbers that English can define be listed, and then a new one defined that is not on the list?"
claimA: "English can pick out exactly the phrases that define real numbers and put them on a list."
claimB: "The paragraph that builds a new number from that list defines a number that is not on the list."
verdict: "No English phrase can tell, in general, which English phrases define a number, so the list cannot be built that way."
whatBreaks: "The assumption that the language can say which of its own phrases define a real number."
statusNote: "the first claim is wrong. Wikipedia reports there is no way, in the language, to tell which phrases define real numbers, so the list cannot be built."
setup: "The French mathematician Jules Richard first described this paradox in 1905. Some English phrases define a real number exactly. “The real number whose whole part is 17 and whose nth decimal place is 0 if n is even and 1 if n is odd” defines 17.1010…, which is 1693/99. Other phrases, such as “the capital of England”, define no number. Take all the phrases that define a number. Put them in order, shortest first, and alphabetically among phrases of the same length. This gives a list of real numbers: r1, r2, and so on. Now define a new number r. Its whole part is 0. Its nth decimal place is 1 if the nth decimal place of rn is not 1, and 2 if it is 1. This paragraph is itself an English phrase that defines r. So r should be on the list. But r differs from every number on the list, by construction."
whyWrong: "Wikipedia says that the definition of r refers to definability in English itself. If one could say, in the language, which English phrases define a real number, the paradox would go through. The resolution is that there is no way to say that. Wikipedia notes, citing Good in 1966, that there is no way to describe in a finite number of words how to tell whether an arbitrary English phrase defines a real number."
resolution:
  - "Wikipedia says that being able to make that determination would also mean being able to solve the halting problem and perform any other non-algorithmic calculation that can be described in English. Since that is not possible, the list that the paradox needs cannot be built."
  - "A similar phenomenon occurs in formal theories that can refer to their own syntax, such as Zermelo–Fraenkel set theory. Wikipedia says that the set of formulas that define real numbers may exist, but no formula defines it without reference to other sets. This is related to Tarski’s undefinability theorem."
  - "Wikipedia’s moral is that the metamathematics of a formal system must be kept apart from the statements of the system. Richard’s paradox, on this view, comes from treating a construction of the metatheory, the list of all statements that define real numbers, as if it could be carried out inside the original system."
finePrint: "Wikipedia reports that Kurt Gödel cited Richard’s antinomy as a semantic analogue to his incompleteness result, and that it was a motive for developing predicative mathematics. It is closely related to [Berry’s paradox](berry-paradox) and, in structure, to Cantor’s diagonal argument for the uncountability of the real numbers. The article also describes a version using whole numbers, called Richardian numbers, which is not covered here."
sources:
  - title: "Wikipedia: Richard's paradox"
    url: https://en.wikipedia.org/wiki/Richard%27s_paradox
---
