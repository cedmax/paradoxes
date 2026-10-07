---
title: Prosecutor's fallacy
titleAccent: fallacy
chapter: probability
status: explained
simplification: light
noMaths: true
order: 10
written: true
aka: ["defence attorney's fallacy", "Sally Clark", "forensic evidence"]
problem: "If the chance of an innocent person matching the evidence is tiny, is the person who matches almost certainly guilty?"
claimA: "Only 1 in 1,000 innocent people would match this evidence, so a match means guilt is nearly certain."
claimB: "In a big enough population, many innocent people match too."
verdict: "How rare a match is and how likely a match is to be guilty are different numbers."
whatBreaks: "The assumption that a rare coincidence for an innocent person makes guilt almost certain."
statusNote: "the first claim is wrong. It swaps one probability for another, and experts agree."
setup: "Police find a trace at a crime scene that matches only 1 in 1,000 people. They test a suspect and it matches. The prosecutor tells the jury: the chance of an innocent person matching is 1 in 1,000, so there is a 999 in 1,000 chance the suspect is guilty."
whyWrong: "The prosecutor has answered the wrong question. The 1 in 1,000 tells you how often an innocent person would match. The jury needs to know how often a person who matches is innocent. These sound like the same thing, and they are not."
resolution:
  - "Suppose the suspect came from a city of 100,000 people, and nothing else points to them. About 1 in 1,000 of those people match, so about 100 people match. One of them is the culprit and about 99 are innocent. A matching person is guilty roughly 1 time in 100, not 999 times in 1,000."
  - "The match is still strong evidence. It narrows 100,000 people to about 100. But it does not on its own prove guilt, and how much it proves depends on how many people could have left the trace and on what other evidence there is."
  - "The name comes from Thompson and Schumann, who in 1987 named this mistake and its mirror image, the defence attorney's fallacy. That is dismissing real evidence by saying that many people would match, without asking how much the match still narrows things down."
  - "A real example is the case of Sally Clark, a British woman convicted in 1999 of murdering her two baby sons. A paediatrician told the court the chance of two cot deaths in one family was 1 in 73 million, which he got by squaring a figure of 1 in 8,543. That was his estimate for a single cot death in an affluent, non-smoking family like hers. The Royal Statistical Society later said there was no statistical basis for it. The deaths might not be independent, and even a true figure would have been the wrong one to quote. The question is not how rare two cot deaths are. It is how they compare with the rarity of two murders. One calculation reported on the case put double cot death as between 4.5 and 9 times more likely than double murder. Her convictions were overturned in 2003."
finePrint: "The example uses invented round numbers and assumes there is no other evidence, which is rarely true in a real trial. Real forensic cases are harder, because matches are not always yes or no and no one knows exactly how many people could have left the trace. The Sally Clark case also had other failures, including withheld medical evidence, so the statistics were not the only problem."
sources:
  - title: "Wikipedia: Base rate fallacy"
    url: https://en.wikipedia.org/wiki/Base_rate_fallacy
    note: "covers the prosecutor's and defence attorney's fallacies and the 1987 naming"
  - title: "Wikipedia: Sally Clark"
    url: https://en.wikipedia.org/wiki/Sally_Clark
    note: "dates and the 1 in 73 million figure. The 4.5 to 9 times figure is attributed there to a calculation by Ray Hill."
sourcesVerified: false
---
