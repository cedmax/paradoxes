---
title: Friendship paradox
titleAccent: paradox
chapter: probability
status: resolved
simplification: light
noMaths: true
order: 11
written: true
problem: "Why do your friends have more friends than you do?"
claimA: "You and your friends are ordinary people, so you should have about as many friends as they do."
claimB: "On average, your friends have more friends than you do."
verdict: "Popular people turn up in far more friend lists, so they are over-counted."
whatBreaks: "The assumption that a randomly picked friend is a typical person."
statusNote: "the first claim is wrong. The effect follows from counting, and experts agree."
setup: "Count your friends. Then count how many friends each of your friends has, and take the average. For most people, that second average is bigger than the first. The sociologist Scott Feld described this in 1991 in a paper titled Why your friends have more friends than you do."
whyWrong: "It feels like your friends are a fair sample of people, so they should look like everyone else. But they are not a fair sample. You find people through friendships, and someone with many friends has many more chances to be one of yours."
resolution:
  - "Take a small group of five. One person, Sam, is friends with the other four, and the other four are friends only with Sam. Sam has 4 friends, and each of the others has 1. The average person has 1.6 friends. Now ask each person how many friends their friends have, on average. Sam's friends each have 1. Each of the other four has one friend, Sam, who has 4. The average of those five answers is 3.4. Sam shows up in everyone else's list, so his 4 gets counted four times."
  - "This holds in general. The average number of friends a friend has equals the average number of friends plus a correction, which is the variance of friend counts divided by the average. Variance measures how uneven the counts are. If friend counts differ at all, the correction is above zero, and your friends have more friends than the average person."
  - "Researchers have used this to spot outbreaks early. Christakis and Fowler, in a 2010 study, found that tracking the friends of randomly chosen people, who tend to be better connected than the people who named them, could detect a flu outbreak almost two weeks before traditional monitoring."
finePrint: "The guarantee is about averages, not about you. The paradox says that on average, a friend has more friends than the average person. It does not say every person has fewer friends than their friends. The most connected person in a network is an obvious exception. Feld also argued that in real social networks most people have fewer friends than the average of their friends, which is a claim about real networks, not a mathematical certainty. It is a paradox only in the sense of being surprising."
sources:
  - title: "Wikipedia: Friendship paradox"
    url: https://en.wikipedia.org/wiki/Friendship_paradox
    note: "covers Feld 1991, the variance formula and the flu study. The five-person example is worked out here."
sourcesVerified: false
---
