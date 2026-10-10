---
title: Gibbs paradox
titleAccent: paradox
aka:
  [
    "mixing paradox",
    "entropy of mixing",
    "Sackur–Tetrode",
    "indistinguishable particles",
    "N factorial",
    "extensive entropy",
  ]
chapter: time-physics
status: explained
simplification: heavy
noMaths: false
order: 102
written: true
sourcesVerified: false
problem: "Does opening a door between two identical boxes of gas raise entropy, and closing it lower it again?"
claimA: "Opening a door between two boxes of the same gas, at the same temperature and pressure, and then closing it again leaves the total entropy unchanged."
claimB: "The entropy of a gas can be worked out by counting the arrangements of its particles as if each one carried a label, so the entropy rises when the door opens and falls when it closes."
verdict: "Counting every swap of two particles of the same gas as a new arrangement gives an entropy that does not grow in step with the amount of gas. Corrected so that it does, the entropy does not change when the door opens or closes."
whatBreaks: "The use of an entropy formula that does not double when the amount of gas doubles. Counted that way, merely opening the door seems to add entropy."
statusNote: "the second claim is wrong: an entropy that does not grow in step with the amount of gas gives a rise and fall that no experiment shows. The standard formula gives the right thermodynamic result, but physicists and philosophers disagree on why the correction is justified: quantum indistinguishability, what an experimenter can tell apart, or a different way of counting with labelled particles."
setup: "Entropy is a measure of how many ways the particles of a system can be arranged without changing what can be seen from outside. Josiah Willard Gibbs raised the puzzle in his long memoir On the Equilibrium of Heterogeneous Substances, published from 1875 to 1878. Mixing two different gases always adds the same amount of entropy, however similar the two gases are. Mixing a gas with more of the same gas adds none. Now take two boxes side by side, each holding the same gas at the same temperature and pressure. A door between them is opened, the particles wander across, and nothing visible happens. Closing the door gives back two boxes just like the first two."
whyWrong: "The trouble comes from how the arrangements are counted. If every particle is treated as carrying its own label, then swapping two particles gives a new arrangement, and the count grows with the number of possible swaps. An entropy counted this way is not extensive, meaning it does not double when the amount of gas doubles. One box of double size with double the gas then has more entropy than two separate boxes. With N particles in each box, the extra is 2Nk ln 2, where k is Boltzmann’s constant: exactly the amount that mixing two different gases would add. So opening the door seems to add entropy, and closing it seems to take it away again, which would break the second law of thermodynamics, the rule that the entropy of a closed system never goes down."
resolution:
  - "The standard fix is to divide the count by N factorial, the number of ways of reordering N particles, so that arrangements that differ only by swapping two particles of the same gas count once. Gibbs himself introduced this division in 1902. The result, for a simple gas, is the Sackur–Tetrode formula, which is extensive. With it, two boxes have the same entropy as one double box (for large numbers of particles), and the door changes nothing."
  - "So the second claim is false and the first is true. Experts agree on this. They disagree on why the division is justified. A long tradition says identical particles are indistinguishable in principle, which in the end needs quantum theory. Edwin Jaynes argued in 1992 that Gibbs had already settled the matter in classical terms: entropy depends on which features of a system an experimenter chooses to control, and the old definition fixed entropy only up to an unknown function of the number of particles, which the demand for extensivity pins down. Robert Swendsen argues that labelled classical particles give the same answer if entropy is worked out from how particles are shared out between systems that can exchange them. Marijn Versteegh and Dennis Dieks argue that classical particles of the same kind are distinguishable and that the entropy of statistical mechanics is not quite the same thing as the entropy of thermodynamics."
finePrint: "Writers often split the puzzle into two. One is the jump in the entropy of mixing: any difference between two gases, however small, gives the full amount, and no difference gives none. The other is the extensivity of entropy, which is what the door example tests. Olivier Darrigol’s history of the puzzle traces many proposed solutions and notes that authors disagree on whether statistical mechanics can fix how entropy depends on the number of molecules. The value 2Nk ln 2 follows from the standard formulas and is not quoted from the sources."
sources:
  - title: "Wikipedia: Gibbs paradox"
    url: https://en.wikipedia.org/wiki/Gibbs_paradox
    note: "Source for the thought experiment with two identical boxes, the link to non-extensive entropy and the second law, the Sackur–Tetrode result, and the mention of Jaynes and Swendsen. Its text dates Gibbs’s thought experiment to 1874 to 1875, but its own reference gives 1875 to 1878, as does Darrigol."
  - title: "Darrigol (2018), The Gibbs Paradox: Early History and Solutions, Entropy 20, 443"
    url: https://www.mdpi.com/1099-4300/20/6/443
    note: "Source for the memoir dated 1875 to 1878, the mixing entropy having the same value however small the difference between gases, Gibbs introducing the N factorial division in 1902, the many proposed solutions, and authors disagreeing on how entropy depends on the number of molecules. The last part of the page was not read."
  - title: "Jaynes (1992), The Gibbs Paradox, in Maximum Entropy and Bayesian Methods"
    url: https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf
    note: "Source for Jaynes’s view that entropy depends on the variables an experimenter chooses, that Gibbs resolved the matter in classical terms, and that extensivity fixes the arbitrary function of the number of particles, giving the Sackur–Tetrode form."
  - title: "Swendsen (2018), Probability, Entropy, and Gibbs' Paradox(es), Entropy 20, 450"
    url: https://www.mdpi.com/1099-4300/20/6/450
    note: "Source for Swendsen’s resolution without quantum mechanics, using distinguishable particles and the exchange of particles between systems, and for the distinction between two puzzles both called Gibbs’ paradox."
  - title: "Versteegh and Dieks (2011), The Gibbs paradox and the distinguishability of identical particles, arXiv:1012.4111"
    url: https://arxiv.org/abs/1012.4111
    note: "Source for the view that identical classical particles are distinguishable and that statistical and thermodynamic entropy are not completely identical."
  - title: "Saunders (2018), The Gibbs Paradox, arXiv:1808.01953"
    url: https://arxiv.org/abs/1808.01953
    note: "Source for treating the puzzle as several questions (the jump in mixing entropy, extensivity) and for a view that indistinguishability applies to classical as well as quantum theory. Only the abstract was read."
---
