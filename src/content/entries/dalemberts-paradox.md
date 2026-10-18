---
title: "D'Alembert's paradox"
format: argument
searchTerms:
  [
    "zero drag",
    "d'Alembert",
    "potential flow",
    "no resistance in a perfect fluid",
    "boundary layer",
  ]
chapter: models
order: 60
status: explained
simplification: heavy
noMaths: true
sourcesVerified: true
problem: "Why does the mathematics of flowing fluids say a moving body feels no drag, when every real body does?"
claimA: "A fluid with almost no friction can be treated as frictionless, so a body moving steadily through it feels no drag."
claimB: "A body moving through real air or water feels drag, even when the fluid is thin and its friction is small."
whatBreaks: "The assumption that a fluid with almost no friction can be treated as having none. A thin layer next to the surface decides the flow."
statusNote: "the first claim is wrong. Neglected friction in a thin layer next to the body, together with the flow breaking away behind it, produces the drag. The explanation is accepted as largely settled, though a full mathematical proof is lacking."
setup: "In 1752 the mathematician Jean le Rond d’Alembert proved that a body moving at a steady speed through an ideal fluid feels no drag. An ideal fluid, here, cannot be squeezed, has no internal friction, and flows smoothly without any spinning. In 1768 he wrote that the theory gave a strictly vanishing resistance, which he left to future mathematicians to explain. Real bodies obviously feel drag."
whyWrong: "The mathematics is correct, and the surprise is in how it is applied. Water and air have very little friction, so it seems safe to ignore it. But the argument depends on all three assumptions at once: no squeezing, no friction and no spinning."
resolution:
  - "Most scientists attribute the paradox to the neglected friction, called viscosity. In 1904 Ludwig Prandtl described thin boundary layers next to the surface, where viscosity matters even when the fluid is thin and fast. Friction also makes the flow break away from the back of a blunt body. That leaves a wake with low pressure behind it, and the difference in pressure between front and back is a drag, called form drag."
  - "So the first claim is false and the second is true. The frictionless equations describe the fluid well far from the body, and fail close to it."
finePrint: "The explanation is not fully proven mathematically. Birkhoff argued in 1950 that blaming viscosity alone is an oversimplification, and Stewartson’s 1981 survey says the paradox may be regarded as largely resolved. Other models, such as the Kirchhoff and Rayleigh wake model, give some drag, but they have problems of their own. For a flat plate, that model predicts a drag coefficient of 0.88, against about 2.0 measured."
sources:
  - title: "Wikipedia: D'Alembert's paradox"
    url: "https://en.wikipedia.org/wiki/D%27Alembert%27s_paradox"
    note: "Source for the 1752 result, the 1768 remark, Prandtl’s boundary layers (1904), form drag, the free-streamline model and its figures, Birkhoff’s dissent and Stewartson’s 1981 verdict. Not checked against the original papers."
---
