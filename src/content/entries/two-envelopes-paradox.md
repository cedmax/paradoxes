---
title: "Two envelopes paradox"
titleAccent: "paradox"
chapter: probability
status: resolved
simplification: light
noMaths: true
order: 4
written: true
problem: "Two envelopes hold money, one with double the other. Should you swap the one you picked?"
claimA: "In the standard game, swapping pays off on average, whatever you hold."
claimB: "Both envelopes were picked the same way, so swapping can't help."
verdict: "In the standard game, the claim that swapping pays is wrong. Experts still argue over exactly where the argument for it slips."
whatBreaks: "The swap argument’s reasoning: it treats the amount in your hand as fixed, and gives the other envelope equal odds of holding double or half."
statusNote: "in the standard game, the first claim is wrong: swapping gains nothing on average. What is still argued over is exactly which step of the swapping argument goes wrong."
setup: "You are given two identical envelopes. One holds a sum of money and the other holds exactly double. You pick one at random but do not open it. You are then offered the chance to swap it for the other. Say your envelope holds 20 pounds. The other must hold either 40 or 10."
whyWrong: "Here is the tempting argument. If you hold 20, the other holds 40 or 10, and it is a coin toss which. Swapping wins 20 or loses 10. On average that is a gain of 5 pounds. This works for any amount you might hold, so you should swap. But then the same argument says to swap back, and so on forever. And nothing has been opened. Your envelope and the other one were exactly alike from the start. Something has gone wrong."
resolution:
  - "The slip is in treating 20 as one fixed amount in both cases. Say the envelopes really hold 10 and 20. If you picked the smaller one, swapping gains 10. If you picked the larger one, swapping loses 10. Over many tries these cancel out, and swapping gains nothing. The argument only works if the other envelope is a gain of 20 in one case and a loss of 10 in the other, and no single pair of envelopes can do that."
  - "A deeper explanation looks at what you must believe for the argument to hold. For every amount you might see, the other envelope has to be equally likely to be double or half. That means believing that every pair of amounts is as likely as every other, going up and down forever. No honest set of odds can say that. Odds spread evenly over endless pairs cannot add up to one, so the average prize is not even defined, and the argument has nothing to stand on."
  - "Some other ways of filling the envelopes can be written as honest odds and still make swapping look good whatever amount you see. In all of them the average prize is infinite, so the average gain from swapping is not even defined. Before you open your envelope there is still no reason to swap, because both envelopes have the same odds of holding each amount. These games are not the standard one."
finePrint: "Nobody defends swapping in the standard game, and all accounts agree the swap argument’s reasoning fails, but no single account of exactly where it slips is widely accepted as the definitive one. Some writers think the simple slip above settles it. Others put the real work in the infinite cases, where ordinary reasoning about averages breaks down. Raymond Smullyan gave a version with no probabilities at all, which suggests the trouble may be in the reasoning about what would have happened, not in the odds. This page uses the standard version, where both envelopes are filled first and you pick one at random. In a variant, the envelope you hold is filled first, and then a coin toss decides whether the other holds double or half of it. There, swapping really does pay on average. The puzzle goes back to Maurice Kraitchik in 1943, in a version about two men and their neckties, and Martin Gardner helped to popularise it."
sources:
  - title: "Wikipedia: Two envelopes problem"
    url: "https://en.wikipedia.org/wiki/Two_envelopes_problem"
---
