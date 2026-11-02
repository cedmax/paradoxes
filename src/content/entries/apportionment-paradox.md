---
title: "Apportionment paradox"
format: argument
searchTerms: ["rounding rule"]
chapter: collective
status: "explained"
simplification: light
noMaths: true
order: 130
sourcesVerified: true
problem: "How can giving a parliament one more seat cause a state to lose a seat?"
claimA: "Adding a seat to the total cannot reduce any state’s allocated number."
claimB: "Under a largest-remainders rule, adding one seat can reduce a state’s allocation."
whatBreaks: "The assumption that increasing the total must give each state at least as many seats as before."
statusNote: "with the largest-remainder rule, adding a seat can take one from a state, because the leftover seats go to the largest fractional remainders. The arithmetic is not disputed."
setup: "Suppose a fixed number of seats is divided between states according to population. Every state gets its whole-number share first, then the leftover seats go to the largest fractional remainders."
whyWrong: "When the total increases, all the fractional shares change. A state that won a leftover seat before may lose the race for one afterwards."
resolution:
  - "For populations in the ratio 6 to 6 to 2, dividing 10 seats by largest remainder gives 4, 4 and 2. Dividing 11 gives 5, 5 and 1. The smallest state loses a seat."
  - "The outcome depends on how fractional shares are rounded and awarded. It is not the same mechanism as a majority-voting cycle, so this puzzle stands on its own."
finePrint: "The Alabama paradox was identified in historical United States apportionment calculations. Methods designed to prevent seat losses when the total grows may give up other desirable rules."
sources:
  - title: "Wikipedia: Apportionment paradox"
    url: "https://en.wikipedia.org/wiki/Apportionment_paradox"
---
