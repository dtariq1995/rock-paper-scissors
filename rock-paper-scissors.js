
// Randomly generate a play for the computer
function computerPlay() {
    let plays = ["rock", "paper", "scissors"];

    return plays[Math.floor(Math.random() * plays.length)];
}

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        console.log("It's a tie! You chose " + playerSelection + " and the computer chose " + computerSelection + "!!");
        return ties += 1;
    }

    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")) {
            console.log("You lost! " + computerSelection + " beats " + playerSelection + "!!");
        return losses +=1;
        }

    else {
        console.log("You won! " + playerSelection + " beats " + computerSelection + "!!");
        return wins +=1;
    }
}



// Loop for a total of 5 rounds 
function game() {

    for (let i = 0; i < 5; i++) {

        let computerSelection = computerPlay();
        let playerSelection = prompt("Make a selection: 'Paper', 'Rock', or 'Scissors'").toLowerCase();
        playRound(playerSelection,computerSelection);
    }
}

function declareWinner() {
    
    if (wins > losses) {
        console.log("You win!!");
    }
    if (losses > wins) {
        console.log("You suck and are a loser!!");
    }
    if (wins == losses) {
        console.log("The game is tied, you didn't lose, but you didn't win either!");
    }
}

let wins = 0;
let losses = 0;
let ties = 0;
game();
declareWinner();