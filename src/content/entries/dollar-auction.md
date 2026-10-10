---
title: "Dollar auction"
titleAccent: "auction"
aka: ["Shubik", "escalation", "sunk cost", "war of attrition", "dollar auction game"]
chapter: choice-identity
status: explained
simplification: light
noMaths: true
written: true
sourcesVerified: true
problem: "How can bidding more than a dollar for a dollar seem like the cheaper choice?"
claimA: "Once bidding reaches a dollar, raising your bid can only increase your loss."
claimB: "A runner-up at 95 cents can lose less by bidding $1.05, if nobody bids again."
verdict: "The runner-up must pay even when they lose. A bid above the prize’s value can therefore look cheaper than dropping out, but further bidding can undo that saving."
whatBreaks: "The assumption that a bid above the prize’s value must be worse than dropping out when the runner-up also pays."
statusNote: "the runner-up’s payment changes the comparison. Bidding above a dollar can reduce the immediate loss, but that does not make endless escalation the best strategy."
setup: "An auction offers a dollar bill. The highest bidder pays their bid and gets the dollar. The second-highest bidder also pays, but gets nothing. Suppose one person has bid a dollar and the runner-up has bid 95 cents."
whyWrong: "If the runner-up quits, they lose 95 cents. If they bid $1.05 and win, they lose only 5 cents. The higher bid looks cheaper. But the other bidder now faces the same temptation, and can raise the price again."
resolution:
  - "The extra bid is not compared with getting the dollar for free. It is compared with paying a losing bid and receiving nothing. That is why a price above a dollar can look attractive."
  - "This explains the pressure to escalate. It does not prove that every further bid is rational once future replies are considered. A sensible strategy for the whole game must allow for those replies and for the possibility of dropping out."
finePrint: "Martin Shubik described the game in 1971. Formal analyses consider stable strategies, including strategies that drop out with some probability. An immediate saving if the opponent stops is not a guarantee about the eventual result. Related penny auctions also differ in their rules. The game illustrates escalation, rather than proving that rational players must bid without limit."
sources:
  - title: "Wikipedia: Dollar auction"
    url: "https://en.wikipedia.org/wiki/Dollar_auction"
    note: "Source for the rules, Shubik (1971, Journal of Conflict Resolution 15(1)), the escalation example, the equilibria, the sunk-cost explanation, and Augenblick (2016). Some of the page’s claims are tagged as needing a citation."
---
