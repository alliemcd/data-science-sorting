{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 let currentQuestion = 0;\
let scores = \{\};\
\
const questionEl = document.getElementById("question");\
const answersEl = document.getElementById("answers");\
const nextBtn = document.getElementById("nextBtn");\
const resultDiv = document.getElementById("result");\
const resultText = document.getElementById("resultText");\
\
function initScores() \{\
\'a0 scores = \{\};\
\'a0 Object.keys(resultsInfo).forEach(type => \{\
\'a0\'a0\'a0 scores[type] = 0;\
\'a0 \});\
\}\
\
function loadQuestion() \{\
\'a0 answersEl.innerHTML = "";\
\
\'a0 const q = questions[currentQuestion];\
\'a0 questionEl.textContent = q.question;\
\
\'a0 q.answers.forEach(answer => \{\
\'a0\'a0\'a0 const btn = document.createElement("button");\
\'a0\'a0\'a0 btn.textContent = answer.text;\
\
\'a0\'a0\'a0 btn.onclick = () => \{\
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