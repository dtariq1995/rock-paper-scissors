
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

// Declare winner or loser after 5 wins or losses reached
function declareWinner() {
    
    if (wins === 5) {
        console.log("You win!!");
    }
    if (losses === 5) {
        console.log("You suck and are a loser!!");
    }
}




let wins = 0;
let losses = 0;
let ties = 0;

let playerSelection;

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.innerText.toLowerCase();

        console.log(playerSelection);
        playRound(playerSelection, computerPlay());
        declareWinner();
    });
});

 

