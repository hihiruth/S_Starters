document.addEventListener('DOMContentLoaded', () => {
  const newStarterInput = document.getElementById('new-starter');
  const addStarterButton = document.getElementById('add-starter-button');
  const sentenceStarterList = document.getElementById('sentence-starter-list');

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
    "If I could have any job in the world, I would be a...",
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
    "The thing I'm most proud of accomplishing is..."
  ];

  function updateSentenceStarterList() {
    sentenceStarterList.innerHTML = ''; // Clear the existing list
    sentenceStarters.forEach((starter, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = starter;

      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        sentenceStarters.splice(index, 1); // Remove from array
        updateSentenceStarterList(); // Update the list in the UI
        localStorage.setItem('sentenceStarters', JSON.stringify(sentenceStarters)); // Update local storage
      });

      listItem.appendChild(deleteButton);
      sentenceStarterList.appendChild(listItem);
    });
  }

  // Initial population of the list
  updateSentenceStarterList();

  addStarterButton.addEventListener('click', () => {
    const newStarterText = newStarterInput.value.trim();
    if (newStarterText !== '') {
      sentenceStarters.push(newStarterText);
      newStarterInput.value = ''; // Clear the input
      updateSentenceStarterList(); // Update the list in the UI
      localStorage.setItem('sentenceStarters', JSON.stringify(sentenceStarters)); // Store in local storage
    }
  });
});
