let computerScore = 0;
let playerScore = 0;
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function oneGame () {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = rock;
    }
    else if ( computerChoice <= 0.67) {
        computerChoice = paper;
    }
    else {
        computerChoice = scissors;
    }
    console.log("The computer chose " + computerChoice);
    let userChoice = prompt("Please pick rock, paper or scissors.");
    userChoice = userChoice.toLowerCase();
    console.log("The player chose " + userChoice);
    if (computerChoice === userChoice) {
        console.log("It's a tie!");
    }
    else if (computerChoice === rock && userChoice === paper) {
        console.log("You win! Paper beats rock!");
        playerScore++
    }
    else if (computerChoice === rock && userChoice === scissors) {
        console.log("You lose! Rock beats scissors!");
        computerScore++
    }
    else if (computerChoice === paper && userChoice === rock) {
        console.log("You lose! Paper beats rock!");
        computerScore++
    }
    else if (computerChoice === paper && userChoice === scissors) {
        console.log("You win! Scissors beats paper!");
        playerScore++
    }
    else if (computerChoice === scissors && userChoice === paper) {
        console.log("You lose! Scissors beats paper!");
        computerScore++
    }
    else if (computerChoice === scissors && userChoice === rock) {
        console.log("You win! Rock beats scissors!");
        playerScore++
    }
    else {
        console.log("Invalid entry!");
    }
console.log("The player score is " + playerScore + " and the computer score is " + computerScore + "!");
console.log("---------------------------------");
}

function multipleGames () {
    for (let i = 0; i < 5; i++) {
        oneGame();
    }
console.log("=================================");
console.log("The final player score is " + playerScore + " and the computer score is " + computerScore + "!");
if (playerScore > computerScore) {
    console.log("The player wins the game!");
}
else if (computerScore > playerScore) {
    console.log("The computer wins the game!");
}
else {
    console.log("The game tied!");
}
}
multipleGames();

