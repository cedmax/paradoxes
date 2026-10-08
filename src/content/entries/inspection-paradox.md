---
title: "Inspection paradox"
titleAccent: "paradox"
chapter: probability
status: explained
simplification: light
noMaths: true
order: 12
written: true
aka: ["waiting time paradox", "bus", "bus paradox", "why is my bus always late"]
problem: "Why is your average wait for a bus longer than half the average gap between buses?"
claimA: "Turn up at a random moment and, on average, you should wait half the average gap."
claimB: "People who turn up at random wait longer than half the average gap."
verdict: "Long gaps take up more of the clock, so a random arrival lands in them more often and waits longer."
whatBreaks: "The assumption that turning up at a random moment samples every gap equally. A random moment lands in each gap in proportion to its length, so long gaps count for more."
statusNote: "the first claim only holds when buses are evenly spaced. When gaps vary, the average wait is longer."
setup: "Buses on a route come every 10 minutes on average. You turn up at the stop without checking the timetable. It seems you should wait 5 minutes on average, half the gap. But when the buses run unevenly, the average wait comes out longer."
whyWrong: "Half the average gap would be right if you were equally likely to land in any gap. But you do not pick a gap, you pick a moment. A long gap covers more moments than a short one, so it is more likely to be the one you walk into. The same over-counting makes students report bigger classes than their college does: see the [class size paradox](class-size-paradox)."
resolution:
  - "Suppose gaps between buses alternate between 5 and 15 minutes. The average gap is 10 minutes. If you arrive at a random moment, you are three times as likely to land in a 15 minute gap as in a 5 minute one, since it takes up three times as much of the clock. Your average wait is 6.25 minutes, not the 5 you would expect from a 10 minute average gap."
  - "Real timetables show the same thing. For trains on Boston’s Red Line, Downey reports an average gap of 7.8 minutes and an average wait of 4.4 minutes for passengers who arrive at random. Half of 7.8 is 3.9, so the real wait is about 13% longer than the simple guess."
  - "So the bus is not out to get you. When gaps vary, a random arrival is more likely to land in a long one."
finePrint: "This only applies when arrivals are uneven and you turn up at a random time. If buses ran at exactly even gaps, there would be no effect. If you time your arrival to the timetable, the effect shrinks or goes away. How large it is depends on how uneven the gaps are. It is a paradox only in the sense of being surprising."
sources:
  - title: "Allen Downey: The Inspection Paradox is Everywhere"
    url: https://allendowney.substack.com/p/the-inspection-paradox-is-everywhere
    note: "source of the Red Line figures (7.8 and 4.4), which come from the arrival times of 70 trains. Downey gives the expected wait as 3.8 minutes and the gap as about 15%. Half of 7.8 is 3.9, which gives about 13%. The 5 and 15 minute example is worked out here."
  - title: "Wikipedia: Inspection paradox"
    url: https://en.wikipedia.org/wiki/Inspection_paradox
    note: "lands on a section of the Renewal theory article. It supports only the general idea that a random moment tends to fall in a longer gap."
sourcesVerified: true
reviewed: true
---
