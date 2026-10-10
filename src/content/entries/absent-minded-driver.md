---
title: "Absent-minded driver"
titleAccent: "driver"
aka:
  [
    "absentminded driver",
    "Piccione and Rubinstein",
    "imperfect recall",
    "planning stage and action stage",
    "motorway exits",
  ]
chapter: probability
status: explained
uniqueness: related
anchor: sleeping-beauty-problem
simplification: light
noMaths: false
written: true
sourcesVerified: true
problem: "A driver who cannot tell two motorway exits apart plans to leave at an exit one time in three. Should she change her plan when she reaches an exit?"
claimA: "At an exit, working out the odds afresh shows that leaving two times in three pays better than the plan, so she should switch."
claimB: "She should keep to leaving one time in three, since that was the best plan and she learns nothing new on the road."
verdict: "The papers on the problem agree that she has no reason to switch. They differ on the formal model that shows why, but each finds a flaw in the calculation done at the exit."
whatBreaks: "The calculation done at the exit. It lets her new choice also decide what she does at the other exit, but keeps her estimate of which exit she is at, which came from the old plan."
statusNote: "the case for switching rests on a calculation that mixes two things: it lets her new choice also decide what she does at the other exit, but keeps odds that only hold under the old plan. According to the philosopher Wolfgang Schwarz, every paper in the 1997 journal issue devoted to the problem supports keeping the plan, mostly through different formal models. Agreeing on the plan is not agreeing on the diagnosis, and one diagnosis ties the slip to the [Sleeping Beauty problem](sleeping-beauty-problem)."
setup: "A driver is heading home late at night on a motorway with two exits that look exactly alike. The first exit leads to a dangerous area, worth 0 to her. The second exit leads home, worth 4. If she misses both, she spends the night in a motel, worth 1. She is absent-minded: at an exit she cannot tell whether it is the first or the second, and she cannot remember whether she has already passed one. So whatever she decides at one exit, she decides at the other too. The best she can do is leave with some fixed chance, for example by tossing a weighted coin at each exit."
whyWrong: "At home, she works out a plan. If she leaves with a chance of one in three at each exit, she ends up in the dangerous area one time in three, gets home two times in nine, and reaches the motel four times in nine. That gives an average payoff of 4/3, and no other chance does better. Then, at an exit, she reasons again. Following the plan, she always reaches the first exit, but reaches the second only two times in three. So the chance that this is the first exit is 3 in 5. Using that 3 in 5 to score each possible choice, leaving two times in three now comes out best, at 9/5, against 8/5 for the plan. Nothing new has happened, yet the best choice seems to have changed. Michele Piccione and Ariel Rubinstein presented this in 1997 as a clash between what is best at the planning stage and what is best at the action stage."
resolution:
  - "The sum at the exit mixes two things. The 3 in 5 chance of being at the first exit only holds if she follows the plan. But the sum also lets her new choice set what she will do at the second exit, which changes that very chance. Wolfgang Schwarz points out that Piccione and Rubinstein used a fixed value for this chance where it should depend on the choice."
  - "Robert Aumann, Sergiu Hart and Motty Perry replied that while the considerations at the planning and action stages do differ, “there is no paradox or inconsistency”. On their analysis, her choice at this exit should be the best one given what she does at the other exit, and it must also be the same choice she makes there, since she cannot tell them apart. If she follows the plan at the other exit, every choice at this one gives the same average payoff of 8/5, so nothing beats the plan, and leaving one time in three is the only choice that meets both conditions."
  - "So the first claim is false and the second is true. The plan made at home is still the best plan at the exit."
finePrint: "In a 2008 draft, “The Absentminded Driver: no paradox for halfers”, Schwarz links the problem to the [Sleeping Beauty problem](sleeping-beauty-problem). On his analysis, a driver who reasons like a halfer about which exit she is at keeps the plan, while a thirder who also follows evidential decision theory, which treats a choice as evidence about the outcome, would be led to leave about 47 times in 100. He concludes that decision theory works best here with halfer reasoning. Since halfers and thirders still disagree, that diagnosis is not agreed, even though the 1997 responses agree on keeping the plan. The original paper is Piccione and Rubinstein, “On the Interpretation of Decision Problems with Imperfect Recall”, Games and Economic Behavior, 1997. The payoffs are those in the sources, and every number here was recomputed."
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
