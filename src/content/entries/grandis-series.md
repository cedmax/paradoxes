---
title: "Grandi's series"
format: argument
searchTerms: ["1-1+1-1", "1 − 1 + 1 − 1", "Grandi", "Cesàro sum", "Abel sum", "one half"]
chapter: infinity
status: explained
relatedTo: sum-of-all-whole-numbers
simplification: heavy
noMaths: false
order: 150
sourcesVerified: true
problem: "Does 1 − 1 + 1 − 1 + … add up to 0, to 1, or to one half?"
claimA: "The sum 1 − 1 + 1 − 1 + … has a definite value that regrouping cannot change."
claimB: "Regrouping the same terms gives 0 one way and 1 another."
whatBreaks: "The assumption that the series has an ordinary sum which survives regrouping, as a finite sum would."
statusNote: "the running totals never settle, so there is no ordinary sum, and the bracketed answers establish none. One half is the value that special summation methods such as Cesàro summation assign, which changes what “sum” means."
setup: "Add 1, then subtract 1, then add 1, for ever. Pair the terms as (1 − 1) + (1 − 1) + … and the answer looks like 0. Leave the first 1 outside the pairs, as 1 + (−1 + 1) + …, and the answer looks like 1."
whyWrong: "The running total keeps switching between 1 and 0. It never settles. The usual meaning of an endless sum requires those totals to approach one value. Here there is no such value to preserve when brackets are moved."
resolution:
  - "The two groupings select different running totals. One keeps only the zeros; the other keeps only the ones. Neither establishes a sum for the original series."
  - "A different rule averages the running totals. Those averages approach one half. That is a legitimate value under a special summation method, not an ordinary sum. The assumption that the original series already has an ordinary sum is what fails."
finePrint: "Grandi discussed the series in 1703. Cesàro summation averages its running totals and gives 1/2. Abel summation gives the same value by studying 1 − x + x² − … for x below 1 and letting x approach 1. Both change what “sum” means. The algebraic trick that sets S = 1 − S assumes a value to start with, so it cannot prove an ordinary sum exists. Grouping a convergent series preserves its ordinary sum, while arbitrary reordering needs stronger conditions. This distinction also matters in [the sum of all whole numbers](sum-of-all-whole-numbers)."
sources:
  - title: "Wikipedia: Grandi's series"
    url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    note: "Main source for the bracketings, the 1/2 argument, divergence, and Cesàro and Abel summation. Sums recomputed."
  - title: "Wikipedia: Series (mathematics)"
    url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    note: "Source for the bracketing rule, and Grandi’s series giving 0 or 1 depending on the brackets."
  - title: "MathWorld: Grandi's Series"
    url: "https://mathworld.wolfram.com/GrandisSeries.html"
    note: "Source for the partial sums and the Cesàro and Abel sums of 1/2. Both limits recomputed."
  - title: "MacTutor History of Mathematics: Guido Grandi"
    url: "https://mathshistory.st-andrews.ac.uk/Biographies/Grandi/"
    note: "Source for Grandi, his 1703 treatment of the series, and his reasoning to 1/2 and to 0."
---
