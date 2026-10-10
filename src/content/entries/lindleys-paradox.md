---
title: "Lindley's paradox"
chapter: numbers-mislead
subject: "statistics"
status: "explained"
simplification: light
noMaths: false
order: 150
written: true
sourcesVerified: true
reviewed: false
problem: "Can the same experiment be statistically significant and still favour no effect?"
claimA: "A conventionally significant result necessarily means the data favour an effect over no effect."
claimB: "With some sample sizes and starting assumptions, the same significant data can support no effect in a Bayesian comparison."
verdict: "A significance test and a Bayesian comparison ask different questions, so their answers can diverge."
whatBreaks: "The assumption that a small p-value and evidence against a precise no-effect hypothesis measure the same thing."
statusNote: "the methods use different calculations and assumptions; the disagreement can be derived without inconsistent arithmetic."
setup: "A large study finds a tiny departure from an exact no-effect claim. A conventional significance test says the result would be rare under that exact claim."
whyWrong: "A second calculation compares how well the data fit no effect against a range of possible effects. With a broad range, many alternatives predict the precise tiny result poorly."
resolution:
  - "The first test asks how surprising these data, or more extreme data, would be if no effect were true. It does not directly compare the probabilities of the rival explanations."
  - "The Bayesian calculation makes that comparison but depends on how probable different effect sizes were considered before the data. Neither result alone supplies every answer."
finePrint: "This pattern is often called the Jeffreys–Lindley paradox. It depends on choices including sample size, significance threshold and the Bayesian starting distribution; it is not guaranteed for every study."
sources:
  - title: "Wikipedia: Lindley’s paradox"
    url: "https://en.wikipedia.org/wiki/Lindley%27s_paradox"
  - title: "History and Nature of the Jeffreys–Lindley Paradox"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11442617/"
    note: "Reviews the origins of the frequentist versus Bayesian disagreement and the conditions under which it occurs."
---
