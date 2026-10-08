---
title: "Maxwell's demon"
titleAccent: "demon"
aka: ["Landauer", "Bennett", "Szilard engine", "second law", "information and entropy"]
chapter: time-physics
status: explained
simplification: heavy
noMaths: false
written: true
sourcesVerified: true
problem: "Could a tiny being that only opens and closes a door sort fast molecules from slow ones, and so beat the second law of thermodynamics?"
claimA: "A demon that only opens a door at the right moments can sort the molecules of a gas and make one side hotter, without doing any work."
claimB: "The second law of thermodynamics says heat cannot be made to flow from cold to hot with no work and no other change."
verdict: "To run the process repeatedly, the demon must deal with the information it stores. In the standard account, resetting that memory has a thermodynamic cost, so the sorting is not free."
whatBreaks: "The assumption that the demon’s knowledge costs nothing. On the standard account, its memory must be reset to run again, and resetting it gives off heat."
statusNote: "the first claim is wrong. On the standard account the cost falls on erasing the demon’s memory, which restores the second law. How general the proofs are, and what they rest on, is still debated."
setup: "In a letter to Peter Tait in 1867, James Clerk Maxwell described a gas in a box divided by a partition with a small hole. A tiny being, later called a demon, watches the molecules and works a shutter on the hole. It lets fast molecules through one way and slow molecules the other. After a while one side is hotter than the other, though the demon seems to have done no work. A temperature difference can be used to run an engine, which would break the second law."
whyWrong: "The sorting looks free, because opening a light shutter needs almost no energy. The demon, though, has to know which molecule is coming. That means measuring it and keeping the result in some memory, and a memory is a physical thing that has to be reset."
resolution:
  - "Leo Szilard reduced the problem to a single molecule in 1929. Rolf Landauer argued in 1961 that wiping information has a heat cost. Resetting one bit, the smallest piece of memory, must give off at least kT ln 2 of heat, where k is Boltzmann’s constant and T is the temperature. Charles Bennett argued in 1973 and 1982 that measuring can be made reversible, so the cost sits in the erasure. The heat from erasing the memory pays for the work the demon seemed to save."
  - "So the first claim is false and the second stands. Once the demon’s memory is counted, the second law is not broken."
finePrint: "Norton (2005) and Shenker (2000) have challenged how general the proofs of Landauer’s principle are, and the Stanford Encyclopedia of Philosophy says the matter remains open to debate. Penrose reached a similar resolution in 1970."
sources:
  - title: "Stanford Encyclopedia of Philosophy: Information Processing and Thermodynamic Entropy"
    url: "https://plato.stanford.edu/entries/information-entropy/"
    note: "Source for Maxwell’s 1867 letter, Szilard (1929), Landauer (1961), Bennett (1973, 1982), the cost kT ln 2 per bit, Norton’s criticism, and the statement that the matter remains open to debate. The last part of the page was not read."
---
