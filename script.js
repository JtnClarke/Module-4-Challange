var timeEl = document.querySelector('timer')
var timeLeft = 60

function timeRemaining(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeEl
    },1000);
    if (timeLeft === 0 ) {
        clearInterval(timerInterval)
    }
}
timeRemaining()
function testResult()

var score = 0

if (document.getElementById('correct1').checked) {
score++;
} else {
    timeleft--
}