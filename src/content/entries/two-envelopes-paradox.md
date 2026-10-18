---
title: "Two envelopes paradox"
format: argument
titleAccent: "paradox"
chapter: probability
status: explained
uniqueness: related
anchor: st-petersburg-paradox
simplification: light
noMaths: true
order: 30
sourcesVerified: true
problem: "Two envelopes hold money, one with double the other. Should you swap the one you picked?"
claimA: "Whatever amount you hold, the other envelope is equally likely to hold double or half."
claimB: "Both envelopes were filled and handed out the same way, so before you look, swapping can't help."
verdict: "Swapping cannot help. No proper set of odds makes double or half equally likely for every amount you might hold, though writers still differ on exactly where the argument slips."
whatBreaks: "The claim that, whatever you hold, the other envelope is equally likely to hold double or half. No set of odds whose chances add up to one can make that true for every amount."
statusNote: "the first claim is wrong, because no proper set of odds makes double and half equally likely whatever you hold. Writers still differ on exactly where the swapping argument slips, and a further puzzle, where other odds make swapping look good whatever amount you see, is still argued over."
setup: "Two envelopes hold money, one exactly twice the other. You pick one at random without opening it. Should you swap? Call the amount you hold 20 pounds. The other seems equally likely to hold 40 or 10."
whyWrong: "That tempting calculation gives a gain of 20 or a loss of 10, each with chance one half: an average gain of 5. It seems to work for any amount. But after swapping the same reasoning says to swap back, although nothing has been learned."
resolution:
  - "“Double or half” does not mean “equally likely”, once an amount is specified. The two possibilities come from different possible pairs of envelopes, and their chances depend on how the amounts were chosen."
  - "For a fixed pair holding 10 and 20, swapping gains 10 if the smaller was picked and loses 10 if the larger was picked. Those equally likely changes cancel. It cannot give the unequal gain and loss used in the tempting calculation."
  - "No probability distribution whose chances add up to one makes double and half equally likely for every possible amount. That defeats the displayed claim. Other puzzles involving infinite average amounts remain debated."
finePrint: "A proper probability distribution has total probability one. Equal probabilities all along an unlimited doubling ladder cannot meet that rule. In finite examples, large amounts reveal the upper limit and switching losses balance the apparent gains. Some proper distributions with infinite average amounts make switching favourable conditional on every observed amount, using unequal double-or-half probabilities. Those are further decision-theory puzzles, not vindications of the equal-odds claim. If one envelope is filled first and a coin toss then makes the other double or half, the set-up is different and switching can pay. Kraitchik and Gardner helped popularise earlier forms. Writers still differ on the best diagnosis of the standard argument."
sources:
  - title: "Wikipedia: Two envelopes problem"
    url: "https://en.wikipedia.org/wiki/Two_envelopes_problem"
---
