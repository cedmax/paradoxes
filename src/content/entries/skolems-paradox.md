---
title: Skolem's paradox
titleAccent: paradox
aka:
  ["Löwenheim–Skolem", "countable model of set theory", "uncountable sets in a countable model"]
chapter: infinity
status: explained
simplification: heavy
noMaths: false
order: 207
written: true
sourcesVerified: false
problem: "How can a theory that proves some sets are uncountable have a model that is only countably big?"
claimA: "If a model contains only countably many things, every set inside it is countable."
claimB: "Set theory proves that uncountable sets exist, and it still has a countable model."
verdict: "Whether a set counts as countable depends on the model you measure it in."
whatBreaks: "The idea that being countable means the same thing from inside a model and from outside it."
statusNote: "the first claim is wrong. Skolem showed in 1922 that countability is not absolute but relative to the model in which it is measured."
setup: "A set is countable if its members can be matched one to one with the whole numbers, and uncountable if they cannot. Georg Cantor proved in 1874 that the real numbers are uncountable. Yet the Löwenheim–Skolem theorem says that any consistent theory of set theory in first-order logic has a countable model, one whose list of things can be matched with the whole numbers. Wikipedia puts the apparent contradiction like this: a model that is itself countable, and so contains only countable sets, satisfies a sentence that intuitively says “there are uncountable sets”."
whyWrong: "Wikipedia reports Skolem’s own way of putting it. The same set can be countable in one model of set theory and not countable in another. Relative to one model, no function inside it can match some set with the whole numbers. Relative to another model, such a match may exist. So “countable” is not a fixed property of a set. It depends on which model is doing the measuring."
resolution:
  - "Wikipedia says the mathematical explanation was first given by Thoralf Skolem in 1922. Countability is not absolute. It is relative to the model in which the size of a set is measured. Skolem was also the first to discuss the apparent contradiction, and to discover what is now called non-absoluteness of set-theoretic notions. Wikipedia quotes Stephen Kleene: “there is no absolute notion of countability”."
  - "Wikipedia reports that Ernst Zermelo received Skolem’s work harshly, arguing against the limits of first-order logic and against Skolem’s idea of relativity, but the mathematical community quickly came to accept the result."
  - "Wikipedia notes that this is not an actual contradiction of the kind [Russell’s paradox](russells-paradox) is, though Skolem himself called it a “paradoxical state of affairs”."
finePrint: "The mathematical side is settled. The philosophical side is not. Wikipedia says one line of inquiry asks whether a first-order sentence really states that there are uncountable sets, and whether any set is uncountable in an absolute sense. Hilary Putnam used Skolem’s relativity in the philosophy of language. This entry covers only the mathematical explanation."
sources:
  - title: "Wikipedia: Skolem's paradox"
    url: https://en.wikipedia.org/wiki/Skolem%27s_paradox
---
