---
title: "Quine's paradox"
titleAccent: "paradox"
aka:
  [
    "yields falsehood when preceded by its quotation",
    "Quine sentence",
    "Liar without this",
    "indirect self-reference",
  ]
chapter: self-reference
status: unreconciled
uniqueness: variant
anchor: liar-paradox
simplification: light
noMaths: true
order: 104
written: true
sourcesVerified: false
problem: "Is a sentence that calls itself false, without ever saying “this sentence”, true or false?"
claimA: "Every sentence is true or false, including one that never uses a word like “this”."
claimB: "A sentence is true if what it says is right, and false if it isn’t."
verdict: "Taking out the word “this” does not help: the sentence traps truth exactly as the Liar does. There is no agreed solution, and each of the main proposals faces a serious objection."
whatBreaks: "The same assumption as in the Liar: that every sentence is either true or false, even one that talks about itself by an indirect route."
statusNote: "there is no commonly agreed solution to Liar-style paradoxes, and each of the main proposals listed below faces a serious objection. Quine’s sentence adds that blaming or banning words like “this” is not a way out."
setup: "The philosopher Willard Van Orman Quine gave this version of the [Liar paradox](liar-paradox) in an article called “Paradox” in Scientific American in 1962, reprinted in 1966 as “The Ways of Paradox”. Start with the phrase “yields falsehood when preceded by its quotation”. Its quotation is the same phrase inside quotation marks. Now write the phrase straight after its own quotation: “yields falsehood when preceded by its quotation” yields falsehood when preceded by its quotation. That is a complete sentence. It says that the phrase, put after its own quotation, makes a false sentence. But the phrase put after its own quotation is this very sentence. So the sentence says that it is false. If it is true, it is false. If it is false, what it says is right, so it is true."
whyWrong: "Many philosophers who tried to explain the Liar put the blame on the word “this”, or on words that do the same job. Quine’s sentence has no such word. No part of it names the sentence. It reaches itself by a roundabout route: the word “its” points back to the phrase it sits in, and the sentence is that phrase applied to its own quotation. The writer Douglas Hofstadter, in Gödel, Escher, Bach (1979), called this indirect self-reference. Logicians build Liar sentences inside formal languages by a similar roundabout method, called diagonalisation: any language that can describe its own grammar can produce a sentence that, in effect, says of itself that it is not true. So the trap does not depend on any one word."
resolution:
  - "Once the sentence has been built, the reasoning that follows is the Liar’s, step for step, and so are the possible ways out. Quine’s sentence shows that one tempting answer is not available: a rule against words like “this” would leave Quine’s sentence untouched. The responses that remain are the Liar’s own, and each one has a big cost."
positions:
  - title: "Some sentences are neither"
    body: "The sentence is neither true nor false. Cost: say “not true” instead of “falsehood” and the trap comes back, because being neither means being not true, which is what the sentence says. Defenders of this view struggle to state their own answer without walking into it."
  - title: "Some sentences are both"
    body: "The sentence is both true and false, and that is accepted. Cost: it gives up the rule that nothing is both true and false, and needs a special logic to stop one contradiction from spreading to everything."
  - title: "Truth and falsehood come in levels"
    body: "Quine’s own suggestion, inspired by Bertrand Russell’s theory of types and by Alfred Tarski, was to give words like “falsehood” levels, so that a sentence can only call sentences at a lower level false. The paradoxical form of his sentence is then ruled out. Cost: ordinary language has one word “false”, not many, and Saul Kripke showed that ordinary claims about what other people say can be hard to place on any fixed level."
finePrint: "The logician George Boolos, prompted by his student Michael Ernst, argued that the sentence as usually written may be ambiguous, because it is not clear which quotation marks pair up with which, and he proposed a new way of writing quotations to fix this. That is a point about how to write the sentence down, and the source does not present it as removing the paradox. Yablo’s paradox, which uses an endless list of sentences, is often said to avoid self-reference altogether, even by a roundabout route, though Graham Priest has argued that it does not."
sources:
  - title: "Wikipedia: Quine's paradox"
    url: "https://en.wikipedia.org/wiki/Quine%27s_paradox"
    note: "Source for the sentence and how it works, Quine’s 1962 Scientific American article and its 1966 reprint, the point that philosophers blamed “this” and that the sentence has no such word, the role of “its”, Hofstadter’s comment, Quine’s levels proposal (inspired by Russell and Tarski) and Boolos and Ernst on quotation marks."
  - title: "Stanford Encyclopedia of Philosophy: Liar Paradox"
    url: "https://plato.stanford.edu/entries/liar-paradox/"
    note: "Source for diagonalisation producing Liar sentences in any language that can express basic syntax, and for the costs of the three families of response: the revenge problem for “neither”, the need for a special logic for “both”, and Kripke’s objection to fixed levels."
  - title: "Stanford Encyclopedia of Philosophy: Self-Reference"
    url: "https://plato.stanford.edu/entries/self-reference/"
    note: "Source for the distinction between direct and indirect self-reference, and for Yablo’s paradox as a candidate paradox without self-reference, and Priest’s objection that it is self-referential."
---
