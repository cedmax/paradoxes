---
title: "Curry's paradox"
titleAccent: "paradox"
aka: ["Curry", "Löb's paradox", "if this sentence is true", "Haskell Curry", "proves anything"]
chapter: self-reference
status: unreconciled
uniqueness: related
anchor: liar-paradox
simplification: "heavy"
noMaths: true
written: true
sourcesVerified: true
problem: "Can the sentence “If this sentence is true, then Germany borders China” prove that Germany borders China?"
claimA: "A sentence is true exactly when what it says is the case, and the familiar rules for reasoning with “if … then” can be applied to this sentence."
claimB: "Some claims, such as “Germany borders China”, are false and cannot be proved."
verdict: "With a sentence that talks about its own truth and a few familiar rules of reasoning, any claim at all can be proved. There is no agreed fix, and each proposed fix gives up a principle that is widely relied on."
whatBreaks: "Either unrestricted talk about a sentence’s own truth or a familiar rule for “if … then” must change. There is no agreed choice."
statusNote: "there is no agreed fix. Unlike the [liar paradox](liar-paradox), the argument uses no denial, so changing the rules for “not” alone is not enough."
setup: "Take the sentence “If this sentence is true, then Germany borders China.” Suppose it is true. Its condition is then met, so Germany borders China follows. That seems to prove exactly what the sentence says: if it is true, Germany borders China. So the sentence appears to be true. Apply it again and Germany borders China follows outright."
whyWrong: "Germany does not border China. Replace that claim with any other claim and the same reasoning seems to prove it. Each step uses familiar rules: assume something, draw a consequence and use an “if … then” statement whose condition has been met."
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
    note: "Source for the Germany and China sentence, the step-by-step informal proof, the rules used (conditional proof, contraction and modus ponens) and that they are part of most common logics including first-order logic, Curry (1942), the name Löb’s paradox, the set-theory version and its avoidance in modern set theory."
  - title: "Stanford Encyclopedia of Philosophy: Curry's Paradox (Lionel Shapiro and Jc Beall)"
    url: "https://plato.stanford.edu/entries/curry-paradox/"
    note: "Source for the absence of negation, Geach’s 1955 remark, the point that some logics that handle the liar do not handle Curry, the groups of responses (topic-specific, contraction-free, rejecting conditional proof or modus ponens) and the objections to each, Moh Shaw-Kwei (1954), Geach and Löb (1955), and the lack of any response reported as widely accepted."
  - title: "Stanford Encyclopedia of Philosophy: Self-Reference"
    url: "https://plato.stanford.edu/entries/self-reference/"
    note: "Supports the description of Curry’s paradox as a paradox of self-reference that does not directly involve negation and needs fewer assumptions about logic than the liar."
  - title: "Stanford Encyclopedia of Philosophy: Liar Paradox"
    url: "https://plato.stanford.edu/entries/liar-paradox/"
    note: "Source for the point that paraconsistent approaches must treat Curry’s paradox separately from the liar, and for the cost of level-based fixes: self-reference occurs without trouble in natural languages."
---
