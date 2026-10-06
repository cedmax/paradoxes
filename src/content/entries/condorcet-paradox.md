---
title: Condorcet paradox
titleAccent: paradox
chapter: choice-identity
status: unreconciled
simplification: light
noMaths: true
order: 8
written: true
sourcesVerified: false
problem: Can three sensible voters, choosing by majority, end up preferring A to B, B to C and C to A?
claimA: A group that decides by majority should end up with a consistent ranking.
claimB: Three voters who each rank the options sensibly can make the majorities go round in a circle.
verdict: Majority voting can cycle, and every fix gives up something we wanted.
whatBreaks: The idea that majority rule always turns sensible individual rankings into a sensible group ranking.
statusNote: the cycle is real and agreed on, but every known way around it gives up something, and none is widely accepted.
setup: "Three friends choose a restaurant from three options, A, B and C. Each ranks them from best to worst. Voter 1 ranks A, then B, then C. Voter 2 ranks B, then C, then A. Voter 3 ranks C, then A, then B. Nobody is being silly. Each ranking is perfectly consistent. Now compare the options two at a time and let the majority decide."
whyWrong: "A against B: voters 1 and 3 prefer A, only voter 2 prefers B. A wins, 2 to 1. B against C: voters 1 and 2 prefer B, only voter 3 prefers C. B wins, 2 to 1. C against A: voters 2 and 3 prefer C, only voter 1 prefers A. C wins, 2 to 1. So the group prefers A to B, B to C, and C to A. It is rock, paper, scissors. Whatever you pick, a majority would rather have something else. We expect that if you prefer A to B and B to C, you prefer A to C. Individuals can be held to that. A majority cannot."
resolution:
  - "There is no trick hidden in the example. The cycle is a real feature of majority voting. The Marquis de Condorcet, a French thinker, described the problem in an essay of 1785."
  - "Later, the economist Kenneth Arrow proved in 1951 a much wider result. When there are three or more options, no way of turning everyone's rankings into one group ranking can satisfy a short list of reasonable-sounding conditions at once. The Stanford Encyclopedia of Philosophy lists the conditions and traces the result back to Condorcet's cycle."
  - "Cycles need not be common. Under more realistic models of how voters differ, they become rare when many people vote on a few options. But rare is not never, and the question of what to do when one appears has no agreed answer."
positions:
  - title: Accept the cycle and add a tie-break
    body: "Keep majority comparisons, and when they cycle, use an extra rule to pick from the tied group. Many such rules, called Condorcet methods, exist. Cost: different tie-breaks pick different winners, and no choice of rule is neutral."
  - title: Ask for scores, not just rankings
    body: "Let each voter rate every option, for example out of ten, and add up the scores. This avoids cycles. Cost: it relies on how strongly people feel, and nobody can show that one person's seven means the same as another's."
  - title: Treat cycles as a rare accident
    body: "With many voters and few options, cycles are unlikely, so use plain majority votes and live with the odd failure. Cost: it does not answer the problem, it only hopes it will not come up."
finePrint: Condorcet's cycle is a result about what majority rule does, not a flaw in anyone's reasoning, so it is a paradox only in the sense that it is surprising. The three options above are a sample of the proposals, not a complete list. The status is a judgement based on the sources below, which describe Arrow's theorem as a general limit on voting systems. Voting theorists do prefer some systems over others, so check the sources if the status matters to you.
sources:
  - title: "Wikipedia: Condorcet paradox"
    url: https://en.wikipedia.org/wiki/Condorcet_paradox
  - title: "Stanford Encyclopedia of Philosophy: Arrow's Theorem"
    url: https://plato.stanford.edu/entries/arrows-theorem/
  - title: "Stanford Encyclopedia of Philosophy: Social Choice Theory"
    url: https://plato.stanford.edu/entries/social-choice/
---
