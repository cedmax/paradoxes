---
title: "Arrow's impossibility theorem"
titleAccent: "impossibility theorem"
aka:
  [
    "Arrow's theorem",
    "Arrow's paradox",
    "Kenneth Arrow",
    "social welfare function",
    "independence of irrelevant alternatives",
    "social choice",
  ]
chapter: choice-identity
status: unreconciled
uniqueness: related
anchor: condorcet-paradox
simplification: light
noMaths: true
written: true
sourcesVerified: false
problem: "Is there a fair way to turn everyone's rankings of three or more options into one ranking for the group?"
claimA: "Any way of turning everyone's rankings into a group ranking that is fair, in the everyday sense of the word, must meet all five of Arrow's conditions."
claimB: "Some way of turning everyone's rankings into a group ranking is fair, in that same everyday sense."
verdict: "No method of turning rankings into a group ranking meets every reasonable-sounding condition, and each choice of which condition to drop has a real cost."
whatBreaks: "The hope that one ranking rule can meet all five conditions. Each fix drops a condition or asks voters for more than a ranking, and each pays a cost."
statusNote: "the theorem is proved and not in doubt. What is open is which condition to give up. Restricting which rankings are allowed, relaxing the demand for a full group ranking, letting other options affect the choice between two, and asking for grades instead of rankings each has a known cost, and the Stanford Encyclopedia of Philosophy sets them out as options, not as a settled answer."
setup: "Groups often need one ranking built from many: voters ranking candidates, or a committee ranking proposals. A rule that does this takes everyone's ranking and produces one group ranking. In the form the Stanford Encyclopedia of Philosophy uses, which it says is the standard one since Arrow's 1963 second edition, the rule should meet five conditions. Every set of rankings is allowed: the rule must work whatever rankings people hand in, ties included. The result is a full ranking: every option has a place, ties are allowed, and there are no loops such as A above B, B above C and C above A. Unanimity counts: if everyone prefers one option to another, so does the group. There is no dictator: no single person whose preference between any two options always becomes the group's. And the group's ranking of any two options depends only on how each person ranks those two, not on where they put anything else. This last condition is called independence of irrelevant alternatives. Kenneth Arrow proved that when there are more than two options, no rule meets all five."
whyWrong: "Each condition looks like a bare minimum of fairness, and Arrow himself called them value judgments that express the ideas of citizens' sovereignty and rationality in a very general form. The [Condorcet paradox](condorcet-paradox) shows one rule, simple majority voting, failing one of them: majorities can go round in a circle, so there is no full ranking. Arrow's theorem goes much further. It shows that every rule for combining rankings fails at least one condition, so a fair rule, in the sense these conditions describe, does not exist. Either one of the conditions is not really needed for fairness, or no way of combining rankings is fair."
resolution:
  - "Arrow published the result in a 1950 paper, “A Difficulty in the Concept of Social Welfare”, and in his 1951 book Social Choice and Individual Values, and restated the conditions in the 1963 second edition. The proof is not in question. Since no rule meets all five conditions, any rule breaks at least one, and the question is which loss to accept."
  - "There is no agreed answer. The Stanford Encyclopedia of Philosophy sets out several ways out, each giving up something different, and notes a problem with each. It also remarks that it is sometimes not even desirable for a rule to meet every condition."
  - "The theorem is about rules that work from rankings alone. Wikipedia notes that rules where voters give each option a separate grade are not affected by it, and calls it a common misconception that the theorem covers voting systems in general. A related result, Gibbard's theorem, still applies to graded rules."
positions:
  - title: "Restrict which rankings are allowed"
    body: "Drop the condition that every set of rankings is allowed. Duncan Black showed in 1948 that if the number of voters is odd and every voter's preferences are single peaked, meaning the options lie along one line and each voter likes them less the further they are from a favourite point, then majority voting between pairs always gives a full ranking. Cost: the Stanford Encyclopedia says restricting the rankings is only appropriate when the nature of the options rules some rankings out, and Wikipedia notes that the result does not fully carry over when options differ in more than one way."
  - title: "Relax the demand for a full ranking"
    body: "Let the group be indifferent between options in ways that need not chain together neatly. Sen found a rule of this kind that is compatible with the other conditions, though the Stanford Encyclopedia says it would not generally be found attractive. Cost: Allan Gibbard showed that the only rules this opens up are oligarchies with a veto, where a fixed group decides and any one member can block a group preference, and the Stanford Encyclopedia says this does not seem a promising way to get acceptable rules."
  - title: "Let other options count"
    body: "Drop independence of irrelevant alternatives and use more of each ranking, as the Borda count does by giving each option points for its position in each voter's ranking. Cost: the Stanford Encyclopedia notes that Borda counting gives voters opportunities to manipulate the outcome by voting strategically."
  - title: "Ask for more than rankings"
    body: "Ask voters for grades or measures of how strongly they prefer each option. Wikipedia says rated rules are not affected by Arrow's theorem, and Sen found that strengths of preference also need to be comparable between people to avoid an impossibility result. Comparability opens the way to rules such as adding up everyone's welfare. Cost: Gibbard's theorem still applies to graded rules, some philosophers and economists, Wikipedia says, claimed that the strength of preferences cannot be compared across people who disagree, and the Stanford Encyclopedia reports that if people grade on very different scales, a close relative of Arrow's impossibility returns."
finePrint: "Versions of the theorem differ in how they list and word the conditions. Wikipedia, for example, notes that a weaker condition than unanimity, called non-imposition, is enough: the rule must not ignore the voters entirely when choosing between some pairs. This entry follows the five conditions as the Stanford Encyclopedia gives them. Arrow at first rejected measures of how strongly people prefer things, and Wikipedia says this led to a nihilist reading of his theorem, which David Pearce identified with a kind of circular reasoning. Arrow later reversed his view of such measures. Wikipedia quotes him in a 2012 interview: “Most systems are not going to work badly all of the time. All I proved is that all can work badly at times.” The Stanford Encyclopedia uses the name paradox of voting for Condorcet's cycle and traces Arrow's result back to it."
sources:
  - title: "Stanford Encyclopedia of Philosophy: Arrow's Theorem"
    url: "https://plato.stanford.edu/entries/arrows-theorem/"
    note: "Source for the five conditions (unrestricted domain, social ordering, weak Pareto, non-dictatorship, independence of irrelevant alternatives) in the canonical form since the 1963 edition, the statement for more than two alternatives, Arrow's 1950 paper and 1951 book, the value judgments quotation, Black (1948) and single-peakedness, Sen and Gibbard on relaxing the ordering condition, the Borda count and manipulation, Sen on interpersonal comparability, the close relative of the impossibility under differing grading scales (Morreau 2016), and the link to Condorcet's cycle."
  - title: "Wikipedia: Arrow's impossibility theorem"
    url: "https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem"
    note: "Source for the weaker non-imposition condition, rated rules not being affected, the common misconception, Gibbard's theorem, the limits of single-peaked preferences, Arrow's early rejection of cardinal utility and later reversal, the nihilism reading and Pearce's criticism, and the 2012 quotation."
---
