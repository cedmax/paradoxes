---
title: "Penney's game"
format: argument
searchTerms:
  [
    "coin race",
    "coin toss sequences",
    "HHT THH",
    "Humble-Nishiyama randomness game",
    "nontransitive coin game",
  ]
chapter: probability
order: 90
status: explained
relatedTo: nontransitive-dice
simplification: light
noMaths: false
sourcesVerified: true
problem: "Two players pick different runs of three coin tosses, and the coin is tossed until one run appears. Can the second player always pick the likelier run?"
claimA: "Every run of three tosses is equally likely, so no run can be more likely than another to turn up first."
claimB: "Whatever run the first player picks, the second can pick one that turns up first at least two times in three."
whatBreaks: "The assumption that runs which are equally likely in any three given tosses must also be equally likely to win a race to turn up first."
statusNote: "runs can overlap, which makes some likelier to appear first: THH beats HHH 7 times in 8."
setup: "Walter Penney published this game in 1969. The first player picks a run of three coin tosses, for example heads, heads, heads, written HHH. The second player sees it and picks a different run, for example THH. A fair coin is then tossed again and again until one of the two runs appears as three tosses in a row. The player whose run appears first wins."
whyWrong: "In any three tosses, each of the eight possible runs has the same chance, 1 in 8. So it seems that no choice of run can give an edge. But the game is a race, and runs overlap."
resolution:
  - "Take HHH against THH. HHH wins only if the first three tosses are all heads, a 1 in 8 chance. Otherwise a tail turns up before any HHH. From then on, the first HHH must come straight after a tail, and that tail with the next two heads is THH, which has already appeared one toss earlier. So THH wins 7 times in 8."
  - "The second player’s best reply follows a simple rule: take the first player’s middle toss, switch it, put it first, then add the first player’s first two tosses. Against HHT, play THH, which wins 3 times in 4. Against HTH, play HHT, which wins 2 times in 3. With the best reply, the second player’s odds are 7 to 1 against HHH or TTT, 3 to 1 against HHT or TTH, and 2 to 1 against the other four runs."
  - "The best replies chase each other round in a circle. THH beats HHT, TTH beats THH, HTT beats TTH, and HHT beats HTT. Whichever run the first player chooses, a better one exists, just as with [nontransitive dice](nontransitive-dice). The twist here is that nothing is unequal to start with: there is one fair coin, and every run has the same chance in any three tosses. The edge comes entirely from the way runs overlap."
  - "So the first claim is false and the second is true. For every three-toss run the first player chooses, the second can pick one that is more likely to appear first."
finePrint: "The odds above were recomputed exactly for all eight first choices and checked by simulating 200,000 games for two of the pairings. A related surprise, computed for this entry rather than taken from the sources: on average, HTH takes 10 tosses to turn up and HHT only 8, so runs that are equally likely in any three tosses also differ in how long you wait for them. A card version, the Humble-Nishiyama randomness game, uses red and black cards instead of a coin, and because each card drawn changes the odds for the next, the second player’s edge there is larger."
sources:
  - title: "Nishiyama and Humble (2010), Winning odds, Plus Magazine"
    url: "https://plus.maths.org/os/issue55/features/nishiyama/index"
    note: "Full University of Cambridge mathematics exposition of Penney's three-toss game, the second player's reply and winning probabilities, and the related Humble-Nishiyama card demonstration."
  - title: "Wikipedia: Penney's game"
    url: "https://en.wikipedia.org/wiki/Penney%27s_game"
    note: "Context for the original 1969 Penney publication, waiting-time examples and any claim covering sequences longer than three tosses that is not independently established by the new reference."
---
