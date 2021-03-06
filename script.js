
let computerScore = 0;
let playerScore = 0;

function capitalize(inputString){
    let firstLetter = inputString.charAt(0).toUpperCase();
    let stringWithoutFirstLetter = inputString.slice(1).toLowerCase();
    let resultString = firstLetter + stringWithoutFirstLetter;
    return resultString;
  }

function computerPlay(){
    randomNumber = Math.floor(Math.random()*3);
    
    switch (randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    }
    if ((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')){
        return 'player'

    }else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissor' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'scissor')) {
        return 'computer'
    }
}
function winnerAnouncement(gameWinner){
    let gameOverMessageDiv = document.querySelector('#gameOverMessage');
    let message =  `Game over \n Player score ${playerScore}\n Computer score ${computerScore}\n `
    if(gameWinner == 'player'){
        message = message + `Congratulations you won!`;
    }
    if (gameWinner == 'computer'){
        message = message + `You lost. To bad, try again.`;
    }
    gameOverMessageDiv.textContent = message;

}

function addPoints(winner,playerSelection, computerSelection){
    let winnerMessageDiv = document.querySelector('#winnerMessage');
    let playerScoreDiv = document.querySelector('#playerScore');
    let computerScoreDiv = document.querySelector('#computerScore');
    if (winner== "tie"){
        winnerMessageDiv.textContent = "It's a tie. Try again!";
    }else if(winner == "player"){
        winString = " You Won. " + capitalize(playerSelection) + " beats " + computerSelection + ".";
        winnerMessageDiv.textContent = winString;
        playerScore += 1;
        playerScoreDiv.textContent = playerScore;
    }else if (winner == "computer"){
        loseString = "You Lose. " + capitalize(computerSelection) + " beats " + playerSelection + ".";
        winnerMessageDiv.textContent = loseString;
        computerScore += 1;
        computerScoreDiv.textContent = computerScore;
    }
}

function resetGame(){
    let playerScoreDiv = document.querySelector('#playerScore');
    let computerScoreDiv = document.querySelector('#computerScore');
    computerScore = 0;
    playerScore = 0;
    computerScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let gameOverMessageDiv = document.querySelector('#gameOverMessage');
        gameOverMessageDiv.textContent = '';
        let computerSelection = computerPlay();
        let playerSelection = button.value;
        winner = playRound(playerSelection, computerSelection);
        addPoints(winner, playerSelection, computerSelection);
        if (computerScore == 5){
            winnerAnouncement('computer');
            resetGame();
        }
        if (playerScore == 5){
            winnerAnouncement('player');
            resetGame();
        }
    } );
});

