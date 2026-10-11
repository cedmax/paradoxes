---
title: "The sum of all whole numbers"
titleAccent: "whole numbers"
aka: ["1+2+3", "minus one twelfth", "-1/12", "Ramanujan summation", "zeta regularisation"]
chapter: infinity
order: 110
status: explained
simplification: heavy
noMaths: false
written: true
sourcesVerified: true
problem: "How can 1 + 2 + 3 + 4 + … be said to equal −1/12, when adding positive numbers only makes the total bigger?"
claimA: "Adding positive numbers can only make a total bigger, so the sum of 1 + 2 + 3 + … cannot be a negative fraction."
claimB: "The sum of 1 + 2 + 3 + … is −1/12, a value mathematicians and physicists use."
verdict: "The ordinary sum grows without limit and has no finite value. The −1/12 is what a different method assigns to the series, and the equals sign is shorthand for that."
whatBreaks: "The assumption that the equals sign means the ordinary sum. Here it stands for a value given by a special method, because the ordinary sum has no finite value."
statusNote: "the second claim is wrong if it is heard as an ordinary sum. The ordinary sum does not exist as a finite number, and −1/12 answers a different, precisely defined question."
setup: "Add the whole numbers one after another: 1, then 1 + 2 = 3, then 6, 10, 15 and so on. The running total never stops growing. Yet it is often said that 1 + 2 + 3 + 4 + … = −1/12. The mathematician Srinivasa Ramanujan stated the value in a letter to G. H. Hardy dated 27 February 1913, and it still turns up in physics."
whyWrong: "The ordinary meaning of an endless sum is: add the terms one at a time and see what the total settles towards. For 1 + 2 + 3 + … the totals are 1, 3, 6, 10, 15 and so on. They increase without bound, so the series has no sum in the ordinary sense. The terms never get small, which is the quick sign that an endless sum will not settle. The claim of −1/12 does not use the ordinary meaning, even though it is written with the same equals sign."
resolution:
  - "The value comes from a method called zeta function regularisation. For any number s larger than 1, replacing each whole number n by n raised to the power of minus s and adding them up gives a definite answer. That defines a function, the Riemann zeta function. Mathematicians then stretch the function by a standard method, called analytic continuation, to values of s where adding the terms no longer works. The whole numbers correspond to s = −1, and the stretched function has the value −1/12 there. Another method, Ramanujan summation, gives the same value."
  - "The number is not arbitrary. The mathematician Terence Tao shows that if the sum is smoothed, by fading the terms out gently instead of stopping them abruptly, the smoothed total grows like a large positive term and also contains a constant piece. That constant piece is −1/12. It sits underneath the growing term and never replaces it, so the total still grows without limit."
  - "So the first claim is right about the ordinary sum, and the second is right only about the value these methods assign. Nothing contradicts anything: they are answers to two different questions."
finePrint: "In physics, the same constant appears in the Casimir effect, where, in a simple one-dimensional version, a smoothed version of the sum leaves −1/12 and gives an attractive force, and in bosonic string theory, which turns out to be consistent only in 26 dimensions. Handling endless sums as if they were finite can give wrong results, for example by inserting zeros, so the methods need care. Any method that is both linear and stable cannot give a finite value to 1 + 2 + 3 + …, so the methods that do give up one of those properties. Historians disagree about Euler’s role: some credit him with the value, and others say he could not give it a meaning."
sources:
  - title: "Wikipedia: 1 + 2 + 3 + 4 + ⋯"
    url: "https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF"
    note: "Source for the divergence, zeta regularisation, Ramanujan's 1913 letter, the Casimir and string theory uses, and the limits on the methods."
  - title: "Terence Tao: The Euler-Maclaurin formula, Bernoulli numbers, the zeta function, and real-variable analytic continuation"
    url: "https://terrytao.wordpress.com/2010/04/10/the-euler-maclaurin-formula-bernoulli-numbers-the-zeta-function-and-real-variable-analytic-continuation/"
    note: "A blog post, not peer review. Checked: the smoothed sum of n has the form −1/12 plus a positive multiple of N squared, and Tao says it does not equal −1/12 in the usual sense."
---
