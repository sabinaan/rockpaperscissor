
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
function winnerAnouncement(playerScore, computerScore){
    console.log("Game over");
    console.log(`Player score ${playerScore}`);
    console.log(`Computer score ${computerScore}`);
    if (playerScore == computerScore){
        console.log("It's a tie!")
    }else if(playerScore > computerScore){
        console.log("Congratulations you won!");
    }else{
        console.log("You lost. To bad, try again.")
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    
    let i = 0;
    while (i < 5){
        let playerSelection = prompt("Paper rock or scissor?").toLowerCase();
        let computerSelection = computerPlay();
        
        
        console.log("You choosed:" + playerSelection);
        let winner = playRound(playerSelection, computerSelection);
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
        i += 1;
    }
    winnerAnouncement(playerScore, computerScore);
}

game();

