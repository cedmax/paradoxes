---
title: "Curry's paradox"
titleAccent: "paradox"
aka: ["Curry", "Löb's paradox", "if this sentence is true", "Haskell Curry", "proves anything"]
chapter: self-reference
status: unreconciled
uniqueness: related
anchor: liar-paradox
simplification: light
noMaths: true
written: true
sourcesVerified: false
problem: "Can the sentence “If this sentence is true, then Germany borders China” prove that Germany borders China?"
claimA: "A sentence is true exactly when what it says is the case, and the everyday rules for reasoning with “if … then” are always safe."
claimB: "Some claims, such as “Germany borders China”, are false and cannot be proved."
verdict: "With a sentence that talks about its own truth and a few everyday rules of reasoning, any claim at all can be proved. There is no agreed fix, and each one costs something big."
whatBreaks: "Either the rule that a sentence is true exactly when what it says is the case, or one of the everyday rules for reasoning with “if … then”. Which one goes is what the responses disagree on, and each choice costs something big."
statusNote: "like the [liar paradox](liar-paradox), it has no fix that most experts accept, and the Stanford Encyclopedia of Philosophy treats the debate as ongoing. It is harder than the liar in one way: some fixes that work for the liar do not work here."
setup: "Take the sentence: “If this sentence is true, then Germany borders China.” Call it C. Now reason in the ordinary way. To show that an “if … then” sentence holds, assume the “if” part and see whether the “then” part follows. So assume C is true. Then what C says holds: if C is true, Germany borders China. C is true, by the assumption, so Germany borders China. That shows: if C is true, then Germany borders China. But that is exactly what C says, so C is true. And since C is true and C says that if it is true then Germany borders China, Germany borders China."
whyWrong: "Germany does not border China, and nothing in the argument looked like a trick. Every step uses a rule people trust everywhere else: assume something and see what follows, use an assumption you have already made a second time, and if you have “if A then B” and A, conclude B. The claim about Germany could be swapped for any claim at all. So the same argument proves everything, which means something in it must go."
resolution:
  - "Curry’s paradox is a close relative of the [liar paradox](liar-paradox), with two twists. First, it needs no “not”. The liar works by a sentence denying its own truth. Curry’s sentence only says “if I am true, then something”, and no denial appears anywhere. Second, it does not end in a plain contradiction. It ends by proving an arbitrary claim, which is worse, since a system that proves everything is useless."
  - "The first twist matters because several well-known fixes for the liar work by changing how “not” behaves. Some allow certain sentences to be neither true nor false, and some allow certain sentences to be both. The philosopher P. T. Geach argued in 1955 that Curry’s paradox cannot be solved “merely by adopting a system that contains a queer sort of negation”. Some of these logics do resist Curry’s paradox and some do not, so a logic chosen to handle the liar has to be checked separately against Curry."
  - "The responses fall into a few groups, and the Stanford Encyclopedia of Philosophy does not report that any of them is widely accepted."
positions:
  - title: "Limit what can talk about its own truth"
    body: "Keep ordinary logic, but block sentences like C, for example by splitting truth into levels, as some do for the liar, or by limiting which collections can be formed. Cost: the same cost as for the liar, since ordinary language plainly does talk about its own truth, and the Stanford Encyclopedia of Philosophy notes that these moves are judged on the same grounds as the fixes for the liar and for Russell’s paradox."
  - title: "Do not reuse an assumption"
    body: "Block the step that uses the assumption that C is true a second time, merging two uses into one. This is called rejecting contraction, and Moh Shaw-Kwei was the first to propose it, in 1954. Cost: contraction is part of most standard logics, including ordinary first-order logic, and a variant of Curry’s paradox about valid arguments poses an obstacle for one common form of this response."
  - title: "Drop a basic rule about “if … then”"
    body: "Give up the rule that you may prove “if A then B” by assuming A and deriving B, or the rule that from “if A then B” and A you may conclude B. Cost: these rules are about as basic as reasoning gets, the encyclopedia notes the charge that such responses are counterintuitive, and for some versions of the paradox the rules have seemed inescapable."
finePrint: "The paradox is named after the logician Haskell Curry, who published it in 1942 in a form about formal logics. It is also called Löb’s paradox. Geach and Martin Löb showed in 1955 how it arises for sentences about truth. A version in set theory uses the collection of all things such that, if they belong to themselves, some chosen claim holds. Modern set theory avoids it by not allowing every description to form a set. The three groups of responses here are simplified, and the technical options within each are many."
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
