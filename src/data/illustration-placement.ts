// Illustration placement is editorial, not a publishing/review flag.
// Default to the setup. Move illustrations here only when their main role is
// to explain the mechanism or demonstrate the resolution.
export const explanationIllustrations = new Set([
  "100-prisoners-problem",
  "accuracy-paradox",
  "ant-on-a-rubber-rope",
  "apportionment-paradox",
  "base-rate-fallacy",
  "bertrands-box-paradox",
  "birthday-paradox",
  "braess-paradox",
  "centipede-game",
  "class-size-paradox",
  "coin-rotation-paradox",
  "gabriels-horn",
  "galileos-paradox",
  "hilberts-hotel",
  "inspection-paradox",
  "ladder-paradox",
  "monty-hall-problem",
  "parrondos-paradox",
  "penneys-game",
  "potato-paradox",
  "prosecutors-fallacy",
  "simpsons-paradox",
  "string-girdling-earth",
  "thomsons-lamp",
  "twin-paradox",
  "will-rogers-phenomenon",
])

export const illustrationPlacement = (slug: string): "setup" | "explanation" =>
  explanationIllustrations.has(slug) ? "explanation" : "setup"
