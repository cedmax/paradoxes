---
title: "100 prisoners problem"
format: argument
chapter: probability
status: "explained"
simplification: light
noMaths: false
order: 110
sourcesVerified: true
problem: "How can 100 prisoners find their numbers with about a 31 percent chance that every one succeeds?"
claimA: "No plan gives prisoners who open 50 boxes each more than a tiny chance of all succeeding."
claimB: "Following the numbers in the boxes gives them about a 31 percent chance of all succeeding."
whatBreaks: "The assumption that every prisoner must search independently and succeed by luck."
statusNote: "the shared strategy exploits the arrangement of the numbers; its chance is about 31 percent rather than the tiny chance from separate searches."
setup: "One hundred boxes contain the numbers 1 to 100 in random order. Each prisoner may open 50 boxes, must find their own number and cannot tell the others what they saw. Everyone must succeed."
whyWrong: "A prisoner randomly opening half the boxes has a one-in-two chance. If each searches independently, the chance all 100 succeed is one in two multiplied by itself 100 times."
resolution:
  - "Prisoner 27 starts with box 27. If it contains 64, their next box is 64. Each new number tells them which box to open next. Everyone follows the same rule using their own starting number."
  - "The boxes form loops of numbers. Every prisoner succeeds if no loop is longer than 50, which happens about 31.18 percent of the time in a random arrangement."
  - "The success of different prisoners is strongly linked by the shared loops, rather than independent guesses."
finePrint: "The exact success probability is one minus the sum of the reciprocals of 51 through 100, about 0.3118. The boxes must contain a random permutation, and no information can be passed between searches."
sources:
  - title: "Wikipedia: 100 prisoners problem"
    url: "https://en.wikipedia.org/wiki/100_prisoners_problem"
  - title: "University of Bielefeld: Permutations and 100 Prisoners"
    url: "https://www.math.uni-bielefeld.de/~ringel/lectures/vortrag-sjtu/100-1.htm"
    note: "Independent derivation using cycles of a permutation; confirms the approximate 31 percent success chance."
---
