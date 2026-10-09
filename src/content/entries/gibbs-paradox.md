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
claimB: "Counting all arrangements of labelled particles gives the thermodynamic entropy directly, without any correction, so that entropy rises when the door opens and falls when it closes."
verdict: "The raw count of labelled particle arrangements cannot simply be read as thermodynamic entropy. The standard extensive treatment gives no entropy change when identical gases at the same temperature and pressure are mixed."
whatBreaks: "The assumption that the raw labelled-particle count gives thermodynamic entropy directly. That identification produces a rise when the door opens which the thermodynamic description does not have."
statusNote: "the second claim identifies a raw microscopic count with thermodynamic entropy without establishing the link between them. The standard extensive treatment gives no thermodynamic entropy change in this example. Why that treatment is justified, and whether a differently defined statistical entropy must have the same value, remain matters of debate."
setup: "Entropy is a measure of how many ways the particles of a system can be arranged without changing what can be seen from outside. Josiah Willard Gibbs raised the puzzle in his long memoir On the Equilibrium of Heterogeneous Substances, published from 1875 to 1878. For fixed amounts of two different ideal gases, the mixing entropy does not depend on how similar the gases are. Mixing a gas with more of the same gas adds none. Now take two boxes side by side, each holding the same gas at the same temperature and pressure. A door between them is opened, the particles wander across, and nothing visible happens. Closing the door gives back two boxes just like the first two."
whyWrong: "The trouble comes from how the arrangements are counted. If every particle is treated as carrying its own label, then swapping two particles gives a new arrangement, and the count grows with the number of possible swaps. An entropy counted this way is not extensive, meaning it does not double when the amount of gas doubles. One box of double size with double the gas then has more entropy than two separate boxes. With N particles in each box, the extra is 2Nk ln 2, where k is Boltzmann’s constant: exactly the amount that mixing two different gases would add. So opening the door seems to add entropy, and closing it seems to take it away again. If this raw count were identified directly with thermodynamic entropy, the apparent decrease on closing the door would conflict with the second law for an isolated system. Versteegh and Dieks dispute that identification: they argue that a change in the accessible microscopic states caused by moving the partition need not violate the statistical second law."
resolution:
  - "One standard treatment divides the count by N factorial, the number of ways of reordering N particles. In the indistinguishability account, arrangements that differ only by swapping two particles of the same gas count once. Gibbs himself introduced this division in 1902. For a monatomic ideal gas in the classical limit, the standard result is the Sackur–Tetrode formula, which is extensive in the thermodynamic limit. With it, two boxes have the same entropy as one double box (for large numbers of particles), and the door changes nothing."
  - "This treatment gives the unchanged thermodynamic entropy in the first claim and rejects the direct identification made in the second. It does not settle every question called Gibbs’ paradox. Different authors justify the correction in different ways. A long tradition says identical particles are indistinguishable in principle, which in the end needs quantum theory. Edwin Jaynes argued in 1992 that Gibbs had already settled the matter in classical terms: entropy depends on which features of a system an experimenter chooses to control, and the old definition fixed entropy only up to an unknown function of the number of particles, which the demand for extensivity pins down. Robert Swendsen argues that labelled classical particles give the same answer if entropy is worked out from how particles are shared out between systems that can exchange them. Marijn Versteegh and Dennis Dieks argue that classical particles of the same kind are distinguishable and that the entropy of statistical mechanics is not quite the same thing as the entropy of thermodynamics."
finePrint: "Writers often split the puzzle into two. One is the jump in the entropy of mixing: any difference between two gases, however small, gives the full amount, and no difference gives none. The other is the extensivity of entropy, which is what the door example tests. Olivier Darrigol’s history of the puzzle traces many proposed solutions and notes that authors disagree on whether statistical mechanics can fix how entropy depends on the number of molecules. Versteegh and Dieks go further than offering a different reason for the same correction: they allow a statistical entropy to change when the accessible microscopic states change while thermodynamic entropy stays fixed. On their account both descriptions obey their respective second laws. The value 2Nk ln 2 follows from the labelled-particle count and is also derived in their paper."
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
    url: https://arxiv.org/pdf/1012.4111
    note: "Full paper checked: classical distinguishability; the derivation of 2Nk ln 2; the traditional N factorial correction; and Sections V and VI, where statistical and thermodynamic entropy may differ without violating either version of the second law."
  - title: "Saunders (2018), The Gibbs Paradox, arXiv:1808.01953"
    url: https://arxiv.org/abs/1808.01953
    note: "Source for treating the puzzle as several questions (the jump in mixing entropy, extensivity) and for a view that indistinguishability applies to classical as well as quantum theory. Only the abstract was read."
---
