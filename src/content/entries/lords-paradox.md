---
title: "Lord's paradox"
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
chapter: probability
status: explained
uniqueness: related
anchor: simpsons-paradox
simplification: light
noMaths: false
order: 210
written: true
sourcesVerified: true
problem: "Two careful analyses of the same before and after weights give opposite answers about boys and girls. Can both be right?"
claimA: "Two correct analyses of the same data must give the same answer about whether the diet affected boys and girls differently."
claimB: "In Lord’s data, one correct analysis finds no difference between boys and girls, and another finds that boys gained more."
verdict: "The two analyses answer different questions, one about average gains and one about students who started at the same weight, so both can be right."
whatBreaks: "The assumption that both analyses answer the same question. One compares average gains; the other compares boys and girls who started at the same weight."
statusNote: "the assumption that both analyses answer the same question is wrong, and Holland and Rubin, Bock, and Pearl all say both statisticians’ results are correct. They still differ on the causal question: Holland and Rubin say any answer rests on assumptions the data cannot test, while Pearl says a clearly stated causal model settles it."
setup: "The statistician Frederic Lord set out this example in a short 1967 paper. A large university wants to know how the diet in its dining halls affects students, and whether the effect differs between boys and girls. Each student is weighed on arrival in September and again the next June. For the boys, the spread of weights in June is the same as in September, although individual students have gained or lost. The same is true for the girls. Two statisticians look at the data. The first works out each student’s change in weight, a “change score”. On average neither group has changed, so he concludes there is no evidence of any effect of the diet, on either sex. The second uses analysis of covariance, a method that compares final weights after allowing for differences in starting weight. He concludes that boys gained significantly more than girls of the same starting weight."
whyWrong: "It looks as if one statistician must have made a mistake. Neither has. They are answering different questions. The first asks whether the average change in weight differs between boys and girls; it does not. The second asks whether a boy and a girl who start at the same weight end up gaining the same; they do not. Boys start heavier on average, so a boy and a girl of the same starting weight are a light boy and a heavy girl. Within each sex, as Cox and McCullagh pointed out, students who start heavy tend to lose weight and students who start light tend to gain. So the light boy tends to gain and the heavy girl tends to lose, even though neither group changes on average."
resolution:
  - "Lord himself concluded that “there simply is no logical or statistical procedure that can be counted on to make proper allowances for uncontrolled preexisting differences between groups.”"
  - "Paul Holland and Donald Rubin, in a 1983 chapter, agreed that both statisticians describe the data correctly. The clash arises only when the descriptions are turned into claims about what the diet caused. Each causal claim rests on an assumption the data cannot test, such as what each student would have weighed without the dining hall diet. So, on their account, neither causal conclusion is right or wrong until that assumption is stated."
  - "Bock, in 1975, and Cox and McCullagh, in 1982, also saw no contradiction. Cox and McCullagh, as Judea Pearl reports them, judged the first statistician right that the average effect of the diet on weight gain is the same, zero, for both sexes, and the second right too, because he asks a different question."
  - "Pearl, in a 2016 paper, argued that the question can be settled once the causal story is drawn out. Sex affects starting weight, and starting weight affects final weight. So starting weight lies on one path from sex to final weight. The first statistician measured the total effect of sex, which is zero. The second measured the direct effect, with the path through starting weight held fixed, which is not zero. In Pearl’s words, “Both statisticians were in fact correct, though each estimated a different effect.” He called Lord’s pessimism “rather premature”, provided there are no hidden common causes left out of the story."
finePrint: "The disagreement that remains is about other versions of the puzzle, not Lord’s. In a version by Howard Wainer and L. M. Brown (2007), students choose between two dining halls, and heavier students tend to choose one of them. Wainer and Brown held that each statistician is right under a different untestable assumption. Pearl argued that starting weight there is a common cause of the hall chosen and the final weight, so it must be allowed for: the second statistician is right and the first is “flatly wrong”. Tu, Gunnell and Gilthorpe (2008) argue that Lord’s paradox, [Simpson’s paradox](simpsons-paradox) and suppression effects in regression are one phenomenon, the “reversal paradox”, and that real experiments are needed before calling any effect “direct”. The statement of the paradox in this entry is shortened. The account of the light boy and the heavy girl is a plain-words reading of why the two methods differ, built on Pearl’s statement that boys start heavier and Cox and McCullagh’s observation as Pearl reports it."
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
