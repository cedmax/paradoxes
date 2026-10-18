---
title: "Quine's paradox"
format: argument
searchTerms:
  [
    "yields falsehood when preceded by its quotation",
    "Quine sentence",
    "Liar without this",
    "indirect self-reference",
  ]
chapter: self-reference
status: unreconciled
variantOf: liar-paradox
simplification: light
noMaths: true
order: 110
sourcesVerified: true
problem: "Is a sentence that calls itself false, without ever saying “this sentence”, true or false?"
claimA: "Every sentence is true or false, including one that never uses a word like “this”."
claimB: "A sentence is true if what it says is right, and false if it isn’t."
verdict: "Taking out the word “this” does not help: the sentence traps truth exactly as the Liar does. There is no agreed solution, and each of the main proposals faces a serious objection."
whatBreaks: "The contested combination is unrestricted truth and the assumption that every sentence is true or false. Indirect self-reference reaches the same trap as the liar."
statusNote: "there is no commonly agreed solution to Liar-style paradoxes, and each of the main proposals listed below faces a serious objection. Quine’s sentence adds that blaming or banning words like “this” is not a way out."
setup: "Start with the phrase “yields falsehood when preceded by its quotation”. Put it after a quoted copy of itself: “yields falsehood when preceded by its quotation” yields falsehood when preceded by its quotation. The whole sentence says that putting this phrase after its own quotation makes a false sentence. That is exactly how the whole sentence was made."
whyWrong: "The sentence therefore says it is false. If it is true, it is false. If it is false, it says something correct and is true. Removing the words “this sentence” has left the [liar paradox](liar-paradox) intact."
resolution:
  - "Quine’s sentence reaches itself through quotation rather than directly naming itself. A ban on words such as “this” would not stop it. The remaining responses are the liar’s, with the same costs."
positions:
  - title: "Neither true nor false"
    body: "Leave the sentence without either truth value. Cost: replacing “falsehood” with “not true” brings back the familiar liar objection to this answer."
  - title: "Both true and false"
    body: "Accept the contradiction. Cost: special rules of logic are needed to stop a contradiction from proving everything."
  - title: "Truth comes in levels"
    body: "Allow a sentence to call only lower-level sentences false. Cost: ordinary language has one word for falsehood, and ordinary exchanges can resist any fixed hierarchy."
finePrint: "Quine presented the example in 1962. The wording is deliberately awkward because the quotation does the work of self-reference. Formal logic uses related indirect constructions, called diagonalisation. Boolos pointed out an ambiguity in how the quotation marks are paired and proposed clearer notation; that is a concern about writing the sentence, not an agreed removal of the trap. [Yablo’s paradox](yablos-paradox) tests a different route, using an endless list in which no sentence directly mentions itself."
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
