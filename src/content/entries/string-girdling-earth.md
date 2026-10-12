---
title: "String girdling Earth"
titleAccent: "Earth"
aka:
  [
    "rope around the Earth",
    "string around the equator",
    "belt around the world",
    "rope round the world",
  ]
chapter: shapes-sums
status: explained
simplification: light
noMaths: false
order: 50
written: true
sourcesVerified: true
reviewed: true
problem: "Add one metre to a string that fits tightly round the equator. How far off the ground does it lift?"
claimA: "One metre is negligible next to the Earth’s circumference, so the string lifts by a fraction of a millimetre."
claimB: "The string lifts about 16 cm all the way round, enough for a cat to walk under."
verdict: "The string lifts about 16 cm. The lift depends only on the extra length, not on how big the Earth is."
whatBreaks: "The assumption that the lift depends on the size of the Earth, so a tiny extra length spread over a huge circle has a tiny effect."
statusNote: "the idea that the size of the Earth matters is wrong. The lift is the extra length divided by 2π, about 6.28, and the Earth’s size drops out of the sum."
setup: "A string is pulled tight round the equator of a perfectly round Earth, about 40,000 km. One metre of string is spliced in, and the longer string is held at the same height above the ground all the way round. Could a car pass under it? A cat? A thin knife blade? The puzzle also runs the other way: to raise the string 1 metre off the ground all the way round, how much longer must it be?"
whyWrong: "It feels as if the answer should scale with the size of the Earth. One metre shared out over 40,000 km sounds like nothing, so the lift ought to be too small to measure. Run the other way, raising a string 1 metre along 40,000 km sounds as if it needs kilometres of extra string. Both guesses assume the Earth’s size matters. It does not."
resolution:
  - "The length of a circle is 2π times its radius, where π is about 3.1416, so 2π is about 6.28. Call the Earth’s radius r. A string lifted a height h all the way round is a circle of radius r + h, so its length is 2π(r + h), which is 2πr + 2πh. The tight string was 2πr. So the extra string is 2πh, and r has dropped out."
  - "Adding 1 metre of string therefore lifts it by 1 ÷ 2π metres, about 0.159 metres or 16 cm: room for a cat, not a car. Raising the string by 1 metre needs 2π metres more, about 6.3 metres, not kilometres."
  - "Because the Earth’s size drops out, the answer is the same for a ball the size of an atom or one the size of the Milky Way: one extra metre always gives about 16 cm. The same holds for any closed outline that does not cross itself, such as a polygon. A string kept a fixed distance outside it is always 2π times that distance longer. The same one full extra turn round a closed shape gives the rolling coin its extra turn in the [coin rotation paradox](coin-rotation-paradox)."
finePrint: "The puzzle assumes a perfectly round Earth with nothing in the way and a string held at the same height everywhere. The figures are rounded: 1 ÷ 2π is 0.1592 metres, and 2π is 6.283. Pulling all the slack up at a single point, like a tent pole, gives a very different answer: with a 6,400 km radius, just 5 mm of extra string makes a peak about 3.5 metres high, and a full metre makes one over 100 metres high, because the string then leaves the ground only over a short stretch."
sources:
  - title: "Wikipedia: String girdling Earth"
    url: "https://en.wikipedia.org/wiki/String_girdling_Earth"
    note: "Both versions of the puzzle, the 40,000 km circumference, the answers 1/(2π) metre or about 16 cm and 2π or about 6.3 metres, a cat passing easily, the result holding for any size of sphere from an atom to the Milky Way, and the 2π rule for any simple polygon or closed curve."
  - title: "Plus Magazine (University of Cambridge, Millennium Mathematics Project): Puzzle page 38"
    url: "https://plus.maths.org/content/puzzle-page-38"
    note: "The same puzzle with a 1 metre addition and an equator of about 40,000 km; the radius grows by 1/(2π), about 0.16, so the string stands about 16 cm off the ground, whatever the size of the circle."
  - title: "Montana State University Physics, Problem of the week: rope round the Earth"
    url: "https://www.physics.montana.edu/avorontsov/teaching/problemoftheweek/documents/problem_Math002.pdf"
    note: "The height h = ℓ/(2π), independent of the Earth’s radius, about 16 cm for 1 metre, so a cat can crawl under; and the version where the slack is pulled up at a single point, with the approximate formula h ≈ (R/2)(3ℓ/2R)^(2/3), giving about 3.5 m for 5 mm of extra rope with R ≈ 6400 km. The figure of about 120 m for 1 metre was computed from the same formula."
---
