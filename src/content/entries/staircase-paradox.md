---
title: Staircase paradox
titleAccent: paradox
aka: ["Manhattan distance", "pixel diagonal", "stairs and diagonal", "Schwarz lantern"]
chapter: infinity
status: explained
uniqueness: related
anchor: coastline-paradox
simplification: light
noMaths: false
order: 217
written: true
sourcesVerified: false
problem: "A staircase with ever smaller steps hugs a diagonal, but is always longer. Why does its length not shrink to the diagonal’s?"
claimA: "As the steps get smaller, the staircase gets closer to the diagonal, so its length gets closer to the diagonal’s length."
claimB: "Every staircase has length 2, while the diagonal is about 1.4142 long."
verdict: "Being close to a curve does not make a path about as long as the curve."
whatBreaks: "The idea that a path that comes ever closer to a curve must come ever closer to its length."
statusNote: "the first claim is wrong. Wikipedia reports that the length of a curve is not continuous under this kind of convergence."
setup: "In a unit square, draw a staircase of horizontal and vertical segments from one corner to the opposite corner. Make the steps smaller and smaller, so that the staircases get uniformly closer to the diagonal. Wikipedia says each staircase has length 2, while the diagonal has length the square root of 2, about 1.4142. So the staircase lengths do not approach the length of the diagonal. Martin Gardner called it an “ancient geometrical paradox”."
whyWrong: "Wikipedia describes the staircase paradox as a pathological example showing that limits of curves do not necessarily preserve their length. For curves under uniform convergence, the length of a curve is not a continuous function of the curve. The pictures look the same in the limit, but the lengths do not follow."
resolution:
  - "Wikipedia explains the difference. For any smooth curve, polygonal chains connecting consecutive points along the curve, with segments shrinking to zero, always converge to the correct length. The staircase fails because some of its corners do not lie on the diagonal."
  - "Wikipedia notes that the paradox shows the need for careful definitions of arc length in teaching, and has applications in digital geometry, where it motivates ways of estimating the perimeter of pixelated shapes that do not simply add up the lengths of the pixel edges. In higher dimensions, the Schwarz lantern gives a similar example, in which surfaces made of flat faces converge to a curved surface without converging to its area, even when all the corners lie on it."
  - "Wikipedia lists the [coastline paradox](coastline-paradox) as a similar paradox, in which approximating by straight segments gives lengths that grow without limit."
finePrint: "Wikipedia notes that in taxicab geometry, where distance is measured along grid lines, the lengths of the staircases and the diagonal are equal. It also cites a 2022 note by John Gill on sequences of smooth curves that converge to a line segment but have lengths approaching any chosen value. This entry does not cover either."
sources:
  - title: "Wikipedia: Staircase paradox"
    url: https://en.wikipedia.org/wiki/Staircase_paradox
---
