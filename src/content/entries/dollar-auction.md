---
title: "Dollar auction"
format: argument
searchTerms:
  [
    "Shubik",
    "escalation",
    "sunk cost",
    "war of attrition",
    "dollar auction game",
    "bidding war",
  ]
chapter: collective
order: 90
status: explained
simplification: light
noMaths: true
sourcesVerified: true
problem: "Why would careful bidders in an auction for one dollar end up paying more than a dollar for it?"
claimA: "Rational bidders would never push the price of a dollar past a dollar."
claimB: "Rational bidders can raise the price past a dollar, because losing bidders also pay and continuing can be a best reply."
whatBreaks: "The assumption that rational bidders can never bid more than the dollar’s value. Each bid must be compared with paying the losing bid, not with getting the prize for free."
statusNote: "rational play need not stop at the prize’s value. The standard analysis allows stable strategies with a chance of dropping out each round, independent of how high the bids have become."
setup: "An auction offers a dollar bill. The highest bidder pays their bid and gets the dollar. The second-highest bidder also pays, but gets nothing. Suppose one person has bid a dollar and the runner-up has bid 95 cents."
whyWrong: "If the runner-up quits, they lose 95 cents. If they bid $1.05 and win, they lose only 5 cents. The higher bid looks cheaper. But the other bidder now faces the same temptation, and can raise the price again."
resolution:
  - "This is a discrete war of attrition: each side pays to outlast the other. The standard analysis has a symmetric mixed-strategy equilibrium, meaning that both bidders use the same randomised rule and neither gains by changing it alone. In that rule they sometimes raise and sometimes drop out. There are also asymmetric equilibria with fixed strategies."
  - "The chance of dropping out in the symmetric strategy does not depend on the bids already made. Rational bidding can therefore continue past a dollar. This defeats the claim that rational bidders never cross that price, without saying that every further bid is compulsory or that a short-term reply is the best plan for the whole game."
finePrint: "Martin Shubik described the game in 1971. Formal analyses consider stable strategies, including strategies that drop out with some probability. An immediate saving if the opponent stops is not a guarantee about the eventual result. Related penny auctions also differ in their rules. The game illustrates escalation, rather than proving that rational players must bid without limit."
sources:
  - title: "Shubik (1971), The Dollar Auction Game: A Paradox in Noncooperative Behavior and Escalation"
    url: "https://pnp.mathematik.uni-stuttgart.de/igt/eiserm/lehre/2018/Spieltheorie/Shubik%20-%20The%20Dollar%20Auction%20Game%20%281971%29.pdf"
    note: "Full original Journal of Conflict Resolution paper, pp. 109-111: both bidders pay, losing bidders can rationalise bidding higher to reduce their immediate loss, and escalation past the prize value can occur. Does not prove the claimed stationary mixed equilibrium."
  - title: "Waniek and colleagues (2015), Spiteful Bidding in the Dollar Auction"
    url: "https://ijcai.org/proceedings/2015/100"
    note: "Full proceedings paper and formal game description, sections 1-3: Shubik auction rules, equilibria and the distinction between rational strategic solutions and observed escalation. Does not establish the stationary mixed strategy claimed for this exact format."
  - title: "Eyster (2002), Rationalizing the Past: A Taste for Consistency"
    url: "https://www.nuffield.ox.ac.uk/Users/Eyster/papers/rationalize.pdf"
    note: "Full working paper, discussion of the dollar auction and formal section on a simplified war of attrition: symmetric stationary randomised exit and asymmetric equilibria. This is a related model, not a proof for the exact sequential auction described here."
  - title: "Wikipedia: Dollar auction"
    url: "https://en.wikipedia.org/wiki/Dollar_auction"
    note: "The particular stationary symmetric mixed strategy and constant dropout probability asserted in statusNote and resolution still require a full formal source for exactly the model used; these remain a documented verification gap."
---
