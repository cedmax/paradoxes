---
title: Missing square puzzle
titleAccent: puzzle
aka: ["Curry triangle", "disappearing square", "dissection paradox", "13 by 5 triangle"]
chapter: probability
status: explained
simplification: light
noMaths: false
order: 202
written: true
sourcesVerified: false
problem: "The same four pieces make two triangles, and one has a square-shaped hole. Where did the square come from?"
claimA: "Both shapes are the same 13×5 triangle built from the same four pieces, so they cover the same area."
claimB: "One shape has a 1×1 hole in it, so it covers one square less."
verdict: "Neither shape is a true triangle, because the long edge is slightly bent."
whatBreaks: "The assumption that the long edge of each shape is a straight line."
statusNote: "the first claim is wrong. Neither shape is a real triangle, because the long edge bends, and the two bends differ by exactly one square."
setup: "Two arrangements are made from the same four pieces: a yellow shape, a red triangle, a blue triangle and a green shape. Each looks like a right-angled triangle 13 units wide and 5 units tall. One arrangement is solid. The other has a 1×1 hole in it. Rearranging the pieces seems to make a square vanish. Wikipedia credits the puzzle to the New York amateur magician Paul Curry in 1953, according to Martin Gardner, and says the principle has been known since the early 16th century."
whyWrong: "The eye reads the long edge of each shape as a straight line from corner to corner. It is not. The red and blue triangles have different slopes, so the edge has a slight bend in it. A bent edge cannot make a true triangle, and the bend is too small to see in a drawing."
resolution:
  - "A true 13×5 triangle would have an area of 13 × 5 ÷ 2 = 32.5 units. The four pieces add up to 32 units. The blue triangle has a ratio of 5 to 2, which is 2.5. The red triangle has a ratio of 8 to 3, which is about 2.667. Different slopes mean the combined edge is bent, so neither shape is a triangle. One shape covers 32 units and the other covers 33, including the apparent hole."
  - "The bend is about 1/28 of a unit, or roughly 1.25 degrees, which is hard to see on a diagram. Laying the two bent edges over each other gives a thin parallelogram with an area of exactly one square. That is the missing square."
  - "Wikipedia also gives a simpler check. After the red and blue triangles are placed, the leftover regions are rectangles of different sizes, 15 and 16 squares, which shows the extra square directly. The side lengths 2, 3, 5, 8 and 13 are consecutive Fibonacci numbers, which is why the difference comes out as exactly one square."
finePrint: "Wikipedia describes this as an optical illusion used in maths classes to teach students to reason from the text of a problem and the rules of geometry, not from a picture. Related puzzles, such as Sam Loyd’s [vanishing puzzles](vanishing-puzzle), rearrange pieces in different ways. Hooper’s paradox is listed in Wikipedia’s see-also section, but is not covered here."
sources:
  - title: "Wikipedia: Missing square puzzle"
    url: https://en.wikipedia.org/wiki/Missing_square_puzzle
---
