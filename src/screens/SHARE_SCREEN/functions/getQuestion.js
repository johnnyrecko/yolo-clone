export const getQuestion = () => {
  let questions = [
    "Describe me in 3️⃣ words!",
    "What is your dream date with me? 😇",
    "What is the scariest thing you've done 😱",
    "Movie recommendations? 📺",
    "What's the craziest thing you've done for someone? 🤔",
    "Me and ___ would make a cute couple 🔥",
    "What's my best quality? 👀",
    "me + you + room = ? 🤔",
    "What is your biggest regret? 😞",
    "What do I need to let go of? 😑",
    "Any phobias? 👀",
    "Confess your biggest secret 😏",
    "Summer plans? 🌞",
    "Ask me anything 😇",
    "Send me love 😇",
    "What would my raper name be? 🎤",
    "Send me honest messages 😏",
    "What is the biggest lie you have ever told? 🤔"
  ];
  return questions[Math.round((questions.length - 1) * Math.random())];
};
