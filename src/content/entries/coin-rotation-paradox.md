---
title: "Coin rotation paradox"
titleAccent: "paradox"
aka: ["rolling coin", "two coins", "SAT coin question", "coin paradox", "rolling circles"]
chapter: shapes-sums
subject: "geometry"
status: explained
simplification: light
noMaths: false
order: 20
written: true
sourcesVerified: true
problem: "A coin rolls once around the rim of an identical coin. How many times does it turn?"
claimA: "The rolling coin turns once for each length of its own rim it rolls over, and the other coin’s rim is exactly that long, so it turns once."
claimB: "The rolling coin is upright again halfway round, and turns twice by the time it is back where it started."
verdict: "It turns twice. Rolling along the other coin’s rim gives one turn, and travelling all the way round that coin gives another."
whatBreaks: "The assumption that the number of turns equals the length of rim rolled over, divided by the coin’s own rim."
statusNote: "the idea that the turns equal the length of rim rolled over is wrong. That count leaves out the extra turn the coin makes by going once all the way round the fixed coin."
setup: "Put two identical coins side by side on a table, heads up. Hold coin A still. Roll coin B round the rim of A without slipping until B is back where it began. Halfway round, B’s head is upright again, so it has already turned once. By the time it is home it has turned twice. Yet A’s rim is exactly as long as B’s, so B seems to have rolled over just one length of its own rim."
whyWrong: "Counting rim lengths works when a coin rolls along a straight edge: each length of its own rim rolled over is one turn. Going round a curve adds something. Rolling round A, coin B also travels in a full circle about A, and that loop turns it once more, whether it rolls or not. Measuring only the contact between the two rims misses that turn."
resolution:
  - "Follow B’s centre. It moves on a circle round A whose radius is A’s radius plus B’s radius. For equal coins that is twice one coin’s radius, so the centre travels twice the length of a coin’s rim. Rolling without slipping, a coin turns once for every length of its own rim that its centre moves, so B turns twice."
  - "The two turns can be seen separately. Flatten A’s rim into a straight line and roll B along it: that gives one turn. Now slide B round A without rolling, keeping the same point of B touching A: that gives the second. Rolling round A does both at once."
  - "For a coin of radius r rolling round the outside of a coin of radius R, the number of turns is R/r + 1. With equal coins that is 1 + 1 = 2. If one coin has three times the radius of the other and the small one rolls round it, the answer is 3 + 1 = 4, not 3. A coin rolling round the inside of a circle loses the extra turn instead of gaining it. The fixed shape need not be a circle: for any closed outline that does not cross itself, one extra turn is added to the ratio of the two perimeters."
finePrint: "This exact trap appeared in the SAT, a US college admissions test, on 1 May 1982. The question had one circle with a third of the other’s radius rolling round it, and expected the answer 3. The correct answer, 4, was not among the five choices. Three students, Doug Jungreis, Shivan Kartha and Bruce Taub, reported the error, and about 300,000 tests had to be rescored. The same extra turn explains why the Earth spins about 366.25 times a year relative to the stars, but there are only about 365.25 days from noon to noon: going once round the Sun uses up one turn."
sources:
  - title: "Wikipedia: Coin rotation paradox"
    url: "https://en.wikipedia.org/wiki/Coin_rotation_paradox"
    note: "The two turns for equal coins, the formula R/r + 1, the flatten-and-slide decomposition, the extra turn for any simple closed curve and the subtraction for a coin rolling inside, the SAT question of 1 May 1982 and the three students’ names (citing the New York Times, 25 May 1982, which could not be fetched), and the 366.25 sidereal days against 365.25 solar days."
  - title: "Wolfram MathWorld: Coin Paradox"
    url: "https://mathworld.wolfram.com/CoinParadox.html"
    note: "The centre’s path of length 2π(R + r), giving (R + r)/r = R/r + 1 turns, and two turns for equal coins; the 1982 SAT question with R = 3r, expected answer 3 and correct answer 4; three of about 300,000 test takers reporting it and the exams being rescored."
  - title: "Scientific American: The SAT Problem That Everybody Got Wrong"
    url: "https://www.scientificamerican.com/article/the-sat-problem-that-everybody-got-wrong/"
    note: "The SAT question with a radius ratio of three, the five choices (3/2, 3, 6, 9/2, 9), the intended answer 3 and the correct answer 4; three test takers reporting the error; 300,000 exams rescored; the turn from rolling and the extra turn from going round."
---
