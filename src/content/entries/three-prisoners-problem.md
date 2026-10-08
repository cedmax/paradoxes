---
title: Three prisoners problem
titleAccent: problem
aka: ["three prisoners", "warden", "prisoner pardon"]
chapter: probability
status: explained
uniqueness: variant
anchor: monty-hall-problem
simplification: light
noMaths: false
order: 208
written: true
sourcesVerified: false
problem: "A prisoner learns that one of the other two will be executed. Has his own chance of survival gone up?"
claimA: "With B ruled out, it is now a choice between A and C, so A’s chance has risen from 1 in 3 to 1 in 2."
claimB: "A’s chance is still 1 in 3, and C’s chance has risen to 2 in 3."
verdict: "The warden would always name someone else, so the news says nothing about the one asking."
whatBreaks: "The idea that ruling out one prisoner leaves the other two equally likely."
statusNote: "the first claim is wrong. The warden’s answer was bound to name another prisoner, so it carries no news about A."
setup: "Three prisoners, A, B and C, are in separate cells and sentenced to death. The governor has picked one of them at random to be pardoned. The warden knows who, but is not allowed to say. Prisoner A asks the warden to name one of the other two who will be executed. If B is to be pardoned, the warden must name C. If C is to be pardoned, he must name B. If A is to be pardoned, the warden secretly flips a coin to choose between B and C. The warden says B will be executed. A is pleased, because he thinks his chance has gone up from 1 in 3 to 1 in 2. A tells C, who reasons that A’s chance is unchanged at 1 in 3 and that his own has risen to 2 in 3. Which prisoner is right? Martin Gardner described the problem in Scientific American in 1959."
whyWrong: "Prisoner A did not learn anything about his own fate, because he already knew the warden would name someone else. The warden’s answer depends on who is pardoned, but not in a way that tells A anything about himself."
resolution:
  - "Before the warden speaks, each prisoner has a 1 in 3 chance. The warden says B will be executed. That happens if C is to be pardoned, which has a 1 in 3 chance. It also happens if A is to be pardoned and the coin comes up B, which has a chance of 1/2 × 1/3 = 1/6. So, given that B was named, A’s chance is half of C’s. A is pardoned with probability 1 in 3, and C with probability 2 in 3."
  - "Wikipedia notes that the problem is mathematically the same as the [Monty Hall problem](monty-hall-problem), with the car and the goat replaced by freedom and execution. The prisoner who asks is the player who picked a door. The warden is the host who opens one of the others."
finePrint: "The answer depends on the warden’s rule. The 2 in 3 for C assumes the warden flips a fair coin when A is the one pardoned. The article also gives the answer using Bayes’ theorem, which is not repeated here."
sources:
  - title: "Wikipedia: Three prisoners problem"
    url: https://en.wikipedia.org/wiki/Three_prisoners_problem
---
