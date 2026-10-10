---
title: Condorcet paradox
titleAccent: paradox
chapter: choice-identity
status: explained
simplification: light
noMaths: true
order: 8
written: true
sourcesVerified: true
problem: Can three sensible voters, choosing by majority, end up preferring A to B, B to C and C to A?
claimA: "If every voter has a consistent ranking, majority voting gives a consistent group ranking."
claimB: "Three voters with consistent rankings can make the majorities go round in a circle."
verdict: "Majority voting can go round in a circle, even when every voter’s own ranking is consistent."
whatBreaks: "The first claim, that majority rule always turns consistent individual rankings into a consistent group ranking."
statusNote: "a three-voter example is enough to show that majority voting can cycle, and nobody disputes it. Which voting rule to use instead is a separate question."
setup: "Three friends choose a restaurant from three options, A, B and C. Each ranks them from best to worst. Voter 1 ranks A, then B, then C. Voter 2 ranks B, then C, then A. Voter 3 ranks C, then A, then B. Nobody is being silly. Each ranking is perfectly consistent. Now compare the options two at a time and let the majority decide."
whyWrong: "A against B: voters 1 and 3 prefer A, only voter 2 prefers B. A wins, 2 to 1. B against C: voters 1 and 2 prefer B, only voter 3 prefers C. B wins, 2 to 1. C against A: voters 2 and 3 prefer C, only voter 1 prefers A. C wins, 2 to 1. So the group prefers A to B, B to C, and C to A. It is rock, paper, scissors. Whatever you pick, a majority would rather have something else. We expect that if you prefer A to B and B to C, you prefer A to C. Individuals can be held to that. A majority cannot."
resolution:
  - "Consistent voters do not guarantee a consistent majority ranking. The three pairwise majorities are different groups of voters, so their choices need not fit together."
  - "The [Arrow theorem](arrows-impossibility-theorem) extends the issue beyond majority voting: no ranking rule meets all of a particular set of attractive demands. Choosing a replacement is a separate question."
finePrint: "What to do instead is a separate debate. Kenneth Arrow’s theorem shows that no method of turning rankings into a group ranking meets every reasonable-sounding condition at once, so each method gives something up. Some methods keep majority comparisons and add a tie-break when they cycle. Others, such as score voting, ask voters to rate every option. Wikipedia notes that Arrow’s theorem leaves room for methods that use how strongly voters feel, and that score voting does not always agree with the majority. Which method is best is argued separately, and that argument does not affect the cycle itself."
sources:
  - title: "Wikipedia: Condorcet paradox"
    url: https://en.wikipedia.org/wiki/Condorcet_paradox
  - title: "Stanford Encyclopedia of Philosophy: Arrow's Theorem"
    url: https://plato.stanford.edu/entries/arrows-theorem/
  - title: "Wikipedia: Score voting"
    url: https://en.wikipedia.org/wiki/Score_voting
  - title: "Stanford Encyclopedia of Philosophy: Social Choice Theory"
    url: https://plato.stanford.edu/entries/social-choice/
---
