---
title: "Missing square puzzle"
titleAccent: "puzzle"
aka: ["Curry triangle", "disappearing square", "dissection paradox", "13 by 5 triangle"]
chapter: geometry-arithmetic
status: explained
simplification: light
noMaths: false
order: 202
written: true
sourcesVerified: false
problem: "The same four pieces make two triangles, and one has a square-shaped hole. Where did the square come from?"
claimA: "Both shapes are the same 13 by 5 triangle with a straight long edge, so they cover the same area."
claimB: "One shape has a 1 by 1 hole in it, so its pieces cover one square less than the other’s."
verdict: "Neither shape is a true triangle. The long edge has a tiny bend, and the two bends differ by exactly one square."
whatBreaks: "The assumption that the long edge of each shape is a straight line."
statusNote: "the idea that both shapes are the same straight-edged triangle is wrong. The long edge of each is slightly bent, one inwards and one outwards, and the difference between the two outlines is exactly one square."
setup: "Four pieces sit on a square grid: a red triangle 8 units wide and 3 tall, a blue triangle 5 wide and 2 tall, and two L-shaped pieces that together make 15 grid squares. Arranged one way, they seem to fill a right-angled triangle 13 units wide and 5 tall. Swap the two triangles and rearrange the L-shapes, and the same outline appears again, now with a 1 by 1 hole in it. Martin Gardner credits the puzzle to Paul Curry, an amateur magician in New York, who devised it in 1953."
whyWrong: "The eye reads the long edge of each shape as one straight line from corner to corner. It is two lines that meet at a slight angle. The red triangle climbs 3 units over 8 and the blue one 2 units over 5. Those slopes are close but not equal, so wherever the two triangles meet, the edge bends. The bend is about 1.2 degrees, too small to see in a drawing, so the picture hides it."
resolution:
  - "The slopes are 3/8 = 0.375 for the red triangle and 2/5 = 0.4 for the blue one. A true 13 by 5 triangle would have a slope of 5/13, about 0.385, in between. So the shape with the red triangle first has an edge that sags slightly inwards, and the shape with the blue triangle first has one that bulges slightly outwards. Where the triangles meet, each corner misses the true straight edge by 1/13 of a unit, measured up the grid."
  - "Counting areas settles it. The pieces add up to 12 + 5 + 15 = 32 squares. A true 13 by 5 triangle would be 13 × 5 ÷ 2 = 32.5. The sagging shape covers exactly 32, so it is solid. The bulging shape covers 33, so the same 32 squares of pieces leave one square empty. Laid on top of each other, the two bent edges enclose a thin sliver with an area of exactly one square. That sliver is where the missing square went."
  - "A quicker check: once the two triangles are placed, the space left for the L-shapes is a rectangle of 5 by 3, which is 15 squares, in one shape, and 8 by 2, which is 16 squares, in the other. The side lengths 2, 3, 5, 8 and 13 are consecutive Fibonacci numbers, the sequence in which each number is the sum of the two before it. Their products always differ by exactly one in this way, which is why the gap is exactly one square."
finePrint: "The puzzle is used in maths teaching as a warning against trusting a diagram over a calculation. The same Fibonacci trick, with the same two slopes, makes an 8 by 8 square appear to turn into a 13 by 5 rectangle in the [chessboard paradox](chessboard-paradox). Other “vanishing” puzzles, such as Sam Loyd’s [Get Off the Earth](vanishing-puzzle), work differently: nothing goes missing from the area, the figures are cut up and shared out. The idea of a dissection that seems to gain or lose area is much older than Curry’s version."
sources:
  - title: "Wikipedia: Missing square puzzle"
    url: "https://en.wikipedia.org/wiki/Missing_square_puzzle"
    note: "The four pieces and the 13 by 5 outline, the slopes, the areas 32, 32.5 and 33, the bend of about 1.245 degrees, the 15 and 16 square rectangles, the Fibonacci side lengths, the attribution to Paul Curry in 1953 via Martin Gardner, and its use in teaching. The piece areas, slopes and the 1/13 offset were recomputed."
  - title: "Alexander Bogomolny, Cut the Knot: Curry’s Paradox"
    url: "https://www.cut-the-knot.org/Curriculum/Fallacies/CurryParadox.shtml"
    note: "Independent account: Paul Curry, a New York amateur magician, devised the puzzle in 1953, as described by Martin Gardner in Mathematics, Magic and Mystery (1956); the 8 by 3 and 5 by 2 triangles; the 5 by 3 and 8 by 2 rectangles; the different slopes; and the Fibonacci identity behind the difference of one."
  - title: "Wolfram MathWorld: Dissection Fallacy"
    url: "https://mathworld.wolfram.com/DissectionFallacy.html"
    note: "The slopes 2/5 = 0.4 and 3/8 = 0.375 as the diagonals of two dissimilar rectangles, too close for the eye to tell apart."
---
