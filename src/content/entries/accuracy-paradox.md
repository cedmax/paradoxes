---
title: "Accuracy paradox"
format: argument
titleAccent: "paradox"
searchTerms:
  ["class imbalance", "99 percent accurate", "accuracy is misleading", "precision and recall"]
chapter: statistics
status: explained
relatedTo: base-rate-fallacy
simplification: light
noMaths: false
order: 120
sourcesVerified: true
problem: "Can a predictor that is right 99% of the time be useless?"
claimA: "A predictor with a higher accuracy score is always more useful."
claimB: "A predictor with a lower accuracy score can be more useful."
verdict: "When one outcome is very common, a high accuracy score mostly reflects how common it is, not how useful the predictor is."
whatBreaks: "The idea that a higher accuracy score always means a more useful predictor."
statusNote: "the idea that a higher accuracy score always means a more useful predictor is wrong. When one outcome is far more common than the other, guessing it every time earns a high score with no skill at all."
setup: "A classifier is a rule or program that sorts cases into groups, such as “fraud” and “not fraud”. Accuracy is the share of cases it gets right. A higher score sounds like a better classifier. But if nearly everything belongs to one group, does that score tell you whether it finds what matters?"
whyWrong: "Accuracy counts every correct answer equally. When one answer is much more common, a classifier can score highly just by guessing it every time, even if it misses every rare case. This uneven split between groups is called class imbalance."
resolution:
  - "Start by asking how common each outcome is, and which mistakes matter most. Recall asks: of the cases that really were positive, how many did the classifier find? Precision asks: of the cases it flagged, how many were real? Those questions can be more useful than one overall accuracy score."
  - "This is related to the [false positive paradox](base-rate-fallacy), but it asks a different question. The false positive paradox asks whether you can trust a positive result. The accuracy paradox asks whether you can trust a high score."
finePrint: "This is a problem with how classifiers are scored, not a contradiction in logic. Which measure to use depends on the cost of missed cases and false alarms. F1 combines precision and recall into one score. Balanced accuracy gives equal weight to how well a classifier handles positive and negative cases, so the larger group cannot dominate. Valverde-Albacete and Peláez-Moreno (2014) discuss other measures based on information theory, which are not covered here."
sources:
  - title: "Wikipedia: Accuracy paradox"
    url: https://en.wikipedia.org/wiki/Accuracy_paradox
    note: "Statement of the paradox, the always-negative classifier scoring highly when negative cases are common, and explanations of precision, recall, F1 and balanced accuracy."
  - title: "Valverde-Albacete and Peláez-Moreno (2014), 100% Classification Accuracy Considered Harmful, PLOS ONE 9(1), abstract on RePEc"
    url: https://ideas.repec.org/a/plo/pone00/0084217.html
    note: "Citation and abstract, including the finding that a classifier with lower accuracy can have greater predictive power. The full text on PLOS ONE could not be fetched."
  - title: "Universidad Carlos III de Madrid, GPM group: Accuracy paradox project page"
    url: https://gpm.webs.tsc.uc3m.es/projects/acc-paradox/
    note: "The authors’ group page: class imbalance as the cause, and a classifier labelling every case as the majority class."
---
