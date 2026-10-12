---
title: "Three prisoners problem"
titleAccent: "problem"
aka: ["three prisoners", "warden", "prisoner pardon", "Martin Gardner"]
chapter: probability
status: explained
uniqueness: variant
anchor: monty-hall-problem
simplification: light
noMaths: false
order: 100
written: true
sourcesVerified: true
problem: "A prisoner asks the warden to name one of the other two who will be executed. Told “B”, has his own chance of a pardon gone up?"
claimA: "With B ruled out, A and C are equally likely, so A’s chance of a pardon has risen to 1 in 2."
claimB: "A’s chance of a pardon is still 1 in 3, and C’s has risen to 2 in 3."
verdict: "The warden was always going to name someone other than the prisoner who asked, so the answer tells that prisoner nothing about himself."
whatBreaks: "The idea that once B is ruled out, A and C are equally likely to be the one pardoned."
statusNote: "the idea that A and C are now equally likely is wrong. The warden’s answer was bound to name someone other than A, so it carries no news about A, and listing the cases settles it."
setup: "Three prisoners, A, B and C, are in separate cells, sentenced to death. The governor has picked one of them at random to be pardoned. The warden knows which one, but is not allowed to say. Prisoner A asks the warden to name one of the other two who will be executed: “If B is to be pardoned, give me C’s name. If C is to be pardoned, give me B’s name. And if I am to be pardoned, secretly flip a coin to decide whether to name B or C.” The warden says B will be executed. A is pleased: he thinks his chance has gone up from 1 in 3 to 1 in 2. A secretly tells C, who reasons that A’s chance is still 1 in 3, but that his own has gone up to 2 in 3. Which of them is right? Martin Gardner set this puzzle in his Mathematical Games column in Scientific American in October 1959, and gave the answer in the next issue."
whyWrong: "Once B is out, two prisoners are left, and it feels as if each must now have an even chance. But A and C are not in the same position. A already knew the warden would name someone other than him, whoever was pardoned, so hearing a name tells A nothing about himself. C’s name, though, could have been given and was not. That is real news about C."
resolution:
  - "List the cases. Each prisoner starts with a 1 in 3 chance. If B is pardoned, which has a chance of 1 in 3, the warden names C, so that case is ruled out. If C is pardoned, which has a chance of 1 in 3, the warden must name B. If A is pardoned, which has a chance of 1 in 3, the warden flips the coin and names B half the time, a chance of 1/2 × 1/3 = 1/6."
  - "So the warden names B with a total chance of 1/3 + 1/6 = 1/2. Of that half, C’s pardon accounts for 1/3 and A’s for 1/6. Given that B was named, A’s chance is (1/6) ÷ (1/2) = 1/3, and C’s is (1/3) ÷ (1/2) = 2/3. A is right about B and wrong about himself. C is right."
  - "This is the [Monty Hall problem](monty-hall-problem) in another setting, with freedom in place of the car and execution in place of the goats. A is the player whose first pick stays at 1 in 3. The warden is the host, who knows the answer and must avoid both the one asking and the one pardoned. C is the door left closed, which collects the other 2 in 3."
finePrint: "The answer depends on the warden’s rule. The figures above assume the warden flips a fair coin when A is the one pardoned. If he always named B in that case, hearing “B” would make A’s and C’s chances equal, at 1 in 2 each, while hearing “C” would mean B is certainly the one pardoned. If A had asked a different question, such as “Will B be executed?”, the answer would also change the figures. Judea Pearl used a version of this puzzle to show that what a piece of news tells you depends on how it came to be given."
sources:
  - title: "Wikipedia: Three prisoners problem"
    url: https://en.wikipedia.org/wiki/Three_prisoners_problem
    note: "The problem as stated here, including A’s request and the coin flip; Gardner’s column (Scientific American 201(4), October 1959, with a follow-up in 201(5)); the answer 1/3 for A and 2/3 for C and its calculation; the equivalence with Monty Hall; the dependence on the warden’s rule and on the question asked; Pearl’s use of the puzzle (Probabilistic Reasoning in Intelligent Systems, 1988). All fractions recomputed exactly. The case where the warden always names B is worked out separately from the same rule."
  - title: "Scientific American blog: Let's make a deal: Revisiting the Monty Hall problem"
    url: https://www.scientificamerican.com/blog/observations/lets-make-a-deal-revisiting-the-monty-hall-problem/
    note: "Gardner introduced the problem in the October 1959 Scientific American and saved the answer for his next column; the problem is mathematically equivalent to Monty Hall."
---
