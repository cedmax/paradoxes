---
title: "Chessboard paradox"
titleAccent: "paradox"
aka:
  [
    "Loyd and Schlömilch",
    "64 equals 65",
    "square into rectangle",
    "Sam Loyd chessboard",
    "checkerboard paradox",
  ]
chapter: geometry-arithmetic
status: explained
uniqueness: variant
anchor: missing-square-puzzle
simplification: light
noMaths: false
order: 216
written: true
sourcesVerified: true
problem: "An 8 by 8 square is cut into four pieces that make a 13 by 5 rectangle. Where did the extra square come from?"
claimA: "The four pieces fit together exactly into the 13 by 5 rectangle, with no gap."
claimB: "The pieces cover 64 squares, but a 13 by 5 rectangle covers 65."
verdict: "The pieces do not quite fill the rectangle. A thin, barely visible gap along its diagonal makes up the one extra square."
whatBreaks: "The assumption that the pieces fit exactly into the rectangle, with the long diagonal a straight line."
statusNote: "the idea that the pieces fit the rectangle exactly is wrong. Two edges that should line up have slightly different slopes, and they leave a thin gap of exactly one square along the diagonal."
setup: "A chessboard, a square 8 units on each side, is cut into four pieces: two triangles and two trapezoids, using cuts of lengths 3, 5 and 8. The four pieces are then laid out as a rectangle 13 units long and 5 wide. The square has an area of 8 × 8 = 64. The rectangle has an area of 13 × 5 = 65. The same pieces seem to have gained a square."
whyWrong: "In the rectangle, the long edges of the triangles have to line up with the slanted edges of the trapezoids to make one straight diagonal. They do not quite line up. The triangle edges climb 3 units over 8, a slope of 0.375. The trapezoid edges climb 2 units over 5, a slope of 0.4. Those slopes are so close that the eye takes the two edges for a single line, and it misses the thin gap between them."
resolution:
  - "The gap is a long, thin parallelogram running from one corner of the rectangle to the other, with corners at (0, 0), (5, 2), (13, 5) and (8, 3) on the grid. Its narrow angles are about 1.245 degrees and its wide ones about 178.755 degrees, so it looks like a line. Its area is exactly 1, which is the extra square. The rectangle’s outline really does cover 65 squares, but only 64 of them are filled by the pieces."
  - "This is the same mismatch as in the [missing square puzzle](missing-square-puzzle): the same two slopes, 3/8 and 2/5, meet along a line that is not quite straight, and the sliver between them is exactly one square."
  - "The lengths 3, 5, 8 and 13 are consecutive Fibonacci numbers, in which each number is the sum of the two before it. A rule called Cassini’s identity says that the square of a Fibonacci number always differs by exactly 1 from the product of its two neighbours: here 8 × 8 = 64 and 5 × 13 = 65. The same cut works with any Fibonacci number. With every other one, the rectangle comes out one square smaller, and the pieces overlap slightly in place of leaving a gap: 5 × 5 = 25 against 3 × 8 = 24. With larger numbers the one square is a smaller share of the whole, so the gap or overlap gets harder to see."
finePrint: "The first known printed version was published by the German mathematician Oskar Schlömilch in 1868. The puzzle is often credited to the American puzzle maker Sam Loyd, and some accounts say he showed it at a chess congress in 1858, ten years before Schlömilch’s version. Lewis Carroll worked on generalisations that were found in his notes after his death. The same four pieces can also be laid out as a shape that seems to cover only 63 squares, with an overlap in place of a gap."
sources:
  - title: "Wikipedia: Chessboard paradox"
    url: "https://en.wikipedia.org/wiki/Chessboard_paradox"
    note: "The dissection with cuts of lengths 3, 5 and 8, the areas 64 and 65, the parallelogram gap along the diagonal with an area of exactly 1, the Fibonacci and Cassini generalisation with gap for even index and overlap for odd, the shrinking share for larger numbers, Schlömilch’s 1868 publication, the attribution to Loyd and the 1858 claim made by some (Wikipedia does not say how well supported it is), Carroll’s unpublished notes, and the 63-square layout. The gap’s corners, angles and area were recomputed."
  - title: "Wolfram MathWorld: Dissection Fallacy"
    url: "https://mathworld.wolfram.com/DissectionFallacy.html"
    note: "The 8 by 8 square cut into four pieces that make a 5 by 13 rectangle and a 63-square shape; the cut in the ratio 5 to 3; the slopes 2/5 = 0.4 and 3/8 = 0.375 as the diagonals of two dissimilar rectangles; better illusions with larger Fibonacci numbers."
  - title: "The Math Doctors: Disappearing Area?"
    url: "https://www.themathdoctors.org/disappearing-area/"
    note: "Independent explanation that the 5 by 13 rectangle hides a very narrow parallelogram of area 1, because the edges have slopes 3/8 and 2/5."
  - title: "American Statistical Association, Mathematics Awareness Month 2014: Area puzzles"
    url: "https://ww2.amstat.org/mam/2014/calendar/areapuzzles.html"
    note: "The 8 by 8 to 5 by 13 puzzle first appeared in print in 1868 (citing W. W. Rouse Ball), and the Fibonacci explanation that 8 × 8 and 5 × 13 differ by one."
---
