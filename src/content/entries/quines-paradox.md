---
title: "Quine's paradox"
titleAccent: paradox
aka: ["yields falsehood when preceded by its quotation", "Quine sentence", "Liar without this"]
chapter: self-reference
status: unreconciled
uniqueness: variant
anchor: liar-paradox
simplification: heavy
noMaths: true
order: 104
written: true
sourcesVerified: false
problem: "Can a sentence be paradoxical without saying “this sentence” and without pointing at itself?"
claimA: "A sentence is paradoxical only if it refers to itself."
claimB: "A sentence built from a phrase and its own quotation can be as paradoxical as the Liar, without pointing at itself."
verdict: "Every known fix gives up something big, and the Liar entry lists the same trade-offs."
whatBreaks: "The idea that removing direct self-reference removes the paradox."
statusNote: "the answers offered for it are the same kind as for the Liar, and each has a large cost."
setup: "Willard Van Orman Quine stated this paradox. It is related to the [Liar paradox](liar-paradox), and it purports to show that a sentence can be paradoxical even if it is not self-referring and does not use words like “this”. The sentence is: “yields falsehood when preceded by its quotation” yields falsehood when preceded by its quotation. Take the phrase “yields falsehood when preceded by its quotation”. Its quotation is that phrase in quotation marks. The phrase preceded by its quotation is the whole sentence above. So the sentence says that the sentence itself is false. If it is false, then what it says is true."
whyWrong: "Many philosophers who tried to explain the Liar concluded that the trouble lay in the word “this” or its replacements. Wikipedia says Quine’s construction shows that this kind of paradox arises independently of such direct self-reference, because no word of the sentence refers to the sentence. It does contain a word, “its”, near the end, whose antecedent is the very predicate in which it occurs. So the sentence is not self-referring, but it contains a self-referring predicate."
resolution:
  - "The positions below are those Wikipedia reports for this paradox. They are the same families of answer that the Liar entry lists, including the idea that truth comes in levels."
positions:
  - title: Attach levels to terms such as “falsehood” (Quine)
    body: "Inspired by Russell’s type theory and Tarski’s work, Quine suggested labelling expressions like “falsehood” and “denote” with levels, so that whole sentences stand higher than their parts. A form like “Clause about falsehood0 yields falsehood1” is then correct, while an expression that denotes itself is not. Cost: Wikipedia calls it an unnatural linguistic resolution."
  - title: Quotation marks are ambiguous (Boolos)
    body: "George Boolos, inspired by his student Michael Ernst, wrote that the sentence might be syntactically ambiguous, because its several quotation marks cannot be matched up for certain. He revised ordinary quotation into a system where the length of the outer q-marks is set by the q-marks inside the expression. Cost: it requires revising traditional quotation into a new system of marks."
finePrint: "Wikipedia also reports that Douglas Hofstadter, in Gödel, Escher, Bach, suggests Quine’s sentence uses an indirect type of self-reference, and shows that indirect self-reference is crucial in many proofs of Gödel’s incompleteness theorems. That is a comment on the sentence, not a fix, so it is not listed as a position."
sources:
  - title: "Wikipedia: Quine's paradox"
    url: https://en.wikipedia.org/wiki/Quine%27s_paradox
---
