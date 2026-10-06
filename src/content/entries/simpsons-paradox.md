---
title: "Simpson's paradox"
titleAccent: "paradox"
chapter: probability
status: resolved
simplification: light
order: 3
written: true
problem: "Can one treatment beat another in every group of patients and still lose overall?"
claimA: "Treatment A works better for small stones and for large stones."
claimB: "So Treatment A must work better across all patients combined."
verdict: "The second claim is wrong. Treatment A loses overall because it was given mostly to the harder, large stones."
whatBreaks: "The step from winning in every group to winning overall, which fails when the two treatments saw a different mix of small and large stones."
statusNote: "the second claim is wrong. Treatment A wins for each stone size but loses overall, because the mix of stone sizes differs between the two groups. The arithmetic is not in dispute."
setup: "A real study of kidney stone treatments, published in 1986, covered 1,052 patients. This example uses two of its groups, 350 patients who had open surgery (A) and 350 who had a keyhole method through the skin (B). A treatment counted as a success if the stones were gone, or smaller than 2 mm, three months later. Doctors also recorded whether each stone was small or large. Success rates for small stones: A 93% (81 of 87), B 87% (234 of 270). For large stones: A 73% (192 of 263), B 69% (55 of 80). All patients together: A 78% (273 of 350), B 83% (289 of 350)."
whyWrong: "A winner in every group should be a winner overall. It feels like the whole must lean the same way as all its parts. That only holds if both treatments saw the same mix of small and large stones, and here they did not."
resolution:
  - "Look at who got which treatment. Treatment A was given mostly to large stones, which are harder to treat: 263 of its 350 patients. Treatment B was given mostly to small stones, which are easy: 270 of its 350. So A's overall number is dragged down by its harder cases, even though it did better on each kind of stone."
  - "So the first claim is true and the second is false: in these figures, B does better overall (83% against 78%). Nothing in the numbers is wrong. The combined figure just mixes two different kinds of patients in different proportions."
finePrint: "Here the split numbers are the ones to trust, because stone size affects both which treatment a patient got and how likely the treatment was to succeed. In other cases the combined numbers are the right ones. Which to trust depends on what is causing what, not on the arithmetic."
sources:
  - title: "Wikipedia: Simpson's paradox"
    url: "https://en.wikipedia.org/wiki/Simpson%27s_paradox"
    note: "stone-size figures as given here, from Charig et al., 1986 and Julious and Mullee, 1994. They are not yet checked against the paper. Totals and the definition of success match the paper's abstract."
  - title: "BMJ: Charig et al., 1986, Comparison of treatment of renal calculi"
    url: "https://www.bmj.com/content/292/6524/879"
  - title: "Europe PMC: Charig et al., 1986, abstract"
    url: "https://europepmc.org/article/MED/3083922"
---
