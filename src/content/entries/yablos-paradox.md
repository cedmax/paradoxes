---
title: "Yablo's paradox"
titleAccent: paradox
aka: ["Liar without self-reference", "infinite list of sentences", "Stephen Yablo"]
chapter: self-reference
status: unreconciled
uniqueness: related
anchor: liar-paradox
simplification: heavy
noMaths: false
order: 102
written: true
sourcesVerified: false
problem: "An endless list of sentences each says that all the later ones are untrue. Can any of them be true or untrue?"
claimA: "Each sentence on the list is either true or not true."
claimB: "Whichever of the two any sentence is, it leads to a contradiction."
verdict: "Every known fix gives up something big, and experts also dispute whether the list is truly free of self-reference."
whatBreaks: "The rule that every sentence has a coherent truth value, or the link between a sentence and its own truth."
statusNote: "Wikipedia and the Stanford Encyclopedia of Philosophy both report that whether the paradox really avoids self-reference is disputed, and the usual ways out of the Liar each carry a large cost."
setup: "Stephen Yablo published this in papers in 1985 and 1993. It is a Liar-like puzzle that uses an infinite list of sentences, not one sentence that talks about itself. The sentences are in order. The first says that every later sentence is not true. The second says that every sentence after it is not true. The third says the same of everything after it, and so on without end. Each sentence refers only to later ones. Yablo claims that it is not in any way circular."
whyWrong: "Suppose the first sentence is true. Then every later sentence is untrue, and in particular the second is untrue. But the second says that all the sentences after it are untrue, and if it is untrue, at least one later sentence is true. That contradicts the first sentence’s claim that all later ones are untrue. Suppose instead that the first sentence is untrue. Then some later sentence is true, but the same reasoning applied to that sentence gives a contradiction. Wikipedia sums up that there is no consistent way to give a truth value to any sentence on the list."
resolution:
  - "Wikipedia notes that the philosopher Graham Priest disputes Yablo’s claim that the list is not circular. The Stanford Encyclopedia says whether Yablo’s paradox really avoids self-reference is much debated, and the Internet Encyclopedia of Philosophy says there is controversy about whether it hides self-reference or circularity."
  - "The Internet Encyclopedia of Philosophy says an ideal answer to the Liar should also handle this paradox and Curry’s paradox. It describes several ways out of the Liar, which are listed below as they bear on this case."
positions:
  - title: Truth comes in levels (Tarski)
    body: "A sentence can only speak about the truth of sentences in a lower level of language, so no sentence applies “true” to itself or to anything on its own level. The Internet Encyclopedia of Philosophy says this also provides a way out of Yablo’s paradox. Cost: English has one word “true”, and this replaces it with an infinite sequence of truth predicates. Putnam objects that one has to stand outside the hierarchy to say that it exists, and within it one cannot say that every language has true sentences."
  - title: Some sentences are neither true nor false (Kripke)
    body: "The paradoxical sentence is meaningful but falls into a gap between true and false, and the language can still have its own truth predicate. Cost: the Internet Encyclopedia of Philosophy says the approach has trouble with the Strengthened Liar, and that it cannot state its own thesis, since the sentence “this sentence is not true” is not itself true in the theory."
  - title: Some sentences are both true and false (Priest)
    body: "A paradoxical sentence is both true and false, and logic is changed so that a contradiction does not let everything follow. Cost: the Internet Encyclopedia of Philosophy says critics complain that it does not seem to solve the Strengthened Liar or Curry’s paradox, and that it does violence to the intuition that a sentence cannot be both true and false in the same sense in the same situation."
finePrint: "Only the first position is described by the sources as explicitly handling Yablo’s paradox. The others are listed by the Internet Encyclopedia of Philosophy as ways out of the Liar in general, and their costs are those it gives for the Liar. The list in the setup is the one Wikipedia gives. The Stanford Encyclopedia states it with sentences numbered from zero."
sources:
  - title: "Wikipedia: Stephen Yablo"
    url: https://en.wikipedia.org/wiki/Stephen_Yablo
  - title: "Stanford Encyclopedia of Philosophy: Liar Paradox"
    url: https://plato.stanford.edu/entries/liar-paradox/
  - title: "Internet Encyclopedia of Philosophy: Liar Paradox"
    url: https://iep.utm.edu/liar-paradox/
---
