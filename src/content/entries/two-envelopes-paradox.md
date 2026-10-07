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
claimA: "Whatever amount you hold, the other envelope is equally likely to hold double or half."
claimB: "Both envelopes were filled and handed out the same way, so before you look, swapping can't help."
verdict: "The first claim is wrong: no proper set of odds makes it true for every amount you might hold."
whatBreaks: "The claim that, whatever you hold, the other envelope is equally likely to hold double or half. No set of odds whose chances add up to one can make that true for every amount."
statusNote: "the first claim is wrong, because no proper set of odds makes double and half equally likely whatever you hold. Writers still differ on exactly where the swapping argument slips, and a further puzzle, where other odds make swapping look good whatever amount you see, is still argued over."
setup: "You are given two identical envelopes. One holds a sum of money and the other holds exactly double. You pick one at random but do not open it. You are then offered the chance to swap it for the other. Say your envelope holds 20 pounds. The other must hold either 40 or 10."
whyWrong: "Here is the tempting argument. If you hold 20, the other holds 40 or 10, and it is a coin toss which. Swapping wins 20 or loses 10. On average that is a gain of 5 pounds. This works for any amount you might hold, so you should swap. But then the same argument says to swap back, and so on forever. And nothing has been opened. Your envelope and the other one were exactly alike from the start. Something has gone wrong."
resolution:
  - "The step that fails is the coin toss. For the other envelope to be equally likely to hold double or half whatever you hold, you would have to think, before looking, that every pair on an endless doubling ladder is equally likely: 10 and 20, 20 and 40, 40 and 80, and so on up and down forever. No proper set of odds, meaning one whose chances add up to one, can say that, because equal chances spread over endlessly many pairs cannot add up to one. So for any proper set of odds, there are some amounts where double and half are not equally likely."
  - "A simple case shows how the gains are cancelled. Say the smaller amount is equally likely to be any of ten amounts from 1 to 512, doubling each time. Then for most amounts you might see, swapping really does gain on average. But if you see 1,024, you must hold the larger envelope, and that one big loss exactly balances all the gains."
  - "Over many tries with one fixed pair, swapping gains nothing. Say the envelopes really hold 10 and 20. If you picked the smaller one, swapping gains 10. If you picked the larger one, swapping loses 10. These cancel out. The argument only works if the other envelope is a gain of 20 in one case and a loss of 10 in the other, and no single pair of envelopes can do that."
  - "Writers still differ on exactly where the basic argument slips, even though they agree the first claim fails. There is also a further puzzle, which is still argued over. Some proper sets of odds, such as one given by John Broome in 1995, make the other envelope worth more on average whatever amount you see, even though double and half are not equally likely. In all of them the average amount in each envelope is infinite. Before you look, there is still no reason to swap, because both envelopes have the same odds. Yet whatever amount you then see, the other envelope is worth more on average."
finePrint: "No single account of exactly where the swapping argument slips is widely accepted as the definitive one, although the first claim fails whichever account is right. Most writers think the infinite cases can be defused too, but they disagree on how. David Chalmers suggests that decision theory generally breaks down when faced with games whose averages are infinite. Clark and Shackel (2000) argue that this does not settle the matter, and that decision theory should be extended to allow infinite averages in some cases. Raymond Smullyan gave a version with no probabilities at all, which suggests the trouble may be in the reasoning about what would have happened, not in the odds. This page uses the standard version, where both envelopes are filled first and you pick one at random. In a variant, the envelope you hold is filled first, and then a coin toss decides whether the other holds double or half of it. There, swapping really does pay on average. The puzzle goes back to Maurice Kraitchik in 1943, in a version about two men and their neckties, and Martin Gardner helped to popularise it."
sources:
  - title: "Wikipedia: Two envelopes problem"
    url: "https://en.wikipedia.org/wiki/Two_envelopes_problem"
---
