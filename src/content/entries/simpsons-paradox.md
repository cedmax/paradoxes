---
title: Simpson's paradox
titleAccent: paradox
chapter: probability
status: resolved
simplification: light
order: 3
written: true
problem: Can one treatment beat another in every group of patients and still lose overall?
claimA: Treatment A works better for small stones, and better for large stones.
claimB: Treatment B works better across all patients combined.
verdict: Uneven group sizes can flip the combined trend.
whatBreaks: The assumption that the whole must lean the way all its parts do.
statusNote: the combined number mixes unequal groups. The arithmetic is not in dispute.
setup: "Two treatments for kidney stones were compared in a real study of 700 patients, 350 on each. Doctors recorded whether each patient got better, and also whether the stone was small or large. Success rates for small stones: A 93% (81 of 87), B 87% (234 of 270). For large stones: A 73% (192 of 263), B 69% (55 of 80). All patients together: A 78% (273 of 350), B 83% (289 of 350)."
whyWrong: A winner in every group should be a winner overall. It feels like the whole must lean the same way as all its parts. That only holds if the groups are the same size for both treatments, and here they are not.
resolution:
  - "Look at who got which treatment. Treatment A was given mostly to large stones, which are harder to treat: 263 of its 350 patients. Treatment B was given mostly to small stones, which are easy: 270 of its 350. So A's overall number is dragged down by its harder cases, even though it did better on each kind of stone."
  - Nothing in the numbers is wrong. The combined figure just mixes two different kinds of patients in different proportions.
finePrint: Here the split numbers are the ones to trust, because stone size affects both which treatment a patient got and how likely they were to recover. In other cases the combined numbers are the right ones. Which to trust depends on what is causing what, not on the arithmetic.
sources:
  - title: "Wikipedia: Simpson's paradox"
    url: https://en.wikipedia.org/wiki/Simpson%27s_paradox
    note: figures from Charig et al., 1986, not yet checked against the original paper
---
