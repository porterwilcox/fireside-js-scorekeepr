//
//VARIABLES
//
let player1Score = document.getElementById("player1")
let player2Score = document.getElementById("player2")
let player1Available = true;
let player2Available = true;
let scoreToWin = '11';
let myTitle = document.getElementById("my-title")

//
//FUNCTIONS
//
function playerIncrement(num) {
    if (num != 1 && num != 2) { return } //NOTE to prevent hackers because no encapsulation
    if (num == 1) {
        player1Score.textContent = (parseFloat(player1Score.textContent) + 1).toString();
    }
    else {
        player2Score.textContent = (parseFloat(player2Score.textContent) + 1).toString();
    }
    
    if (player1Score.textContent == scoreToWin) {
        myTitle.textContent = "Player 1 wins!"
        endGame();
    }
    else if ( player2Score.textContent == scoreToWin) {
        myTitle.textContent = "Player 2 wins!"
        endGame()
    }  
}

function playerDecrement(e, num) {
    if (num != 1 && num != 2) { return }
    if (num == 1 && e.deltaY > 0 && player1Available && player1Score.textContent != '0') {
        player1Available = false
        let wait = setTimeout(() => player1Available = true, 2000)
        player1Score.textContent = (parseFloat(player1Score.textContent) - 1).toString();
    }
    if (num == 2 && e.deltaY > 0 && player2Available && player2Score.textContent != '0') {
        player2Available = false
        let wait = setTimeout(() => player2Available = true, 2000)
        player2Score.textContent = (parseFloat(player2Score.textContent) - 1).toString();
    }
}

function setScoreToWin(target) {
    scoreToWin = target;
}

function endGame() {
    document.getElementById("game").style.pointerEvents = 'none';
}