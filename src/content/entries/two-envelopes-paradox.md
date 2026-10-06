---
title: "Two envelopes paradox"
titleAccent: "paradox"
chapter: probability
status: disputed
simplification: light
noMaths: true
order: 4
written: true
problem: "Two envelopes hold money, one with double the other. Should you swap the one you picked?"
claimA: "Whatever you hold, swapping looks like a gamble that pays off on average."
claimB: "Both envelopes were picked the same way, so swapping can't help."
verdict: "The swapping argument fails, but experts still argue over exactly where."
whatBreaks: "The assumption that every amount is equally likely to be the smaller one."
statusNote: "most writers agree the swap argument fails, but there is no single accepted account of where, and the answer changes with how the envelopes were filled."
setup: "You are given two identical envelopes. One holds a sum of money and the other holds exactly double. You pick one at random but do not open it. You are then offered the chance to swap it for the other. Say your envelope holds 20 pounds. The other must hold either 40 or 10."
whyWrong: "Here is the tempting argument. If you hold 20, the other holds 40 or 10, and it is a coin toss which. Swapping wins 20 or loses 10. On average that is a gain of 5 pounds. This works for any amount you might hold, so you should swap. But then the same argument says to swap back, and so on forever. And before you opened anything, your two envelopes were exactly alike. Something has gone wrong."
resolution:
  - "The slip is in treating 20 as one fixed amount in both cases. Say the envelopes really hold 10 and 20. If you picked the smaller one, swapping gains 10. If you picked the larger one, swapping loses 10. Over many tries these cancel out, and swapping gains nothing. The argument only works if the other envelope is a gain of 20 in one case and a loss of 10 in the other, and no single pair of envelopes can do that."
  - "A deeper explanation looks at what you must believe for the argument to hold. For every amount you might see, the other envelope has to be equally likely to be double or half. That means believing that each pair of amounts is as likely as the next, going up forever. If you try to write that down as honest odds, the average prize comes out infinite. Most writers conclude that the argument smuggles in an impossible belief, or one with an infinite average, where ordinary reasoning about averages breaks down."
  - "Writers disagree about how much more there is to say. Some think the simple slip above settles it. Others hold that the real work is in the infinite cases, and that decision theory has no agreed way to handle them."
positions:
  - title: "It is a simple slip"
    body: "The amount 20 stands for two different things in the two branches of the argument. Fix the amounts, and swapping gains nothing. Cost: this explains the standard version, but not why the faulty argument feels forced, or what to say in versions with unlimited amounts."
  - title: "It is about the odds you assume"
    body: "The argument needs every amount to be equally likely to be the smaller one, which can only be true if the average prize is infinite. Cost: it moves the problem to infinite averages, where we have no widely accepted rule for deciding."
  - title: "It is about logic, not probability"
    body: "Raymond Smullyan argued that the two competing arguments are about different hypothetical situations, and that probability may not apply at all. Cost: others reply that comparing a gain with a loss makes no sense without odds."
finePrint: "This is the standard version, where both envelopes are filled first and you pick one at random. The answer depends on how the envelopes were filled. In one variant, the first envelope is filled and then a coin toss decides whether the second holds double or half of it. There, swapping really does pay on average. The puzzle goes back to Maurice Kraitchik in 1943, in a version about two men and their neckties, and Martin Gardner helped to popularise it."
sources:
  - title: "Wikipedia: Two envelopes problem"
    url: "https://en.wikipedia.org/wiki/Two_envelopes_problem"
---
