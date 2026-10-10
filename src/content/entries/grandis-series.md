---
title: "Grandi's series"
titleAccent: series
aka: ["1-1+1-1", "1 − 1 + 1 − 1", "Grandi", "Cesàro sum", "Abel sum", "one half"]
chapter: infinity
status: explained
uniqueness: related
anchor: sum-of-all-whole-numbers
simplification: heavy
noMaths: false
order: 211
written: true
sourcesVerified: true
problem: "Does 1 − 1 + 1 − 1 + … add up to 0, to 1, or to one half?"
claimA: "The endless sum 1 − 1 + 1 − 1 + … has a definite value, and regrouping its terms cannot change that value."
claimB: "Grouping the terms as (1 − 1) + (1 − 1) + … gives 0, while grouping them as 1 + (−1 + 1) + (−1 + 1) + … gives 1."
verdict: "The running totals of 1 − 1 + 1 − 1 + … never settle, so the series has no ordinary sum, and regrouping it proves nothing. One half is the value that special summation methods assign to it."
whatBreaks: "The assumption that the series has an ordinary sum which survives regrouping, as a finite sum would."
statusNote: "the idea that the series has a definite ordinary value is wrong, because its running totals swing between 1 and 0 for ever. Adding brackets is safe only in a series whose running totals settle, so the results 0 and 1 prove nothing."
setup: "The series 1 − 1 + 1 − 1 + … is named after Guido Grandi, a Camaldolese monk who worked on geometry and hydraulics, and who discussed it in 1703. Bracket it as (1 − 1) + (1 − 1) + … and every bracket is 0, so the total looks like 0. Bracket it as 1 + (−1 + 1) + (−1 + 1) + … and everything after the first 1 is 0, so the total looks like 1. Grandi himself gave a third answer, one half, from the formula 1 ÷ (1 + x) = 1 − x + x² − x³ + …, setting x equal to 1."
whyWrong: "An endless sum has an ordinary value only when its running totals settle on a number. Here the running totals go 1, 0, 1, 0, and so on for ever, so they settle on nothing and the series is called divergent. Brackets can be moved freely in a finite sum. In an endless sum, each way of bracketing makes a new series, whose running totals are a selection from the old ones: here (1 − 1) + (1 − 1) + … keeps only the totals 0, 0, 0, …, and 1 + (−1 + 1) + … keeps only the totals 1, 1, 1, …. If the old totals settle on a number, every such selection settles on the same number, so bracketing is safe. Here they do not settle, so the two bracketed series can settle on different numbers. Both answers are correct about their own series, and neither tells anything about the original one, which has no ordinary sum to protect. The same kind of trouble affects reordering the terms of a series, which is safe only when the series settles even with all its signs made positive."
resolution:
  - "Other quick arguments give one half. Call the sum S. Then 1 − S is 1 − (1 − 1 + 1 − …), which is again 1 − 1 + 1 − …, so 1 − S = S and S = 1/2. This assumes there is an ordinary sum S to work with, which is exactly what is missing, so it is no better than the bracket arguments."
  - "Rigorous methods can still give the series a value, by changing what “sum” means. The first rigorous method for summing divergent series was published by Ernesto Cesàro in 1890. Cesàro summation averages the running totals: the averages of 1, 0, 1, 0, … close in on 1/2. Abel summation replaces the series by 1 − x + x² − x³ + …, which equals 1 ÷ (1 + x) for x between −1 and 1, and lets x close in on 1 from below. That limit is also 1/2. So one half is the Cesàro sum and the Abel sum of the series. It is a value given by a chosen rule, not the result of adding the terms up."
  - "So the regrouping is what fails: it treats a series with no ordinary sum as if it had one. As with [the sum of all whole numbers](sum-of-all-whole-numbers), a value assigned by a summation method must not be mistaken for an ordinary sum. The twist here is that the ordinary rules of arithmetic, applied to the same series in different ways, give flatly different answers."
finePrint: "Grandi also argued that the bracketing (1 − 1) + (1 − 1) + … gives 0 + 0 + …, which he took to equal one half. Variations on the bracketing trick, known as the Eilenberg–Mazur swindle, are sometimes used in knot theory and algebra."
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
