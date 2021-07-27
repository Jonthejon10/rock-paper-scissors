let gameCount = 0
let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay() {
    let cChoice = ["rock", "paper", "scissors"]
    return cChoice[Math.floor(Math.random()* 3)];
};


function playRound(playerSelection, computerSelection) {
    if ( playerSelection == "rock" && computerSelection == "scissors") {
        roundRes.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        gameCount++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundRes.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        gameCount++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundRes.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        gameCount++;
    } else if (playerSelection == computerSelection) {
        roundRes.textContent = "It's a tie!"
    } else {
        roundRes.textContent = `You lost! ${playerSelection} is beaten by ${computerSelection}`
        gameCount++;
        computerScore++;
    };
};

function game() {
        score.textContent = `${playerScore} - ${computerScore}`;
        if (playerScore > computerScore && gameCount == 5) {
            finalResult.textContent = "Game over. You win ! Refresh to play again."
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        } else if (playerScore < computerScore && gameCount == 5) {
            finalResult.textContent = "Game over. You lost ! Refresh to play again."
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        };
    
};


const score = document.getElementById("score")
const roundRes = document.getElementById("roundRes")
const finalResult = document.getElementById("finalResult")
const rockButton = document.querySelector("#rock")

rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    game();
});


const paperButton = document.querySelector("#paper")
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    game();
});


const scissorsButton = document.querySelector("#scissors")
scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    game();
});