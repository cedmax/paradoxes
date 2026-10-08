---
title: Gibbs paradox
titleAccent: paradox
aka: ["mixing paradox", "entropy of mixing", "Sackur–Tetrode", "indistinguishable particles"]
chapter: time-physics
status: explained
simplification: heavy
noMaths: false
order: 102
written: true
sourcesVerified: false
problem: "Does opening a door between two identical boxes of gas raise entropy, and closing it lower it again?"
claimA: "Opening a door between two identical boxes of the same gas changes nothing, so entropy does not change."
claimB: "Counting every particle as individually distinguishable, entropy rises when the door opens and falls when it closes."
verdict: "Counting particles as distinguishable overstates the states, so the formula was misused."
whatBreaks: "The assumption that every swap of two identical particles gives a different state to be counted."
statusNote: "the second claim is wrong. The apparent drop in entropy comes from counting swaps of identical particles as different states."
setup: "Josiah Willard Gibbs described this puzzle in 1874 to 1875. Two containers of an ideal gas sit side by side. The gas in each is identical in every respect, including volume, mass, temperature and pressure, so each has the same entropy S. A door between them is opened and the particles mix. Nothing visible changes, since the system is in equilibrium. But if the formula for entropy is not extensive, meaning not proportional to the amount of gas, the entropy of the combined system will not be 2S. The version Gibbs considered predicts extra entropy. Closing the door then brings the entropy back to S per box, which seems to break the second law of thermodynamics, the rule that the entropy of a closed system does not decrease."
whyWrong: "Wikipedia says that Gibbs himself understood this to be a misuse of that formula. If the particles really were distinguishable, closing the door would not return the system to its starting state, because many particles would have changed boxes. There is freedom in what counts as “ordered”, and it would be a mistake to conclude that entropy had not increased. The formula was also not meant for cases where the number of particles changes."
resolution:
  - "The paradox goes away if the particles are treated as indistinguishable. States that differ only by swapping particles then count as one state. For N particles there are N factorial such states, so the volume of phase space, the space of every possible position and momentum, is divided by N factorial. The result is the Sackur–Tetrode equation, which is extensive."
  - "Wikipedia also describes the closely related mixing paradox. Mixing two different gases adds entropy, however similar the gases are, but mixing a gas with itself adds none. Edwin Jaynes explained that definitions of entropy are arbitrary. A theory that does not distinguish two gases has no internal inconsistency until detailed measurements can tell them apart. This suggests that thermodynamic state and entropy are somewhat subjective."
  - "Wikipedia reports that it is often said quantum theory resolves the paradox, since like particles are indistinguishable in principle. By Jaynes’ reasoning, if particles are experimentally indistinguishable for any reason, the paradox is resolved. Quantum mechanics only assures that this indistinguishability holds as a matter of principle."
finePrint: "Wikipedia also gives a purely classical derivation and mentions R. Swendsen’s method for an additive entropy when two systems can exchange particles. These are not covered here. This entry treats the derivation as the standard textbook account, not as the only view of what entropy means."
sources:
  - title: "Wikipedia: Gibbs paradox"
    url: https://en.wikipedia.org/wiki/Gibbs_paradox
---
