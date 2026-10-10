---
title: "Traveler's dilemma"
titleAccent: "dilemma"
aka: ["Traveller's dilemma", "Basu", "lost luggage game", "lost suitcase game", "undercutting"]
chapter: choice-identity
status: disputed
uniqueness: related
anchor: unexpected-hanging-paradox
simplification: light
noMaths: false
written: true
sourcesVerified: true
problem: "Two travellers each name a value for identical lost luggage, and whoever names less gets a small bonus. Why does strict logic push both down to the minimum?"
claimA: "Rational players who know each other to be rational both write 2, the lowest number allowed."
claimB: "Rational players can write a large number, expecting the other to do the same."
verdict: "Formal game theory picks the lowest claim, most people claim high and earn more, and whether claiming high is rational is still argued."
whatBreaks: "Experts split on whether rationality, known on both sides, must follow the undercutting argument all the way down, or whether it is rational to reject the bottom and expect the other player to reject it too."
statusNote: "the arithmetic is agreed: both writing 2 is the game's only equilibrium. Kaushik Basu, who devised the game, wrote in 1994 that he could not resolve the paradox, and the sources give no agreed answer to whether writing a high number can be rational."
setup: "An airline loses two identical suitcases belonging to two travellers, each holding an identical antique. The airline does not know what the antiques are worth. Its manager puts the travellers in separate rooms and asks each to write down a whole number of dollars from 2 to 100. If both write the same number, both are paid that amount. If they differ, the lower number is taken as the true value and both are paid that, except that the one who wrote less gets a $2 bonus and the one who wrote more pays a $2 penalty. So if one writes 100 and the other 99, the 99 writer gets 101 and the 100 writer gets 97."
whyWrong: "Suppose the other traveller writes 100. Then writing 99 pays 101, more than the 100 from writing 100. If the other writes 99, writing 99 pays 99 and writing 100 pays only 97. If the other writes anything lower, 99 and 100 pay the same. So 99 is never worse than 100 and sometimes better, and a rational traveller never writes 100. But if neither writes 100, the same reasoning shows 98 is never worse than 99. Step by step every number falls, down to 2. At 2 and 2 each gets $2, and neither can gain by changing alone: writing 3 against a 2 pays nothing. Yet both could have had $100. The unravelling is the same kind as in the [unexpected hanging paradox](unexpected-hanging-paradox), but here nothing happens over time. Both write at once, a single time, and the whole backward chain runs only in their heads."
resolution:
  - "Kaushik Basu published the game in 1994. He showed that both writing 2 is the unique strict equilibrium, meaning each player does strictly worse by changing alone, and the only outcome left once each player rules out every choice a rational player who knows the other is rational would never make. He also noted that, unlike the centipede game, where the unwanted equilibrium is not strict, here the formal theory leaves no escape from 2. Yet he wrote that “there is something very rational about rejecting (2,2) and expecting your opponent to do the same”, and said he was unable to resolve the paradox."
  - "Experiments do not match the theory in the usual setting. Wikipedia reports that most participants pick values above 2 and closer to 100, and that those who deviate from the equilibrium earn much more. A 1999 study by Capra, Goeree, Gomez and Holt found the equilibrium a bad predictor of behaviour when the bonus was small and a rather good predictor when it was large."
positions:
  - title: "Write 2"
    body: "Keep the first claim. If each player is rational and knows the other is, every undercutting step is sound, and both writing 2 is the game's only equilibrium. Basu points out that because this equilibrium is strict, formal game theory offers no way round it. Cost: players who reason this way end up with $2 each, while, Wikipedia reports, players who depart from it earn much more."
  - title: "Reject the bottom"
    body: "Keep the second claim. Basu argued that there is something very rational about rejecting the lowest claim and expecting the other player to do the same. As possible lines of attack he suggested that the standard assumptions about commonly known rationality may be inconsistent, or that players may reason with loose categories such as “a large number”, which could support both writing large numbers. Cost: Basu offered these only as tentative lines of attack and did not turn them into a resolution."
  - title: "Model how people actually reason"
    body: "Treat the puzzle as a question about real reasoning. Wikipedia reports that Capraro's 2013 model, in which players forecast how the game would go if they cooperated and then act on that forecast, fits the experimental data quite well, and that some players appear to follow a Bayesian Nash equilibrium, a form of equilibrium for players who are unsure about each other. Cost: these models describe what people do, and leave open what a fully rational player who knows the other is rational should write."
finePrint: "The title keeps Basu's American spelling. Basu's paper, “The Traveler's Dilemma: Paradoxes of Rationality in Game Theory”, appeared in the American Economic Review in 1994, and he wrote a popular account for Scientific American in 2007. The paper states the payments in units of money, and Wikipedia uses dollars. Wikipedia also reports a 2014 study by Morone, Morone and Germani finding that groups play closer to the equilibrium than individuals, and notes that a version with only two choices, 2 or 3, is the same as the standard [prisoner's dilemma](prisoners-dilemma). The payments above were recomputed for every pair of numbers from 2 to 100, which confirms that both writing 2 is the only pair from which neither player gains by changing alone."
sources:
  - title: "Basu, The Traveler's Dilemma: Paradoxes of Rationality in Game Theory (American Economic Review, 1994)"
    url: "https://www.researchgate.net/profile/Kaushik_Basu/publication/4980634_The_Traveler%27s_Dilemma_Paradoxes_of_Rationality_in_Game_Theory/links/5766fa9908aedbc345f5f4ce/The-Travelers-Dilemma-Paradoxes-of-Rationality-in-Game-Theory.pdf"
    note: "Source for the game (claims from 2 to 100, bonus and penalty of 2), the unique strict equilibrium and unique rationalizable outcome, the contrast with the centipede game, backward induction in a one-shot game, the quoted sentence, Basu's statement that he could not resolve the paradox, and his tentative lines of attack."
  - title: "Wikipedia: Traveler's dilemma"
    url: "https://en.wikipedia.org/wiki/Traveler%27s_dilemma"
    note: "Source for the airline story in dollars, the example payments for 100 and 99, the dominance argument, the experimental findings (most players pick high values and earn more; Capra, Goeree, Gomez and Holt 1999; Morone, Morone and Germani 2014), Capraro's 2013 model, the Bayesian equilibrium remark, the two-choice link to the prisoner's dilemma and the 2007 Scientific American article. All payments were recomputed."
---
