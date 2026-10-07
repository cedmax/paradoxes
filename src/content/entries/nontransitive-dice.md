---
title: Nontransitive dice
titleAccent: dice
chapter: probability
status: explained
simplification: light
noMaths: true
order: 13
written: true
aka: ["Efron's dice", "intransitive dice", "Penney's game"]
problem: "Can dice A beat B, B beat C, C beat D, and D beat A, each most of the time?"
claimA: "If A usually beats B, and B usually beats C, then A should usually beat C."
claimB: "Some sets of dice beat each other in a circle."
verdict: "Beating is not like height. It does not have to chain."
whatBreaks: "The assumption that if A beats B and B beats C, then A beats C."
statusNote: "the first claim is wrong. Every pairing can be checked by counting, and experts agree."
setup: "Here are four dice, called Efron's dice after the statistician Bradley Efron, who invented them. Die A has faces 4, 4, 4, 4, 0, 0. Die B has 3, 3, 3, 3, 3, 3. Die C has 6, 6, 2, 2, 2, 2. Die D has 5, 5, 5, 1, 1, 1. Two players each roll one die, and the higher number wins."
whyWrong: "We are used to ranking things. If Ann is taller than Bo, and Bo is taller than Cy, then Ann is taller than Cy. We expect better, faster and stronger to chain in the same way. But when winning is a matter of chance, the winner depends on which two dice are in play, and that need not line up in a single ranking."
resolution:
  - "Count all 36 pairs of faces for each match-up. A beats B whenever A shows a 4, which is 4 faces in 6, so 2 in 3. B beats C whenever C shows a 2, which is 4 faces in 6, so 2 in 3. C beats D when C shows a 6, which is 2 in 6, or when C shows a 2 and D shows a 1, which is 4 faces times 3 faces out of 36. Together that is 12 plus 12 out of 36, which is 24 out of 36, or 2 in 3. D beats A when D shows a 5, which is 3 in 6, with A showing a 4 or a 0, or when D shows a 1 and A shows a 0. That is 18 plus 6 out of 36, which is 24 out of 36, or 2 in 3."
  - "So A beats B, B beats C, C beats D and D beats A, each with probability 2 in 3. The two pairs left over, A against C and B against D, are not part of the circle. C beats A with probability 5 in 9, and B against D is an even 1 in 2."
  - "Nothing is wrong with the maths. The relation 'usually beats' simply is not transitive, which is the word for the chaining rule above. If you let a friend pick first, you can always pick a die that beats theirs."
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
sourcesVerified: false
---
