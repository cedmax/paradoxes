---
title: "Berry paradox"
titleAccent: "paradox"
aka: ["Berry's paradox", "smallest number not nameable", "definable numbers", "nameable number"]
chapter: self-reference
order: 70
status: defused
uniqueness: related
anchor: liar-paradox
simplification: light
noMaths: true
sourcesVerified: true
problem: "Can a short phrase name the smallest number that cannot be named in so few words?"
claimA: "“Definable in under sixty letters” means one fixed thing, so some whole number is the smallest that has no such definition."
claimB: "The phrase “the smallest positive integer not definable in under sixty letters” has fewer than sixty letters, so it defines that number in under sixty letters."
verdict: "An unrestricted test for what a phrase defines cannot also cover phrases about that very test. Giving definitions levels is one standard way to block the clash."
whatBreaks: "The assumption that one fixed, unrestricted meaning of “definable” can cover descriptions about definability itself."
statusNote: "the unrestricted definition test fails. A standard repair separates levels of definition, though that repair has limits and other formal treatments exist."
setup: "Only finitely many phrases have fewer than sixty letters, so they cannot name every positive whole number. Consider “the smallest positive integer not definable in under sixty letters”. It has fifty-seven letters. It seems to define a number that it says has no definition that short."
whyWrong: "The phrase uses “definable” as a test for all short descriptions, then asks that same test to include a description about itself. That unrestricted use is the hidden assumption behind the clash."
resolution:
  - "The contradiction shows that the unrestricted test cannot work as assumed. It does not reveal a number that both has and lacks an ordinary short name."
  - "One standard repair gives definitions levels. A description about lower-level definitions then belongs to a higher level, outside the list it discusses. Formal versions yield results about the limits of definition and proof."
finePrint: "The fifty-seven-letter count excludes spaces and punctuation. Russell discussed the paradox in 1906 and credited G. G. Berry. A hierarchy is one repair, not the only treatment. Kripke objected that strict levels can also block harmless statements. Boolos used a formal Berry-style argument in a proof of incompleteness, and Chaitin developed related limits using program lengths. The [Richard paradox](richards-paradox) concerns definable real numbers rather than whole numbers."
sources:
  - title: "Wikipedia: Berry paradox"
    url: "https://en.wikipedia.org/wiki/Berry_paradox"
    note: "Source for the sixty-letter version (fifty-seven letters long), the history, Russell and Berry, the stratified repair, the Boolos and Chaitin results, and Girard calling it “Richard’s paradox”. Letter count checked by hand."
  - title: "Stanford Encyclopedia of Philosophy: Paradoxes and Contemporary Logic"
    url: "https://plato.stanford.edu/entries/paradoxes-contemporary-logic/"
    note: "Checked: Russell’s 1906 statement, the syllable version, and the treatment of the paradox alongside Russell’s analysis of the Liar. It treats Berry’s and Richard’s paradoxes as two separate paradoxes of definability. This page does not itself state the diagnosis used here."
  - title: "Stanford Encyclopedia of Philosophy: Self-Reference and Paradox"
    url: "https://plato.stanford.edu/entries/self-reference/"
    note: "Source for Kripke’s objection to strict hierarchies (section 3.1, Building Explicit Hierarchies): harmless sentences such as his Nixon and Jones examples cannot even be formulated in a Tarskian hierarchy. Section 1.1 discusses Berry’s paradox. The last 2,131 characters of the page were not read."
---
