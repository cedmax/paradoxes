---
title: "Maxwell's demon"
titleAccent: "demon"
aka: ["Landauer", "Bennett", "Szilard engine", "second law", "information and entropy"]
chapter: models
order: 100
status: explained
simplification: heavy
noMaths: false
written: true
sourcesVerified: true
problem: "Could a tiny being that only opens and closes a door sort fast molecules from slow ones, and so beat the second law of thermodynamics?"
claimA: "A demon that only opens a door can sort a gas into hot and cold sides without doing any work."
claimB: "The second law of thermodynamics forbids heat flowing from cold to hot with no work and no other change."
verdict: "To run the process repeatedly, the demon must deal with the information it stores. In the standard account, resetting that memory has a thermodynamic cost, so the sorting is not free."
whatBreaks: "The assumption that the demon’s knowledge costs nothing. On the standard account, its memory must be reset to run again, and resetting it gives off heat."
statusNote: "the first claim is wrong. On the standard account the cost falls on erasing the demon’s memory, which restores the second law. How general the proofs are, and what they rest on, is still debated."
setup: "In a letter to Peter Tait in 1867, James Clerk Maxwell described a gas in a box divided by a partition with a small hole. A tiny being, later called a demon, watches the molecules and works a shutter on the hole. It lets fast molecules through one way and slow molecules the other. After a while one side is hotter than the other, though the demon seems to have done no work. A temperature difference can be used to run an engine, which would break the second law."
whyWrong: "The sorting looks free, because opening a light shutter needs almost no energy. The demon, though, has to know which molecule is coming. That means measuring it and keeping the result in some memory, and a memory is a physical thing that has to be reset."
resolution:
  - "In the standard account, measurement can be reversible, but resetting the memory for repeated use has a thermodynamic cost. Count the demon and its memory along with the gas, and the apparent free sorting no longer defeats the second law."
  - "The missing part is the complete cycle, not just the shutter moving. There is debate about how general the information-based proofs are, but ignoring the physical demon cannot establish a violation."
finePrint: "Szilard analysed a single-molecule version in 1929. Landauer argued that erasing information has a heat cost, and Bennett located the standard cycle’s cost in memory reset rather than measurement alone. Resetting one bit has the bound kT ln 2 under the relevant conditions. Norton and Shenker have challenged the generality of these arguments. The entry presents the standard account without claiming that every proposed demon is covered by one proof."
sources:
  - title: "Stanford Encyclopedia of Philosophy: Information Processing and Thermodynamic Entropy"
    url: "https://plato.stanford.edu/entries/information-entropy/"
    note: "Source for Maxwell’s 1867 letter, Szilard (1929), Landauer (1961), Bennett (1973, 1982), the cost kT ln 2 per bit, Norton’s criticism, and the statement that the matter remains open to debate. The last part of the page was not read."
---
