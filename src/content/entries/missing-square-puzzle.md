---
title: "Missing square puzzle"
titleAccent: "puzzle"
aka: ["Curry triangle", "disappearing square", "dissection paradox", "13 by 5 triangle"]
chapter: shapes-sums
subject: "geometry"
status: explained
simplification: light
noMaths: false
order: 30
written: true
sourcesVerified: true
problem: "The same four pieces seem to make two identical triangles, but one has a square-shaped hole. Where did the square come from?"
claimA: "Both shapes are the same 13 by 5 triangle with a straight long edge, so they cover the same area."
claimB: "The same pieces leave a 1 by 1 hole in the second outline, so the outlines enclose different areas."
verdict: "Neither shape is a true triangle. The long edge has a tiny bend, and the two bends differ by exactly one square."
whatBreaks: "The assumption that the long edge of each shape is a straight line."
statusNote: "the idea that both shapes are the same straight-edged triangle is wrong. The long edge of each is slightly bent, one inwards and one outwards, and the difference between the two outlines is exactly one square."
setup: "Four pieces on a square grid seem to make a triangle 13 squares wide and 5 tall. Rearrange the same pieces and the same triangle seems to appear, with a one-square hole. No piece has been added or removed."
whyWrong: "The two small triangles have slightly different slopes. One rises 3 squares over a width of 8. The other rises 2 over a width of 5. Those edges are almost in line, but not quite. The apparent long edge has a tiny bend."
resolution:
  - "Neither outline is a true triangle. One long edge bends slightly inwards; the other bends slightly outwards. That changes the area inside the outline by exactly one square."
  - "The pieces always cover 32 squares. The first outline encloses 32, so it is filled. The second encloses 33, leaving a one-square hole. Nothing has vanished: the apparent triangle has changed."
finePrint: "The slopes are 3/8 and 2/5. A true 13 by 5 triangle would cover 32.5 squares; the two bent outlines lie half a square either side of that. The four pieces have areas 12, 5, 8 and 7 squares. The bend is about 1.2 degrees, which is why it is easy to miss. The diagram uses the actual slopes, rather than drawing a straight edge over them. Paul Curry devised this version in 1953, according to Martin Gardner. The [chessboard paradox](chessboard-paradox) uses the same slope mismatch. The [vanishing puzzle](vanishing-puzzle) instead changes how a drawing is shared among figures."
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
