---
title: "Interesting number paradox"
format: argument
titleAccent: "paradox"
searchTerms:
  [
    "smallest uninteresting number",
    "dull number",
    "boring number",
    "1729",
    "taxicab number",
    "Hardy and Ramanujan",
  ]
chapter: identity
order: 20
status: defused
relatedTo: berry-paradox
simplification: light
noMaths: true
sourcesVerified: true
problem: "If some whole numbers are dull, wouldn’t the smallest dull number be interesting for that very reason?"
claimA: "Whether a number is interesting is one fixed fact, and being the smallest uninteresting number is itself enough to make a number interesting."
claimB: "Some whole numbers are uninteresting."
verdict: "“Interesting” cannot be both a fixed label and one that lacking it can earn. Defined strictly, the smallest dull number simply stays dull. Left loose, there is no fixed list of dull numbers to take the smallest from."
whatBreaks: "The assumption that “interesting” is one fixed property that also counts the fact of not having it."
statusNote: "the first claim is wrong. Once “interesting” is given a fixed meaning, such as appearing in a published list of number sequences, being the smallest number without it does not give it. The sources treat the puzzle mostly as a joke, and this diagnosis, that the word is too loose to sort numbers once and for all, is the one Wikipedia gives."
setup: "Some numbers seem interesting. One divides every whole number, two is the smallest prime, and so on. Others seem dull. Now suppose some whole numbers are dull, and take the smallest of them. Being the smallest dull number is a rather interesting fact. So that number is interesting after all, and not dull. Whatever number turns out to be the smallest dull one, the same thing happens to it. So it seems no number can be dull: every whole number is interesting."
whyWrong: "The argument has the shape of a real proof. Any collection of whole numbers that has members has a smallest member, so if there are dull numbers, there is a smallest. The trouble is in the word “interesting”. The argument uses it as a fixed label, so that the dull numbers form a definite collection with a smallest member. Then it lets the label change because of the very collection it defined."
resolution:
  - "The joke works because “interesting” is a loose, personal word. If it is pinned down, the paradox goes away. Take “interesting” to mean appearing somewhere in the On-Line Encyclopedia of Integer Sequences, a large database of number sequences. Then, according to a 2023 Scientific American article, the smallest whole number not appearing in it was 20,067. Being the smallest such number does not put it into the database, so it stays uninteresting in that fixed sense. The paradox needs “interesting” to be fixed enough to sort numbers and loose enough to change its mind about the result."
  - "So the first claim is the one to drop. It is the same move as in the [Berry paradox](berry-paradox), where the smallest number that cannot be defined in a few words gets defined by that very phrase in a few words. In both, a word is used to sort the numbers and then also to describe the result of the sorting. The difference is that “definable” can be made precise, and then gives real theorems, while “interesting” is a matter of taste. Wikipedia calls the interesting number version a semi-humorous use of self-reference."
  - "The mathematician Greg Chaitin linked the joke in 1977 to an older paradox of Bertrand Russell about the smallest undefinable ordinal, a kind of number used to count positions in endless orderings. And if a number is called interesting when some computer program shorter than the number’s own length in binary digits can produce it, the same idea connects to Gödel’s incompleteness theorems."
finePrint: "The best-known story behind it comes from G. H. Hardy and Srinivasa Ramanujan. Hardy remarked that the number of his taxi, 1729, seemed rather a dull one, and Ramanujan replied that it is the smallest number that is the sum of two cubes in two different ways: 1 cubed plus 12 cubed, and 9 cubed plus 10 cubed. Edwin Beckenbach put the argument in print in a 1945 letter, ending “Is the proof valid?”, and Martin Gardner presented it in 1958 as a fallacy. David Wells, in The Penguin Dictionary of Curious and Interesting Numbers (1987), called 39 the first uninteresting number, which made it especially interesting. The figure 20,067 depends on the database at the time, partly because it stores only the first terms of each sequence, and it can change as entries are added."
sources:
  - title: "Wikipedia: Interesting number paradox"
    url: "https://en.wikipedia.org/wiki/Interesting_number_paradox"
    note: "Source for the argument, its description as humorous and semi-humorous, the point that “interesting” is usually subjective and that the paradox is alleviated by an objective definition, the OEIS example, Hardy and Ramanujan and 1729, Beckenbach (1945), Gardner (1958), Wells (1987), Chaitin (1977) and Russell, and the link to Gödel and to the Berry paradox. The sums of cubes recomputed in Python."
  - title: "Scientific American: The Most Boring Number in the World Is ... (Manon Bischoff, 2023)"
    url: "https://www.scientificamerican.com/article/the-most-boring-number-in-the-world-is/"
    note: "Source for 20,067 as the smallest number not appearing in the OEIS at the time, and the point that the database stores only the first part of each sequence."
---
