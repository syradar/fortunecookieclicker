const fortunes = [
  "You flew the Gullfire over Leningrad, didn't you?",
  "Victor vilken fin frisyr du har!",
  "P3 Spel <3",
  "Fortune Cookie 1.5 HD Remaster Remix",
  "You will find a bushel of money",
  "Your smile will tell you what makes you feel good.",
  "Don't panic",
  "The best year-round temperature is a warm heart and a cool head",
  "It could be better, but it's good enough.",
  "You will find a thing. It may be important",
  "Your reality check about to bounce.",
  "Two days from now, tomorrow will be yesterday.",
  "When chosen for jury duty, tell judge fortune cookie say “guilty!”",
  "Stop eating now. Food poisoning no fun.",
  "You are cleverly disguised as responsible adult.",
  "Drive like hell, you will get there.",
  "Person who eat fortune cookie get lousy dessert.",
  "Okay to look at past and future. Just don't stare.",
  "Soup was secret family recipe made from toad. Hope you liked!",
  "You will soon have an out of money experience.",
  "He who dies with most toys, still dies.",
  "Person who rests on laurels gets thorn in backside.",
  "Two can live as cheaply as one, for half as long.",
  "Life is a sexually transmitted condition.",
  "Give person fish, he eat for day. Teach person to fish, he always smell funny.",
  "Person who argues with idiot is taken for fool.",
  "Look before you leap. Or wear a parachute.",
  "The end is near, might as well have dessert.",
  "This fortune no good. Try another.",
  "Wise husband is one who thinks twice before saying nothing.",
  "Marriage lets you annoy one special person for the rest of your life",
  "Run",
  "Make love, not bugs",
  "You will read this and say “Geez! I could come up with better fortunes than that!”",
  "I cannot help you, for I'm just a cookie",
  "The fortune you seek, is in another cookie",
  "Don't eat any Chinese food today or you'll be sick!",
  "About time I got out of that cookie!",
  "Come back later….I'm sleeping (yes, cookies need their sleep too)",
  "You will be hungry again in one hour",
  "You will die alone and poorly dressed",
  "Warning: do not eat your fortune",
  "If you can read this, you are literate. Congratulations",
  "Made in the USA",
]
const firstSaying = "You flew the Gullfire over Leningrad, didn't you?"

function get_fortune(clicks) {
  if (clicks % 10 === 0) {
    return "Skärp dig!"
  }

  if (clicks === 1) {
    return firstSaying
  }

  return fortunes[Math.floor(Math.random() * fortunes.length)]
}

const cookieDom = document.getElementById("fortune-cookie")

function create_handler() {
  const state = {
    clicks: 0,
  }
  const clickCounterDom = document.getElementById("click-counter")
  const fortuneDom = document.getElementById("fortune")

  const handler = () => {
    state.clicks += 1
    clickCounterDom.innerText = state.clicks
    fortuneDom.innerText = get_fortune(state.clicks)
  }

  return handler
}

cookieDom.addEventListener("click", create_handler())
