let currentQuestion = 0;
let scores = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");


function initScores() {
  scores = {
    "Machine Learning": 0,
    "Physics & Astronomy: Data Science": 0,
    "Statistics: Data Science": 0,
    "Applied & Computational Mathematics": 0
  };
}


function loadQuestion() {
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];

  questionEl.textContent = q.question;

  // Shuffle answers randomly
  const shuffledAnswers = [...q.answers].sort(
    () => Math.random() - 0.5
  );

  shuffledAnswers.forEach(answer => {
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

  // Sort scores highest -> lowest
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  const topScore = sorted[0][1];

  // Count majors close to the top score
  const withinOne = sorted.filter(
    ([major, score]) => topScore - score <= 1
  );

  const withinTwo = sorted.filter(
    ([major, score]) => topScore - score <= 2
  );

  let finalResult;

  // Data Science overlap rules
  if (withinOne.length >= 2) {
    finalResult = "Data Science";
  }
  else if (withinTwo.length >= 3) {
    finalResult = "Data Science";
  }
  else {
    finalResult = sorted[0][0];
  }

  // Build results HTML
  let breakdownHTML = `
    <h3>Your strongest match:</h3>

    <p class="major-result">
      ${finalResult}
    </p>

    <p>
      ${resultsInfo[finalResult]}
    </p>

    <h3>Score Breakdown</h3>

    <div class="score-breakdown">
  `;

  sorted.forEach(([major, score]) => {
    breakdownHTML += `
      <div class="score-row">
        <span>${major}</span>
        <span>${score}</span>
      </div>
    `;
  });

  breakdownHTML += `
    </div>
  `;

  resultText.innerHTML = breakdownHTML;
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
