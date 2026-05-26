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
  console.log("showResult called");
  console.log("Scores:", scores);

  document.getElementById("quiz").classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];

  let finalResult = sorted[0][0];
  let recommendationReason = "";

  const withinOne = sorted.filter(([_, score]) => topScore - score <= 1);
  const withinThree = sorted.filter(([_, score]) => topScore - score <= 3);

  if (withinThree.length >= 3) {
    finalResult = "Data Science";
    recommendationReason = "You have a well-rounded profile across multiple disciplines!";
  } else if (withinOne.length >= 2) {
    finalResult = "Data Science";
    recommendationReason = "You have balanced interests across multiple fields!";
  } else {
    recommendationReason = "This is your strongest match!";
  }

  console.log("Final Result:", finalResult);

  // BAR CHART
  let chartHTML = `<div class="bar-chart">`;

  sorted.forEach(([major, score]) => {
    chartHTML += `
      <div class="bar-row">
        <div class="bar" data-score="${score}"></div>
      </div>
    `;
  });

  chartHTML += `</div>`;

  resultText.innerHTML = `
    <h3>${finalResult}</h3>
    <p>${recommendationReason}</p>
    ${chartHTML}
  `;

  const bars = document.querySelectorAll(".bar");

  bars.forEach(bar => {
    const score = bar.getAttribute("data-score");
    bar.style.width = `${score * 25}px`;
  });
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
