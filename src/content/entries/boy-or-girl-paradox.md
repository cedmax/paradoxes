---
title: "Boy or girl paradox"
titleAccent: "paradox"
chapter: probability
status: resolved
simplification: light
noMaths: true
order: 7
written: true
problem: "A man has two children and at least one is a boy. What are the odds that both are?"
claimA: "The other child is a boy or a girl with equal chance, so the odds are one half."
claimB: "Of the families that fit, only one in three has two boys."
verdict: "Both can be right, because the answer depends on how you learned the fact."
whatBreaks: "The assumption that the same sentence always carries the same information."
statusNote: "the question is ambiguous as worded, and once it is made precise the answer is not in dispute."
setup: "Mr Smith has two children. You are told that at least one of them is a boy. What is the chance that both are boys? Take it that each child is equally likely to be a boy or a girl, independently of the other."
whyWrong: "The quick thought is that one child is a boy, and the other is a coin toss, so one half. But another way of counting gives a different number. List the four equally likely families, older child first. Boy and boy, boy and girl, girl and boy, girl and girl. Learning that at least one is a boy rules out only the last one. Three families remain, and only one of them has two boys. That is one third."
resolution:
  - "Both counts are correct for different situations. It depends on how the fact reached you. Suppose someone looked at all the two-child families and picked out those with at least one boy. Then three families remain, and the answer is one third. Suppose instead that you met one of the children at random and saw that it was a boy. Then the other child is an ordinary coin toss, and the answer is one half."
  - "A cleaner pair of questions shows the same thing. If you are told that the older child is a boy, only two families remain, boy and boy, or boy and girl. The answer is one half. If you are told only that at least one is a boy, the answer is one third. Knowing which child it is changes the count."
  - "The wording does not settle which situation we are in, so the question as usually asked has no single answer until the way the information was obtained is stated. Martin Gardner posed it in 1959 and later accepted that it was ambiguous."
finePrint: "This assumes boys and girls are equally likely and that the two children are independent. Real births are not exactly 50 to 50. A stranger version adds that one boy was born on a Tuesday. Working it through gives 13 chances in 27, about 48 percent, close to one half. The more details you are given about the boy, the closer the answer gets to one half. The Tuesday figure also assumes the information was given in the first way described above."
sources:
  - title: "Wikipedia: Boy or girl paradox"
    url: "https://en.wikipedia.org/wiki/Boy_or_girl_paradox"
---
