---
title: "Chessboard paradox"
format: argument
searchTerms:
  [
    "Loyd and Schlömilch",
    "64 equals 65",
    "square into rectangle",
    "Sam Loyd chessboard",
    "checkerboard paradox",
  ]
chapter: shapes
status: explained
variantOf: missing-square-puzzle
simplification: light
noMaths: false
order: 60
sourcesVerified: true
reviewed: true
problem: "An 8 by 8 square is cut into four pieces that make a 13 by 5 rectangle. Where did the extra square come from?"
claimA: "The four pieces fit together exactly into the 13 by 5 rectangle, with no gap."
claimB: "The pieces cover 64 squares, but a 13 by 5 rectangle covers 65."
whatBreaks: "The assumption that the pieces fit exactly into the rectangle, with the long diagonal a straight line."
statusNote: "two edges that should line up have slightly different slopes, leaving a thin gap along the diagonal worth exactly one square."
setup: "An 8 by 8 square covers 64 small squares. Cut it into two triangles and two sloping four-sided pieces. Rearrange them and they seem to fill a 13 by 5 rectangle, which covers 65. How could the same pieces gain a square?"
whyWrong: "The long edges look as though they meet along one straight diagonal. They do not. Some rise 3 squares over a width of 8; others rise 2 over a width of 5. The mismatch leaves a very thin gap."
resolution:
  - "The rectangle really covers 65 squares. The pieces still cover 64. A narrow gap running along the diagonal accounts for the extra square."
  - "It is the same trick as the [missing square puzzle](missing-square-puzzle): edges with almost equal slopes look straight when put together. The picture hides the gap; counting the area reveals it."
finePrint: "The gap is a parallelogram with corners (0, 0), (5, 2), (13, 5) and (8, 3). Its area is exactly one square. Its narrow angle is about 1.2 degrees. The diagram draws the actual gap and also shows it enlarged. The lengths 3, 5, 8 and 13 are consecutive Fibonacci numbers. Their products explain why 8 × 8 and 5 × 13 differ by one; related layouts can overlap instead of leaving a gap. The first known printed version appeared in 1868 under Oskar Schlömilch’s name, though the puzzle is often credited to Sam Loyd."
sources:
  - title: "Wikipedia: Chessboard paradox"
    url: "https://en.wikipedia.org/wiki/Chessboard_paradox"
    note: "Main source for the dissection, the gap of exactly 1, the Fibonacci generalisation and the history. Gap recomputed."
  - title: "Wolfram MathWorld: Dissection Fallacy"
    url: "https://mathworld.wolfram.com/DissectionFallacy.html"
    note: "Source for the 64 to 65 dissection, the slopes 0.4 and 0.375, and larger Fibonacci numbers giving better illusions."
  - title: "The Math Doctors: Disappearing Area?"
    url: "https://www.themathdoctors.org/disappearing-area/"
    note: "Independent explanation that the 5 by 13 rectangle hides a very narrow parallelogram of area 1, because the edges have slopes 3/8 and 2/5."
  - title: "American Statistical Association, Mathematics Awareness Month 2014: Area puzzles"
    url: "https://ww2.amstat.org/mam/2014/calendar/areapuzzles.html"
    note: "Source for the puzzle first appearing in print in 1868, and its Fibonacci explanation."
---
