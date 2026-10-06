---
title: Achilles and the tortoise
chapter: infinity
status: resolved
simplification: light
order: 1
written: true
problem: Achilles gives a tortoise a head start. Can he ever catch it?
claimA: He must first reach where the tortoise was, and it has moved on.
claimB: Obviously he overtakes it.
verdict: Infinitely many steps can add up to a finite time.
whatBreaks: The idea that endless steps must take endless time.
statusNote: one claim is wrong. Endless steps can add up to a finite time.
setup: Achilles runs ten times faster than a tortoise, and gives it a 100 metre head start. To catch it, he first has to get to the spot where the tortoise started. By then the tortoise has crawled a bit further. So he has to get to that spot. By then it has moved again. Every time he arrives, there is a new gap, smaller than before, but never zero.
whyWrong: Every round is real, and there really is no last one. If you only count rounds, he never catches up. The trick is that you were counting steps, not seconds.
resolution:
  - "Each round takes one tenth of the time of the one before: 10 seconds, then 1, then a tenth, and so on. Endless rounds, but the times shrink so fast that they add up to a fixed amount: about 11.11 seconds. After that moment Achilles is ahead."
finePrint: The maths of endless shrinking sums is settled, and nobody disputes that Achilles passes the tortoise. Philosophers still discuss whether that fully answers what Zeno was asking about motion, so this entry is simplified.
sources:
  - title: "Wikipedia: Zeno's paradoxes"
    url: https://en.wikipedia.org/wiki/Zeno%27s_paradoxes
---
