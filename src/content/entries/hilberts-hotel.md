---
title: Hilbert's hotel
chapter: infinity
status: resolved
simplification: light
order: 2
written: true
problem: A hotel has infinitely many rooms and every one is full. Can it take one more guest?
claimA: Full means there is no room for a new guest.
claimB: Move every guest up one room and there is.
verdict: Infinite sets don't obey the 'full means no room' rule.
whatBreaks: The idea that a full container has no space, which only holds for finite ones.
statusNote: the idea that full means no room only holds for finite collections. Nobody disputes this.
setup: A hotel has rooms numbered 1, 2, 3 and so on, without end. Every room has a guest in it. A new traveller arrives and asks for a room. The manager says they are full, and the traveller says that should not be a problem.
whyWrong: For any ordinary hotel, full really does mean full. Count the guests, count the rooms, and there is no room left over. We carry that rule over to the infinite hotel without noticing that it was only ever tested on finite ones.
resolution:
  - "The manager asks every guest to move to the room with the next number: the guest in room 1 moves to room 2, the guest in room 2 moves to room 3, and so on. Nobody is left without a room, because every room has a next one to move into. Room 1 is now empty."
  - "It can go further. If infinitely many new guests arrive, ask each current guest in room n to move to room 2n. All the odd-numbered rooms are now free, and there are infinitely many of them."
  - "The underlying fact is that an infinite collection can be matched up, one to one, with a part of itself. That is not a flaw. It is what makes a collection infinite. Finite collections cannot do it."
finePrint: This is a thought experiment, and no such hotel could be built. It also does not mean that any group of guests fits. Some infinite groups are bigger than others, and a group with one guest for every point on a line cannot be given rooms even in an infinite hotel. This entry covers only the simplest kind of infinity.
sources:
  - title: "Wikipedia: Hilbert's paradox of the Grand Hotel"
    url: https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel
---
