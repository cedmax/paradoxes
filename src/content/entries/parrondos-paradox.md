---
title: "Parrondo's paradox"
format: argument
searchTerms:
  ["two losing games make a winning game", "Parrondo games", "Brownian ratchet", "mixing games"]
chapter: probability
order: 80
status: explained
simplification: light
noMaths: false
sourcesVerified: true
problem: "Can two games that each lose money, played one after the other, together win money?"
claimA: "If each of two games loses money on average, any way of playing them together must lose money too."
claimB: "Two games that each lose on average can be played in a pattern that wins."
whatBreaks: "The assumption that games played one after another are independent bets. The second game’s odds depend on the player’s money, and the first game changes the money."
statusNote: "the second game’s odds depend on your capital, which the first game shifts, so a pattern such as AABB can win while each game alone loses. The effect is real and the arithmetic is not in dispute."
setup: "Game A: flip a coin that wins 49.5 percent of the time. Win a pound if it lands the right way, lose a pound if not. Game B: look at how many pounds you have. If the number is a multiple of three, flip a bad coin that wins only 9.5 percent of the time. Otherwise flip a good coin that wins 74.5 percent of the time. Each game, played on its own, slowly loses money. Yet playing two of game A, then two of game B, and repeating that pattern wins money, and so does playing ABBABB over and over. Playing ABAB over and over still loses."
whyWrong: "Two losing bets seem to add up to a losing bet, and that is true when the bets do not affect each other. These two do. Game B is not one bet. Which coin it uses depends on your capital, and it is mostly a losing game because your capital lands on a multiple of three about 38 percent of the time, where the bad coin is used."
resolution:
  - "Game A is a small loss each time, but it also shifts your capital up or down by a pound. Played in the right rhythm, those shifts make it more likely that your capital is in a state where game B is favourable, and the gain there is larger than the small loss in game A. The pattern matters: AABB wins, ABAB loses, and ABBABB wins. Random mixing also wins, but only for some range of how often game A is chosen."
  - "So the first claim is false and the second is true. The games are not independent, because the second game’s odds depend on where the first game has left you."
finePrint: "The effect was found by Juan Parrondo in 1996, while he was analysing the Brownian ratchet, a thought experiment about getting useful work from random heat motion. The coin games were published by Harmer and Abbott in Nature in 1999. The games are of little use for investing, because the original games need payoffs that depend on the player’s capital. The coin chances above use the standard version, with a small bias of 0.005 against the player in each game."
sources:
  - title: "Wikipedia: Parrondo's paradox"
    url: "https://en.wikipedia.org/wiki/Parrondo%27s_paradox"
    note: "Source for the statement, the history, the 0.3836 figure, the winning and losing patterns and the dependence explanation."
  - title: "arXiv: Parrondo's Paradox, some new results and new ideas"
    url: "https://arxiv.org/pdf/1602.04783"
    note: "Source for the exact game definitions (win chances 1/2 minus ε, 3/4 minus ε and 1/10 minus ε, with ε = 0.005). The win chances in the setup (49.5, 74.5 and 9.5 percent) and the figure that ABAB loses were recomputed with an exact calculation of the long-run average, which matched the 0.3836 figure on the Wikipedia page."
---
