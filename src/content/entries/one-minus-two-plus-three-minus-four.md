---
title: "1 − 2 + 3 − 4 + …"
titleAccent: "3 − 4 + …"
aka: ["alternating whole numbers", "equals one quarter", "Euler 1/4", "Abel sum", "1-2+3-4"]
chapter: infinity
status: explained
uniqueness: variant
anchor: sum-of-all-whole-numbers
simplification: heavy
noMaths: false
order: 180
written: true
sourcesVerified: true
problem: "How can 1 − 2 + 3 − 4 + … be said to equal one quarter, when its running totals swing wider and wider?"
claimA: "The running totals of 1 − 2 + 3 − 4 + … swing ever wider between positive and negative whole numbers, so the series cannot add up to 1/4."
claimB: "The sum 1 − 2 + 3 − 4 + … is 1/4, the value Leonhard Euler gave it and summation methods still give it."
verdict: "The series has no ordinary sum, because its running totals never settle. The 1/4 is the value that special summation methods assign, and the equals sign is shorthand for that."
whatBreaks: "The assumption that the equals sign means the ordinary sum. Here it stands for a value given by a summation method, because the ordinary sum does not exist."
statusNote: "the series has no ordinary sum, so 1/4 is wrong if heard as one. It is the value that summation methods such as Abel summation assign, which answers a different, precisely defined question."
setup: "The series 1 − 2 + 3 − 4 + … has the whole numbers as its terms, with signs that alternate. Its running totals go 1, −1, 2, −2, 3, and so on. Yet Leonhard Euler, in a paper written in 1749 and published in 1768, said its sum is 1/4. He knew how that sounded: “when it is said that the sum of this series 1-2+3-4+5-6 etc. is 1/4, that must appear paradoxical.”"
whyWrong: "The ordinary meaning of an endless sum is: add the terms one at a time and see what the total settles towards. Here the totals swing further out each time. Euler himself pointed out that adding 100 terms gives −50 and adding 101 terms gives +51. The totals settle on nothing, so the series is divergent and has no sum in the ordinary sense. Euler’s answer was that “it is necessary to give to the word sum a more extended meaning”. The 1/4 belongs to that extended meaning, even though it is written with the same equals sign."
resolution:
  - "Where 1/4 comes from: call the series s and line up shifted copies of it, s, then two copies of s pushed one place to the right, then s pushed two places. Added term by term, everything after the first 1 cancels, so 4s = 1 and s = 1/4. This does not show that the series has an ordinary sum. What it shows is narrower: any summation method that is linear (it respects adding series and multiplying them by a number) and stable (shifting the series by a place does not change its value), and that gives this series a value at all, must give 1/4."
  - "Starting in 1890, Ernesto Cesàro, Émile Borel and others studied well-defined methods for giving values to divergent series. The simplest, Cesàro summation, averages the running totals, and here it fails: the averages go 1, 0, 2/3, 0, 3/5, 0, and so on, alternating between exactly 0 and values closing in on 1/2. Averaging those averages once more, a method known as (H, 2) summation, gives 1/4, and so does the closely related (C, 2) method. So does Abel summation, which replaces the series by 1 − 2x + 3x² − 4x³ + …, equal to 1 ÷ (1 + x)² for x between −1 and 1, and lets x close in on 1 from below."
  - "Cesàro also noted, in 1891, that “one already writes (1 − 1 + 1 − 1 + …)² = 1 − 2 + 3 − 4 + …”. Multiplying Grandi’s series 1 − 1 + 1 − 1 + … by itself in the standard way for series, called the Cauchy product (each new term collects all the products of two terms whose positions add up to the same number), does produce this series, and the value 1/2 for Grandi’s series, squared, gives 1/4."
  - "This is the same situation as [the sum of all whole numbers](sum-of-all-whole-numbers): a divergent series is given a finite value by a summation method, which is not the same as adding the terms up. The first claim is right about the ordinary sum, and the second is right only about the value these methods assign."
finePrint: "Euler treated this series and Grandi’s series as two cases of the family 1 − 2ⁿ + 3ⁿ − 4ⁿ + …, work that led towards the functional equations of what are now called the Dirichlet eta function and the Riemann zeta function. The running totals, with 0 added at the start, list 0 and every positive and negative whole number exactly once, which is one way to show that all of them can be counted off in a single list."
sources:
  - title: "Wikipedia: 1 − 2 + 3 − 4 + ⋯"
    url: "https://en.wikipedia.org/wiki/1_%E2%88%92_2_%2B_3_%E2%88%92_4_%2B_%E2%8B%AF"
    note: "Source for the running totals and divergence, the 4s = 1 argument and what it proves about linear and stable methods (citing Hardy, Divergent Series), the work of Cesàro, Borel and others from 1890, Cesàro summation failing (means alternating between 0 and values tending to 1/2) and (C, 2), (H, 2) and Abel summation giving 1/4, Cesàro’s 1891 remark on the Cauchy product with Grandi’s series, the link to the eta and zeta functions, and the countability remark. Shifted sums, running totals, (H, 2) means and the Abel limit recomputed."
  - title: "Euler, Remarks on a beautiful relation between direct as well as reciprocal power series (E352), translated by Lucas Willis and Thomas J. Osler"
    url: "https://users.rowan.edu/~nguyen/euler/translations/Translation%20with%20notes%20of%20Eulers%20E%20352%20Aug%201%2006.pdf"
    note: "Original text in translation. Source for the quotations “must appear paradoxical” and “a more extended meaning”, and for 100 terms giving −50 and 101 terms giving +51 (recomputed)."
  - title: "Euler Archive: E352, Remarques sur un beau rapport entre les séries des puissances tant directes que réciproques"
    url: "https://scholarlycommons.pacific.edu/euler-works/352"
    note: "Source for the paper being written in 1749 and published in 1768 in the Mémoires de l’académie des sciences de Berlin."
---
