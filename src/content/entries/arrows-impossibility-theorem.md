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
simplification: "heavy"
noMaths: true
written: true
sourcesVerified: true
problem: "Is there a fair way to turn everyone's rankings of three or more options into one ranking for the group?"
claimA: "A fair rule for combining rankings must accept any rankings, produce a consistent group ranking, respect unanimous preferences, give nobody control and ignore unrelated options when comparing a pair."
claimB: "There is a fair rule for combining rankings of three or more options."
verdict: "No rule for combining rankings meets all these reasonable-sounding demands. Choosing a rule means deciding which demand to relax."
whatBreaks: "The hope that a ranking rule can meet every demand. The theorem settles the clash; it does not settle which demand fairness requires giving up."
statusNote: "the theorem is proved. There is no settled choice of which demand to relax, and the main alternatives each have a cost."
setup: "A committee asks everyone to rank three or more proposals. It wants one ranking for the whole group. It seems reasonable to ask for a consistent result, to respect everyone’s agreement and to give no one person control. It also wants to accept any rankings and to compare two proposals using only people’s preferences between those two."
whyWrong: "Each demand sounds fair on its own. Arrow proved that no rule can meet all of them. The [Condorcet paradox](condorcet-paradox) shows majority voting getting stuck in a circle. Arrow’s result reaches every rule that combines rankings, not just majority voting."
resolution:
  - "The proof does not say that every voting system is unfair. It says these particular demands cannot all be met by a rule working from rankings alone."
  - "Calling all the demands essential to fairness rules out a fair ranking rule. Keeping the hope of such a rule means relaxing a demand or asking voters for more information. The theorem does not choose the trade-off."
positions:
  - title: "Limit the rankings"
    body: "Allow only certain patterns of preference. Cost: the rule cannot accept every set of views people might have."
  - title: "Ask for less than a full ranking"
    body: "Relax the requirement that the group’s view form a complete, consistent order. Cost: the resulting rules can give a fixed group veto power and need not be attractive."
  - title: "Let other options matter"
    body: "Use more of each person’s ranking when comparing a pair, as a points system does. Cost: voters can have opportunities to manipulate the result by ranking strategically."
  - title: "Ask for grades"
    body: "Let people rate each option instead of merely ranking them. Cost: grades can use different scales, and other problems of strategic voting remain."
finePrint: "The five demands here follow the Stanford Encyclopedia’s formulation: any set of individual rankings is allowed, including ties; the group’s ranking is complete and has no cycles; if everyone strictly prefers one option, so does the group; no one person’s strict preferences always determine the group’s; and the group’s comparison of a pair depends only on each voter’s comparison of that pair. The result assumes a finite electorate and at least three options. “Fair” in the claims is an everyday judgement, not an extra mathematical condition. The theorem does not establish that all five demands are necessary for fairness. Restricting preferences to a single peak can help in some settings. Relaxing the ordering condition opens the way to veto oligarchies. Grades escape Arrow’s ranking framework but still face other impossibility results."
sources:
  - title: "Stanford Encyclopedia of Philosophy: Arrow's Theorem"
    url: "https://plato.stanford.edu/entries/arrows-theorem/"
    note: "Source for the five conditions (unrestricted domain, social ordering, weak Pareto, non-dictatorship, independence of irrelevant alternatives) in the canonical form since the 1963 edition, the statement for more than two alternatives, Arrow's 1950 paper and 1951 book, the value judgments quotation, Black (1948) and single-peakedness, Sen and Gibbard on relaxing the ordering condition, the Borda count and manipulation, Sen on interpersonal comparability, the close relative of the impossibility under differing grading scales (Morreau 2016), and the link to Condorcet's cycle."
  - title: "Wikipedia: Arrow's impossibility theorem"
    url: "https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem"
    note: "Source for the weaker non-imposition condition, rated rules not being affected, the common misconception, Gibbard's theorem, the limits of single-peaked preferences, Arrow's early rejection of cardinal utility and later reversal, the nihilism reading and Pearce's criticism, and the 2012 quotation."
---
