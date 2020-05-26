
function capitalize(inputString){
    let firstLetter = inputString.charAt(0).toUpperCase();
    let theRest = inputString.slice(1).toLowerCase();
    let resultString = firstLetter + theRest;
    return resultString;
  }

function computerPlay(){
    randomNumber = Math.floor(Math.random()*3)+1;
    
    switch (randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie";
    }

    if ((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")){
        newString = " You Won. " + capitalize(playerSelection) + " beats " + computerSelection +"."
        return newString
    }else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissor" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "scissor")) {
        newString = "You Lose. " + capitalize(computerSelection) + " beats " + playerSelection + ".";
        return newString
    }
}


const playerSelection = prompt("Paper rock or scissor?").toLowerCase();
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));