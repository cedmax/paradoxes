---
title: "1 − 2 + 3 − 4 + …"
titleAccent: "3 − 4 + …"
aka: ["alternating whole numbers", "equals one quarter", "Euler 1/4", "Abel sum"]
chapter: infinity
status: explained
uniqueness: variant
anchor: sum-of-all-whole-numbers
simplification: heavy
noMaths: false
order: 214
written: true
sourcesVerified: false
problem: "How can 1 − 2 + 3 − 4 + … be said to equal one quarter, when it keeps swinging wider?"
claimA: "A sum of whole numbers with alternating signs cannot be a fraction like 1/4, and it keeps growing wider."
claimB: "The sum 1 − 2 + 3 − 4 + … equals 1/4."
verdict: "The series has no ordinary sum, and 1/4 is the value that summation methods assign to it."
whatBreaks: "The idea that “equals” means the same thing for an endless sum as for an ordinary sum."
statusNote: "the second claim is wrong in the ordinary sense. The series diverges, and 1/4 is the value a chosen summation method gives it."
setup: "The series 1 − 2 + 3 − 4 + … has the whole numbers as terms, with alternating signs. Wikipedia says the running totals, 1, −1, 2, −2, 3, and so on, do not settle on any limit, so the series diverges. Even so, in the mid-18th century, Leonhard Euler wrote what he admitted was a paradoxical equation: 1 − 2 + 3 − 4 + … = 1/4. Wikipedia says a rigorous explanation did not come until much later."
whyWrong: "The usual meaning of the sum of an endless series is the limit of its running totals. This series has no such limit, so it has no sum in the usual sense. Wikipedia says that, from 1890, Ernesto Cesàro, Émile Borel and others investigated well-defined methods to assign generalised sums to divergent series, including new readings of Euler’s attempts."
resolution:
  - "Wikipedia shows how the value 1/4 arises. If the series can be given an ordinary number s, shifting it and adding copies of it term by term gives 4s = 1, so s = 1/4. What this actually proves is the following: any summation method that is linear and stable and that sums the series must give 1/4. The same kind of steps show that such a method must also give Grandi’s series, 1 − 1 + 1 − 1 + …, the value 1/2."
  - "Many summation methods assign the value 1/4 easily. Wikipedia notes that Cesàro summation does not sum this series, so a slightly stronger method, such as Abel summation, is needed. Cesàro also pointed out in 1891 that the series is the Cauchy product of [Grandi’s series](grandis-series) with itself, which is another way to reach 1/4."
  - "This is the same situation as [the sum of all whole numbers](sum-of-all-whole-numbers): a divergent series is given a finite value by a summation method, which is not the same as adding the terms up."
finePrint: "Wikipedia reports that Euler treated this series and Grandi’s series as two special cases of a more general series, and that this work led to the Dirichlet eta function and the Riemann zeta function. The partial sums also include every whole number exactly once, which Wikipedia notes shows the whole numbers are countable. Neither point is needed for the paradox."
sources:
  - title: "Wikipedia: 1 − 2 + 3 − 4 + ⋯"
    url: https://en.wikipedia.org/wiki/1_%E2%88%92_2_%2B_3_%E2%88%92_4_%2B_%E2%8B%AF
---
