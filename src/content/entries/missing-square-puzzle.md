---
title: "Missing square puzzle"
format: argument
searchTerms: ["Curry triangle", "disappearing square", "dissection paradox", "13 by 5 triangle"]
chapter: shapes
status: explained
simplification: light
noMaths: false
order: 30
sourcesVerified: true
reviewed: true
problem: "The same four pieces seem to make two identical triangles, but one has a square-shaped hole. Where did the square come from?"
claimA: "Both shapes are the same 13 by 5 triangle with a straight long edge, so they cover the same area."
claimB: "The same pieces leave a 1 by 1 hole in the second outline, so the outlines enclose different areas."
whatBreaks: "The assumption that the long edge of each shape is a straight line."
statusNote: "the long edge of each shape is slightly bent, one inwards and one outwards, so the two outlines differ in area by exactly one square."
setup: "Four pieces on a square grid seem to make a triangle 13 squares wide and 5 tall. Rearrange the same pieces and the same triangle seems to appear, with a one-square hole. No piece has been added or removed."
whyWrong: "The two small triangles have slightly different slopes. One rises 3 squares over a width of 8. The other rises 2 over a width of 5. Those edges are almost in line, but not quite. The apparent long edge has a tiny bend."
resolution:
  - "Neither outline is a true triangle. One long edge bends slightly inwards; the other bends slightly outwards. That changes the area inside the outline by exactly one square."
  - "The pieces always cover 32 squares. The first outline encloses 32, so it is filled. The second encloses 33, leaving a one-square hole. Nothing has vanished: the apparent triangle has changed."
finePrint: "The slopes are 3/8 and 2/5. A true 13 by 5 triangle would cover 32.5 squares; the two bent outlines lie half a square either side of that. The four pieces have areas 12, 5, 8 and 7 squares. The bend is about 1.2 degrees, which is why it is easy to miss. The diagram uses the actual slopes, rather than drawing a straight edge over them. Paul Curry devised this version in 1953, according to Martin Gardner. The [chessboard paradox](chessboard-paradox) uses the same slope mismatch. The [vanishing puzzle](vanishing-puzzle) instead changes how a drawing is shared among figures."
sources:
  - title: "Wikipedia: Missing square puzzle"
    url: "https://en.wikipedia.org/wiki/Missing_square_puzzle"
    note: "Main source for the pieces, slopes and areas, the slight bend, and Paul Curry (1953). Areas and slopes recomputed."
  - title: "Alexander Bogomolny, Cut the Knot: Curry’s Paradox"
    url: "https://www.cut-the-knot.org/Curriculum/Fallacies/CurryParadox.shtml"
    note: "Source for Paul Curry devising the puzzle in 1953, and the slopes and Fibonacci numbers behind it."
  - title: "Wolfram MathWorld: Dissection Fallacy"
    url: "https://mathworld.wolfram.com/DissectionFallacy.html"
    note: "The slopes 2/5 = 0.4 and 3/8 = 0.375 as the diagonals of two dissimilar rectangles, too close for the eye to tell apart."
---
