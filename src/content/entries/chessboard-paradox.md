---
title: Chessboard paradox
titleAccent: paradox
aka: ["Loyd and Schlömilch", "64 equals 65", "square into rectangle", "Sam Loyd chessboard"]
chapter: probability
status: explained
uniqueness: variant
anchor: missing-square-puzzle
simplification: light
noMaths: false
order: 216
written: true
sourcesVerified: false
problem: "An 8 by 8 square is cut into four pieces that make a 13 by 5 rectangle. Where did the extra square come from?"
claimA: "The same four pieces cover the same area, whether they make the square or the rectangle."
claimB: "The square covers 64 units and the rectangle covers 65."
verdict: "The four pieces do not quite fit the rectangle, and the barely visible gap makes up the difference."
whatBreaks: "The assumption that the pieces fit exactly into the rectangle with no gap."
statusNote: "the first claim is wrong as pictured. Wikipedia reports that the pieces leave a thin gap along the diagonal of the rectangle."
setup: "A chessboard, or a square with sides of 8 units, is cut into four pieces. Those four pieces are used to build a rectangle 13 units long and 5 units wide. The square has an area of 64 units, and the rectangle has 65. Wikipedia describes it as a falsidical paradox, one whose apparent result is false, based on an optical illusion. It is sometimes attributed to the American puzzle inventor Sam Loyd and the German mathematician Oskar Schlömilch."
whyWrong: "Wikipedia says the four pieces do not fit together exactly in the rectangle. They leave a small, barely visible gap around the rectangle’s diagonal. The gap has the shape of a parallelogram, with angles very close to a straight line: the narrow angles are about 1.245 degrees, and the wide ones about 178.755 degrees. Since the real angles are so close to a straight line, the eye takes the gap for a line and sees the pieces as fitting exactly."
resolution:
  - "Wikipedia computes the area of the gap using Heron’s formula, which gives the area of a triangle from its side lengths. The gap’s area comes to exactly 1 unit, which accounts for the extra unit of area of the rectangle."
  - "The lengths of the lines in the drawing are 2, 3, 5, 8 and 13, which are consecutive Fibonacci numbers. Cassini’s identity for these numbers says that the difference in area between square and rectangle is always 1 unit. For an odd index the rectangle is smaller by 1 unit, so the four pieces overlap slightly in place of leaving a gap. Using larger Fibonacci numbers makes the gap a smaller and smaller share of the rectangle, so it can be made practically invisible."
  - "This is the same trick as the [missing square puzzle](missing-square-puzzle). Wikipedia’s article on that puzzle lists the chessboard paradox as a similar puzzle."
finePrint: "Wikipedia’s article also discusses the generalisation to Fibonacci numbers in more detail and the conditions for an exact fit, which are not covered here. The related [vanishing puzzles](vanishing-puzzle) are rearranged pictures in place of rearranged shapes."
sources:
  - title: "Wikipedia: Chessboard paradox"
    url: https://en.wikipedia.org/wiki/Chessboard_paradox
  - title: "Wikipedia: Missing square puzzle"
    url: https://en.wikipedia.org/wiki/Missing_square_puzzle
---
