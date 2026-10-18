---
title: "0.999… equals 1"
format: argument
titleAccent: "equals 1"
searchTerms:
  [
    "0.999 recurring",
    "point nine recurring",
    "0.9 repeating",
    "repeating decimal",
    "infinite decimal",
  ]
chapter: infinity
order: 80
status: explained
relatedTo: achilles-and-the-tortoise
simplification: light
noMaths: false
sourcesVerified: true
problem: "Is 0.999…, with nines that never stop, a tiny bit less than 1, or exactly 1?"
claimA: "0.999… is a tiny bit less than 1, because however many nines there are, a small gap to 1 is always left."
claimB: "0.999… is exactly 1."
whatBreaks: "The idea that 0.999… is some stage of a process that is still going on, so the gap left at every stage is still there at the end."
statusNote: "every cut-off version such as 0.999 falls short of 1, but 0.999… is defined as the number those versions close in on, and that number is 1. In the standard real numbers this is a theorem, not a matter of opinion."
setup: "Write 0.9, then 0.99, then 0.999, and keep going. Each one is closer to 1 than the last, and none of them reaches it: 0.9 is short by 0.1, 0.99 by 0.01, 0.999 by 0.001. Now imagine the nines never stop, and write the result as 0.999…, where the dots mean the nines go on for ever. It seems obvious that this is still a little short of 1. Yet the usual school arguments say it is exactly 1. One third is 0.333…, and three thirds make 1, so three times 0.333…, which is 0.999…, should be 1."
whyWrong: "The feeling that a gap is left comes from picturing 0.999… as someone writing nines and never finishing. At every stage of that picture a gap remains, so it seems a gap remains at the end. But 0.999… is not any one of the stages. It is not 0.999 with a great many nines, nor with a trillion nines. There is no last nine, so there is no stage at which the last gap is left."
resolution:
  - "In standard mathematics an endless decimal is defined as the number that its cut-off versions close in on, called their limit. More exactly, it is the smallest number that is at least as big as every one of 0.9, 0.99, 0.999 and so on. The number 1 is at least as big as all of them. Any number smaller than 1 is passed sooner or later: a number short of 1 by 0.000001 is passed by 0.9999999. So the smallest number not passed is 1, and 0.999… is 1."
  - "Put another way, if 0.999… and 1 were different numbers, their difference would be some positive amount. With n nines, the gap to 1 is one divided by 10 to the power n: 0.1, 0.01, 0.001 and so on. That gap gets smaller than any positive amount you choose. So the difference cannot be any positive amount, and it is zero."
  - "This is the same kind of endless sum as in [Achilles and the tortoise](achilles-and-the-tortoise): 9 tenths, plus 9 hundredths, plus 9 thousandths, and so on, adds up to exactly 1, just as the shrinking catch-up times add up to a fixed time. There the puzzle was whether endless steps can ever be finished. Here the puzzle is about notation: what number an endless string of digits names. The sum was already given by Leonhard Euler in his Elements of Algebra in 1770."
  - "The popular argument that multiplies by 10 (if x is 0.999…, then 10x is 9.999…, so 10x minus x is 9, and x is 1) and the argument from one third reach the right answer. But several writers on teaching, including Richman, Eisenmann and Cheng, point out that their steps quietly assume that 0.999… already has a meaning and that ordinary arithmetic works on it. The definition as a limit is what makes those steps safe."
finePrint: "Many students resist this. Education researchers since David Tall in the 1970s have found that students often picture 0.999… as a process that keeps getting closer to 1 rather than as a fixed number, and William Byers reports that most of the undergraduate mathematics students he met called it very close to 1, some even infinitely close, without being ready to call it equal. The answer is about the standard real numbers. Some other number systems, such as ones with infinitely small quantities, can be set up so that a string written like 0.999… stands for something infinitely close to 1 but less than it, and in Fred Richman’s system of decimal numbers 0.999… is less than 1. These are different systems with different rules, not corrections to the standard one. Every decimal that stops has a twin of this kind: 0.25 is also 0.24999…."
sources:
  - title: "Wikipedia: 0.999..."
    url: "https://en.wikipedia.org/wiki/0.999..."
    note: "Source for the definition as the smallest number at least as big as all cut-off versions (least upper bound), the limit argument with gaps of one divided by 10 to the power n, Euler’s Elements of Algebra (1770), the one-third and multiply-by-10 arguments and the criticisms by Byers, Richman, Eisenmann and Cheng, the education research (Tall, Byers), the alternative number systems including Richman’s, and the example 0.25 = 0.24999…. Gaps recomputed in Python with exact fractions."
---
