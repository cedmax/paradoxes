---
title: Skolem's paradox
format: argument
searchTerms:
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
order: 140
sourcesVerified: true
problem: "How can a mathematical world with only enough objects to list still contain a set it calls impossible to list?"
claimA: "If all the objects in a mathematical world can be listed from outside, that world must be able to list every set inside it."
claimB: "A mathematical world can have only enough objects to list from outside, yet correctly say that some of its sets cannot be listed inside it."
whatBreaks: "The assumption that a counting method available outside a mathematical world must also be available inside it."
statusNote: "the apparent contradiction confuses counting from outside with counting inside. The missing matching explains the difference, and the mathematics is settled."
setup: "A set is countable if its members can be matched one by one with the counting numbers. A model is a mathematical world in which a theory’s rules hold. A theorem says that, if ordinary set theory has a model, it has one with only countably many objects. Yet set theory proves that some sets are uncountable."
whyWrong: "From outside, every set in this small world has only enough members to list. How can the world itself deny that? Listing a set requires a matching between its members and the counting numbers. That matching is another mathematical object. It need not be among the objects the world contains."
resolution:
  - "The world says “there is no matching” while looking only at the matchings inside it. An outside observer has a matching that is missing from the world. Both answers are correct about what is available in each place."
  - "Nothing contradicts itself inside set theory. The mistake is assuming that “countable” must give the same answer inside the model as outside it."
finePrint: "Skolem drew attention to this result in 1922. The Löwenheim–Skolem theorem concerns theories expressed in first-order logic, where “there is” ranges over objects in the model. It does not establish that set theory has a model in the first place. The explanation here uses the simplest setting, a transitive model, whose membership relation is ordinary membership; other models need a more careful account. Full second-order logic has a different meaning for its quantifiers and avoids this particular result. Philosophers still debate the implications for mathematical language, but the apparent mathematical contradiction has an agreed explanation."
sources:
  - title: "Wikipedia: Skolem's paradox"
    url: https://en.wikipedia.org/wiki/Skolem%27s_paradox
    note: "Main source for the statement, its history, Skolem’s 1922 explanation, and the later views."
  - title: "Stanford Encyclopedia of Philosophy: Skolem's Paradox (Timothy Bays)"
    url: https://plato.stanford.edu/entries/paradox-skolem/
    note: "Source for the theorem, “uncountable” read inside and outside a model, and the solution as an equivocation."
---
