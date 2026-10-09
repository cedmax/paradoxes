---
title: "Ross–Littlewood paradox"
titleAccent: "paradox"
aka:
  [
    "balls and vase",
    "ping pong ball problem",
    "Littlewood-Ross",
    "Ross Littlewood",
    "supertask",
  ]
chapter: infinity
status: explained
uniqueness: related
anchor: thomsons-lamp
simplification: light
noMaths: false
written: true
sourcesVerified: false
problem: "Ten balls go into a vase and one comes out, over and over, faster and faster until noon. How many balls are in the vase at noon?"
claimA: "The growing number of balls before noon is enough on its own to prove that the vase holds infinitely many at noon."
claimB: "If ball n is removed at step n and each ball stays outside after removal, with no jump back at noon, the vase is empty at noon."
verdict: "How many balls are in the vase along the way does not settle how many are left at noon. What is left depends on which balls are taken out, and with this order, every ball is gone."
whatBreaks: "The assumption that the number of balls at noon must follow the trend of the numbers before noon."
statusNote: "the growing count alone does not determine the contents at noon. With ball n removed at step n and each ball remaining outside, no ball is left. The empty-vase conclusion uses a continuity assumption about each ball’s path; philosophers dispute which assumptions should govern the final state."
setup: "Start with an empty vase and an endless supply of numbered balls. At 30 seconds before noon, put balls 1 to 10 in and take ball 1 out. At 15 seconds before noon, put balls 11 to 20 in and take ball 2 out. Each step comes in half the time of the one before, so there are endlessly many steps, and all of them are done before noon. After every step there are 9 more balls than before: 9 after one step, 18 after two, 9,000 after a thousand. So how many are in the vase at noon?"
whyWrong: "The count really does grow at every step, and it never goes down. It is natural to think the number at noon must be where that count is heading, which is infinity. But the count only describes the times before noon. It says how many balls are inside, not which ones, and at noon it is the particular balls that matter."
resolution:
  - "Follow any single ball. Ball 1 comes out at step 1. Ball 500 goes in at step 50 and comes out at step 500. Every ball, whatever its number, is taken out at a known step, and all the steps are over before noon. If each ball stays outside after removal, with its path continuing without a jump back into the vase at noon, no ball is still inside then. This is the continuity assumption used by defenders of the empty-vase answer. John Littlewood, who described the puzzle in 1953, and Sheldon Ross, who later took it up in his textbook A First Course in Probability, both gave this answer: zero. Ross also showed that if the ball removed at each step is picked at random from those inside, the vase is empty at noon with probability 1."
  - "The order of removal is what decides the answer. Put the same balls in, but at each step take out the ball whose number is ten times the step number: ball 10, then ball 20, and so on. Then every ball whose number is not a multiple of 10 is never taken out, and by the same reasoning infinitely many are left at noon. Under that same rule for carrying each ball’s position through noon, choosing which ball comes out at each step can leave any chosen number, or infinitely many. In each case the count before noon is exactly the same. So the count cannot be what settles the end."
  - "This is the same lesson as [Thomson’s lamp](thomsons-lamp): a pattern that runs up to noon does not by itself say what happens at noon. The twist here is that the balls are numbered, so a natural answer for noon does exist: the balls that were put in and never taken out. That answer assumes each ball stays where its path places it at noon, and can differ wildly from the trend of the count."
finePrint: "Not everyone accepts the empty vase. Paul Benacerraf’s view is that the story says what happens before noon and nothing about noon itself, so no answer is fixed. Jean Paul Van Bendegem argues that the problem is badly formed, because it assumes an endless list of steps can be completed. Victor Allis and Teunis Koetsier defend the empty vase. John Earman and John Norton point out that some quantity has to jump suddenly at noon: either the balls’ paths or the number of balls inside. The Stanford Encyclopedia of Philosophy does not treat the debate as closed. The Stanford Encyclopedia also presents the rival argument that the final count should follow the growing finite-stage counts and be infinite. The empty-vase answer is therefore a conclusion under the stated continuity assumption, not an unqualified consensus about all supertasks. Whether endless tasks can really be done in a finite time is a separate question, not covered here."
sources:
  - title: "Wikipedia: Ross-Littlewood paradox"
    url: "https://en.wikipedia.org/wiki/Ross%E2%80%93Littlewood_paradox"
    note: "Source for the set-up and timings, Littlewood (1953) and Ross, Ross’s random-removal result, the removal of ball 10, 20 and so on, the procedure leaving any chosen number of balls, and the camps: Allis and Koetsier (empty), Tymoczko and Henle (depends on the order), Benacerraf (underspecified) and Van Bendegem (ill-formed). Counts and removal schemes rechecked by simulation in Python."
  - title: "Stanford Encyclopedia of Philosophy: Supertasks"
    url: "https://plato.stanford.edu/entries/spacetime-supertasks/"
    note: "Source for Littlewood (1953) and Ross (1976) answering zero, the opposing argument from the growing count, Allis and Koetsier’s continuity principle, Van Bendegem’s challenge, and Earman and Norton’s point that some discontinuity must be accepted. The article does not treat the matter as settled."
---
