---
title: "Bertrand's box paradox"
titleAccent: "paradox"
chapter: probability
status: explained
uniqueness: variant
anchor: monty-hall-problem
simplification: none
noMaths: true
order: 50
sourcesVerified: true
problem: "You draw a gold coin from a box. What are the odds that the other coin in the box is gold too?"
claimA: "The box is gold-gold or gold-silver, equally likely, so it is one half."
claimB: "Counting the coins instead of the boxes gives two in three."
verdict: "The one half answer is wrong. It is two in three."
whatBreaks: "The habit of treating the cases that are left as equally likely."
statusNote: "the one half answer is wrong. The accepted answer can be checked by counting coins."
setup: "There are three boxes, each with two coins. One box has two gold coins. One has two silver coins. One has one gold and one silver. You pick a box at random, and without looking you pull out a coin. It is gold. What is the chance that the other coin in the same box is also gold?"
whyWrong: "The coin is gold, so the box cannot be the silver pair. That leaves two boxes, the gold pair and the mixed one. Two boxes, so it looks like a coin toss, and the answer feels like one half. But the two remaining boxes are not equally likely to have given you a gold coin."
resolution:
  - "Count coins, not boxes. There are six coins and three are gold. Each gold coin was equally likely to be the one you drew. Two of the gold coins are in the gold pair box, so the other coin is gold. One gold coin is in the mixed box, so the other coin is silver. Two cases out of three end with a second gold coin. The answer is two in three."
  - "Another way to see it: the gold pair box is certain to give you a gold coin, while the mixed box gives you one only half the time. So a gold coin is twice as likely to have come from the gold pair box."
  - "Joseph Bertrand's point, made in 1889, was that simply counting the cases left is not always correct. You have to weigh each case by how likely it was to produce what you saw."
finePrint: "The puzzle is mathematically the same as the [Monty Hall problem](monty-hall-problem) and the three prisoners problem. In each, a naive count of the remaining options gives one half, and the correct answer is two in three. This version assumes that you pick a box at random and then a coin at random from it."
sources:
  - title: "Wikipedia: Bertrand's box paradox"
    url: "https://en.wikipedia.org/wiki/Bertrand%27s_box_paradox"
---
