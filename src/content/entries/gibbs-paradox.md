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
claimB: "Counting every swap of labelled particles as a new arrangement gives the gas’s entropy without correction, so opening the door raises it and closing the door lowers it."
verdict: "The labelled-particle count needs a correction before it gives the gas’s entropy. For the same gas at the same temperature and pressure, the usual calculation gives no change when the door opens or closes."
whatBreaks: "The assumption that counting every swap of labelled particles directly gives the entropy of the gas."
statusNote: "the count treats every swap of labelled particles as a new arrangement, but that does not by itself give the gas’s entropy. The usual correction gives no change when the door opens or closes. Authors still debate why the correction works and what other ways of counting describe."
setup: "Entropy helps describe how energy is spread through a system and how much of it can be used to do work. One way to calculate it is to count the particle arrangements that fit the gas’s visible condition. Put two boxes side by side, each holding the same gas at the same temperature and pressure. Open a door between them. Particles wander across, but nothing visible changes. Close the door and the two boxes look just as they did before. Should their entropy have changed?"
whyWrong: "Suppose every particle has its own label. Swapping two particles then counts as a new arrangement, even when nothing visible changes. Opening the door allows more such arrangements, so the count suggests a rise in entropy. Closing it seems to undo that rise. If this directly measured the entropy of an isolated gas, the fall would conflict with the second law, which says that entropy cannot decrease in isolation. The mistake is to assume that the labelled count already gives that quantity without a correction. Versteegh and Dieks argue that a different statistical count need not describe the same thing or violate the second law."
resolution:
  - "The usual correction stops counting every rearrangement of the same particles separately. With N particles, the count is divided by N factorial, the number of ways of reordering them. For an ideal gas with very many particles, this gives twice the entropy when both the gas and its space are doubled. Two identical boxes then have the same entropy as one double box, so opening the door changes nothing."
  - "The correction rejects the assumption that the labelled count directly gives the gas’s entropy. Authors disagree about how to justify it. One account says particles of the same kind cannot be told apart, so swapping them should not count again. Jaynes argues that entropy depends on which features an experimenter controls and can be understood without bringing in quantum theory. Versteegh and Dieks argue that classical particles can be told apart, and that statistical counts need not give the same quantity as the entropy used to describe heat and work."
finePrint: "Several questions go under the name Gibbs paradox. Mixing two different ideal gases raises entropy, even if the gases are very similar; mixing more of the same gas does not. Another question is how particle counts should grow when the amount of gas grows. The entry covers the second question through the two-box example. The large-number calculation is an idealisation, not an exact rule for a few particles."
sources:
  - title: "Wikipedia: Gibbs paradox"
    url: "https://en.wikipedia.org/wiki/Gibbs_paradox"
    note: "The two-box thought experiment, labelled-particle counting, the second-law puzzle and the usual correction; the distinction between mixing identical and different gases."
  - title: "Jaynes (1992), The Gibbs Paradox, in Maximum Entropy and Bayesian Methods"
    url: "https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf"
    note: "Source for Jaynes’s view that entropy depends on the variables an experimenter chooses, that Gibbs resolved the matter in classical terms, and that extensivity fixes the arbitrary function of the number of particles, giving the Sackur–Tetrode form."
  - title: "Versteegh and Dieks (2011), The Gibbs paradox and the distinguishability of identical particles, arXiv:1012.4111"
    url: "https://arxiv.org/pdf/1012.4111"
    note: "Full paper checked: classical distinguishability; the derivation of 2Nk ln 2; the traditional N factorial correction; and Sections V and VI, where statistical and thermodynamic entropy may differ without violating either version of the second law."
  - title: "Saunders (2018), The Gibbs Paradox, arXiv:1808.01953"
    url: "https://arxiv.org/abs/1808.01953"
    note: "Source for treating the puzzle as several questions (the jump in mixing entropy, extensivity) and for a view that indistinguishability applies to classical as well as quantum theory. Only the abstract was read."
---
