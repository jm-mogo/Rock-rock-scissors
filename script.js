let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const resultSection = document.querySelector(".result-section");
const score = document.querySelector(".score");

function game() {
    getPlayerChoice();
}

function getPlayerChoice() {
    btnRock.addEventListener('click', rock);
    btnPaper.addEventListener('click', paper);
    btnScissors.addEventListener('click', scissors);
}

function rock() {
    playerSelection = 1
    getComputerChoice()
}
function paper() {
    playerSelection = 2
    getComputerChoice()
}
function scissors() {
    playerSelection = 3
    getComputerChoice()
}


function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    displayResult(playRound());
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

function displayResult(result) {
    if (result === 'tie') {
        resultSection.innerHTML = '<p>It a tie</p>';
    } else if (result === 'player') {
        resultSection.innerHTML = '<p>Player wins</p>';
    } else {
        resultSection.innerHTML = '<p>Computer wins</p>';
    }
    
    score.textContent = `Player: ${playerWins} wins || Computer: ${computerWins} wins`;
}


game()