---
title: "Yablo's paradox"
format: argument
searchTerms:
  [
    "Yablo",
    "omega liar",
    "liar without self-reference",
    "infinite liar",
    "paradox without self-reference",
  ]
chapter: self-reference
order: 100
status: unreconciled
relatedTo: liar-paradox
simplification: light
noMaths: true
sourcesVerified: true
problem: "In an endless list where each sentence says that all the later ones are untrue, is any sentence true?"
claimA: "Every sentence on the list is either true or untrue."
claimB: "A sentence on the list is true if what it says is right, and untrue if it isn’t."
whatBreaks: "The ordinary rules for truth cannot all hold for this endless list. Whether to change those rules or the reasoning about infinity is contested."
statusNote: "the contradiction has no agreed solution. There is also a separate debate over whether the list hides a form of self-reference."
setup: "Write an endless list. The first sentence says every later sentence is untrue. The second says every sentence after it is untrue. Every sentence says the same about the ones after it. None mentions itself."
whyWrong: "Suppose one sentence is true. Everything after it must be untrue. But the next sentence says just that, so it is true too, contradicting the first. Therefore none can be true. Yet if all are untrue, the first sentence says something correct and must be true."
resolution:
  - "Either starting point leads to a clash. It resembles the [liar paradox](liar-paradox), although each sentence only points forward."
  - "Yablo argues that this shows self-reference is not needed for a paradox. Critics say the description of the whole list hides circularity. Settling that debate would still leave the problem of which rules about truth to change."
positions:
  - title: "A hidden liar"
    body: "Treat the definition of the whole list as circular and use a response to the [liar paradox](liar-paradox). Cost: the liar has no agreed fix, and critics dispute whether this kind of circularity explains the trouble."
  - title: "Too much reasoning about infinity"
    body: "Question the move from separate sentences to a conclusion about the whole endless list. Cost: some formal accounts then allow a true sentence while ruling out every particular sentence as true."
  - title: "Change the rules for truth"
    body: "Allow neither truth nor falsehood, allow both, or put truth into levels. Cost: these inherit the objections faced by the same proposals for the liar."
finePrint: "The list must be endless. A finite version has no contradiction. Yablo published the example in 1993 after an earlier version in 1985. Priest argues that the definition of the whole sequence contains hidden self-reference; Cook argues that such a broad sense of circularity does not settle the issue. The technical debate about infinite reasoning distinguishes the informal argument from what can be proved in ordinary formal arithmetic. The responses here give their main ideas and costs, rather than that machinery."
sources:
  - title: "Wikipedia: Stephen Yablo, section Yablo's paradox"
    url: "https://en.wikipedia.org/wiki/Stephen_Yablo"
    note: "Source for the list, the 1985 and 1993 papers, the derivation that every sentence is both untrue and true, Priest’s dispute, and the link to the Ketland paper on formal arithmetic."
  - title: "Stephen Yablo, Paradox Without Self-Reference, Analysis 53 (1993)"
    url: "https://www.mit.edu/~yablo/pwsr.pdf"
    note: "Source for the original statement and derivation, and the quotes “not in any way circular” and “neither necessary nor sufficient”."
  - title: "Internet Encyclopedia of Philosophy: Yablo's Paradox (Roy Cook)"
    url: "https://iep.utm.edu/yablo-pa/"
    note: "Source for Priest’s 1997 argument and Cook’s reply that it holds only in a minimal sense true of almost any description in arithmetic, Priest’s claim about finite reasoners (“controversial at best”), and Ketland’s result that the conditions are consistent in first-order arithmetic but omega-inconsistent."
  - title: "Stanford Encyclopedia of Philosophy: Self-Reference"
    url: "https://plato.stanford.edu/entries/self-reference/"
    note: "Source for the name omega liar, the statement that whether the paradox is self-referential is still discussed, Yablo versus Priest, Butler (2017), the point that any finite version is consistent, and the quote that no commonly agreed solution exists."
  - title: "Stanford Encyclopedia of Philosophy: Liar Paradox"
    url: "https://plato.stanford.edu/entries/liar-paradox/"
    note: "Source for Yablo’s paradox as a liar without circularity, the earlier construction by Visser (1984), the remark that its avoidance of self-reference is much debated, and the costs of gap, glut and level-based fixes for the liar."
---
