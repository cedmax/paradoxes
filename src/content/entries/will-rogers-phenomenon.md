---
title: "Will Rogers phenomenon"
titleAccent: "phenomenon"
aka: ["stage migration", "Okies joke", "moving a member between groups"]
chapter: probability
status: explained
uniqueness: related
anchor: simpsons-paradox
simplification: light
noMaths: false
written: true
sourcesVerified: true
problem: "Can moving one person from one group to another raise the average of both groups?"
claimA: "Moving one member from group S to group R cannot raise both averages, because the combined average does not change."
claimB: "Moving one member from group S to group R can raise the average of both groups."
verdict: "The combined average does stay the same, but it is a weighted blend of the two groups. A member who is above one group’s average and below the other’s can lift both."
whatBreaks: "The assumption that when the overall average cannot change, one group’s average must go up and the other’s must go down."
statusNote: "the first claim is wrong. The overall average is a size-weighted blend of the two group averages, and moving a member in between the two averages can raise both. The arithmetic is not in dispute."
setup: "Take two groups of numbers. Group R is 1, 2, 3, 4, with an average of 2.5. Group S is 5, 6, 7, 8, 9, with an average of 7. Now move the number 5 from S to R. Group R becomes 1, 2, 3, 4, 5, and its average rises to 3. Group S becomes 6, 7, 8, 9, and its average rises to 7.5. Both averages went up, yet nothing about any number changed. The average of all nine numbers is 5 before and after."
whyWrong: "The overall average is fixed, so it seems that if one group gains, the other must lose. That would hold if each group’s average were taken over a fixed number of members, but moving a member changes both group sizes. The overall average is a blend of the two group averages, weighted by group size, and the group sizes change when a member moves."
resolution:
  - "The member moved is 5. It is below the average of S (7), so removing it raises S’s average. It is above the average of R (2.5), so adding it raises R’s average. The combined average stays at 5 because the same nine numbers are there. The effect needs the moved value to lie between the two group averages."
  - "So the first claim is false and the second is true. The effect arises from how the population is divided, not from any change to an individual. It is named after a joke attributed to the comedian Will Rogers, that when the Okies left Oklahoma and moved to California, they raised the average intelligence level in both states."
finePrint: "The name was coined by the clinician Alvan Feinstein in 1985. In medicine it appears as stage migration: when better scans move patients from a healthier group to a sicker one, the survival average of each group can rise although no treatment has improved. The attribution of the joke to Will Rogers is doubtful. It was first attributed to him decades after his death, and versions about other places and people circulated earlier. The two groups here are my own example, chosen to match the averages given in the source."
sources:
  - title: "Wikipedia: Will Rogers phenomenon"
    url: "https://en.wikipedia.org/wiki/Will_Rogers_phenomenon"
    note: "Source for the statement, the name and the doubtful attribution, Feinstein and stage migration, and the condition that the moved value lies between the two averages. The sets 1 to 4 and 5 to 9 are an example that gives the averages the page lists (2.5, 7, 3, 7.5). Averages recomputed by hand."
---
