---
title: String girdling Earth
titleAccent: Earth
aka: ["rope around the Earth", "string around the equator", "belt around the world"]
chapter: probability
status: explained
simplification: light
noMaths: false
order: 204
written: true
sourcesVerified: false
problem: "Add one metre to a string that fits tightly round the equator. How far off the ground does it lift?"
claimA: "One metre is almost nothing next to 40,000 km, so the string stays almost on the ground."
claimB: "The string lifts about 16 cm all the way round, enough for a cat to walk under."
verdict: "The lift depends only on the extra length, not on how big the Earth is."
whatBreaks: "The idea that the size of the Earth matters, so a tiny extra length has a tiny effect."
statusNote: "the first claim is wrong. The extra length divided by 2π gives the lift, and the size of the sphere does not enter into it."
setup: "A string is pulled tight round the equator of a perfectly round Earth. One metre of string is spliced in, and the longer string is arranged to float at the same height above the ground all the way round. Can a car pass under it? A cat? A thin knife blade? Wikipedia gives a second version of the question: if the string is raised 1 metre all the way round, how much longer must it be? The Earth’s circumference is about 40,000 km."
whyWrong: "It is natural to think that the answer scales with the size of the Earth. For the second version, raising the string 1 metre along 40,000 km might seem to need kilometres of extra string. For the first, 1 metre seems negligible against 40,000 km. Both guesses assume the Earth’s size matters. It does not."
resolution:
  - "Call the Earth’s radius r and its circumference c, so that c = 2πr. A string raised by a gap Δr has a radius of r + Δr, so its length is 2π(r + Δr) = 2πr + 2πΔr. The extra string is therefore 2πΔr, and r has dropped out of the answer."
  - "Raising the string 1 metre needs 2π metres more string, about 6.3 metres, not several kilometres. Adding 1 metre of string lifts it by 1/(2π) metre, which is about 16 cm, enough for a cat to pass easily."
  - "Wikipedia notes that the result holds for a sphere of any size, from the size of an atom to the size of the Milky Way. It also holds when the string goes round a simple closed shape that does not cross itself, such as a polygon. The added length is still 2π times the lift, as in the [coin rotation paradox](coin-rotation-paradox)."
finePrint: "The puzzle assumes a perfectly spherical Earth with nothing in the way, and a string that stays at a uniform height. Real mountains and seas would make the string path different. The figures above are the rounded ones given by Wikipedia."
sources:
  - title: "Wikipedia: String girdling Earth"
    url: https://en.wikipedia.org/wiki/String_girdling_Earth
---
