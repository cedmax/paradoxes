---
title: "Pascal's mugging"
format: argument
titleAccent: "mugging"
aka:
  [
    "Pascal's mugger",
    "tiny probabilities of vast utilities",
    "fanaticism",
    "Bostrom mugging",
    "Yudkowsky mugging",
  ]
chapter: individual
order: 110
status: unreconciled
relatedTo: pascals-wager
simplification: light
noMaths: false
sourcesVerified: true
problem: "A stranger promises an enormous reward that is almost certainly a lie, and asks for your wallet. If the reward is big enough, should you hand it over?"
claimA: "A rational person takes whichever option has the highest expected value, however small the probabilities involved."
claimB: "A rational person does not hand over a wallet for a promise that is almost certainly false."
verdict: "Expected value says pay when the promised reward is big enough, while common sense says do not pay. The main proposed ways out each face serious objections, and there is no agreed solution."
whatBreaks: "The rule that a choice is worth its probability-weighted average payoff. Each fix either caps the payoffs, shrinks the probabilities, sets the calculation aside or accepts paying, and each pays a cost."
statusNote: "each main answer faces a serious objection. Capping the value of rewards or setting the calculation aside means, on Hayden Wilkinson’s argument, turning down attractive trade-offs or ranking similar gambles inconsistently, scaling down the odds of grand claims can mean refusing to believe them even on strong evidence, and paying leaves a person open to being drained again and again. Views on which answer is right differ."
setup: "In a short dialogue published in 2009, the philosopher Nick Bostrom imagines Blaise Pascal stopped in the street by a mugger who has forgotten his weapon. The mugger asks for Pascal’s wallet and promises to pay back far more tomorrow. Pascal says the mugger will almost certainly not keep the promise. So the mugger keeps raising the offer, until he promises magic that will give Pascal 1,000 quadrillion extra happy days of life. Pascal puts the chance that the mugger can and will deliver at one in 10 quadrillion. The wallet, they agree, is worth about one happy day to him."
whyWrong: "The expected value of a choice is each possible payoff multiplied by its probability, all added up. Here it is 1,000 quadrillion happy days times one in 10 quadrillion, which is 100 happy days. Pascal gives up one day’s worth to buy an expected 100, a gain of about 99, and the mugger points out that this is “nearly 100”. Pascal admits, “I see no flaw in your mathematics”, and hands over the wallet. The trick works for any chance above zero, because the mugger can always name a reward that grows faster than the chance shrinks. Yet handing over a wallet on such a promise looks foolish, and a person who reasons this way can be drained of everything by anyone willing to make big enough promises."
resolution:
  - "The name comes from the writer Eliezer Yudkowsky, who described the problem in a blog post of 19 October 2007, “Pascal’s Mugging: Tiny Probabilities of Vast Utilities”. In his version, a stranger demands five dollars or he will use magic powers from outside the Matrix to simulate and kill a vast number of people. Bostrom, whose dialogue appeared in the journal Analysis, credits Yudkowsky with the name."
  - "The puzzle is a cousin of [Pascal's wager](pascals-wager), with one important twist. The wager relies on an infinite reward, and many objections to it target infinity. In Bostrom’s dialogue Pascal raises exactly that worry, and the mugger replies that his powers are “strictly finite”. The mugging needs only very large finite numbers, so objections about infinity do not touch it."
  - "The problem matters beyond street encounters. Bostrom suggests that giving a powerful artificial intelligence a flawed decision theory could be disastrous, and the same structure appears in choices about very unlikely, very high-stakes events. Wikipedia reports that views on which side of the argument is right differ. The main answers are below."
positions:
  - title: "Put a ceiling on value"
    body: "Rewards cannot be worth arbitrarily much, however large they are, so no promise can outweigh a tiny enough chance. Wikipedia describes this bounded utility as one advocated remedy. Cost: the philosopher Hayden Wilkinson argues that any way of refusing tiny chances of huge value has severe problems, such as turning down trade-offs that look attractive."
  - title: "Doubt grows with the claim"
    body: "The more extraordinary the claim, the lower its probability should be, so the chance shrinks as fast as the promise grows. Holden Karnofsky argues for judging the quality of the evidence in this way, and Robin Hanson proposed a “leverage penalty” for any claim that puts someone in a uniquely powerful position over vast numbers of others. Cost: Yudkowsky noted that this would mean refusing to believe theories implying that people can affect vast numbers of others, even in the face of what might otherwise look like overwhelming evidence."
  - title: "Set the calculation aside"
    body: "Stop relying on expected-value sums when the stakes are this extreme, as Kieran Marray suggested in 2016, or, as Peter Baumann suggested in 2009, reject the step of naming a probability for the payout first. Cost: Wilkinson argues that any way of refusing such gambles forces either inconsistent rankings of gambles with the same structure, or what he calls “absurd sensitivity to tiny probability differences”."
  - title: "Pay the mugger"
    body: "Accept the calculation. Wilkinson defends this kind of “fanaticism”, preferring a tiny chance of enormous value to a sure modest one, as more plausible than the alternatives, though his paper does not discuss the mugger by name. Cost: a person who accepts this can be exploited again and again for all their money, a pattern Wikipedia notes is typically considered irrational."
finePrint: "The figures are from Bostrom’s dialogue. The value of 100 happy days is recomputed here: 1,000 quadrillion divided by 10 quadrillion is 100. Other writers have since published sequels in the same style, including Dylan Balfour in 2021, whose mugger uses plausible estimates about humanity’s long-term future rather than magic. In Yudkowsky’s version the number of people is written in a special notation for huge numbers, because writing it out in ordinary digits would take more material than there are atoms in the known universe."
sources:
  - title: "Nick Bostrom, Pascal's Mugging, Analysis 69 (3), 2009"
    url: "https://nickbostrom.com/papers/pascal.pdf"
    note: "Source for the dialogue, the 10 livres valued at one happy day, the offer of 1,000 quadrillion happy days, Pascal’s estimate of one in 10 quadrillion, “nearly 100” Utils, “I see no flaw in your mathematics”, “strictly finite”, and the footnote crediting Yudkowsky with the name. Expected value recomputed."
  - title: "Eliezer Yudkowsky, Pascal's Mugging: Tiny Probabilities of Vast Utilities (2007)"
    url: "https://www.lesswrong.com/posts/a5JAiTdytou3Jg749/pascal-s-mugging-tiny-probabilities-of-vast-utilities"
    note: "Source for the date of 19 October 2007, the title, and the five-dollars, Matrix version. Only the first 100,000 of about 123,000 characters were read."
  - title: "Wikipedia: Pascal's mugging"
    url: "https://en.wikipedia.org/wiki/Pascal%27s_mugging"
    note: "Source for the finite rewards as the difference from Pascal’s wager, the exploitability argument, the statement that views differ, bounded utility, Karnofsky, Hanson’s leverage penalty and Yudkowsky’s objection to it, Marray (2016), Baumann (2009), Bostrom’s point about artificial intelligence, the sequels, and the remark about writing the number out in digits."
  - title: "Hayden Wilkinson, In defence of fanaticism (GPI Working Paper 4-2020, published in Ethics)"
    url: "https://globalprioritiesinstitute.org/hayden-wilkinson-in-defence-of-fanaticism/"
    note: "Source for the costs Wilkinson attributes to avoiding fanaticism and for his defence of fanaticism. The abstract does not mention Pascal’s mugging by name, and applying his costs to particular remedies is a simplification."
  - title: "Dylan Balfour, Pascal's Mugger Strikes Again, Utilitas 33 (1), 2021"
    url: "https://philarchive.org/rec/BALPMS"
    note: "Source for Balfour’s sequel using estimates about the long-term future."
---
