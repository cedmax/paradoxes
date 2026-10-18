---
title: "Ant on a rubber rope"
format: argument
chapter: infinity
status: "explained"
simplification: light
noMaths: true
order: 210
sourcesVerified: true
problem: "Can an ant ever reach the end of a rope that keeps stretching faster than it walks?"
claimA: "If the far end moves away faster than the ant walks, the ant never reaches it."
claimB: "When the whole rope stretches uniformly at a constant rate, a steadily walking ant eventually reaches the end."
verdict: "Stretching carries the ant forward too, and its steady walking adds up to an ever larger fraction of the rope."
whatBreaks: "The assumption that only the far end gains distance while the ant makes progress."
statusNote: "uniform stretching moves every point of the rope, including the ant’s position; the fractional gains never stop accumulating."
setup: "An ant walks at a fixed speed along a rope. The rope lengthens steadily, much faster than the ant could walk on an unstretched surface."
whyWrong: "The goal gets farther away every second. It seems obvious that an ant with a lower walking speed can never catch it."
resolution:
  - "The ant is not just walking against the moving far end. The part of the rope behind it stretches too, carrying the ant onward."
  - "Each moment of walking adds a smaller fraction of the growing rope, but those fractions keep accumulating and eventually add up to the whole length."
finePrint: "The conclusion assumes uniform stretching and constant positive walking speed relative to the rope. The arrival time can be astronomically large. Change the stretching rule and the ant might never arrive."
sources:
  - title: "Wikipedia: Ant on a rubber rope"
    url: "https://en.wikipedia.org/wiki/Ant_on_a_rubber_rope"
---
