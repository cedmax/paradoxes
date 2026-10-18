---
title: Staircase paradox
format: argument
searchTerms:
  [
    "Manhattan distance",
    "pixel diagonal",
    "stairs and diagonal",
    "Schwarz lantern",
    "diagonal paradox",
    "arc length",
  ]
chapter: infinity
status: explained
relatedTo: coastline-paradox
simplification: light
noMaths: false
order: 200
sourcesVerified: true
problem: "A staircase with ever smaller steps hugs a diagonal, but is always longer. Why does its length not shrink to the diagonal’s?"
claimA: "As the steps get smaller, the staircase gets closer to the diagonal, so its length gets closer to the diagonal’s length."
claimB: "Every staircase has length 2, while the diagonal is about 1.4142 long."
whatBreaks: "The idea that if paths come ever closer to a line, their lengths must come ever closer to its length."
statusNote: "being close to the diagonal at every point says nothing about direction: the staircase only moves straight across or up, so its length never shrinks to the diagonal’s."
setup: "Take a square with sides of length 1. Walk from the bottom left corner to the top right corner using only steps to the right and steps up. With one big step, you go right 1 and up 1. With 10 steps, you go right 0.1 and up 0.1, ten times. With a million steps, the path looks just like the diagonal. Every point of the staircase with 10 steps is within about 0.0707 of the diagonal, and with more steps the gap shrinks towards zero. Yet every one of these staircases has length 2, while the diagonal, by Pythagoras, has length the square root of 2, about 1.4142. The staircases close in on the diagonal, but their lengths stay at 2. Martin Gardner called this “an ancient geometrical paradox”."
whyWrong: "The length of 2 is easy to check. However the steps are cut, the pieces going right add up to 1 and the pieces going up add up to 1. Shrinking the steps changes how the path looks, not how far it goes. The mistake is to assume that a path’s length must follow its shape, so that paths that look almost the same must be almost the same length. Length does not work like that. A path can stay very close to a line and still be much longer, because it zigzags instead of heading straight for the end."
resolution:
  - "The length of a curve is defined by marking points along it, joining them with straight segments, and adding up the segments. Marking more points never lowers the total, and the length is the smallest number that no such total goes above. From that definition follows a precise rule. If curves close in on a limit curve, the limit is never longer than the curves end up being. More exactly, its length is at most the smallest value that their lengths keep coming back close to. It can be less, but never more. Mathematicians call this lower semicontinuity of length. The staircase is the standard example where it is strictly less: 2 in every staircase, the square root of 2 in the limit."
  - "So the first claim fails at the step from shape to length. Being close to the diagonal at every point says nothing about the direction the path is moving in. The staircase always moves straight across or straight up, never along the diagonal, and that is what keeps its length at 2. The usual way of measuring a smooth curve works because it joins points that lie on the curve itself, with segments shrinking to zero. Those paths do approach the curve’s length. The staircase fails because half its corners, the outer ones, lie off the diagonal."
  - "This is why careful definitions of length matter in teaching, and why programs that estimate the perimeter of a shape made of pixels do not simply add up the pixel edges. In three dimensions, a shape called the Schwarz lantern does the same to area: surfaces made of flat faces can close in on a curved surface without their area closing in on its area, even when all their corners lie on the curved surface."
finePrint: "The [coastline paradox](coastline-paradox) is a cousin. There, measuring with ever shorter straight segments gives lengths that grow without limit, because the coast is rough at every scale. Here the lengths stay fixed at 2 while the paths become smooth-looking. In taxicab geometry, where distance is measured only along grid lines, the diagonal’s length is also 2, so the puzzle disappears. The 10-step figures are an illustration: with n steps, the outer corners are 1 divided by (n times the square root of 2) from the diagonal."
sources:
  - title: "Wikipedia: Staircase paradox"
    url: https://en.wikipedia.org/wiki/Staircase_paradox
    note: "Statement (uniform convergence, length 2 against the square root of 2); Martin Gardner’s phrase; length not continuous under uniform convergence; inscribed polygonal chains on smooth curves converge to arc length, and the staircase’s corners lie off the diagonal; uses in teaching and digital geometry; the Schwarz lantern; the coastline paradox and taxicab geometry. The 10-step figures and the corner distance formula are recomputed here."
  - title: "Petrunin and Zamora Barrera, What is differential geometry: curves and surfaces (arXiv:2012.11814)"
    url: https://arxiv.org/pdf/2012.11814
    note: "Theorem 2.8 and Corollary 2.9: if curves converge pointwise, the lower limit of their lengths is at least the length of the limit, so length is lower semicontinuous; the stairs-like polygonal lines approaching the diagonal of the unit square as the example where the inequality is strict."
  - title: "Wolfram MathWorld: Diagonal Paradox (Eric W. Weisstein)"
    url: https://mathworld.wolfram.com/DiagonalParadox.html
    note: "Statement: right-or-up steps across the unit square always total 2, however small the steps, while the diagonal is the square root of 2."
  - title: "Encyclopedia of Mathematics: Rectifiable curve"
    url: https://encyclopediaofmath.org/wiki/Rectifiable_curve
    note: "Definition of the length of a curve as the supremum (least upper bound) of the sums of distances between successive points along it, that is, of inscribed polygonal lines."
---
