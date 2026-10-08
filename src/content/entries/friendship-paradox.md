---
title: Friendship paradox
titleAccent: paradox
chapter: probability
status: explained
uniqueness: variant
anchor: inspection-paradox
simplification: light
noMaths: true
order: 11
written: true
aka: ["why your friends have more friends", "Scott Feld", "social networks"]
problem: "Why do your friends have more friends than you do?"
claimA: "You and your friends are ordinary people, so you should have about as many friends as they do."
claimB: "On average, your friends have more friends than you do."
verdict: "Popular people turn up in far more friend lists, so they are over-counted."
whatBreaks: "The assumption that a randomly picked friend is a typical person."
statusNote: "the first claim is wrong. The effect follows from counting, and experts agree."
setup: "Count your friends. Then count how many friends each of your friends has, and take the average. For most people, that second average is bigger than the first. The sociologist Scott Feld described this in 1991 in a paper titled Why your friends have more friends than you do."
whyWrong: "It feels like your friends are a fair sample of people, so they should look like everyone else. But they are not a fair sample. You find people through friendships, and someone with many friends has many more chances to be one of yours."
resolution:
  - "Take a small group of five. One person, Sam, is friends with the other four, and the other four are friends only with Sam. Sam has 4 friends, and each of the others has 1. The average person has 1.6 friends. There are two fair ways to ask how many friends a friend has. They give different averages, and both are above 1.6."
  - "The first way averages people. Each person looks at their own friends and works out how many friends those friends have, on average. Sam’s four friends each have 1 friend, so Sam’s answer is 1. Each of the other four has just one friend, Sam, who has 4, so each of them answers 4. The five answers are 1, 4, 4, 4 and 4, and their average is 3.4."
  - "The second way pools every friendship. Everyone lists their friends, and all the names go into one pile. Sam lists four people, each with 1 friend. Each of the other four lists Sam, who has 4. That makes 8 names: four people with 1 friend and Sam four times with 4. Add them up and divide by 8, and the average is 2.5. Either way, Sam shows up in everyone else’s list, so Sam’s 4 gets counted four times."
  - "This holds in any group, not just this one. The more uneven the friend counts are, the bigger the gap between the average friend and the average person. Only if everyone had exactly the same number of friends would the gap disappear."
  - "Researchers have used this to spot outbreaks early. In a 2010 study of Harvard students, Christakis and Fowler picked students at random and asked each to name friends. The named friends tend to be better connected, and the flu outbreak moved through their group 13.9 days, roughly two weeks, ahead of the randomly chosen group. The study’s likely range for that lead was 9.9 to 16.6 days."
finePrint: "The guarantee is about averages, not about you. The paradox says that on average, a friend has more friends than the average person. It does not say every person has fewer friends than their friends. The most connected person in a network is an obvious exception. Feld also argued that in real social networks most people have fewer friends than the average of their friends, which is a claim about real networks, not a mathematical certainty. It is a paradox only in the sense of being surprising."
sources:
  - title: "Wikipedia: Friendship paradox"
    url: https://en.wikipedia.org/wiki/Friendship_paradox
    note: "covers Feld 1991, the variance formula and the flu study. The five-person example is worked out here."
  - title: "Christakis and Fowler (2010): Social network sensors for early detection of contagious outbreaks"
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2939797/
    note: "the 13.9 day lead of the friend group over the randomly chosen group"
sourcesVerified: true
reviewed: true
---
