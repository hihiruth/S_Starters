document.addEventListener('DOMContentLoaded', () => {
  const sentenceStarterElement = document.getElementById('sentence-starter');
  const newStarterButton = document.getElementById('new-starter-button');
  const speechBubble = document.querySelector('.speech-bubble');

  // Array of possible background colors
  const backgroundColors = ['#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0'];

  // Load sentence starters from local storage, or use default
  let sentenceStarters = JSON.parse(localStorage.getItem('sentenceStarters')) || [
    "Once upon a time,",
    "In a land far, far away,",
    "It was a dark and stormy night when...",
    "Suddenly, a mysterious figure appeared...",
    "No one could have predicted that...",
    "As the sun began to set,",
    "Deep in the heart of the forest,",
    "Legend has it that...",
    "Many years ago,",
    "The adventure began when...",
    "The thing I look forward to most each day is...",
    "The lesson I learned the hard way is...",
    "The thing I would tell my younger self if I could is...",
    "The thing I'm most afraid of is...",
    "The thing I'm learning to appreciate more and more is...",
    "A perfect day for me would include...",
    "If only people realized that...",
    "The thing I value most in a friendship is...",
    "If I could live anywhere in the world, I would choose...",
    "If I could go back in time, I would...",
    "The thing I would like to be remembered for is...",
    "One thing I will never forget is...",
    "The thing I miss most about my childhood is...",
    "The thing I'm most passionate about is...",
    "The world would be a better place if...",
    "There should be a law that demands...",
    "The thing I'm most proud of accomplishing is...",
    "If I could have any job in the world, I would be a..."
  ];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function updateSentenceStarter() {
    const randomSentence = getRandomElement(sentenceStarters);
    sentenceStarterElement.textContent = randomSentence;

    // Choose random colors
    const randomBackgroundColor = getRandomElement(backgroundColors);

    // Update background and bubble colors
    document.body.style.backgroundColor = randomBackgroundColor;

    //Update the speech bubble arrow
    speechBubble.style.setProperty('--background-color', randomBackgroundColor);
  }

  // Initial sentence starter
  updateSentenceStarter();

  // Update sentence starter on button click
  newStarterButton.addEventListener('click', updateSentenceStarter);
});
