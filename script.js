
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
    console.log("Game over");
    console.log(`Player score ${playerScore}`);
    console.log(`Computer score ${computerScore}`);
    if(gameWinner == 'player'){
        console.log("Congratulations you won!");
    }
    if (gameWinner == 'computer'){
        console.log("You lost. To bad, try again.")
    }

}

function addPoints(winner,playerSelection, computerSelection){
    if (winner== "tie"){
        console.log("It's a tie. Try again!")
    }else if(winner == "player"){
        winString = " You Won. " + capitalize(playerSelection) + " beats " + computerSelection + ".";
        console.log(winString)
        playerScore += 1;
    }else if (winner == "computer"){
        loseString = "You Lose. " + capitalize(computerSelection) + " beats " + playerSelection + ".";
        console.log(loseString)
        computerScore += 1;
    }
}

function resetGame(){
    computerScore = 0;
    playerScore = 0;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
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

