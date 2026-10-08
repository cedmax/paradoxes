---
title: Coin rotation paradox
titleAccent: paradox
aka: ["rolling coin", "two coins", "SAT coin question"]
chapter: probability
status: explained
simplification: light
noMaths: false
order: 201
written: true
sourcesVerified: false
problem: "A coin rolls once around the rim of an identical coin. How many times does it turn?"
claimA: "The rolling coin travels a distance equal to its own circumference, so it turns once."
claimB: "The rolling coin turns twice by the time it is back where it started."
verdict: "Its centre travels twice its circumference, and that is what sets the turns."
whatBreaks: "The idea that turns equal the rim length rolled over, measured along the edge of the other coin."
statusNote: "the first claim is wrong. The rolling coin turns twice, because its centre travels along a circle twice as long as the coin’s own rim."
setup: "Put two identical coins side by side on a table with the heads sides showing. Keep coin A still. Roll coin B around the rim of coin A without slipping, until B is back at its starting point. Halfway round, the two heads are again parallel, so B has turned once. By the time it is home it has turned a second time. Yet the edge of A is only as long as the edge of B, so B seems to have rolled just one circumference."
whyWrong: "Counting along the edge of the fixed coin only covers one of the two things going on. The rolling coin travels in a circle around A, and that circle is bigger than A’s rim. The turns are decided by how far the rolling coin’s centre travels, not by the length of the rim it touches."
resolution:
  - "The centre of coin B moves along a circle around coin A. The radius of that circle is the radius of A plus the radius of B. With equal coins that is twice one coin’s radius, so the path of the centre is twice as long as either coin’s circumference. Rolling without slipping, the coin turns once for each circumference its centre travels, so it turns twice."
  - "Wikipedia gives a way to see the two turns separately. Imagine A’s rim flattened into a straight line. Rolling B along that line gives one turn, which is the first rotation. Sliding B around A without rolling, so the same point of B always touches A, gives the second."
  - "For a coin of radius r rolling around one of radius R, the number of turns is R divided by r, plus one. Wikipedia adds that the shape in the middle need not be a circle: for any simple closed curve that does not cross itself, the rolling coin gains one extra turn."
finePrint: "On 1 May 1982 a US college admissions test, the SAT, included a multiple choice question on this problem. According to Wikipedia, the test had to be regraded after three students, Doug Jungreis, Shivan Kartha and Bruce Taub, showed that no listed answer was correct. The same extra turn explains why a sidereal day is shorter than a solar day."
sources:
  - title: "Wikipedia: Coin rotation paradox"
    url: https://en.wikipedia.org/wiki/Coin_rotation_paradox
---
