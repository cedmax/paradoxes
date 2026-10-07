---
title: "Russell's paradox"
titleAccent: paradox
chapter: self-reference
status: defused
simplification: light
order: 3
written: true
sourcesVerified: true
noMaths: true
problem: "Does the collection of all collections that do not contain themselves contain itself?"
claimA: "Any description at all picks out a collection of the things that fit it."
claimB: "No collection can contain exactly the collections that do not contain themselves."
verdict: "Not every description picks out a collection, and set theory was rebuilt without that assumption."
whatBreaks: "The idea that any description at all can be used to build a collection."
statusNote: "the idea that every description makes a collection is wrong. Experts still differ on which replacement rules are best."
setup: "A collection of things is called a set. Most sets do not contain themselves: the set of all teaspoons is not a teaspoon. But some might. The set of everything that is not a teaspoon is not a teaspoon, so it would contain itself. Now gather every set that does not contain itself into one new set, and call it R. Does R contain itself? If it does, it breaks R's own entry rule, so it should not. If it does not, it fits the rule, so it should."
whyWrong: "It looks harmless to say that any clear description gives you a set: all the things that are red, all the things that are not teaspoons. Mathematicians of the time relied on exactly that. The rule feels like plain common sense, and nothing in R's description looks broken."
resolution:
  - "The rule is the thing that has to go. The principle that every description makes a set is false. If you keep it, you get a contradiction, so any system of mathematics built on it is inconsistent: it proves both a statement and its opposite, and in ordinary logic a system like that can then prove anything at all."
  - "Several replacements were developed. Russell himself built a theory of types, which sorts things into levels so that a collection can only contain things from a lower level. He first sketched it in 1903, gave a fuller version in 1908, and used it in Principia Mathematica, written with Alfred North Whitehead and published from 1910 to 1913. Ernst Zermelo, in 1908, proposed that you may only pick out a set from a set you already have, which stops you building R from everything at once. Later, John von Neumann's approach, from 1925, allows collections that are too big to be sets, called proper classes. R is one of those."
  - "So the contradiction is gone, and nobody defends the old rule. What mathematicians do not all agree on is which replacement is the best account of what a set really is."
finePrint: "Russell found the problem in 1901 and wrote to the logician Gottlob Frege about it in 1902, just as Frege's own book was going to print. Zermelo is also said to have found it independently, but he did not publish it. The [barber](barber-paradox) who shaves everyone who does not shave themselves is a popular retelling, not the original form. The fixes shown here are a few of several, and they are technical. Read the sources for the details."
sources:
  - title: "Wikipedia: Russell's paradox"
    url: https://en.wikipedia.org/wiki/Russell%27s_paradox
  - title: "Stanford Encyclopedia of Philosophy: Russell's Paradox"
    url: https://plato.stanford.edu/entries/russell-paradox/
---
