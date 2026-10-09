---
title: Skolem's paradox
titleAccent: paradox
aka:
  [
    "Löwenheim–Skolem",
    "countable model of set theory",
    "uncountable sets in a countable model",
    "relativity of countability",
  ]
chapter: infinity
status: explained
simplification: heavy
noMaths: false
order: 207
written: true
sourcesVerified: false
problem: "How can a theory that proves some sets are uncountable be satisfied by a model with only countably many things in it?"
claimA: "In a model with only countably many things, every set has only countably many members, so the model must count every set as countable."
claimB: "Set theory proves that some sets are uncountable, so every model of it, even a countable one, has sets it counts as uncountable."
verdict: "A countable model can count a set as uncountable, because it can only use the matchings it contains, and the matching that would count the set is missing from it."
whatBreaks: "The idea that a set with only countably many members must be counted as countable by every model it sits in, as if “countable” meant the same inside a model as outside it."
statusNote: "the idea that a countable model must count all its sets as countable is wrong. Inside a model, “countable” only looks at the matchings the model contains, and the matching for a set can be missing even when, seen from outside, it exists. Mathematicians do not dispute this."
setup: "A set is countable if its members can be matched one to one with the whole numbers 0, 1, 2, 3 and so on, and uncountable if no such matching exists. Georg Cantor proved in 1874 that the real numbers are uncountable. The axioms of set theory, such as the standard system ZFC, can be written as a list of sentences in first-order logic, a formal language whose “for all” and “there is” talk about individual things and not about collections of them. From those axioms, Cantor’s theorem can be proved: there are uncountable sets. A model of the axioms is a collection of objects, together with a relation playing the part of “is a member of”, that makes every axiom true. Leopold Löwenheim proved in 1915 that a single first-order sentence with a model has a model whose objects are countable. Thoralf Skolem extended this to whole lists of sentences, in 1920 and 1922, and the result is now called the Löwenheim–Skolem theorem: if a countable list of first-order sentences has an infinite model, it also has a model with only countably many objects. So if set theory has a model at all, it has a countable one. Yet that model makes true the sentence that says there are uncountable sets."
whyWrong: "The trouble comes from reading the sentence “x is uncountable” the same way in two places. Spelled out in the formal language, it says that no object is a one to one matching between x and the whole numbers. Inside a model, “no object” means no object in that model. In a countable model, a set the model calls uncountable has, seen from outside, only countably many members, so a matching for it does exist. That matching just is not one of the model’s objects. So the model truly says “there is no matching”, and that is correct about the model, while from outside the set is countable. The two claims use “countable” in two senses."
resolution:
  - "Skolem pointed out the apparent contradiction in 1922, calling it a “peculiar and apparently paradoxical state of affairs”, and gave this explanation in the same paper. Countability is relative: the same set can be countable in one model and uncountable in another, because one model contains a matching that the other lacks. Set theorists now call notions that change from model to model in this way not absolute. Stephen Kleene summed it up: “there is no absolute notion of countability”."
  - "So the first claim is false. Each set in a countable model has only countably many members when counted from outside, but the model judges countability with the matchings it holds, not with every matching there is. Timothy Bays, in the Stanford Encyclopedia of Philosophy, describes the paradox as a slide between two readings of the same formula, and notes that this is the consensus among mathematicians: whatever its philosophical interest, it is no problem for mathematics."
  - "The effect belongs to first-order logic. If set theory is written in second-order logic, with its full meaning, where “for all” can range over every collection of things, it has no countable models and the puzzle does not arise. Ernst Zermelo, who at first took Skolem’s result for a hoax and spoke against his “relativism” in 1931, pressed for that route. The mathematical community nonetheless came to accept the result quickly, and countable models of set theory are now a standard tool."
finePrint: "Unlike [Russell’s paradox](russells-paradox), this is not a contradiction inside set theory, and nothing in set theory has to be given up. The mathematics is settled, but the philosophy is not. Skolem himself used the result to argue that axiomatic set theory is not a satisfactory foundation for mathematics. Reuben Goodstein and Hao Wang went further and held that every set is countable from some absolute point of view, while Hilary Putnam treated it as a puzzle about language and argued that the meanings of words are relative in a similar way. Others, such as Bays, argue that the mathematics alone does not support these conclusions. The explanation here is given for the simplest kind of countable model, one whose “is a member of” is real membership (a transitive model); Bays notes that models of other kinds need a more careful account. This entry covers only the mathematical explanation."
sources:
  - title: "Wikipedia: Skolem's paradox"
    url: https://en.wikipedia.org/wiki/Skolem%27s_paradox
    note: "Statement of the paradox; Cantor 1874; Löwenheim 1915 and Skolem’s generalisations of 1920 and 1922; Skolem’s 1922 explanation and the “paradoxical state of affairs” quotation; relativity and absoluteness; Kleene’s “no absolute notion of countability”; Zermelo’s “hoax” reaction and 1931 attack on “relativism”, his turn to second-order logic, and the result’s quick acceptance by the mathematical community; no countable models in second-order logic with full semantics; the Skolemite view of Goodstein and Wang; Putnam treating it as a paradox of the philosophy of language."
  - title: "Stanford Encyclopedia of Philosophy: Skolem's Paradox (Timothy Bays)"
    url: https://plato.stanford.edu/entries/paradox-skolem/
    note: "Exact statement of the Löwenheim–Skolem theorem (Löwenheim 1915 for one sentence, Skolem for countable sets of sentences with infinite models); the formula for “x is uncountable” read inside a model and outside it, for countable transitive models, and the note that non-transitive models need further analysis; the solution as an equivocation, essentially Skolem’s own of 1922; the mathematical consensus; Skolem’s view that set theory cannot serve as a foundation; the conclusion that the mathematics alone does not yield Skolemite conclusions."
---
