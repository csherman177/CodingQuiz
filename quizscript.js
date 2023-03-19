var startButton = document.getElementById ("start_Button")
var questionTitle = document.documentqueryselector ("questionTitle")
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var questions = [ {
  question: "1. This is going to be question #1.",
  choices: ["Answer 1", "msg(Answer 2)", "msg(Answer 3)", "msg(Answer 4)", ],
  correctAnswer: 3
}
]

[{  question: "2. This is going to be question #2.",
  choices: ["msg(Answer 1)", "msg(Answer 2)", "msg(Answer 3)", "msg(Answer 4)", ],
  correctAnswer: 3
}
]

var correctAnswer = 0;


startButton.addEventLister ("click", startQuiz(){
  if (startButton.tagName === "startButton")
}) 
  
  