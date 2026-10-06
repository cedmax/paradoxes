---
title: "St Petersburg paradox"
titleAccent: "paradox"
chapter: probability
status: disputed
simplification: light
noMaths: true
order: 6
written: true
problem: "A coin game has an infinite average prize. Why would nobody pay much to play it?"
claimA: "If the average prize is infinite, you should pay any price to play."
claimB: "No sensible person would pay more than a modest sum."
verdict: "Several partial fixes exist, and none is accepted as the whole answer."
whatBreaks: "The idea that a fair price is always the average prize."
statusNote: "experts agree it is a real puzzle and offer several fixes, but no single one is accepted by everyone."
setup: "A casino tosses a fair coin until it lands heads. If heads comes on the first toss, you win 2 pounds. If it first comes on the second toss, you win 4. On the third, 8. The prize doubles each time. How much would you pay to play?"
whyWrong: "Work out the average prize. Heads on the first toss has a half chance and pays 2, so that adds 1 to the average. Heads first on the second toss has a quarter chance and pays 4, which adds another 1. Every possible round adds 1, and the rounds never stop. So the average prize is infinite. If a fair price is the average prize, you should be willing to pay everything you own. Yet seven times in eight the game pays 8 pounds or less, and commentators suggest most people would pay less than about 25."
resolution:
  - "There is no single accepted answer. There are several, and each fixes part of the problem. The oldest, from Daniel Bernoulli in 1738 and Gabriel Cramer before him, says money is worth less to you the more you have. A prize of a billion is not worth a thousand times a prize of a million to you. Once you count how much each prize is worth to you, rather than its size, the average becomes finite."
  - "A second fix is that the casino cannot pay unlimited sums. If the casino has about a million pounds, it can only pay out up to about 20 rounds of doubling, and the fair price is about 20 pounds. With a billion pounds it is about 30. Even a bank holding more than all the money in the world would give a fair price of only a few dozen pounds."
  - "Neither fix is complete. Karl Menger showed that for any utility that keeps growing without limit, you can build a game with even bigger prizes that brings the paradox back."
positions:
  - title: "Money has diminishing value"
    body: "A big prize is worth less to you per pound than a small one, so the average value is finite. Cost: a game can always be built with prizes big enough to beat any utility that has no upper limit, so some argue that utility must have a ceiling."
  - title: "The casino has limited money"
    body: "No real casino can pay unlimited prizes, so the real game has a finite average. Cost: the puzzle is meant to be about the idea of an average itself, and this answer leaves the idealised game untouched."
  - title: "Ignore very unlikely outcomes"
    body: "Buffon suggested in 1777 that outcomes this unlikely can be treated as impossible. Cost: it is hard to say where to draw the line, and modern versions of this idea can bring the paradox back."
  - title: "Averages are the wrong tool"
    body: "Some suggest looking at what happens to one player over time, or at the typical outcome, instead of the average. Cost: this means giving up expected value as the rule for decisions, which many decision theorists are not willing to do."
finePrint: "The game was posed by Nicolaus Bernoulli in a letter in 1713. Daniel Bernoulli published his analysis in 1738 in the journal of the Imperial Academy of Science in Saint Petersburg, which gave the paradox its name. The figures for a limited casino are approximate, since the exact value depends on how the last round is handled. There are other fixes beyond the four given here."
sources:
  - title: "Wikipedia: St. Petersburg paradox"
    url: "https://en.wikipedia.org/wiki/St._Petersburg_paradox"
  - title: "Stanford Encyclopedia of Philosophy: The St. Petersburg Paradox"
    url: "https://plato.stanford.edu/entries/paradox-stpetersburg/"
---
