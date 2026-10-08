---
title: "Curry's paradox"
titleAccent: paradox
aka: ["Löb's paradox", "if this sentence is true then", "Haskell Curry", "proves anything"]
chapter: self-reference
status: unreconciled
uniqueness: related
anchor: liar-paradox
simplification: heavy
noMaths: false
order: 103
written: true
sourcesVerified: false
problem: "Can a sentence saying “if this sentence is true, then all numbers are prime” be used to prove anything at all?"
claimA: "A sentence can say “if this sentence is true, then all numbers are prime”, and ordinary reasoning shows that sentence is true."
claimB: "If that sentence is true, then all numbers are prime, which is false."
verdict: "Every known fix gives up a basic rule of reasoning or a plain idea about truth, and none is widely accepted."
whatBreaks: "A basic rule of reasoning, or the idea that a sentence’s truth works as it appears to."
statusNote: "the Stanford Encyclopedia of Philosophy groups the responses into those that restrict truth or sets and those that change logic, and each gives up something big."
setup: "Haskell Curry wrote about this in 1942, and Wikipedia says it has also been called Löb’s paradox. The Stanford Encyclopedia gives an informal version. Suppose a friend says: “If what I’m saying using this very sentence is true, then all numbers are prime.” Call the sentence k. Suppose k is true. Then, by what k says, if k is true then all numbers are prime. Since k is true, it follows that all numbers are prime. We have now shown, assuming only that k is true, that all numbers are prime. So, by the rule of conditional proof, we can affirm the conditional: if k is true, then all numbers are prime. But that is exactly what k says. So k is true. And so, by modus ponens, all numbers are prime."
whyWrong: "The Internet Encyclopedia of Philosophy notes that, unlike the Liar, this paradox does not rely on negation. Wikipedia says the argument uses only a few apparently innocent deduction rules: the rule of assumption for conditional proof, the rule of contraction, and modus ponens, which are included in most common logical systems. Since the claim at the end is arbitrary, any logic with these rules would let one prove everything."
resolution:
  - "The Stanford Encyclopedia of Philosophy divides the responses into two classes. Topic-specific responses accept that a theory in which the paradox can be built proves everything, but deny that the theories of truth, sets or properties are of that kind. Logical responses insist there can be a theory that allows the paradox without proving everything, and so must give up one of the logical principles in the derivation."
  - "Wikipedia notes that the axiom of unrestricted comprehension, which would let one build such a self-referring set, is not supported by modern set theory, so the paradox is avoided there. In the 1930s Curry’s paradox and the related Kleene–Rosser paradox played a major role in showing that various formal logic systems with self-referring expressions were inconsistent."
positions:
  - title: Restrict the naive principle of truth or sets
    body: "Keep classical logic, but deny that a sentence and the claim that it is true can always be swapped for each other, or that every description makes a set. Tarski’s levels of language, the revision theory of truth, contextualist views and Russell-style type theories are examples listed by the Stanford Encyclopedia. Cost: each gives up the plain principle that truth, or set membership, works without restriction, and the Stanford Encyclopedia notes that the objections to them are those raised against the answers to the Liar and Russell’s paradoxes."
  - title: Give up contraction (keep modus ponens)
    body: "Accept modus ponens but deny the principle that if assuming a conditional leads to its consequent, the consequent follows. Some do this by rejecting the form of modus ponens that merges repeated use of an assumption, using a framework that distinguishes using an assumption once from using it twice. Others keep that and deny conditional proof. The Stanford Encyclopedia says this strategy was first proposed by Moh in 1954. Cost: it means rejecting standard rules of reasoning for the conditional, and the strong version needs a special framework in which assumptions are not freely reused."
  - title: Give up detachment (keep conditional proof)
    body: "Accept that a theory’s conditional obeys contraction, but deny modus ponens, the step from “if A then B” and A to B. This is a more recent strategy, advocated in different ways by David Ripley and Jc Beall. Cost: the Stanford Encyclopedia says it is charged with being counterintuitive, and the replies appeal to a link between consequence and what is coherent to accept or reject."
finePrint: "The Stanford Encyclopedia’s entry on Curry’s paradox is long and gives more detail than this entry. The Internet Encyclopedia of Philosophy adds that the paradox is a problem for the paraconsistent way out of the Liar, since that approach is said by critics not to solve Curry’s paradox. Which of the positions above is best is not settled by the sources."
sources:
  - title: "Wikipedia: Curry's paradox"
    url: https://en.wikipedia.org/wiki/Curry%27s_paradox
  - title: "Stanford Encyclopedia of Philosophy: Curry’s Paradox"
    url: https://plato.stanford.edu/entries/curry-paradox/
  - title: "Internet Encyclopedia of Philosophy: Liar Paradox"
    url: https://iep.utm.edu/liar-paradox/
---
