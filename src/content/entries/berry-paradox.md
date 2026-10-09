---
title: "Berry paradox"
titleAccent: "paradox"
aka: ["Berry's paradox", "smallest number not nameable", "definable numbers", "nameable number"]
chapter: self-reference
status: defused
uniqueness: related
anchor: liar-paradox
simplification: light
noMaths: true
written: true
sourcesVerified: true
problem: "Can a short phrase name the smallest number that cannot be named in so few words?"
claimA: "“Definable in under sixty letters” means one fixed thing, so some whole number is the smallest that has no such definition."
claimB: "The phrase “the smallest positive integer not definable in under sixty letters” has fewer than sixty letters, so it defines that number in under sixty letters."
verdict: "On the standard repair, “definable” has no single fixed meaning: a phrase that talks about what can be defined belongs to a higher level than the phrases it talks about."
whatBreaks: "The assumption that “definable” means one fixed thing, even when a definition is allowed to talk about definability itself."
statusNote: "the first claim is wrong. The clash disappears once the word “definable” is given a level, with definitions at one level allowed to talk about definitions at lower levels only. The same idea turns into precise theorems about what a formal language cannot define."
setup: "There are only so many phrases of fewer than sixty letters, so only finitely many whole numbers can be defined in so few. Some numbers are therefore left out, and one of them is the smallest. Now take the phrase “the smallest positive integer not definable in under sixty letters”. It is fifty-seven letters long. It picks out a particular number, using fewer than sixty letters. So that number is definable in under sixty letters after all, and it was supposed to be the smallest that is not. Bertrand Russell was the first to discuss the paradox in print, in 1906, and credited it to G. G. Berry, a junior librarian at the Bodleian Library in Oxford."
whyWrong: "The count of definable numbers seems solid, and so does the reading of the phrase. They cannot both stand. What fails is the sentence “definable in under sixty letters”. In the first step it is used as a fixed test applied to every phrase. In the last step the phrase being tested is itself a description of that test, and so the test is being applied to something that mentions it."
resolution:
  - "Logicians trace the trouble to words like “definable”, “nameable” and “true”, which shift their meaning when a phrase uses them about itself. One standard repair gives such words levels. A phrase at level one may talk about what can be defined at level zero, but not about what can be defined at level one. The troublesome phrase then belongs to a higher level than the definitions it was supposed to be counted among, and the contradiction does not arise. This hierarchy of levels goes back to Alfred Tarski, and the same idea is used to treat the [liar paradox](liar-paradox)."
  - "So the first claim is the one to drop: “definable” has no single fixed meaning that a phrase can apply to itself. Precise versions of the argument give theorems rather than contradictions. In 1989 George Boolos used a formal version of the Berry argument to prove Gödel’s incompleteness theorem in a much simpler way. Gregory Chaitin built a version using the lengths of computer programs and proofs, which proves certain impossibility results."
finePrint: "The level-by-level repair is not without critics. The strict hierarchy of levels is known to be incomplete, a point credited to Saul Kripke. The logician Jean-Yves Girard has called it “Richard’s paradox”, but that name normally belongs to a different puzzle, [Richard’s paradox](richards-paradox), which lists definable real numbers rather than whole numbers."
sources:
  - title: "Wikipedia: Berry paradox"
    url: "https://en.wikipedia.org/wiki/Berry_paradox"
    note: "Source for the sixty-letter version (fifty-seven letters long), the history, Russell and Berry, the stratified repair, the Boolos and Chaitin results, and Girard calling it “Richard’s paradox”. Letter count checked by hand."
  - title: "Stanford Encyclopedia of Philosophy: Paradoxes and Contemporary Logic"
    url: "https://plato.stanford.edu/entries/paradoxes-contemporary-logic/"
    note: "Checked: Russell’s 1906 statement, the syllable version, and the treatment of the paradox alongside Russell’s analysis of the Liar. It treats Berry’s and Richard’s paradoxes as two separate paradoxes of definability. This page does not itself state the diagnosis used here."
---
