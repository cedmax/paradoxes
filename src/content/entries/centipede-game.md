---
title: "Centipede game"
titleAccent: "game"
aka:
  [
    "Rosenthal's centipede",
    "take or push",
    "paradox of backward induction",
    "backward induction",
    "coin piles game",
  ]
chapter: choice-identity
status: disputed
uniqueness: related
anchor: unexpected-hanging-paradox
simplification: light
noMaths: false
written: true
sourcesVerified: true
problem: "Two players can keep doubling a pot by passing it back and forth. Why does strict logic say the first player should grab it at once?"
claimA: "Players who are rational, and who know that about each other all the way down, take the money at the very first move."
claimB: "Players who are rational, and who know that about each other, can do better by passing the money on for a while."
verdict: "Reasoning back from the last move says grab the money at once, and whether ideally rational players really must do that is still argued."
whatBreaks: "Experts split on whether knowing the other player is rational forces the backward argument all the way to the first move, or whether that knowledge cannot survive a move the argument says a rational player would never make."
statusNote: "the arithmetic is agreed, and Robert Aumann proved that if rationality is common knowledge at the start, the first player takes at once. Ken Binmore and others reject the assumptions behind that result, and the Stanford Encyclopedia of Philosophy presents the backward argument as still contested."
setup: "Two players, Alice and Bob, face two piles of coins, one of 4 coins and one of 1. Alice moves first. She can take the larger pile and give the smaller one to Bob, which ends the game. Or she can push both piles across to Bob, and each time the piles cross the table they double. Bob then has the same choice, and so on. In the version used here there are six turns, and if Bob pushes on the sixth turn the piles double once more and Alice gets the larger one. By the sixth turn the piles are 128 and 32. If both players always push, Alice ends with 256 coins and Bob with 64. If Alice takes at once, she gets 4 and Bob gets 1."
whyWrong: "Reason back from the end. On the sixth turn, Bob takes 128 rather than push and end up with 64. Alice knows this, so on the fifth turn she takes 64 rather than push and be left with 32. Bob, on the fourth turn, takes 32 rather than be left with 16. The same step works on every turn, back to the first, where Alice takes 4 rather than push and be left with 2. So the argument says the game ends at once with 4 and 1, when both players could have had many times more. Each step only assumes that the next player is rational and knows the same about the one after. But there is a strange gap. Bob only ever moves if Alice has pushed, which the argument says a rational Alice never does. If Bob finds himself moving, should he still believe Alice is rational? The same backward unravelling drives the [unexpected hanging paradox](unexpected-hanging-paradox). Here there is no announcement about surprise, only money, and each step is a plain gain for the player who takes."
resolution:
  - "Robert Rosenthal introduced the game in 1981. The traditional version had 100 turns, which gave it its name. Game theorists agree on the arithmetic. The only subgame perfect equilibrium (a plan that is a best reply from every point of the game onwards, found by reasoning back from the end) has each player take at every chance, so the first player takes at once."
  - "Robert Aumann proved in 1995 that in games like this one, where every move is seen by both players, the backward outcome follows if it is common knowledge at the start that all players are rational. Common knowledge means everyone knows it, everyone knows that everyone knows it, and so on without end. In a 1998 paper on the centipede game he argued that here one need not even assume rationality at points the game never reaches."
  - "Critics say the argument asks too much. The Stanford Encyclopedia of Philosophy reports a puzzle raised by Bicchieri (1993), Ken Binmore (1987) and Pettit and Sugden (1989): backward reasoning asks a player to keep expecting rational play at a point that can only be reached if someone has already failed to play rationally. It calls this the paradox of backward induction. Binmore argues that common knowledge of rationality at the start need not force the backward outcome. The encyclopedia's entry on the prisoner's dilemma notes, for a repeated game with a known last round, that the same assumptions seem to imply both that a player should always betray the other and that she would do better if she did not."
  - "Real players rarely take at once. Wikipedia reports that several studies, including one by McKelvey and Palfrey in 1992, found the equilibrium play rarely observed. Players usually push for several turns and then take, and pushing all the way to the end is also rare."
positions:
  - title: "Take at once"
    body: "Keep the first claim. Aumann proved that if all players are rational and this is common knowledge at the start, the first player takes at once, and in the centipede game the proof only needs rational play at points actually reached. Cost: it needs every player to know that every player is rational, at every level, and two players who reason this way end up with almost nothing when far more was on offer."
  - title: "Knowledge of rationality cannot survive a push"
    body: "Keep the second claim. The backward argument asks a player to go on expecting rational play after a move the argument says no rational player would make. Binmore argues that common knowledge of rationality at the start need not force the backward outcome, and that the real task is to model what players would believe after such a move. Bicchieri and Pettit and Sugden raised the same worry. Cost: Aumann's answer, in his 1998 paper, is that his centipede proof uses only what rational players do at points actually reached, so it does not depend on what anyone would believe after a surprise."
  - title: "A little doubt changes the answer"
    body: "Rosenthal noted in 1981 that a player who has reason to think the other may not play by the backward argument can do better by pushing. Selten's “trembling hand” (1975) allows a small chance of mistakes, so an unexpected move no longer contradicts anything. McKelvey and Palfrey found that a model in which about 5 percent of players are altruists fits the experimental data. Cost: this explains why pushing pays when there is doubt, but not what to do in the case the puzzle sets, where there is no doubt at all."
finePrint: "The six turns, and the rule that a push on the last turn hands the doubled larger pile to the other player, are an illustration built on the coin piles in Wikipedia's description; Wikipedia's own short example uses other numbers, with the same backward logic. On experiments, Wikipedia reports that with higher stakes play approaches but does not reach the equilibrium. Palacios-Huerta and Volij (2009) found that among chess players the chance of pushing fell as playing strength rose, and that all Grandmasters in their experiment stopped at their first chance, but Levitt, List and Sadoff (2011) found that none of sixteen Grandmasters stopped at the first chance. A fixed number of rounds of the [prisoner's dilemma](prisoners-dilemma) unravels in the same backward way."
sources:
  - title: "Wikipedia: Centipede game"
    url: "https://en.wikipedia.org/wiki/Centipede_game"
    note: "Source for Rosenthal (1981), the 100-turn origin of the name, the coin-pile rules, the backward argument and the unique subgame perfect equilibrium, the experimental findings (McKelvey and Palfrey 1992, higher stakes, Palacios-Huerta and Volij 2009, Levitt, List and Sadoff 2011), Rosenthal's point about expected deviation and the 5 percent altruist model. The six-turn numbers and the end rule are a constructed illustration; the doubling figures were recomputed."
  - title: "Stanford Encyclopedia of Philosophy: Game Theory"
    url: "https://plato.stanford.edu/entries/game-theory/"
    note: "Source for the paradox of backward induction as raised by Bicchieri (1993), Binmore (1987) and Pettit and Sugden (1989), and for Selten's trembling hand (1975) as the standard way around it."
  - title: "Stanford Encyclopedia of Philosophy: Prisoner's Dilemma"
    url: "https://plato.stanford.edu/entries/prisoner-dilemma/"
    note: "Source for the centipede as first discussed by Rosenthal, its only subgame perfect equilibrium, the remark that real players rarely act this way, the point that the assumptions seem to imply both that a player should defect and that she would do better not to (Skyrms 1990, Bicchieri 1989), and the presentation of the backward argument as debated."
  - title: "Aumann, Backward Induction and Common Knowledge of Rationality (discussion paper page)"
    url: "https://ratio.huji.ac.il/node/3129552"
    note: "Source for Aumann's result that common knowledge of rationality in games of perfect information yields the backward induction outcome, published in Games and Economic Behavior in 1995."
  - title: "Aumann, On the Centipede Game (Games and Economic Behavior, 1998)"
    url: "https://ratio.huji.ac.il/files/dp109.pdf"
    note: "Source for the claim that in the centipede game one need not assume rationality at unreached points, and for Aumann's reply to Binmore."
  - title: "Binmore, Backward Induction and Common Knowledge (ELSE working paper)"
    url: "https://ideas.repec.org/p/els/esrcls/008.html"
    note: "Source for Binmore's argument that prior common knowledge of rationality need not force backward induction play, and that the task is to model behaviour after a deviation."
  - title: "Palacios-Huerta and Volij (2009), Field Centipedes, American Economic Review 99(4), 1619-35"
    url: "https://www.aeaweb.org/articles?id=10.1257/aer.99.4.1619"
    note: "Abstract: 69 percent of highly ranked chess players stopped the centipede game at once, and 100 percent of Grandmasters."
  - title: "Levitt, List and Sadoff (2011), Checkmate: Exploring Backward Induction among Chess Players, American Economic Review 101(2), 975-90"
    url: "https://www.aeaweb.org/articles?id=10.1257/aer.101.2.975"
    note: "Abstract: chess players almost never play the backward induction equilibrium in the centipede game. The figure of sixteen Grandmasters comes from the Wikipedia page, not this abstract."
---
