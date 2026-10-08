---
title: "Bertrand's chord paradox"
titleAccent: "paradox"
aka: ["Bertrand's paradox", "random chord", "Bertrand paradox"]
chapter: probability
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
setup: "Draw a circle and fit an equilateral triangle (three equal sides) inside it, with its corners on the circle. A chord is a straight line joining two points on the circle. Pick a chord at random. What is the chance that it is longer than a side of the triangle? A chord is longer exactly when it passes closer to the centre than half the radius, the distance from the centre to the edge. In 1889 the French mathematician Joseph Bertrand showed that three sensible ways of picking a chord give three different answers."
whyWrong: "The trouble is the word “random”. With a coin or a die there are a few equal cases, so random has an obvious meaning. A circle has endlessly many chords, and each of the three methods below spreads the choice over them in a different but fair-looking way. Method 1, random endpoints: pick two points on the edge and join them. Turn the triangle so one corner sits on the first point. The chord is long only if the second point lands on the stretch of edge between the other two corners, which is one third of the way round, so the answer is one third. Method 2, random distance: pick a point on a radius and draw the chord at right angles to the radius through that point. The chord is long if the point is in the half of the radius nearer the centre, so the answer is one half. Method 3, random midpoint: pick a point anywhere inside the circle and make it the midpoint of the chord. The chord is long if the point is inside the circle of half the radius, which has one quarter of the area, so the answer is one quarter."
resolution:
  - "Each method is worked out correctly, and each answers a different question, because the three methods make different kinds of chord likely. Method 3, for example, gives three chances in four of a short chord, against one in two for method 2."
  - "So the first claim is false and the second is true. The question “how likely is a random chord to be long?” has no single answer until the way of choosing is stated. Once it is stated, there is one answer, and the three answers do not contradict each other."
finePrint: "The physicist Edwin Jaynes argued in 1973 that the problem becomes well posed if the answer must not change when the circle is turned, shifted or resized, and that only the random distance method, one half, passes all three tests. The mathematician Alon Drory argued in 2015 that rules of this kind do not single out one method. That debate is about whether a best method exists, not about the arithmetic of the three."
sources:
  - title: "Wikipedia: Bertrand paradox (probability)"
    url: "https://en.wikipedia.org/wiki/Bertrand_paradox_(probability)"
    note: "Source for the three methods and their answers (1/3, 1/2, 1/4), Bertrand's 1889 source (Calcul des probabilités, pp. 5-6), and the summary of Jaynes and Drory. All three answers also recomputed by hand."
  - title: "Jaynes (1973), The Well-Posed Problem, Foundations of Physics 3, 477-493"
    url: "https://bayes.wustl.edu/etj/articles/well.pdf"
    note: "Checked: rotation, scale and translation invariance leave only the uniform distribution over distance from the centre, which gives one half."
---
