---
title: Inspection paradox
titleAccent: paradox
chapter: probability
status: explained
simplification: light
noMaths: true
order: 12
written: true
aka: ["waiting time paradox", "bus", "class size"]
problem: "Why is your average wait for a bus longer than half the average gap between buses?"
claimA: "Turn up at a random moment and, on average, you should wait half the average gap."
claimB: "A random moment is more likely to fall in a long gap than a short one."
verdict: "Long gaps take up more of the clock, so a random arrival lands in them more often and waits longer."
whatBreaks: "The assumption that turning up at a random moment samples every gap equally. A random moment lands in each gap in proportion to its length, so long gaps count for more."
statusNote: "the first claim only holds when buses are evenly spaced. When gaps vary, the average wait is longer, and experts agree."
setup: "A college reports that its average class has 31 students. A survey asking students how big their classes are gets an average of 56. Both figures are correct. The numbers come from a Purdue University example, written up by the statistician Allen Downey."
whyWrong: "The college counts classes. The survey counts students, and asks each of them about the class they are in. A class of 100 students gets asked about 100 times. A class of 10 gets asked about 10 times. Large classes appear in the survey far more often than they appear in the college's list."
resolution:
  - "Here is a small version. A college has five classes: four of 10 students and one of 100. The average class has 28 students. But of the 140 students, 100 are in the big class. Ask every student and the average answer is about 74."
  - "Buses work the same way when they run unevenly. Suppose gaps between buses alternate between 5 and 15 minutes. The average gap is 10 minutes. If you arrive at a random moment, you are three times as likely to land in a 15 minute gap as in a 5 minute one, since it takes up three times as much of the clock. Your average wait is 6.25 minutes, not the 5 you would expect from a 10 minute average gap. For Boston's Red Line, Downey reports an average gap of 7.8 minutes and an average wait of 4.4 minutes for passengers who arrive at random. Half of 7.8 is 3.9, so the real wait is about 13% longer than the simple guess."
  - "So the bus is not out to get you. When gaps vary, a random arrival is more likely to land in a long one."
finePrint: "This only applies when arrivals are uneven and you turn up at a random time. If buses ran at exactly even gaps, there would be no effect. If you time your arrival to the timetable, the effect shrinks or goes away. How large it is depends on how uneven the gaps are. It is a paradox only in the sense of being surprising."
sources:
  - title: "Allen Downey: The Inspection Paradox is Everywhere"
    url: https://allendowney.substack.com/p/the-inspection-paradox-is-everywhere
    note: "source of the Purdue class size figures (31 and 56) and the Red Line figures (7.8 and 4.4). Downey gives the expected wait as 3.8 minutes and the gap as about 15%. Half of 7.8 is 3.9, which gives about 13%. The small examples are worked out here."
  - title: "Wikipedia: Inspection paradox"
    url: https://en.wikipedia.org/wiki/Inspection_paradox
    note: "lands on a section of the Renewal theory article. It supports only the general idea that a random moment tends to fall in a longer gap."
sourcesVerified: true
---
