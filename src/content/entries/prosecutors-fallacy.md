---
title: Prosecutor's fallacy
format: argument
chapter: statistics
status: explained
variantOf: base-rate-fallacy
simplification: light
noMaths: true
order: 30
searchTerms: ["defence attorney's fallacy", "Sally Clark", "forensic evidence"]
problem: "If the chance of an innocent person matching the evidence is tiny, is the person who matches almost certainly guilty?"
claimA: "Only 1 in 1,000 innocent people would match this evidence, so a match means guilt is nearly certain."
claimB: "In a big enough population, many innocent people match too."
whatBreaks: "The assumption that a rare coincidence for an innocent person makes guilt almost certain."
statusNote: "how rare a match is for an innocent person differs from how likely a matching person is to be guilty: in a large city many innocent people match too. The match is still strong evidence."
setup: "Police find a trace at a crime scene that matches only 1 in 1,000 people. They test a suspect and it matches. The prosecutor tells the jury: the chance of an innocent person matching is 1 in 1,000, so there is a 999 in 1,000 chance the suspect is guilty."
whyWrong: "The prosecutor has answered the wrong question. The 1 in 1,000 tells you how often an innocent person would match. The jury needs to know how often a person who matches is innocent. These sound like the same thing, and they are not."
resolution:
  - "Suppose the suspect came from a city of 100,000 people, and nothing else points to them, so each of those people is equally likely to be the culprit. About 1 in 1,000 of those people match, so about 100 people match. One of them is the culprit and about 99 are innocent. A matching person is guilty roughly 1 time in 100, not 999 times in 1,000."
  - "The match is still strong evidence. It narrows 100,000 people to about 100. But it does not on its own prove guilt, and how much it proves depends on how many people could have left the trace and on what other evidence there is."
  - "The name comes from Thompson and Schumann, who in 1987 named this mistake and its mirror image, the defence attorney's fallacy. That is dismissing real evidence by saying that many people would match, without asking how much the match still narrows things down."
  - "A real example is the case of Sally Clark, a British woman convicted in 1999 of murdering her two baby sons. A paediatrician told the court the chance of two cot deaths in one family was 1 in 73 million, which he got by squaring a figure of 1 in 8,543. That was his estimate for a single cot death in an affluent, non-smoking family like hers. The Royal Statistical Society later said there was no statistical basis for it. The deaths might not be independent, and even a true figure would have been the wrong one to quote. The question is not how rare two cot deaths are. It is how they compare with the rarity of two murders. Ray Hill estimated that double cot death was about nine times more likely than double murder. Her convictions were overturned in 2003."
finePrint: "The example uses invented round numbers and assumes there is no other evidence, which is rarely true in a real trial. Real forensic cases are harder, because matches are not always yes or no and no one knows exactly how many people could have left the trace. The Sally Clark case also had other failures, including withheld medical evidence, so the statistics were not the only problem."
sources:
  - title: "Ray Hill (2005), Reflections on the Cot Death Cases"
    url: "https://doi.org/10.1111/j.1740-9713.2005.00077.x"
    note: "Significance 2, pp. 13-16. Hill gives a rough estimate of about nine double cot deaths per double murder."
  - title: "Wikipedia: Base rate fallacy"
    url: https://en.wikipedia.org/wiki/Base_rate_fallacy
    note: "covers the prosecutor's and defence attorney's fallacies and the 1987 naming"
  - title: "Wikipedia: Sally Clark"
    url: https://en.wikipedia.org/wiki/Sally_Clark
    note: "Background on the Sally Clark case; Hill's nine-to-one estimate is now supported by his original paper."
  - title: "Thompson and Schumann (1987): Interpretation of Statistical Evidence in Criminal Trials: The Prosecutor’s Fallacy and the Defense Attorney’s Fallacy"
    url: https://doi.org/10.1007/BF01044641
    note: "Law and Human Behavior 11, pp. 167-187, full text read. Source for the naming and definitions of both fallacies."
  - title: "Royal Statistical Society (2002): letter to the Lord Chancellor on the Sally Clark case"
    url: https://www.rss.org.uk/RSS/media/File-library/Membership/Sections/2020/Sally-Clark-RSS-letter-2002.pdf
    note: "Source for the squared figure being statistically invalid, the doubtful independence assumption, and the need to compare the likelihood of the deaths under each explanation."
  - title: "R v Clark [2003] EWCA Crim 1020"
    url: https://caselaw.nationalarchives.gov.uk/ewca/crim/2003/1020
    note: "Court of Appeal judgment. Source for the 1999 conviction, the 1 in 73 million figure given to the jury, the undisclosed microbiology results, and the convictions being quashed in 2003."
  - title: "Sesardic (2007): Sudden Infant Death or Murder? A Royal Confusion About Probabilities"
    url: https://doi.org/10.1093/bjps/axm015
    note: "British Journal for the Philosophy of Science 58, pp. 299-329, full text read. Source for 1 in 73 million being 1 in 8,543 squared."
sourcesVerified: true
reviewed: true
---
