var timeEl = document.querySelector('.timer')
var timeLeft = 61
var mainEl = document.getElementById('main')
var questionDisplay = document.getElementsByClassName('display-question1')
var startButton = document.getElementById('quizStartButton')
var questionContainer = document.getElementById('questContainer')
var questionTextEl = document.getElementById("questionText")
var questionIndex = 0

var questions = [ 
    {
        questionText : "text for question",
        answers: ['aaa','bbb','ccc','ddd'],
        correct: 'aaa'
    },
    {
        questionText : "text for question",
        answers: ['aaa','bbb','ccc','ddd'],
        correct: 'aaa'
    },
    {
        questionText : "text for question",
        answers: ['aaa','bbb','ccc','ddd'],
        correct: 'aaa'
    },
    {
        questionText : "text for question",
        answers: ['aaa','bbb','ccc','ddd'],
        correct: 'aaa'
    }
]

function startQuiz() {
    timeRemaining()
    questionContainer.classList.remove("hidden");
    loadQuestion()
}

function loadQuestion() {
    var currentQuestion = questions[questionIndex]
    questionTextEl.textContent = currentQuestion.questionText
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        console.log(currentQuestion.answers[i])
        var button = document.createElement('button')
        button.textContent = currentQuestion.answers[i]
        var buttonBoxEl = document.getElementById('buttonBox')
        buttonBoxEl.append(button)
    }

    
}
function checkCorrectAnswer() {
    
}

function timeRemaining(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft
    },1000);
    if (timeLeft === 0 ) {
        clearInterval(timerInterval)
    }
}



startButton.addEventListener('click', startQuiz)