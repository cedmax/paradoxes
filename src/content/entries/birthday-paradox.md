---
title: "Birthday paradox"
titleAccent: "paradox"
aka: ["birthday problem"]
chapter: probability
status: explained
simplification: light
order: 2
written: true
problem: "How many people need to be in a room before two probably share a birthday?"
claimA: "There are 365 days, so you'd need far more than a few dozen people."
claimB: "With just 23 people, it's more likely than not."
verdict: "The odds depend on the number of pairs, not the number of people."
whatBreaks: "Intuition about probability: we count people when we should count pairs."
statusNote: "the intuition is wrong. The accepted explanation can be checked by counting pairs."
setup: "Imagine a room with 23 people in it. How likely is it that at least two of them have the same birthday? With 365 days to choose from and only 23 people, most of us would guess a small chance, perhaps one in ten."
whyWrong: "The natural way to think about it is from your own point of view. Your birthday is one specific day, and there are 22 other people, so a match feels unlikely. But the question is not whether someone matches you. It is whether any two people in the room match, and that is a much bigger question."
resolution:
  - "Count pairs instead of people. Twenty-three people make 253 different pairs, and each pair has a 1 in 365 chance of sharing a birthday. The chances do not simply add up, so it is not 253 in 365. Instead, treating the pairs as roughly separate, the chance that none of the 253 pairs match is about 364/365 multiplied by itself 253 times, which is just under one half. So a match somewhere in the room is just over half likely. The exact figure for 23 people is about 50.7 percent."
  - "The number of pairs grows much faster than the number of people. At 70 people there are 2,415 pairs, and the chance of at least one match is above 99.9 percent."
finePrint: "The usual calculation assumes every day of the year is equally likely as a birthday and ignores 29 February. Real birthdays are not spread perfectly evenly, and that makes a match slightly more likely, not less. It is a paradox only in the sense that it is surprising. Nothing in it contradicts itself."
sources:
  - title: "Wikipedia: Birthday problem"
    url: "https://en.wikipedia.org/wiki/Birthday_problem"
---
