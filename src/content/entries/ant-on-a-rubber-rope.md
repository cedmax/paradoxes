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
whatBreaks: "The assumption that only the far end gains distance while the ant makes progress."
statusNote: "uniform stretching moves every point of the rope, including the ant’s position, and the fractional gains never stop accumulating."
setup: "An ant walks at a fixed speed along a rope. The rope lengthens steadily, much faster than the ant could walk on an unstretched surface."
whyWrong: "The goal gets farther away every second. It seems obvious that an ant with a lower walking speed can never catch it."
resolution:
  - "The ant is not just walking against the moving far end. The part of the rope behind it stretches too, carrying the ant onward."
  - "Each moment of walking adds a smaller fraction of the growing rope, but those fractions keep accumulating and eventually add up to the whole length."
finePrint: "The conclusion assumes uniform stretching and constant positive walking speed relative to the rope. The arrival time can be astronomically large. Change the stretching rule and the ant might never arrive."
sources:
  - title: "Hsiao, The Ant on a Rubber Rope"
    url: "https://math.illinois.edu/system/files/2021-04/T.-Y.%20Hsiao-1.pdf"
    note: "Full mathematical treatment: successive fractional gains accumulate even while the rope grows, and the ant reaches the far end under constant positive walking speed and regular uniform stretching. The presentation uses discrete stretches as an analogue."
---
