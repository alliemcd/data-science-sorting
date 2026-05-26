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

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];

  let finalResult = sorted[0][0];
  let recommendationReason = "";

  // Count how many majors are within certain thresholds
  const withinOne = sorted.filter(([_, score]) => topScore - score <= 1);
  const withinThree = sorted.filter(([_, score]) => topScore - score <= 3);

  // Logic:
  // 1. If 3+ majors are close (within 3 points), recommend Data Science
  if (withinThree.length >= 3) {
    finalResult = "Data Science";
    recommendationReason = "You have a well-rounded profile across multiple disciplines!";
  }
  // 2. If 2 majors are close (within 1 point), recommend Data Science
  else if (withinOne.length >= 2) {
    finalResult = "Data Science";
    recommendationReason = "You have balanced interests across multiple fields!";
  }
  // 3. If 1 major is much higher than the rest, display that one
  else {
    recommendationReason = "This is your strongest match!";
  }

  let breakdownHTML = `
    <h3>Your strongest match:</h3>

    <p class="major-result">${finalResult}</p>

    <p>${resultsInfo?.[finalResult] || "Result description not available."}</p>

    <p class="recommendation-reason"><em>${recommendationReason}</em></p>

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

  breakdownHTML += `</div>`;

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
