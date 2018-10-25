//
//VARIABLES
//
let player1Score = document.getElementById("player1")
let player2Score = document.getElementById("player2")
let myTimer;

//
//FUNCTIONS
//
function startTimer(num) {
    myTimer = setTimeout(playerIncrement, 500, num);
}

function playerIncrement(num) {
    if (num != 1 && num != 2) { return }
    if (num == 1) {
        player1Score.textContent = (parseFloat(player1Score.textContent) + 1).toString();
    }
}
function playerDecrement(num) {
    clearTimeout(myTimer)
    if (num != 1 && num != 2) { return }
    if (num == 1) {
        player1Score.textContent = (parseFloat(player1Score.textContent) - 1).toString();
    }
}