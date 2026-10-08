---
title: Accuracy paradox
titleAccent: paradox
aka: ["class imbalance", "99 percent accurate", "accuracy is misleading"]
chapter: probability
status: explained
uniqueness: variant
anchor: base-rate-fallacy
simplification: light
noMaths: false
order: 209
written: true
sourcesVerified: false
problem: "Can a predictor that is right 99% of the time be useless?"
claimA: "A predictor that is right 99% of the time must be a good predictor."
claimB: "Always guessing the common answer is right 99% of the time and tells you nothing."
verdict: "When one outcome is very common, accuracy mostly reflects how common it is."
whatBreaks: "The idea that a high accuracy score shows that a predictor is useful."
statusNote: "the first claim is wrong. Accuracy rewards guessing the common answer, so a high score can come with no real skill."
setup: "Suppose that one category is found in 99% of cases. A predictor that says every case belongs to that category is right 99% of the time. Wikipedia calls this the accuracy paradox: accuracy is not a good measure for predictive models that classify cases, because a simple model can have a high accuracy and still be too crude to be useful."
whyWrong: "The trouble is class imbalance, where one outcome is much more common than the other. Accuracy counts all right answers equally, so getting the common outcome right earns almost all the credit. This is the same oversight as in the [false positive paradox](base-rate-fallacy): the prior chance of each outcome has to be taken into account."
resolution:
  - "Wikipedia says that prior probabilities for the classes need to be accounted for in error analysis. Precision and recall are better measures in such cases. Precision asks how many of the cases the predictor flagged were really positive. Recall asks how many of the real positives it found."
  - "Wikipedia notes that even precision can be biased by unbalanced class priors in the test sets. It gives a worked example of a screening system run on a population of one million, where accuracy is about 99.9% yet 990 of the 1,000 positive predictions are wrong, so precision is just 1%. The F1 score, which combines precision and recall, is about 2%."
finePrint: "This is a point about how predictors are scored, not a contradiction in logic. The article lists one reference, a 2000 conference paper on imbalanced training sets. It does not cover other measures than those named here."
sources:
  - title: "Wikipedia: Accuracy paradox"
    url: https://en.wikipedia.org/wiki/Accuracy_paradox
---
