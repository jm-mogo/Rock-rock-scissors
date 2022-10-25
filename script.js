let playerSelection;
let computerSelection;
let playerEmoji;
let computerEmoji;
let playerWins = 0;
let computerWins = 0;
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const resultSection = document.querySelector(".result-section");
const smaller = document.querySelector("#smaller")
const score = document.querySelector(".score");
const choice = document.querySelector(".choice");
const restartBtn = document.createElement('button')
const copyBtn = document.getElementById("copy-btn")
restartBtn.classList.add("restartBtn")
restartBtn.innerHTML = "RESTART"

function game() {
    getPlayerChoice();
}

function getPlayerChoice() {
    btnRock.addEventListener('click', rock);
    btnPaper.addEventListener('click', paper);
    btnScissors.addEventListener('click', scissors);
    restartBtn.addEventListener('click', restartGame);
    copyBtn.addEventListener('click', secretMessage);
}

function restartGame() {
    location.reload()
}

function secretMessage() {
    answer = prompt("4 digit password")
    if (answer === "5264") {
        resultSection.innerHTML = `<h2>U 4ever</h1> <p id="smaller">24/10/2022</p>`;
        choice.innerHTML = `<p>✨</p> <p>✨</p>`;
        score.innerHTML = `<p>J</p> <p>K</p>`
    }
}

function rock() {
    if (checkWinner()) {
        return;
    }
    playerSelection = 1
    getComputerChoice()
}
function paper() {
    if (checkWinner()) {
        return;
    }
    playerSelection = 2
    getComputerChoice()
}
function scissors() {
    if (checkWinner()) {
        return;
    }
    playerSelection = 3
    getComputerChoice()
}


function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    displayResult(playRound());
}

function checkWinner() {
    if (playerWins === 5) {
        resultSection.innerHTML = "<h2>You has won</h1>"
        resultSection.appendChild(restartBtn)
        disableHover()
        return true;
    } else if (computerWins === 5) {
        resultSection.innerHTML = "<h2>You has lost</h1>"
        resultSection.appendChild(restartBtn)
        disableHover()
        return true;
    }
    return false;
}

function playRound() {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 1 && computerSelection === 2) {
        computerWins += 1;
        return 'computer'
    } else if (playerSelection === 1 && computerSelection === 3) {
        playerWins += 1;
        return 'player'
    } else if (playerSelection === 2 && computerSelection === 1) {
        playerWins += 1;
        return 'player'
    } else if (playerSelection === 2 && computerSelection === 3) {
        computerWins += 1;
        return 'computer'
    } else if (playerSelection === 3 && computerSelection === 1) {
        computerWins += 1;
        return 'computer'
    } else if (playerSelection === 3 && computerSelection === 2) {
        playerWins += 1;
        return 'player'
    } 
}

function getEmoji() {
    if (playerSelection === 1) {
        playerEmoji = "✊";
    } else if (playerSelection === 2) {
        playerEmoji = "✋";
    } else {
        playerEmoji = "✌";
    }

    if (computerSelection === 1) {
        computerEmoji = "✊";
    } else if (computerSelection === 2) {
        computerEmoji = "✋";
    } else {
        computerEmoji = "✌";
    }
}

function displayResult(result) {
    getEmoji()
    if (result === 'tie') {
        resultSection.innerHTML = `<p>It's a tie!</p> <p id="smaller">${playerEmoji} ties with ${computerEmoji}</p>`;
    } else if (result === 'player') {
        resultSection.innerHTML = `<p>You won!</p> <p id="smaller">${playerEmoji} beats ${computerEmoji}</p>`;
    } else {
        resultSection.innerHTML = `<p>You lost!</p> <p id="smaller">${computerEmoji} beats ${playerEmoji}</p>`;
    }

    choice.innerHTML = `<p>${playerEmoji}</p> <p>${computerEmoji}</p>`
    score.innerHTML = `<p>Player: ${playerWins}</p> <p>Computer: ${computerWins}</p>`;
    checkWinner()
}

function disableHover() {
    btnPaper.classList.remove("buttons")
    btnRock.classList.remove("buttons")
    btnScissors.classList.remove("buttons")
}


game()