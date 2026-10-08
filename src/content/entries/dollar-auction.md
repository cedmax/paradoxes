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
problem: "Why would careful bidders in an auction for one dollar end up paying more than a dollar for it?"
claimA: "Rational bidders would never push the price of a dollar past a dollar."
claimB: "At every stage, bidding a little more is the sensible way to cut your loss, so the price keeps rising past a dollar."
verdict: "Each bid is a sensible reply to the last one, yet the price can still climb past a dollar. Choices that are each short-sighted but rational can add up to a result nobody would choose."
whatBreaks: "The assumption that choices which are each rational must add up to a sensible result. Each bidder decides only about the next bid, and the top two bidders can both end up losing."
statusNote: "the first claim is wrong. Each bid is a reasonable reply to the one before, so rational bidders can drive the price past a dollar. The standard analysis finds stable ways to play, and in them the chance of dropping out does not depend on how much has already been bid."
setup: "An auctioneer offers a dollar bill. The highest bidder pays what they bid and gets the dollar. The second-highest bidder also pays what they bid, and gets nothing. The lowest bid is 5 cents. The economist Martin Shubik described the game in 1971. Bidding starts slowly, say at 5, 10, 15 and 20 cents. The bidders who are behind try to avoid a loss by taking the lead. When the bids reach 95 cents and someone bids a dollar, the person at 95 cents can cut their loss by bidding $1.05, and so on. Once the top bid reaches a dollar, only the auctioneer profits."
whyWrong: "It seems that people who can count would stop before paying more than a dollar for a dollar. But no bidder ever decides to pay more than a dollar for a dollar. Each decides only about the next bid, and the next bid always looks better than dropping out and losing what they have already bid. Both of the top bidders reason the same way, so the bidding keeps going."
resolution:
  - "The game is treated as a discrete form of a war of attrition, a contest in which each side keeps paying to outlast the other. It has a symmetric mixed-strategy equilibrium, in which each bidder drops out with some chance each round, and asymmetric pure-strategy equilibria. In the mixed one, the chance of dropping out does not depend on the size of the bids so far, because past bids are sunk costs."
  - "So the second claim is true and the first is false: the price can pass a dollar even though every bidder is acting sensibly at each step."
finePrint: "Shubik’s paper was titled The Dollar Auction Game: A Paradox in Noncooperative Behavior and Escalation. Ned Augenblick (2016) found the sunk-cost fallacy in penny auctions, which work in a similar way. The source gives no experimental results and no typical final price."
sources:
  - title: "Wikipedia: Dollar auction"
    url: "https://en.wikipedia.org/wiki/Dollar_auction"
    note: "Source for the rules, Shubik (1971, Journal of Conflict Resolution 15(1)), the escalation example, the equilibria, the sunk-cost explanation, and Augenblick (2016). Some of the page’s claims are tagged as needing a citation."
---
