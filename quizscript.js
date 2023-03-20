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
   titleEl.textContent=questions[questionIndex].questions
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
  questionIndex++;
  getQuestions ()
}

// End Quiz Function
function endQuiz () {
 scoreEl.textContent = "You scored" + score + "! Way to go!";
}

// End Quiz if no more questions
if (questionIndex < questions.length) {
  getQuestions();
}
else { endQuiz ();
}

// Event Listeners
startButton.addEventListener("click", startQuiz);

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

  