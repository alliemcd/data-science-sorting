```javascript
let currentQuestion = 0;
let scores = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");

function initScores() {
  scores = {};

  Object.keys(resultsInfo).forEach(type => {
    scores[type] = 0;
  });
}

function loadQuestion() {
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");

    btn.textContent = answer.text;

    btn.addEventListener("click", () => {
      scores[answer.type]++;
      nextQuestion();
    });

    answersEl.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultDiv.classList.remove("hidden");

  let result = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  resultText.textContent = `${result}: ${resultsInfo[result]}`;
}

function restartQuiz() {
  currentQuestion = 0;

  initScores();

  resultDiv.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  loadQuestion();
}

initScores();
loadQuestion();
```
\'a0\'a0\'a0\'a0\'a0 scores[answer.type]++;\
\'a0\'a0\'a0\'a0\'a0 nextQuestion();\
\'a0\'a0\'a0 \};\
\
\'a0\'a0\'a0 answersEl.appendChild(btn);\
\'a0 \});\
\}\
\
function nextQuestion() \{\
\'a0 currentQuestion++;\
\
\'a0 if (currentQuestion < questions.length) \{\
\'a0\'a0\'a0 loadQuestion();\
\'a0 \} else \{\
\'a0\'a0\'a0 showResult();\
\'a0 \}\
\}\
\
function showResult() \{\
\'a0 document.getElementById("quiz").classList.add("hidden");\
\'a0 resultDiv.classList.remove("hidden");\
\
\'a0 let result = Object.keys(scores).reduce((a, b) =>\
\'a0\'a0\'a0 scores[a] > scores[b] ? a : b\
\'a0 );\
\
\'a0 resultText.textContent = `$\{result\}: $\{resultsInfo[result]\}`;\
\}\
\
function restartQuiz() \{\
\'a0 currentQuestion = 0;\
\'a0 initScores();\
\
\'a0 resultDiv.classList.add("hidden");\
\'a0 document.getElementById("quiz").classList.remove("hidden");\
\
\'a0 loadQuestion();\
\}\
\
nextBtn.style.display = "none"; // not needed for now\
\
initScores();\
loadQuestion();\
}
