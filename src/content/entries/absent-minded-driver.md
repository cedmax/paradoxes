---
title: "Absent-minded driver"
format: argument
titleAccent: "driver"
aka:
  [
    "absentminded driver",
    "Piccione and Rubinstein",
    "imperfect recall",
    "planning stage and action stage",
    "motorway exits",
  ]
chapter: individual
order: 20
status: explained
uniqueness: related
anchor: sleeping-beauty-problem
simplification: "heavy"
noMaths: false
sourcesVerified: true
problem: "A driver cannot tell two exits apart or remember passing one. Why does her best plan seem worse when she reaches an exit?"
claimA: "Recalculating at an exit gives her a better plan, even though she has learned nothing new."
claimB: "Her best plan is still best at an exit, because she has learned nothing new."
verdict: "The apparent improvement does not establish a better plan. The cited responses retain the original plan, though they differ on how to analyse a decision made without remembering earlier decisions."
whatBreaks: "The inference that the calculation at an exit establishes a better plan. The cited responses reject that inference, while differing on how to model the decision."
statusNote: "the cited responses retain the original plan, though they differ on the formal diagnosis of the recalculation."
setup: "A driver passes two identical motorway exits. The first leads to a dangerous area, the second leads home, and missing both means a night in a motel. She gives these outcomes scores: 0 for danger, 4 for home and 1 for the motel. At either exit she cannot tell which one it is or remember passing the first. She must use the same rule each time. Before leaving, she finds the rule with the best average score over many journeys: take an exit with a chance of one in three, which averages about 1.33 points a journey. Always leaving would mean danger; always passing would mean the motel. Randomising gives her a chance of reaching home."
whyWrong: "At an exit she calculates again. She might be at the first exit, which she always reaches, or the second, which she reaches only if she passed the first. Under her plan she passes the first exit two journeys in three, so on reaching an exit she is at the first one three times in five. Keeping those odds, a new calculation seems to favour leaving two times in three instead of one in three. Nothing new has happened, yet the best choice seems to have changed."
resolution:
  - "Aumann, Hart and Perry test a choice at one exit against the rule used at the other. Because the driver cannot distinguish the exits, those choices must agree. Their consistency test retains the original plan."
  - "Schwarz gives a different account of the odds, linked to the [Sleeping Beauty problem](sleeping-beauty-problem). He also rejects the apparent improvement. Keeping the original plan does not require treating one diagnosis of the calculation as settled."
finePrint: "The example assigns values of 0 to the dangerous area, 4 to home and 1 to the motel. If the chance of leaving at each exit is p, the average payoff from the start is 4p(1 − p) + (1 − p)². It is largest at p = 1/3, giving 4/3. Under that plan, three out of five exit encounters are at the first exit. The disputed recalculation holds that ratio fixed while changing the rule at both exits, and appears to favour p = 2/3. Aumann, Hart and Perry instead test a choice at one exit against the rule at the other, requiring the choices to agree because the driver cannot distinguish the exits. Schwarz offers another diagnosis linked to the [Sleeping Beauty problem](sleeping-beauty-problem). Agreement on the plan does not settle every question about that diagnosis."
sources:
  - title: "Wolfgang Schwarz: The Absentminded Driver - no paradox for halfers (draft, 2008)"
    url: "https://www.umsu.de/words/driver.pdf"
    note: "Source for the payoffs (0, 4, 1), the planning optimum (continue with chance 2/3, so leave with chance 1/3, payoff 4/3), Piccione and Rubinstein’s fixed 3/5 and the 9/5 against 8/5 comparison, Aumann, Hart and Perry’s two conditions and the constant 8/5, the evidential thirder optimum of about 0.53 for continuing, Schwarz’s halfer conclusion, and the footnote that every paper in the 1997 issue supports keeping the plan. All figures recomputed."
  - title: "Aumann, Hart and Perry: The Absent-Minded Driver (abstract)"
    url: "https://math.huji.ac.il/~hart/abs/driver.html"
    note: "Source for the quote “there is no paradox or inconsistency”, the planning and action stage framing, and the citation Games and Economic Behavior 20 (1997), 102 to 116."
  - title: "IDEAS/RePEc: Piccione and Rubinstein, On the Interpretation of Decision Problems with Imperfect Recall"
    url: "https://ideas.repec.org/a/eee/gamebe/v20y1997i1p3-24.html"
    note: "Source for the bibliographic details of the original paper: Games and Economic Behavior 20(1), 3 to 24, July 1997."
  - title: "Futility Closet: The Absent-Minded Driver’s Paradox"
    url: "https://futilitycloset.com/2016/08/26/absent-minded-drivers-paradox"
    note: "Supports the story (home, hazardous exit, a hotel or motel) and the payoffs 4, 1 and 0, credited to Piccione and Rubinstein."
---
