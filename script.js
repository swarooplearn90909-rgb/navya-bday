const questions = [
	{ q: 'What emotion does Cupid\'s arrow supposedly make you fall into?', a: 'love' },
	{ q: 'What do you call someone who fights against the rules and refuses to follow the system?', a: 'rebel' },
	{ q: 'What nickname do couples use for each other that\'s also the sweetest thing you can call someone?', a: 'darling' },
	{ q: 'What word completes the famous Vin Diesel Fast & Furious dialogue: "I don\'t have friends, I got ___"?', a: 'family' },
	{ q: 'Which recent movie did Mahesh Babu actually dance properly in?', a: 'guntur karam' }
  ];

  const finalAnswer = 'mirchi';
  let current = 0;
  
  const startBtn = document.getElementById('start-btn');
  const gameArea = document.getElementById('game-area');
  const questionEl = document.getElementById('question');
  const answerInput = document.getElementById('answer-input');
  const submitBtn = document.getElementById('submit-btn');
  const feedbackEl = document.getElementById('feedback');
  
  startBtn.addEventListener('click', () => {
	startBtn.classList.add('hidden');
	gameArea.classList.remove('hidden');
	showQuestion();
  });
  
  function showQuestion() {
	if (current < questions.length) {
	  questionEl.textContent = questions[current].q;
	  answerInput.value = '';
	  feedbackEl.textContent = '';
	} else {
	  questionEl.textContent = 'What one word links all the previous answers? Hint: It is a Prabhas movie!';
	  answerInput.value = '';
	  feedbackEl.textContent = '';
	  submitBtn.removeEventListener('click', handleAnswer);
	  submitBtn.addEventListener('click', handleFinal);
	}
  }
  
  function handleAnswer() {
	const ans = answerInput.value.trim().toLowerCase();
	if (ans === questions[current].a.toLowerCase()) {
	  current++;
	  showQuestion();
	} else {
	  feedbackEl.textContent = 'Incorrect. Try again.';
	}
  }
  
  function handleFinal() {
	const ans = answerInput.value.trim().toLowerCase();
	if (ans === finalAnswer) {
	  feedbackEl.innerHTML = 'Correct! <a href="party-details.pdf" download>Download your offer</a>';
	} else {
	  feedbackEl.textContent = 'Hint: It means spicy and it is a Prabhas movie!';
	}
  }
  
  submitBtn.addEventListener('click', handleAnswer);