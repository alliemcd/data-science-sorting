let currentQuestion = 0;
let scores = {};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultDiv = document.getElementById("result");
const resultText = document.getElementById("resultText");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");


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

  const progressPercent =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = `${progressPercent}%`;

  progressText.textContent =
    `${currentQuestion + 1}/${questions.length}`;

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
  console.log("showResult called");
  console.log("Scores:", scores);
  
  document.getElementById("quiz").classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];

  let finalResult = sorted[0][0];
  let recommendationReason = "";

  const withinOne = sorted.filter(([_, score], i) => i !== 0 && topScore - score <= 1);
  const withinTwo = sorted.filter(([_, score], i) => i !== 0 && topScore - score <= 2);
  
  // 1. Top 3 within 2 → Data Science
  if (withinTwo.length >= 2) {
    finalResult = "Data Science";
    recommendationReason = "You have a well-rounded profile across multiple disciplines!";
  }
  
  // 2. Top 2 within 1 → Data Science
  else if (withinOne.length >= 1) {
    finalResult = "Data Science";
    recommendationReason = "You have balanced interests across multiple fields!";
  }
  
  // 3. Otherwise → top major
  else {
    finalResult = sorted[0][0];
    recommendationReason = "This is your strongest match!";
  }

  console.log("Final Result:", finalResult);
  console.log("ResultsInfo:", resultsInfo);

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

  console.log("HTML to be set:", breakdownHTML);
  resultText.innerHTML = breakdownHTML;
  console.log("Result text innerHTML set successfully");
}

function startQuiz() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  currentQuestion = 0;
  initScores();

  loadQuestion();
}

function restartQuiz() {
  currentQuestion = 0;

  initScores();

  resultDiv.classList.add("hidden");

  document.getElementById("startScreen").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
}

initScores();
