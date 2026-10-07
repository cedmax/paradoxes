---
title: "St Petersburg paradox"
titleAccent: "paradox"
chapter: probability
status: unreconciled
simplification: light
noMaths: true
order: 6
written: true
sourcesVerified: true
problem: "A coin game has an infinite average prize. Why would nobody pay much to play it?"
claimA: "Since the average prize is endless, you should be willing to pay any price to play."
claimB: "No sensible person would pay more than a modest sum to play."
verdict: "Each known fix costs something big, and none is accepted as the whole answer."
whatBreaks: "The rule that a bet is worth its average payout. Each fix either changes the rule, changes the game, or drops it, and each pays a cost."
statusNote: "each fix has a known cost. Counting what money is worth to you can be beaten by a game with bigger prizes, a limited bank leaves the idealised game untouched, ignoring tiny chances raises the question of why any very improbable outcome should be ignored, and replacing the average means giving up expected value as the rule for decisions. None is accepted as the whole answer, and the Stanford Encyclopedia of Philosophy’s survey ends without settling the question."
setup: "A casino tosses a fair coin until it lands heads. If heads comes on the first toss, you win 2 pounds. If it first comes on the second toss, you win 4. On the third, 8. The prize doubles each time. How much would you pay to play?"
whyWrong: "Work out the average prize. Heads on the first toss has a half chance and pays 2, so that adds 1 to the average. Heads first on the second toss has a quarter chance and pays 4, which adds another 1. Every possible round adds 1, and the rounds never stop. So the average prize is infinite. If a fair price is the average prize, you should be willing to pay everything you own. Yet seven times in eight the game pays 8 pounds or less, and Ian Hacking (1980) wrote that “few of us would pay even $25 to enter such a game”. Robert Martin, in the 2004 version of the Stanford Encyclopedia of Philosophy entry, quoted this and said many commentators agree; Wikipedia cites it from there."
resolution:
  - "There is no single accepted answer. There are several, and each fixes part of the problem. The oldest, from Daniel Bernoulli in 1738 and Gabriel Cramer before him, says money is worth less to you the more you have. A prize of a billion is not worth a thousand times a prize of a million to you. With Bernoulli’s own formula for how much each prize is worth to you, the average becomes finite."
  - "A second fix is that the casino cannot pay unlimited sums. If the casino has about a million pounds, it can only pay out up to about 20 rounds of doubling, and the fair price is about 20 pounds. With a billion pounds it is about 30. Even a bank of a billion billion pounds, far more than the whole world’s yearly economic output, would give a fair price of only about 60 pounds."
  - "Neither fix is complete. Karl Menger showed that for any utility that keeps growing without limit, you can build a game with even bigger prizes that brings the paradox back. The limited casino has its own gap, which Hájek and Smithson call contagion: as long as you give the casino's promise to pay any chance at all of being good, however small, the average value of playing is endless again."
positions:
  - title: "Money has diminishing value"
    body: "A big prize is worth less to you per pound than a small one, so the average value is finite. Cost: a game can always be built with prizes big enough to beat any utility that has no upper limit, so some argue that utility must have a ceiling."
  - title: "The casino has limited money"
    body: "No real casino can pay unlimited prizes, so the real game has a finite average. Cost: the puzzle is meant to be about the idea of an average itself, and this answer leaves the idealised game untouched."
  - title: "Ignore very unlikely outcomes"
    body: "Buffon suggested in 1777 that outcomes this unlikely can be treated as impossible. Cost: the Stanford Encyclopedia of Philosophy asks why any very improbable outcome should be ignored. Every shuffle of a deck of cards produces an order that was extremely unlikely, yet nobody treats it as impossible."
  - title: "Averages are the wrong tool"
    body: "Some suggest looking at what happens to one player over time instead of the average across all possible games; Wikipedia notes that Peters linked the paradox to this idea in 2011. Cost: this means giving up expected value as the rule for decisions, which the Stanford Encyclopedia of Philosophy raises only as an open question."
finePrint: "Nicolaus Bernoulli posed an early version in a letter in 1713, using an ordinary die rolled until a 6 comes up. The simpler coin version used here comes from a simplification by Gabriel Cramer, in a letter of 1728, later used by Daniel Bernoulli. Daniel Bernoulli published his analysis in 1738 in the journal of the Imperial Academy of Science in Saint Petersburg, which gave the paradox its name. The figures for a limited casino are approximate, since the exact value depends on how the last round is handled. There are other fixes beyond the four given here."
sources:
  - title: "Wikipedia: St. Petersburg paradox"
    url: "https://en.wikipedia.org/wiki/St._Petersburg_paradox"
  - title: "Stanford Encyclopedia of Philosophy: The St. Petersburg Paradox"
    url: "https://plato.stanford.edu/entries/paradox-stpetersburg/"
  - title: "Stanford Encyclopedia of Philosophy (Fall 2004 archive): Robert Martin, The St. Petersburg Paradox"
    url: "https://plato.stanford.edu/archives/fall2004/entries/paradox-stpetersburg/"
---
