---
title: "Lord's paradox"
format: argument
titleAccent: "paradox"
aka:
  [
    "Lord’s",
    "dining hall weights",
    "adjusting for baseline",
    "ANCOVA paradox",
    "change scores",
    "Frederic Lord",
  ]
chapter: statistics
status: explained
uniqueness: related
anchor: simpsons-paradox
simplification: light
noMaths: false
order: 130
sourcesVerified: true
problem: "Two careful analyses of the same before and after weights give opposite answers about boys and girls. Can both be right?"
claimA: "Two correct analyses of the same data must give the same answer about whether the diet affected boys and girls differently."
claimB: "In Lord’s data, one correct analysis finds no difference between boys and girls, and another finds that boys gained more."
verdict: "The two analyses answer different questions, one about average gains and one about students who started at the same weight, so both can be right."
whatBreaks: "The assumption that both analyses answer the same question. One compares average gains; the other compares boys and girls who started at the same weight."
statusNote: "the two calculations describe different comparisons and can both be correct. Holland and Rubin stress the extra causal assumptions; Pearl argues that an explicit causal model settles which comparison answers the causal question."
setup: "A university weighs students before and after a year of dining hall meals. Boys start heavier than girls on average. Neither group’s average weight changes. One analyst says the groups gained the same amount. Another compares boys and girls who started at the same weight and finds that the boys gained more."
whyWrong: "The first comparison uses the whole groups. The second picks a light boy and a heavy girl, relative to their respective groups. In Lord’s example, people who start light tend to gain and people who start heavy tend to lose. The second comparison can therefore find a difference even when the group averages stay unchanged."
resolution:
  - "The analyses answer different questions: “Did the average gains differ?” and “Did gains differ among students with the same starting weight?” Their answers need not match. The error is treating the two comparisons as the same question."
  - "Holland and Rubin stress that causal conclusions require assumptions the data cannot test. Pearl argues that an explicit causal model distinguishes an overall effect from an effect holding starting weight fixed, and settles which comparison answers the intended question. They agree that the calculations can differ without either being wrong; they differ on what counts as resolving the causal question."
finePrint: "Lord published the example in 1967. One method compares changes in weight; the other adjusts final weight for starting weight using analysis of covariance. Holland and Rubin stress the untested assumptions needed for causal conclusions. Pearl argues that an explicit causal model distinguishes total from direct effects and can settle which adjustment is appropriate. Versions in which students choose different dining halls need a different causal analysis. This entry covers Lord’s original comparison, rather than treating every later version as having the same answer."
sources:
  - title: "Pearl (2016), Lord's Paradox Revisited (Oh Lord! Kumbaya!), Journal of Causal Inference 4(2), author's reprint"
    url: https://ftp.cs.ucla.edu/pub/stat_ser/r436-reprint-aop.pdf
    note: "Lord’s 1967 wording (Psychological Bulletin 68:304-305): the study, both statisticians’ conclusions and the quoted closing sentence. Pearl’s total and direct effect reading, both quotations from Pearl, his view of Holland and Rubin, his summaries of Bock (1975) and Cox and McCullagh (1982, Biometrics), and his verdict on the Wainer and Brown dining hall version. Also the source for boys starting heavier on average, and for Cox and McCullagh’s point that heavy students tend to lose weight and light ones to gain."
  - title: "Wikipedia: Lord's paradox"
    url: https://en.wikipedia.org/wiki/Lord%27s_paradox
    note: "The same spread of weights in September and June for each sex, change scores against analysis of covariance, Holland and Rubin’s descriptive versus causal point, and Tu, Gunnell and Gilthorpe (2008) on the reversal paradox and the need for experiments."
  - title: "ETS: Holland and Rubin, On Lord's Paradox (Research Report RR-82-36, 1982)"
    url: https://www.ets.org/research/policy_research_reports/publications/report/1982/hwda.html
    note: "Abstract: both statisticians’ descriptive conclusions are correct, and their causal conclusions rest on different assumptions the data cannot test."
  - title: "ETS: Holland and Rubin, On Lord's Paradox (book chapter, 1983)"
    url: https://www.ets.org/research/policy_research_reports/publications/chapter/1983/kalv.html
    note: "Publication details of the 1983 chapter, in a Festschrift for Frederic M. Lord edited by Howard Wainer and Samuel Messick."
---
