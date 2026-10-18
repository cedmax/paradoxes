---
title: False positive paradox
titleAccent: paradox
chapter: statistics
status: explained
simplification: light
noMaths: true
order: 20
aka: ["base rate fallacy", "medical test", "false positive"]
problem: "A test for a rare condition catches 90% of people who have it. You test positive. Are you probably ill?"
claimA: "The test catches 90% of people who have the condition, so a positive result means you are probably ill."
claimB: "Most people who test positive do not have the condition."
verdict: "When the condition is rare, false alarms outnumber true ones."
whatBreaks: "The assumption that how often a test catches a condition tells you how likely a positive result is to be right."
statusNote: "the first claim is wrong. Counting people settles it, and experts agree."
setup: "Take an invented condition called blue-ear. One person in 100 has it. A test for it catches 90% of people who have it, and wrongly flags 9% of people who do not. You test positive. What are the chances you have blue-ear?"
whyWrong: "The test sounds very good, so a positive result sounds almost certain. But the 90% describes how the test behaves on people who are ill. You want the opposite: how many of the people who test positive are ill. Those are different questions, and the answer to the second depends on how rare the condition is."
resolution:
  - "Count people. Take 10,000 people. 100 have blue-ear, and the test catches 90 of them. The other 9,900 are healthy, and the test wrongly flags 9% of them, which is 891 people. In total 981 people test positive, and only 90 of them are ill. That is about 9%. Roughly 9 in 10 positive results are false alarms."
  - "The healthy group is so much bigger than the ill group that even a small error rate produces more false alarms than there are real cases. If the condition were common, the same test would be far more convincing."
  - "This mistake is usually called the base rate fallacy: ignoring how common something is in the first place. Research on how people reason about this reports that people do much better when the problem is given as counts of people, as above, rather than as percentages."
finePrint: "The numbers are invented to keep the sums easy. The result depends on all three inputs: how common the condition is (prevalence), how often the test catches it (sensitivity, here 90%), and how often it correctly clears healthy people (specificity, here 91%, so 9% false alarms). It is a paradox only in the sense of being surprising. Nothing contradicts itself. Also, this assumes you were tested at random. If you were tested because you have symptoms, you belong to a group where the condition is more common, and a positive result means more."
sources:
  - title: "Wikipedia: Base rate fallacy"
    url: https://en.wikipedia.org/wiki/Base_rate_fallacy
    note: "the example here uses different numbers, worked out separately"
sourcesVerified: true
reviewed: true
---
