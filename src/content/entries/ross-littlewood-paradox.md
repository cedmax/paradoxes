---
title: Ross–Littlewood paradox
titleAccent: paradox
aka: ["balls and vase", "ping pong ball problem", "ten balls in one out", "supertask vase"]
chapter: infinity
status: disputed
uniqueness: related
anchor: achilles-and-the-tortoise
simplification: light
noMaths: false
order: 7
written: true
sourcesVerified: false
problem: "At each step ten balls go into a vase and one comes out, endlessly fast. How many balls are in the vase at noon?"
claimA: "More balls go in than come out at every step, so the vase holds infinitely many balls at noon."
claimB: "Every ball that goes in is taken out at some later step, so the vase is empty at noon."
verdict: "Experts disagree on whether the answer is infinity, none, any number, or no answer at all."
whatBreaks: "Which to give up: that the count at noon follows from the steps, that the order of removal is fixed, or that the task can be completed."
statusNote: "Wikipedia sorts the answers into five camps, each favoured by named mathematicians or philosophers."
setup: "Start with an empty vase and an endless supply of balls. At one minute before noon the vase is empty. At 30 seconds before noon, ten balls are put in and one is taken out. At 15 seconds before noon the same happens again. Each step takes half the time of the one before, so endlessly many steps are done by noon. How many balls are in the vase at noon? John Littlewood described the problem in his 1953 book Littlewood’s Miscellany, and Sheldon Ross expanded on it in 1988. Wikipedia says it illustrates the same difficulty as [Thomson’s lamp](thomsons-lamp): a supertask, in which an infinite number of tasks are done one after another."
whyWrong: "The most intuitive answer is infinity, since there is no step where the count goes down. But now number the balls. At step 1, balls 1 to 10 go in and ball 1 comes out. At step 2, balls 11 to 20 go in and ball 2 comes out. Ball n goes in no later than step n and is taken out at step n, so every ball is eventually removed, and the vase is empty at noon. Wikipedia says it is the pairing of these two arguments that earned the problem the name paradox."
resolution:
  - "Wikipedia adds that Ross gave a probabilistic version, in which the ball removed is chosen at random from those in the vase. He showed that the chance any particular ball is still there at noon is 0, and so the chance that the vase is empty at noon is 1."
positions:
  - title: The vase is empty
    body: "Number the balls and remove them in order, so every ball is removed at some step. Wikipedia says mathematicians Allis and Koetsier favour this answer. Cost: it holds only for that order of removal. Wikipedia shows that removing ball 10 at step 1, ball 20 at step 2 and so on leaves infinitely many balls, so the intuitive answer is not simply wrong."
  - title: It depends on the conditions, or the problem is underspecified
    body: "The number of balls at noon depends on which balls are removed. Wikipedia gives a procedure that leaves any chosen number of balls, from none to infinitely many, and says Tom Tymoczko and Jim Henle favour this view. Paul Benacerraf takes the problem to be underspecified in another way: the state of the vase is well defined at every time before noon, but nothing can be concluded about noon or after, and the problem statement says nothing about that. Cost: the problem then has no single answer, and on Benacerraf’s view, as Wikipedia puts it, for all we know the vase disappears at noon."
  - title: The problem is ill-formed
    body: "Jean Paul Van Bendegem holds that, as in Zeno’s paradoxes, if infinitely many steps must be done one after another before noon, noon can never be reached. Asking how many balls are there at noon assumes it will be reached. Cost: it denies that an infinite number of steps can be completed at all, which is the same assumption at issue in [Zeno’s dichotomy paradox](zenos-dichotomy)."
finePrint: "The first position is the one the numbered-balls argument supports, and the intuitive answer of infinity is the one the paradox was built to challenge. Wikipedia lists infinity, empty, depends, underspecified and ill-formed as the categories of answer. This entry does not choose among them."
sources:
  - title: "Wikipedia: Ross–Littlewood paradox"
    url: https://en.wikipedia.org/wiki/Ross%E2%80%93Littlewood_paradox
---
