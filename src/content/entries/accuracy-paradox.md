---
title: "Accuracy paradox"
titleAccent: "paradox"
aka:
  ["class imbalance", "99 percent accurate", "accuracy is misleading", "precision and recall"]
chapter: probability
status: explained
uniqueness: related
anchor: base-rate-fallacy
simplification: light
noMaths: false
order: 209
written: true
sourcesVerified: true
problem: "Can a predictor that is right 99% of the time be useless?"
claimA: "A predictor that is right more often must be the more useful predictor."
claimB: "A predictor that always guesses the common answer scores 99%, while one that catches the rare cases scores lower yet is more useful."
verdict: "When one outcome is very common, a high accuracy score mostly reflects how common it is, not how useful the predictor is."
whatBreaks: "The idea that a higher accuracy score always means a more useful predictor."
statusNote: "the idea that a higher accuracy score always means a more useful predictor is wrong. When one outcome is far more common than the other, guessing it every time earns a high score with no skill at all."
setup: "A classifier is a rule or program that sorts cases into categories, such as “fraud” and “not fraud”. Its accuracy is the share of cases it sorts correctly. Suppose 99% of cases are negative and 1% positive. A classifier that calls every case negative is right 99% of the time, yet it never finds a single positive case. A different classifier that does find the positives, at the price of some mistakes, can score lower and still be far more useful. Francisco Valverde-Albacete and Carmen Peláez-Moreno put it this way in 2014: models “with a given level of accuracy may have greater predictive power than models with higher accuracy.”"
whyWrong: "Accuracy counts every correct answer the same. When one outcome is much more common than the other, a situation called class imbalance, almost all the correct answers available are for the common outcome. So a classifier can collect nearly all the credit just by naming the common outcome every time. The score then says more about how the cases are split than about the classifier."
resolution:
  - "The fix is to read accuracy together with how common each outcome is, and to use measures that look at the rare outcome directly. Precision asks: of the cases the classifier flagged as positive, how many really were? Recall asks: of the cases that really were positive, how many did it flag? The F1 score is a single figure that combines the two. Balanced accuracy gives equal weight to how well the classifier does on positive cases and on negative cases, so the common outcome cannot swamp the score."
  - "The Wikipedia article on the paradox works through an example. A classifier is run on 1,000,000 cases, of which only 10 are really positive. It flags all 10 of them, and also wrongly flags 990 negative cases. Its accuracy is 999,010 correct out of 1,000,000, which is 99.901%. Its recall is 10 out of 10, or 100%. But its precision is 10 out of 1,000, which is 1%: only 1 in 100 of its alarms is real. The F1 score is about 2%."
  - "That last example has the same shape as the [false positive paradox](base-rate-fallacy): when the positive cases are rare, even a small rate of false alarms on the huge negative group swamps the true alarms. The twist here is different, though. The accuracy paradox is about the scoreboard: a single score that counts every right answer equally rewards a classifier for the cases that were easy all along."
finePrint: "This is a point about how classifiers are scored, not a contradiction in logic. Nothing about the numbers is in dispute. Which measure to use depends on what the classifier is for: if missing a rare case is costly, recall matters most; if false alarms are costly, precision does. Valverde-Albacete and Peláez-Moreno propose their own replacement measures, based on information theory, which are not covered here. The 99% split in the setup is an illustration."
sources:
  - title: "Wikipedia: Accuracy paradox"
    url: https://en.wikipedia.org/wiki/Accuracy_paradox
    note: "Statement of the paradox, the always-negative classifier scoring 99% when 99% of cases are negative, the definitions of precision, recall, F1 and balanced accuracy, and the worked example (10 positives in 1,000,000 cases; 10 true positives, 990 false positives, 0 false negatives). Accuracy 99.901%, precision 1%, recall 100% and F1 = 2/101, about 1.98%, recomputed."
  - title: "Valverde-Albacete and Peláez-Moreno (2014), 100% Classification Accuracy Considered Harmful, PLOS ONE 9(1), abstract on RePEc"
    url: https://ideas.repec.org/a/plo/pone00/0084217.html
    note: "Citation and abstract, including the quoted statement of the paradox. The full text on PLOS ONE could not be fetched."
  - title: "Universidad Carlos III de Madrid, GPM group: Accuracy paradox project page"
    url: https://gpm.webs.tsc.uc3m.es/projects/acc-paradox/
    note: "The authors’ group page: class imbalance as the cause, and a classifier labelling every case as the majority class."
---
