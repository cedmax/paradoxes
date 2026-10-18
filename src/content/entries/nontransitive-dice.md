---
title: Nontransitive dice
format: argument
chapter: probability
status: explained
relatedTo: condorcet-paradox
simplification: light
noMaths: true
order: 60
searchTerms: ["Efron's dice", "intransitive dice", "Penney's game"]
problem: "Can dice A beat B, B beat C, C beat D, and D beat A, each most of the time?"
claimA: "If A usually beats B, and B usually beats C, then A should usually beat C."
claimB: "Some sets of dice beat each other in a circle."
verdict: "Beating is not like height. It does not have to chain."
whatBreaks: "The assumption that if A beats B and B beats C, then A beats C."
statusNote: "the first claim is wrong. Every pairing can be checked by counting, and experts agree."
setup: "Four dice have the faces shown below. Each player chooses one and rolls once; the higher number wins. A usually beats B, B usually beats C, C usually beats D and D usually beats A. Each advantage is two chances in three."
whyWrong: "“Usually beats” sounds like a ranking, as if it were height. But winning depends on the particular opponent and the possible pairs of rolls. Those pairwise advantages need not form one order."
resolution:
  - "A beats B on its four faces marked 4. B beats C on C’s four faces marked 2. For C against D, count the pairs where C shows 6 or where C shows 2 and D shows 1: 24 of 36. D also beats A in 24 of 36 pairs."
  - "The cycle is real, and nothing in the probabilities conflicts. What fails is the assumption that pairwise winning chances must chain into a ranking. Choosing second lets a player select a die with an advantage over the first choice."
finePrint: "This is for a single roll each, and for these dice. The 2 in 3 odds only hold for this particular set. Beating is also not about the average score: B's average is 3, A's is about 2.67, C's is about 3.33 and D's is 3, and the dice still beat each other in a loop. A related idea is Penney's game, published by Walter Penney in 1969, where two players pick sequences of coin flips. For sequences of length three or more, the second player can always pick a sequence that is more likely to appear first than the first player's. It is a paradox only in the sense of being surprising."
sources:
  - title: "Wikipedia: Intransitive dice"
    url: https://en.wikipedia.org/wiki/Intransitive_dice
    note: "gives Efron's faces and the 2 in 3 odds. All pairings were checked separately."
  - title: "Wikipedia: Penney's game"
    url: https://en.wikipedia.org/wiki/Penney%27s_game
  - title: "Wikipedia: Bradley Efron"
    url: https://en.wikipedia.org/wiki/Bradley_Efron
    note: "describes Efron as an American statistician who created Efron's dice"
sourcesVerified: true
---
