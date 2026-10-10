---
title: "Apportionment paradox"
chapter: "choice-identity"
status: "explained"
uniqueness: "related"
anchor: "condorcet-paradox"
simplification: light
noMaths: true
order: 300
written: true
sourcesVerified: false
reviewed: false
problem: "How can giving a parliament one more seat cause a state to lose a seat?"
claimA: "Adding a seat to the total cannot reduce any state’s allocated number."
claimB: "Under a largest-remainders rule, adding one seat can reduce a state’s allocation."
verdict: "Rounding proportional shares can reshuffle the winners when the total number of seats changes."
whatBreaks: "The assumption that increasing the total must give each state at least as many seats as before."
statusNote: "the largest-remainder method can produce the Alabama paradox; the arithmetic is not disputed."
setup: "Suppose a fixed number of seats is divided between states according to population. Every state gets its whole-number share first, then the leftover seats go to the largest fractional remainders."
whyWrong: "When the total increases, all the fractional shares change. A state that won a leftover seat before may lose the race for one afterwards."
resolution:
  - "For populations in the ratio 6 to 6 to 2, dividing 10 seats by largest remainder gives 4, 4 and 2. Dividing 11 gives 5, 5 and 1. The smallest state loses a seat."
  - "The result is a flaw of this rounding rule, not a claim that adding seats always causes a loss. Different allocation methods make different trade-offs, much as voting rules do in the [Condorcet paradox](condorcet-paradox)."
finePrint: "The Alabama paradox was identified in historical United States apportionment calculations. Methods designed to prevent seat losses when the total grows may give up other desirable rules."
sources:
  - title: "Wikipedia: Apportionment paradox"
    url: "https://en.wikipedia.org/wiki/Apportionment_paradox"
---
