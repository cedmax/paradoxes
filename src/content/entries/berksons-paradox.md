---
title: "Berkson's paradox"
format: argument
searchTerms: ["Berkson's fallacy", "selection bias", "collider bias", "explaining away"]
chapter: statistics
order: 70
status: explained
simplification: light
noMaths: true
sourcesVerified: true
problem: "How can two traits that have nothing to do with each other look linked in the things you can see?"
claimA: "If two traits are unrelated across a whole collection, they must look unrelated in any large group taken from it."
claimB: "In the stamps on display, prettiness and rarity look linked, although they are unrelated in the full collection."
verdict: "A group chosen because its members have at least one of the traits makes the traits look linked. The link is created by the choosing."
whatBreaks: "The assumption that a large group is a fair sample. Here the group was chosen using the traits themselves."
statusNote: "the first claim is wrong. It holds for a group picked without regard to the traits, but not for one picked because its members have at least one of them. The arithmetic is not in dispute."
setup: "A collector has 1,000 stamps. Of these, 300 are pretty, 100 are rare, and 30 are both. Prettiness and rarity are unrelated: 10 percent of all stamps are rare, and 10 percent of the pretty ones are rare too. The collector puts on display every stamp that is pretty or rare, which is 370 stamps. On the display, 27 percent of the stamps are rare, but only 10 percent of the pretty ones are. Every one of the 70 plain stamps on display is rare. A visitor would conclude that pretty stamps tend not to be rare, and that plain ones tend to be."
whyWrong: "A big group feels like a fair picture of the whole. That is only true if the group was picked without looking at the traits being compared. Here a stamp gets on the display by being pretty or rare. A plain stamp can only be there if it is rare, so among the plain stamps on display, rarity is guaranteed. That is what makes the traits look opposed."
resolution:
  - "Nothing in the collection links the two traits. The link appears only in the display. This is the general pattern: when something is chosen because it has at least one of two traits, the traits start to look as if they trade off against each other. Statisticians describe the choosing step as conditioning on a collider, a thing that is influenced by both traits."
  - "So the first claim is false for a group chosen on the traits, and the second is true of the display. To see the real relationship, look at the full collection, not just the part that was picked."
finePrint: "The paradox is named after Joseph Berkson, who described it in 1946 in a paper on hospital data. His example was that among hospital patients, two unrelated diseases can look negatively linked, because a patient without one disease must have been admitted for some other reason. The paper is sometimes miscited as a 1949 paper in a different journal."
sources:
  - title: "Wikipedia: Berkson's paradox"
    url: "https://en.wikipedia.org/wiki/Berkson%27s_paradox"
    note: "Source for the statement, the 1946 origin, the hospital example and the stamp example. Stamp figures recomputed by hand: 300 + 100 − 30 = 370 displayed, 100 of 370 is 27 percent, 30 of 300 is 10 percent, and the 70 plain displayed stamps are all rare."
---
