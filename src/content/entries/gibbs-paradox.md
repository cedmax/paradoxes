---
title: Gibbs paradox
format: argument
searchTerms:
  [
    "mixing paradox",
    "entropy of mixing",
    "Sackur–Tetrode",
    "indistinguishable particles",
    "N factorial",
    "extensive entropy",
  ]
chapter: models
status: explained
simplification: heavy
noMaths: false
order: 130
sourcesVerified: true
problem: "Why does a calculation say that opening a door between two boxes of identical gas raises entropy, when the gas looks and behaves just as before?"
claimA: "Opening and closing a door between identical gases at the same temperature and pressure leaves their total entropy unchanged."
claimB: "Counting swaps of identical particles as new arrangements gives the correct entropy, though it predicts a change."
whatBreaks: "The assumption that the naive particle count gives the correct entropy for different amounts of gas."
statusNote: "the naive formula gives the wrong thermodynamic result. The corrected result is agreed; the deeper reason for the correction is still debated."
setup: "Two boxes hold the same gas at the same temperature and pressure. Open a door between them. The particles wander across, but the gas looks and behaves just as before. Close the door and the original situation returns. Entropy measures how many microscopic arrangements fit the visible state."
whyWrong: "Give each particle an imaginary label. A particle can now be in either box, so opening the door seems to create extra arrangements and raise entropy. Closing it seems to lower entropy again. The calculation reports a change that the gas’s observable behaviour does not show."
resolution:
  - "The naive count gives too much weight to which identical particle is where. The standard correction removes the extra count from reordering those particles. Two identical boxes then have the same entropy as one box with twice the gas and twice the space."
  - "The door makes no thermodynamic difference. The incorrect counting formula is the claim to give up. Physicists agree on that result, while debating whether the correction is best understood through quantum theory, experimental distinctions or classical counting."
finePrint: "This entry covers the counting version of Gibbs’s paradox. Another version asks why mixing two different gases gives a finite entropy rise however similar they are, while identical gases give none. In the counting version, the naive entropy is not extensive: it does not grow in step with the amount of gas. The standard correction divides by N factorial, the number of ways to reorder N particles. For large particle numbers it gives the thermodynamic result. Quantum accounts appeal to indistinguishability. Jaynes stresses what an experimenter controls; Swendsen obtains the result with labelled classical particles by considering exchange between systems. Versteegh and Dieks distinguish statistical from thermodynamic entropy. These disagreements concern the explanation of the correction, not permission to lower thermodynamic entropy merely by closing the door."
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
