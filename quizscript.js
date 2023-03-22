var startButton = document.querySelector (".start_button");
var parent = document.querySelector (".parent_container");
var questionEl = document.querySelector (".questions");
var questionTitle = document.getElementById ("Title");
var Option1El = document.getElementById("Option0");
var Option2El = document.getElementById("Option1");
var Option3El = document.getElementById("Option2");
var Option4El = document.getElementById("Option3");
var answerCheckEl = document.getElementById("answerCheck");
var titleEl = document.getElementById("questionTitle");
var optionEl = document.getElementById("questionOption");
var questionIndex = 0;
var score = 0;
var scoreEl = document.querySelector (".score")
var answersEl = [Option1El, Option2El, Option3El, Option4El]
var timeEl=document.getElementById ("Time")
var mainEl=document.querySelector (".main")
var choicesEl=document.querySelector (".choices")

var questions = [ 
  {
    question: "1. This is going to be question #1.",
    choices: ["Option 1", "Option 2", "Option 3", "Option 4",],
    correctAnswer: "Option 3"
  },
  {
    question: "2. This is going to be question #2.",
    choices: ["Option 1", "Option 2", "Option 3", "Option 4",],
    correctAnswer: "Option 3"
  },
  {
    question: "3. This is going to be question #3.",
    choices: ["Option 1", "Option 2", "Option 3", "Option 4",],
    correctAnswer: "Option 3"
  },
  
]

var correctAnswer = 0;

var answerBtn0 = document.querySelector("Option0");
var answerBtn1 = document.querySelector("Option1");
var answerBtn2 = document.querySelector("Option2");
var answerBtn3 = document.querySelector("Option3");

var answers = [answerBtn0, answerBtn1, answerBtn2, answerBtn3 ]

// Functions

//Start Quiz
function startQuiz() {
  parent.style.display="none";
  questionEl.style.display="block";
  getQuestions ()
}

// Start Questions
function getQuestions () {
  optionEl.textContent=""
   titleEl.textContent=questions[questionIndex].question
   optionEl.textContent=questions[questionIndex].choices
  
   //var answerOption = questions.options;

   for (let index = 0; index < questions[questionIndex].choices.length; index++) {
    var buttonOption = document.createElement ("button");
    buttonOption.textContent=questions[questionIndex].choices[index];
    buttonOption.onclick=getNextQuestion;
    optionEl.appendChild(buttonOption)
   }
}

// Go to next question
function getNextQuestion () {
  // End Quiz if no more questions
if (questionIndex < questions.length -1) {
  questionIndex++;
  getQuestions();
  }
else { endQuiz ();
  }
}

function correctAnswer(buttonOption) {
  return buttonOption.textContent === question.correctAnswer;
}

// Check for Correct Answer
function checkAnswer(event){
  var buttonOption = event.target;

  if (correctAnswer(buttonOption)) {score = score + 20}
  else {
    if (timer > 10) {
      timer = timer - 10;
    } else {
      timer = 0;
      endQuiz();
    }
  }
}

// End Quiz Function
function endQuiz () {
 scoreEl.textContent = "You scored" + score + "! Way to go!";
}

// End Quiz if no more questions
if (questionIndex < questions.length -1) {
  getQuestions();
}
else { endQuiz ();
}

// Event Listeners
startButton.addEventListener("click", startQuiz);

// Timer

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval)
    }

  }, 1000);
}

setTime();

// If answer is incorrect, deduct time off timer
document.getElementById('incorrect').addEventListener('click', function() {
  sec -= 5;
  document.getElementById('timerDisplay').innerHTML='00:'+sec;
});


// Next Question
// var nextQuestion = document.createElement ("body")
// nextQuestion = counter + 1;
// if (counter < question.length - 1) {
//   setCounter(nextQuestion);
// } else {
//   setEnd(!is_end);
//   setStart(!is_started);
//   setCounter(0);
// }

  