---
title: "Dollar auction"
titleAccent: "auction"
aka: ["Shubik", "escalation", "sunk cost", "war of attrition", "dollar auction game"]
chapter: collective
subject: "game-theory"
order: 90
status: explained
simplification: light
noMaths: true
written: true
sourcesVerified: true
problem: "Why would careful bidders in an auction for one dollar end up paying more than a dollar for it?"
claimA: "Rational bidders would never push the price of a dollar past a dollar."
claimB: "Rational bidders can raise the price past a dollar, because losing bidders also pay and continuing can be a best reply."
verdict: "A price above a dollar can follow from short-term rational replies because the runner-up also pays. The whole-game analysis allows rational strategies that sometimes continue and sometimes drop out, rather than requiring endless bidding."
whatBreaks: "The assumption that rational bidders can never bid more than the dollar’s value. Each bid must be compared with paying the losing bid, not with getting the prize for free."
statusNote: "rational play need not stop at the prize’s value. The standard analysis allows stable strategies with a chance of dropping out each round, independent of how high the bids have become."
setup: "An auction offers a dollar bill. The highest bidder pays their bid and gets the dollar. The second-highest bidder also pays, but gets nothing. Suppose one person has bid a dollar and the runner-up has bid 95 cents."
whyWrong: "If the runner-up quits, they lose 95 cents. If they bid $1.05 and win, they lose only 5 cents. The higher bid looks cheaper. But the other bidder now faces the same temptation, and can raise the price again."
resolution:
  - "This is a discrete war of attrition: each side pays to outlast the other. The standard analysis has a symmetric mixed-strategy equilibrium, meaning that both bidders use the same randomised rule and neither gains by changing it alone. In that rule they sometimes raise and sometimes drop out. There are also asymmetric equilibria with fixed strategies."
  - "The chance of dropping out in the symmetric strategy does not depend on the bids already made. Rational bidding can therefore continue past a dollar. This defeats the claim that rational bidders never cross that price, without saying that every further bid is compulsory or that a short-term reply is the best plan for the whole game."
finePrint: "Martin Shubik described the game in 1971. Formal analyses consider stable strategies, including strategies that drop out with some probability. An immediate saving if the opponent stops is not a guarantee about the eventual result. Related penny auctions also differ in their rules. The game illustrates escalation, rather than proving that rational players must bid without limit."
sources:
  - title: "Wikipedia: Dollar auction"
    url: "https://en.wikipedia.org/wiki/Dollar_auction"
    note: "Source for the rules, Shubik (1971, Journal of Conflict Resolution 15(1)), the escalation example, the equilibria, the sunk-cost explanation, and Augenblick (2016). Some of the page’s claims are tagged as needing a citation."
---
