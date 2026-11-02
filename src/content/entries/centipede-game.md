---
title: "Centipede game"
format: argument
searchTerms:
  [
    "Rosenthal's centipede",
    "take or push",
    "paradox of backward induction",
    "backward induction",
    "coin piles game",
  ]
chapter: collective
order: 80
status: disputed
relatedTo: unexpected-hanging-paradox
simplification: light
noMaths: false
sourcesVerified: true
problem: "Two players can keep doubling a pot by passing it back and forth. Why does strict logic say the first player should grab it at once?"
claimA: "Players who are rational, and who know that about each other all the way down, take the money at the very first move."
claimB: "Players who are rational, and who know that about each other, can do better by passing the money on for a while."
whatBreaks: "Whether the shared knowledge required by the backward argument is justified, especially after a player passes."
statusNote: "the camps are that players should take the pot at once, as Aumann’s proof shows, that a pass should change what you believe about the other player, or that a little doubt makes passing worthwhile."
setup: "Alice and Bob take turns with two piles of coins. A player can take the bigger pile and give the other player the smaller one, ending the game. Or the player can pass, doubling both piles and giving the next choice to the other player. There is a known final turn. Passing for a while could make both much richer."
whyWrong: "On the last turn, taking pays better than passing. Knowing that, the previous player should take rather than pass into that outcome. The same reasoning moves back one turn at a time until Alice should take immediately. Yet if both pass for a while, both can earn far more."
resolution:
  - "The calculation is agreed. The dispute concerns what players know and should expect. If Bob gets a turn, Alice has already passed, even though the backward argument says a rational Alice would take. Should Bob still trust that argument about her?"
  - "Aumann proves the immediate-taking result under a precise account of shared knowledge of rationality. Critics challenge that account. Experiments show that real players often pass, but that alone does not settle the ideal case."
positions:
  - title: "Take immediately"
    body: "Keep the precise assumptions under which Aumann proves the backward result. Cost: the assumptions demand very strong shared knowledge, and the players forgo much larger mutual gains."
  - title: "Rethink beliefs after a pass"
    body: "A pass seems to undermine the claim that the other player follows the backward argument. Cost: Aumann argues that his proof needs rational play only at points actually reached."
  - title: "Allow a little doubt"
    body: "A small chance that the other player will cooperate or make a mistake can make passing worthwhile. Cost: this changes the ideal puzzle, which assumes no such doubt."
finePrint: "Common knowledge means each knows both are rational, each knows that each knows, and so on. Empirical studies, including studies of chess players, give differing results. Those findings concern behaviour, rather than proving that ideal rationality permits passing. A fixed number of rounds of the [prisoner’s dilemma](prisoners-dilemma) has a similar backward argument."
sources:
  - title: "Wikipedia: Centipede game"
    url: "https://en.wikipedia.org/wiki/Centipede_game"
    note: "Main source for Rosenthal (1981), the rules, the backward argument and the experiments. The six-turn numbers are an illustration, recomputed."
  - title: "Stanford Encyclopedia of Philosophy: Game Theory"
    url: "https://plato.stanford.edu/entries/game-theory/"
    note: "Source for the paradox of backward induction (Bicchieri, Binmore, Pettit and Sugden) and Selten’s trembling hand."
  - title: "Stanford Encyclopedia of Philosophy: Prisoner's Dilemma"
    url: "https://plato.stanford.edu/entries/prisoner-dilemma/"
    note: "Source for the only subgame perfect equilibrium, real players rarely following it, and the backward argument as debated."
  - title: "Aumann, Backward Induction and Common Knowledge of Rationality (discussion paper page)"
    url: "https://ratio.huji.ac.il/node/3129552"
    note: "Source for Aumann’s result that common knowledge of rationality gives the backward induction outcome."
  - title: "Aumann, On the Centipede Game (Games and Economic Behavior, 1998)"
    url: "https://ratio.huji.ac.il/files/dp109.pdf"
    note: "Source for the claim that in the centipede game one need not assume rationality at unreached points, and for Aumann's reply to Binmore."
  - title: "Binmore, Backward Induction and Common Knowledge (ELSE working paper)"
    url: "https://ideas.repec.org/p/els/esrcls/008.html"
    note: "Source for Binmore’s argument that common knowledge of rationality need not force backward induction."
  - title: "Palacios-Huerta and Volij (2009), Field Centipedes, American Economic Review 99(4), 1619-35"
    url: "https://www.aeaweb.org/articles?id=10.1257/aer.99.4.1619"
    note: "Source for 69 percent of highly ranked chess players stopping the game at once, and all Grandmasters doing so."
  - title: "Levitt, List and Sadoff (2011), Checkmate: Exploring Backward Induction among Chess Players, American Economic Review 101(2), 975-90"
    url: "https://www.aeaweb.org/articles?id=10.1257/aer.101.2.975"
    note: "Source for chess players almost never playing the backward induction equilibrium."
---
