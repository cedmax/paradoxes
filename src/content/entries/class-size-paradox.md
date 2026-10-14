---
title: Class size paradox
titleAccent: paradox
chapter: statistics
status: explained
uniqueness: variant
anchor: inspection-paradox
simplification: light
noMaths: true
order: 60
written: true
aka: ["class size"]
problem: "Why do students report bigger classes than their college does?"
claimA: "The college says 31, the students say 56, so someone must have it wrong."
claimB: "The college has the full list of classes, and every student knows how big their own class is."
verdict: "Asking students counts each class once for every student in it, so big classes are over-counted. Both figures are correct, but they measure different things."
whatBreaks: "The assumption that two different averages of class size mean someone has it wrong. The college averages classes; the students’ answers average students, so big classes count once for every student in them."
statusNote: "the first claim is wrong. The college averages classes and the survey averages students, and experts agree."
setup: "A college reports that its average class has 31 students. A survey asking students how big their classes are gets an average of 56. Both figures are correct. The numbers come from a Purdue University example, written up by the statistician Allen Downey."
whyWrong: "The college counts classes. The survey counts students, and asks each of them about the class they are in. A class of 100 students gets asked about 100 times. A class of 10 gets asked about 10 times. Large classes appear in the survey far more often than they appear in the college's list."
resolution:
  - "Here is a small version. A college has five classes: four of 10 students and one of 100. The average class has 28 students. But of the 140 students, 100 are in the big class. Ask every student and the average answer is about 74."
finePrint: "This only applies when you ask people about the group they are in. Picking classes at random from the college’s list gives the right average. If every class were the same size, there would be no effect. How large it is depends on how uneven the class sizes are. This is a case of the [inspection paradox](inspection-paradox), the same over-counting that makes people wait longer for buses. It is a paradox only in the sense of being surprising."
sources:
  - title: "Allen Downey: The Inspection Paradox is Everywhere"
    url: https://allendowney.substack.com/p/the-inspection-paradox-is-everywhere
    note: "source of the Purdue class size figures (31 and 56). The small example is worked out here."
sourcesVerified: true
reviewed: true
---
