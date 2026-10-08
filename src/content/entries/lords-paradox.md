---
title: Lord's paradox
titleAccent: paradox
aka: ["Lord's", "dining hall weights", "adjusting for baseline", "ANCOVA paradox"]
chapter: probability
status: explained
uniqueness: related
anchor: simpsons-paradox
simplification: light
noMaths: false
order: 210
written: true
sourcesVerified: false
problem: "Two sound analyses of the same before and after data give opposite answers. Which one is right?"
claimA: "The data show that the diet made no difference to how students’ weight changed."
claimB: "The data show that the diet did make a difference to how students’ weight changed."
verdict: "Both are correct descriptions of the data. The data alone cannot say what the diet caused."
whatBreaks: "The idea that data alone can show what a diet or treatment caused, with no assumption about how things are linked."
statusNote: "both claims go beyond the data. Each reads a description of the numbers as a statement about cause, and that needs an assumption the data cannot test."
setup: "Frederic Lord gave this example in a 1967 paper. A large university wants to find out how the diet in its dining halls affects students, and whether the effect differs between the sexes. Every student is weighed on arrival in September and again the next June. In both months, the overall spread of weights for men is the same, and the same for women, although individual students have changed. Two statisticians analyse the data. The first compares each student’s weight gain, and finds that neither group has changed on average, so the diet had no effect. The second adjusts for the starting weight, and finds a significant difference between the two dining halls, so the diet had a larger effect on men."
whyWrong: "Both statisticians do correct arithmetic. They are answering different questions. Wikipedia reports Holland and Rubin’s view that each has captured an accurate descriptive feature of the data. The first finds that the average weight change is the same for both sexes. The second finds that, for a man and a woman who start at the same weight, the man gains more. The clash appears when these descriptions are turned into statements about what the diet caused."
resolution:
  - "Lord himself concluded that there is no logical or statistical procedure that can be counted on to make proper allowance for uncontrolled differences that existed before the study."
  - "Holland and Rubin, in 1983, argued that if both statisticians only describe the data, both are correct. If they turn their descriptions into causal statements, the correctness depends on untestable assumptions. They said the first statistician is wrong to make a causal statement without stating the assumption that would make it true. The second is more cautious, but his description is irrelevant to the dietician’s interest unless he makes further assumptions too."
  - "Judea Pearl agreed that the answer cannot be found in the data, but argued that this account is incomplete. In his version of the problem, a plausible causal model has starting weight as the thing that influences both which dining hall a student eats in and the final weight. Under that model, adjusting for starting weight is necessary, so the second statistician is right and the first is wrong. A different model would give a different verdict."
  - "Earlier responses are listed by Wikipedia too. Bock, in 1975, said both statisticians are correct once the question is clarified: the first asks about differences in average weight gain, the second about differences in individual weight gain. Cox and McCullagh, in 1982, assumed a student’s weight would have stayed the same without the dining hall, and concluded the first is right about group differences and the second about the effect on an individual."
finePrint: "Wikipedia treats this as a question of when to adjust for baseline, and compares it with other statistical paradoxes, such as [Simpson’s paradox](simpsons-paradox). Whether the causal model chosen in a real case is correct is exactly what the data cannot show. Only a randomised experiment avoids that problem, since it needs few assumptions to make claims about the whole group."
sources:
  - title: "Wikipedia: Lord's paradox"
    url: https://en.wikipedia.org/wiki/Lord%27s_paradox
---
