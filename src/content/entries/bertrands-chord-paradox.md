---
title: "Bertrand's chord paradox"
titleAccent: "paradox"
aka: ["Bertrand's paradox", "random chord", "Bertrand paradox"]
chapter: probability
order: 70
status: explained
simplification: light
written: true
sourcesVerified: true
problem: "If a straight line is drawn at random across a circle, how likely is it to be longer than a side of the triangle that fits inside?"
claimA: "Picking a chord “at random” is one definite way of choosing, so the question has a single correct answer."
claimB: "Three equally natural ways of picking a chord at random give three different answers: one third, one half and one quarter."
verdict: "The phrase “at random” does not say how the chord is chosen. Each way of choosing is a different question, with its own correct answer."
whatBreaks: "The assumption that “at random” names one way of choosing. A circle has endlessly many chords, and there is more than one fair way to spread the choice over them."
statusNote: "the first claim is wrong. “At random” is not one rule, so the question has no single answer until the way of choosing is fixed. Whether some further principle can single out one rule is still argued over, but each of the three answers is correct for its own rule."
setup: "A chord joins two points on a circle. Fit a triangle with three equal sides inside the circle. What is the chance that a randomly chosen chord is longer than one side? Three natural ways of choosing give one third, one half and one quarter."
whyWrong: "“Random” does not specify what is chosen uniformly. Two random points on the edge, a random distance from the centre and a random midpoint inside the circle favour different chords."
resolution:
  - "Pick two points uniformly on the edge: the answer is one third. Pick a distance uniformly from zero to the radius, then draw a chord at right angles to that radius: it is one half. Pick a midpoint uniformly by area inside the circle: it is one quarter."
  - "The calculations answer different questions. A chord is long when its midpoint is closer to the centre than half the radius. That region is half a radius but a quarter of the circle’s area, explaining the last two answers."
  - "Specify the selection rule and the answer is definite. Calling all three methods “random” does not make them the same rule."
finePrint: "The physicist Edwin Jaynes argued in 1973 that the problem becomes well posed if the answer must not change when the circle is turned, shifted or resized, and that only the random distance method, one half, passes all three tests. The mathematician Alon Drory argued in 2015 that rules of this kind do not single out one method. That debate is about whether a best method exists, not about the arithmetic of the three."
sources:
  - title: "Wikipedia: Bertrand paradox (probability)"
    url: "https://en.wikipedia.org/wiki/Bertrand_paradox_(probability)"
    note: "Source for the three methods and their answers (1/3, 1/2, 1/4), Bertrand's 1889 source (Calcul des probabilités, pp. 5-6), and the summary of Jaynes and Drory. All three answers also recomputed by hand."
  - title: "Jaynes (1973), The Well-Posed Problem, Foundations of Physics 3, 477-493"
    url: "https://bayes.wustl.edu/etj/articles/well.pdf"
    note: "Checked: rotation, scale and translation invariance leave only the uniform distribution over distance from the centre, which gives one half."
---
