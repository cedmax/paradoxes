---
title: "Grandi's series"
titleAccent: series
aka: ["1-1+1-1", "1 − 1 + 1 − 1", "Grandi", "Cesàro sum", "Abel sum"]
chapter: infinity
status: explained
uniqueness: variant
anchor: sum-of-all-whole-numbers
simplification: heavy
noMaths: false
order: 211
written: true
sourcesVerified: false
problem: "Does 1 − 1 + 1 − 1 + … add up to 0, to 1, or to one half?"
claimA: "Grouping the terms in pairs, (1 − 1) + (1 − 1) + …, gives 0 every time, so the sum is 0."
claimB: "Grouping them as 1 + (−1 + 1) + (−1 + 1) + … gives 1, so the sum is 1."
verdict: "The series has no ordinary sum, so grouping its terms freely proves nothing."
whatBreaks: "The idea that an endless sum can be regrouped like a finite one and still mean the same thing."
statusNote: "the first claim and the second both rest on a false step. The series does not converge, so freely grouping its terms is not allowed."
setup: "The series 1 − 1 + 1 − 1 + … is sometimes called Grandi’s series, after the Italian mathematician and priest Guido Grandi, who gave a memorable treatment of it in 1703. Group the terms as (1 − 1) + (1 − 1) + … and every pair is 0, so the sum looks like 0. Group them as 1 + (−1 + 1) + (−1 + 1) + … and everything after the first term is 0, so the sum looks like 1. Wikipedia describes these as apparently contradictory results."
whyWrong: "Wikipedia says the series is divergent, which means its running totals do not settle on a value. The running totals go 1, 0, 1, 0, and so on. With no sum to start with, the regrouping tricks have nothing to be right or wrong about. Wikipedia notes this is akin to the general problem of conditional convergence."
resolution:
  - "Averaging the two values 0 and 1 gives one half, and a third argument gives the same. Call the sum S. Then 1 − S is the series with a new first term, which is again the same series, so 1 − S = S, which gives S = 1/2. Wikipedia says that these manipulations do not consider what the sum of a series rigorously means, and that they are not justified by ordinary arithmetic."
  - "Rigorous summation methods do assign a value. Wikipedia names two of the simplest, Cesàro summation and Abel summation. The first rigorous method for summing divergent series was published by Ernesto Cesàro in 1890. Both methods assign Grandi’s series the value 1/2, and the value follows from a rule that has been chosen, not from adding the terms up."
  - "This is the same situation as [the sum of all whole numbers](sum-of-all-whole-numbers), where a divergent series is given a finite value by a summation method, and the value is not what ordinary addition would give."
finePrint: "Wikipedia notes that variations of this idea, called the Eilenberg–Mazur swindle, are sometimes used in knot theory and algebra. The article also discusses how students and mathematicians have reacted to the series. This entry gives only the main argument."
sources:
  - title: "Wikipedia: Grandi's series"
    url: https://en.wikipedia.org/wiki/Grandi%27s_series
---
