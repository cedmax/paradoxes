---
title: "Monty Hall problem"
description: "Three doors, one car. The host shows a goat behind a door you did not pick. Should you switch? The rules matter in the Monty Hall problem."
titleAccent: "problem"
aka: ["three doors", "game show"]
chapter: probability
status: explained
simplification: light
order: 10
sourcesVerified: true
reviewed: true
problem: "Three doors, one car. You pick one and the host opens a door with a goat behind it. Should you switch?"
claimA: "Two doors left, so it's 50/50."
claimB: "Switching wins 2 times in 3."
verdict: "The 50/50 intuition is wrong."
whatBreaks: "Intuition about probability: new information changes the odds unevenly."
statusNote: "the 50/50 intuition is wrong. The accepted explanation can be checked by listing every case."
setup: "A game show has three doors. Behind one is a car, behind the other two are goats. You pick a door. The host, who knows where the car is, opens one of the other two doors and shows you a goat. He then offers you a deal, stick with your door, or switch to the one left closed."
whyWrong: "Two closed doors look like a coin flip: 50/50, so why bother? But the two doors aren't equals. Yours was picked blind. The other one was left standing by a host who knew where the car was and avoided it."
resolution:
  - "Your first pick has a 1 in 3 chance of being the car, and the host opening a door doesn't change that. The other two doors share a 2 in 3 chance, and the host has just shown that one of them is a goat. So all of that 2 in 3 now sits on the one door left. Staying wins 1 time in 3. Switching wins 2 times in 3."
  - "Another way to see it: switching wins exactly when your first pick was wrong, and that happens 2 times out of 3."
finePrint: "This only holds if the host knows where the car is, always opens a losing door, and always makes the offer. Change those rules and the answer changes. It also assumes that when your first pick is the car, so both other doors hide goats, the host picks which one to open at random. If he favours one door, then the chance that switching wins, given the door he actually opened, can be anywhere from one half to certain. Over all games, switching still wins 2 times in 3."
sources:
  - title: "Wikipedia: Monty Hall problem"
    url: "https://en.wikipedia.org/wiki/Monty_Hall_problem"
---
