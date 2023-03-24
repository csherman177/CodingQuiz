// global variables for elements
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
var scoreEl = document.querySelector (".score");
var timeEl=document.getElementById ("Time");
var mainEl=document.querySelector (".main");
var scoreTop=document.querySelector ("#scr-top");
var buttonEl = document.querySelector ("#btn");
var ansrBtnEL = document.querySelector ("#answer-buttons")


// variables for the state of the code
var questionIndex = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval;
// var answersEl = [Option1El, Option2El, Option3El, Option4El];
// var answers = [answerBtn0, answerBtn1, answerBtn2, answerBtn3 ]
// var correctAnswer = 0;

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
// Functions

//Start Quiz
function startQuiz() {
  parent.style.display="none";
  questionEl.style.display="block";
  getQuestions ()
  setTime();
}

// Start Questions
function getQuestions () {
  // this function will need to display the question title, and the choices will need to be added to the appropriate buttons
  // optionEl.textContent=""
   titleEl.textContent= questions[questionIndex].question
  //  optionEl.textContent=questions[questionIndex].choices
  Option1El.textContent = questions[questionIndex].choices[0]
  Option2El.textContent = questions[questionIndex].choices[1]
  Option3El.textContent = questions[questionIndex].choices[2]
  Option4El.textContent = questions[questionIndex].choices[3]

  Option1El.setAttribute('value', questions[questionIndex].choices[0])
  Option2El.setAttribute('value', questions[questionIndex].choices[1])
  Option3El.setAttribute('value', questions[questionIndex].choices[2])
  Option4El.setAttribute('value', questions[questionIndex].choices[3])

  Option1El.addEventListener('click', getNextQuestion);
  Option2El.addEventListener('click', getNextQuestion);
  Option3El.addEventListener('click', getNextQuestion);
  Option4El.addEventListener('click', getNextQuestion);
  
}

// Go to next question
function getNextQuestion () {
  console.log(this.value);
  console.log(questions[questionIndex].correctAnswer);

  if(this.value !== questions[questionIndex].correctAnswer){
    // deduct 5 seconds
    secondsLeft-=5
    timeEl.textContent = secondsLeft + " seconds left.";
  }

  questionIndex++;

  if(questionIndex === questions.length || secondsLeft === 0){
    endQuiz()
  }else{
    getQuestions()
  }

}

// End Quiz Function
function endQuiz () {
 scoreEl.textContent = "You have finished the quiz!";
 clearInterval(timerInterval)
}

// Event Listeners
startButton.addEventListener("click", startQuiz);

// Timer
function setTime() {
   timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";


  }, 1000);
}
