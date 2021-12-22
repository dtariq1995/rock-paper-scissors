
// Randomly generate a play for the computer
function computerPlay() {
    let plays = ["rock", "paper", "scissors"];

    return plays[Math.floor(Math.random() * plays.length)];
}

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    const text = document.querySelector('.display-text');

    if (computerSelection == playerSelection) {
        text.textContent = "It's a tie! You chose " + playerSelection + " and the computer chose " + computerSelection + "!!";
        return ties += 1;
    }

    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")) {
            text.textContent = "You lost! " + computerSelection + " beats " + playerSelection + "!!";
        return losses +=1;
        }

    else {
        text.textContent = "You won! " + playerSelection + " beats " + computerSelection + "!!";
        return wins +=1;
    }
}

// Declare winner or loser after 5 wins or losses reached
function declareWinner() {
    
    if (wins === 5) {
        alert("You won. Looks like Man beats machine yet again.");
        wins = 0;
        losses = 0;
    }
    if (losses === 5) {
        alert("It seems you're not very good at this. Maybe you should quit.");
        wins = 0;
        losses = 0;
    }
}




let wins = 0;
let losses = 0;
let ties = 0;

let playerSelection;

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id.toLowerCase();
        playRound(playerSelection, computerPlay());
        declareWinner();
        const userScore = document.querySelector('.user-score');
        userScore.textContent = "You: " + wins;
        const cpuScore = document.querySelector('.cpu-score');
        cpuScore.textContent = "Computer: " + losses;
    });
});

 

