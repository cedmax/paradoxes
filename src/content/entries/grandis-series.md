---
title: "Grandi's series"
titleAccent: series
aka: ["1-1+1-1", "1 − 1 + 1 − 1", "Grandi", "Cesàro sum", "Abel sum", "one half"]
chapter: infinity
subject: "mathematics"
status: explained
uniqueness: related
anchor: sum-of-all-whole-numbers
simplification: heavy
noMaths: false
order: 150
written: true
sourcesVerified: true
problem: "Does 1 − 1 + 1 − 1 + … add up to 0, to 1, or to one half?"
claimA: "The endless sum 1 − 1 + 1 − 1 + … has a definite value, and regrouping its terms cannot change that value."
claimB: "Grouping the terms as (1 − 1) + (1 − 1) + … gives 0, while grouping them as 1 + (−1 + 1) + (−1 + 1) + … gives 1."
verdict: "The running totals of 1 − 1 + 1 − 1 + … never settle, so the series has no ordinary sum, and regrouping it proves nothing. One half is the value that special summation methods assign to it."
whatBreaks: "The assumption that the series has an ordinary sum which survives regrouping, as a finite sum would."
statusNote: "the running totals never settle, so the series has no ordinary sum. The bracketed answers do not establish one."
setup: "Add 1, then subtract 1, then add 1, for ever. Pair the terms as (1 − 1) + (1 − 1) + … and the answer looks like 0. Leave the first 1 outside the pairs, as 1 + (−1 + 1) + …, and the answer looks like 1."
whyWrong: "The running total keeps switching between 1 and 0. It never settles. The usual meaning of an endless sum requires those totals to approach one value. Here there is no such value to preserve when brackets are moved."
resolution:
  - "The two groupings select different running totals. One keeps only the zeros; the other keeps only the ones. Neither establishes a sum for the original series."
  - "A different rule averages the running totals. Those averages approach one half. That is a legitimate value under a special summation method, not an ordinary sum. The assumption that the original series already has an ordinary sum is what fails."
finePrint: "Grandi discussed the series in 1703. Cesàro summation averages its running totals and gives 1/2. Abel summation gives the same value by studying 1 − x + x² − … for x below 1 and letting x approach 1. Both change what “sum” means. The algebraic trick that sets S = 1 − S assumes a value to start with, so it cannot prove an ordinary sum exists. Grouping a convergent series preserves its ordinary sum, while arbitrary reordering needs stronger conditions. This distinction also matters in [the sum of all whole numbers](sum-of-all-whole-numbers)."
sources:
  - title: "Wikipedia: Grandi's series"
    url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    note: "Source for the two bracketings giving 0 and 1, the 1 − S = S argument giving 1/2, the running totals 1, 0, 1, 0 and divergence, the warning that informal manipulations ignore what a sum rigorously means, Cesàro and Abel summation as two of the simplest methods, both giving 1/2 (Abel sum as the limit of 1/(1 + x) as x tends to 1), Cesàro’s 1890 method as the first rigorous one, the rule on reordering, and the Eilenberg–Mazur swindle."
  - title: "Wikipedia: Series (mathematics)"
    url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    note: "Source for the grouping rule: brackets can be moved freely in a finite sum; a bracketed series has running totals that are a selection (subsequence) of the original ones, so bracketing a series that settles gives the same value, while Grandi’s series bracketed in pairs gives 0 and bracketed after the first term gives 1."
  - title: "MathWorld: Grandi's Series"
    url: "https://mathworld.wolfram.com/GrandisSeries.html"
    note: "Source for the partial sums alternating between 1 and 0, the arithmetic means tending to 1/2 (Cesàro summable to 1/2), and 1 − x + x² − … = 1/(1 + x) tending to 1/2 as x approaches 1 from below (Abel summable to 1/2). Both limits recomputed numerically."
  - title: "MacTutor History of Mathematics: Guido Grandi"
    url: "https://mathshistory.st-andrews.ac.uk/Biographies/Grandi/"
    note: "Source for Grandi as a Camaldolese monk who worked on geometry and hydraulics, his 1703 treatment of the series, his use of 1/(1 + x) with x = 1 to get 1/2, and his bracketing to 0 + 0 + …"
---
