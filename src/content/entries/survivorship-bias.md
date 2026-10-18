---
title: "Survivorship bias"
format: argument
titleAccent: "bias"
aka:
  [
    "survivor bias",
    "Abraham Wald",
    "bombers",
    "bullet holes",
    "planes that came back",
    "missing data",
  ]
chapter: statistics
order: 100
status: explained
uniqueness: related
anchor: inspection-paradox
simplification: light
noMaths: false
sourcesVerified: true
problem: "If the bombers that come back have bullet holes in some places and hardly any in others, where should the armour go?"
claimA: "The damage on planes that came back showed where they needed protection."
claimB: "Planes that didn’t come back were probably hit where the returning ones weren’t, and that’s where the protection should go."
verdict: "Only the planes that survived were counted. Few holes in one part can mean that planes hit there were lost."
whatBreaks: "The assumption that the planes that came back are a fair sample of all the planes that were hit."
statusNote: "the first claim is wrong. It treats the survivors as a fair sample, when the missing planes are missing because of the very damage being studied. The reasoning is not in dispute, though the popular story told about it is partly legend."
setup: "In the Second World War, bombers came back from missions with bullet holes. Suppose the holes cluster on the body and wings, and there are few on the engines. It seems natural to add armour where the holes are."
whyWrong: "The holes were counted only on the planes that returned. A plane hit in a weak spot is less likely to return, so its holes are never counted. The planes in the hangar have all passed a test, and the test was surviving the very damage being studied. The numbers here are an illustration. Say 100 planes are each hit once, 50 in the engines and 50 in the body. A hit in the body never brings a plane down, but half the hits in the engines do. Then all 50 planes with body holes come back, and only 25 with engine holes. The returning planes show twice as many body holes as engine holes, although both parts were hit equally often, and every plane lost was hit in the engines."
resolution:
  - "Looking only at what passed a selection, and overlooking what did not, is called survivorship bias. It turns up far from aircraft. Investment funds that do badly are often closed or merged, so a list of today’s funds shows mostly those that did well. Elton, Gruber and Blake estimated in 1996 that this bias amounted to 0.9 percent a year across the US mutual fund industry. The ancient Greek Diagoras of Melos, shown paintings of people saved from shipwreck, is said to have pointed out that those who drowned were not painted, and they were far more numerous."
  - "It is like the [inspection paradox](inspection-paradox), where a random moment is more likely to fall in a long gap between buses. In both, the way the sample is gathered shapes what it shows. Here the filter goes further: some cases are removed from the data altogether."
  - "So the first claim is false and the second is true. The fix is to ask what is missing from the data, and why."
finePrint: "The real history is thinner than the popular story. Abraham Wald was a member of the Statistical Research Group at Columbia University, which wrote wartime memoranda on estimating how vulnerable each part of a plane was from the damage on planes that returned. Wikipedia says he proposed that his conclusions could guide where armour went. The mathematician Bill Casselman, writing for the American Mathematical Society, says the story might well be true but that there is very little evidence for its best parts, and that Wald’s memoranda say nothing about what the military should do. The famous drawing of a plane covered in red dots is not from Wald’s work: the designer Cameron Moll says he drew it around 2005, with made-up dots on a plane outline that was not historically accurate."
sources:
  - title: "Wikipedia: Survivorship bias"
    url: "https://en.wikipedia.org/wiki/Survivorship_bias"
    note: "Source for the definition, Wald and the Statistical Research Group, the memoranda on estimating vulnerability from damage on surviving planes, Wald’s proposal on armour, the mutual fund example with Elton, Gruber and Blake’s 0.9 percent a year, and Diagoras of Melos. The 100 plane example is constructed for this entry; its numbers are an illustration and were checked by hand."
  - title: "Wikipedia: Abraham Wald"
    url: "https://en.wikipedia.org/wiki/Abraham_Wald"
    note: "Supports Wald’s membership of the Statistical Research Group at Columbia and his work estimating damage to all aircraft from those that returned."
  - title: "American Mathematical Society Feature Column: Bill Casselman, The Legend of Abraham Wald"
    url: "https://www.ams.org/samplings/feature-column/fc-2016-06"
    note: "Source for how accurate the popular story is: very little evidence for its best parts, the memoranda saying nothing about what the military should do, and popular illustrations not matching the real aircraft."
  - title: "Cameron Moll: Abraham Wald and the airplane diagram with red bullet holes"
    url: "https://cameronmoll.com/journal/abraham-wald-red-bullet-holes-origin-story"
    note: "Source for the origin of the red dot drawing: drawn by Moll around 2005 with fictitious dots on a historically inaccurate outline."
---
