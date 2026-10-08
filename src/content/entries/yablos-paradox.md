---
title: "Yablo's paradox"
titleAccent: "paradox"
aka:
  [
    "Yablo",
    "omega liar",
    "liar without self-reference",
    "infinite liar",
    "paradox without self-reference",
  ]
chapter: self-reference
status: unreconciled
uniqueness: related
anchor: liar-paradox
simplification: light
noMaths: true
written: true
sourcesVerified: false
problem: "In an endless list where each sentence says that all the later ones are untrue, is any sentence true?"
claimA: "Every sentence on the list is either true or untrue."
claimB: "A sentence on the list is true if what it says is right, and untrue if it isn’t."
verdict: "A liar-style contradiction arises although no sentence talks about itself, and there is no agreed fix. Whether the list is free of hidden circularity is itself debated."
whatBreaks: "Either the assumption that every sentence on the list is true or untrue, or the ordinary rule for when a sentence is true, or the kind of reasoning about a whole endless list that produces the clash. Which one goes is what the responses disagree on, and each choice costs something big."
statusNote: "like the [liar paradox](liar-paradox), it has no commonly agreed solution, and every response costs something big. On top of that, experts still argue about whether the list really avoids self-reference."
setup: "Write an endless list of sentences. Sentence 1 says: every sentence after this one is untrue. Sentence 2 says: every sentence after this one is untrue. Sentence 3 says the same, and so on for ever. No sentence mentions itself. Each one only talks about the sentences that come after it. Stephen Yablo published this in 1993 under the title “Paradox Without Self-Reference”, after a version in a 1985 paper."
whyWrong: "Suppose some sentence, say sentence 5, is true. Then every sentence after it is untrue. In particular sentence 6 is untrue, and so is everything after sentence 6. But that is exactly what sentence 6 says, so sentence 6 is true after all. That is a contradiction, so sentence 5 cannot be true, and the same goes for every sentence. So every sentence is untrue. But then everything after sentence 1 is untrue, which is what sentence 1 says, so sentence 1 is true. Either way there is a contradiction, as with the [liar paradox](liar-paradox)."
resolution:
  - "The twist is in where the trouble comes from. The liar sentence talks about itself, and a natural first thought is that self-reference is to blame. Yablo’s list is meant to show that this cannot be the whole story. He wrote that his example is “not in any way circular” and concluded that self-reference is “neither necessary nor sufficient” for paradoxes of this kind. If he is right, simply banning sentences that talk about themselves does not stop the paradox."
  - "Not everyone agrees that the circle has gone. Graham Priest argued in 1997 that the circularity is still there, hidden in the general description that defines every sentence on the list at once, which has the same self-referring form as the liar. Roy Cook, writing in the Internet Encyclopedia of Philosophy, says Priest is right in a minimal sense, but that in this sense almost any description in arithmetic counts as circular, so the point does not settle much. The Stanford Encyclopedia of Philosophy reports that whether the paradox is self-referential is still being discussed. Butler argued in 2017 that even if Priest is right, there are other lists like Yablo’s that are not circular in Priest’s sense."
  - "Whatever the verdict on circularity, the contradiction itself has no agreed fix, just as the liar has none. The Stanford Encyclopedia of Philosophy says that “no commonly agreed upon solution to the paradoxes of self-reference exists”."
positions:
  - title: "It is the liar in disguise"
    body: "Priest argues that the list hides a circle, so it is just another form of the liar and calls for the same treatment, whatever that turns out to be. Cost: this sends it back to the [liar paradox](liar-paradox), which has no agreed fix, and critics reply that in Priest’s sense nearly every description in arithmetic would count as circular."
  - title: "The proof needs too much infinity"
    body: "The clash comes from reasoning about the whole endless list at once. In ordinary formal arithmetic, adding the conditions for each sentence one by one gives no contradiction, as Ketland showed. Priest also argued that reasoning of this endless kind is not open to finite thinkers. Cost: the resulting theory says that some sentence on the list is true while ruling out each sentence one by one, and Cook calls the claim about finite thinkers “controversial at best”."
  - title: "Use one of the fixes for the liar"
    body: "Give up the idea that every sentence is true or untrue, allow some sentences to be both, or split truth into levels, as proposed for the liar. Cost: each fix brings the same costs it has for the liar, and if Yablo is right, a rule that only bans self-reference is not enough on its own."
finePrint: "Yablo himself calls it the omega liar, omega being the symbol logicians use for the endless series of whole numbers. A similar construction had been discussed by Visser in 1984. The Stanford Encyclopedia of Philosophy notes that the list has to be endless: any list that stops is free of contradiction. The descriptions of each response here are short and plain, and the technical debate, especially about formal arithmetic, is more detailed than this."
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
