---
title: "Curry's paradox"
format: argument
searchTerms:
  ["Curry", "Löb's paradox", "if this sentence is true", "Haskell Curry", "proves anything"]
chapter: self-reference
order: 90
status: unreconciled
relatedTo: liar-paradox
simplification: "heavy"
noMaths: true
sourcesVerified: true
problem: "Can the sentence “If this sentence is true, then Germany borders China” prove that Germany borders China?"
claimA: "A sentence is true exactly when what it says is so, and the usual rules for “if … then” apply to it."
claimB: "Some claims, such as “Germany borders China”, are false and cannot be proved."
whatBreaks: "Either unrestricted talk about a sentence’s own truth or a familiar rule for “if … then” must change. There is no agreed choice."
statusNote: "the fixes bar a sentence from talking about its own truth, bar using an assumption twice, or weaken the rules for “if … then”. Unlike the [liar paradox](liar-paradox), no denial is involved, so changing “not” does not help."
setup: "Take the sentence “If this sentence is true, then Germany borders China.” Suppose it is true. The rule that a true sentence says something that is the case lets the supposition yield what it says: “If this sentence is true, then Germany borders China.” Its condition is met by the same supposition, so Germany borders China follows. That seems to prove exactly what the sentence says: if it is true, Germany borders China. If what a sentence says is the case, the sentence is true. That rule now lets the conclusion establish that this sentence is true. Apply the conditional once more and Germany borders China follows outright."
whyWrong: "Germany does not border China. Replace that claim with any other claim and the same reasoning seems to prove it. The argument uses both directions of the truth rule, reuses its supposition, turns a conclusion drawn under a supposition into an “if … then” statement and applies a conditional whose condition has been met."
resolution:
  - "A system that proves any claim at all cannot distinguish good reasoning from bad. Something in the argument has to be restricted."
  - "The [liar paradox](liar-paradox) says a sentence is untrue. Curry’s sentence only uses “if … then”. That makes it a separate test for proposed fixes to the liar."
positions:
  - title: "Limit talk about truth"
    body: "Block this kind of sentence from talking about its own truth. Cost: ordinary language can talk about its own truth, so the restriction needs explaining."
  - title: "Limit reuse of assumptions"
    body: "Reject the step that reuses the assumption that the sentence is true. Cost: repeating an assumption is allowed in ordinary logic, and related versions of Curry’s puzzle still challenge some such approaches."
  - title: "Change “if … then”"
    body: "Restrict proving a conditional from an assumption, or drawing its conclusion when the condition holds. Cost: both are basic rules of everyday reasoning."
finePrint: "The proof is heavily compressed. The principles at issue include unrestricted truth, conditional proof, contraction, which permits reusing an assumption, and modus ponens, which draws B from A and “if A then B”. Haskell Curry published a formal version in 1942; truth-based versions followed. Some logics that permit gaps or contradictions can block Curry, while others cannot. The three families of responses contain many technical variants. This entry preserves the arbitrary-conclusion mechanism rather than surveying those variants."
sources:
  - title: "Wikipedia: Curry's paradox"
    url: "https://en.wikipedia.org/wiki/Curry%27s_paradox"
    note: "Main source for the example sentence, the informal proof and its rules, Curry (1942) and the set-theory version."
  - title: "Stanford Encyclopedia of Philosophy: Curry's Paradox (Lionel Shapiro and Jc Beall)"
    url: "https://plato.stanford.edu/entries/curry-paradox/"
    note: "Source for the lack of negation, the families of response and their objections, and no response being widely accepted."
  - title: "Stanford Encyclopedia of Philosophy: Self-Reference"
    url: "https://plato.stanford.edu/entries/self-reference/"
    note: "Source for Curry’s paradox needing no negation and fewer assumptions than the liar."
  - title: "Stanford Encyclopedia of Philosophy: Liar Paradox"
    url: "https://plato.stanford.edu/entries/liar-paradox/"
    note: "Source for paraconsistent approaches treating Curry separately, and for the cost of level-based fixes."
---
