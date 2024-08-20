let humanScore=0;
let computerScore=0;
function getComputerChoice(){    
    const choiceNumber = Math.floor(Math.random()*3+1);
    if (choiceNumber === 1) {
        return "rock";
    }
    else if (choiceNumber === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
} 

function getHumanChoice () {
    let choice = prompt("Which do you choose, Rock, Paper or Scissors?");
    if (choice.toUpperCase() === "ROCK" || choice.toUpperCase() === "PAPER"|| choice.toUpperCase() === "SCISSOR"){
        return choice.toLowerCase();
    }
    else if (choice === null) {
        return "prompt canceled";     
    } else {
        return "wrong input!";    
    }
}


function playRound (humanChoice, computerChoice) {

    if (humanChoice===computerChoice){
        return "It's a tie!";
    }
    else if (humanChoice==="rock" && computerChoice==="scissor"){
        humanScore++;
        return " You won! Rock beats scissor!"
    } 
    else if (humanChoice==="paper" && computerChoice==="rock") {
        humanScore++;
        return " You won! Paper beats rock!"
    }
    else if (humanChoice==="scissor" && computerChoice==="paper") {
        humanScore++;
        return "You won! Scissor beats paper!"
    }
    else {
        computerScore++;
        return "You lose!"
    }
}

function playGame () {    
    for (let i=0;i<5;i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice(); 
        const message = playRound(humanChoice,computerChoice);
        console.log(message);
    }

    if (humanScore>computerScore) {return "You won!"}
    else if (humanScore==computerScore) {return "It's a tie!"}
    else {return "You lose!"}
}




// const computerChoice=getComputerChoice();
// const humanChoice = getHumanChoice(); 
// const message = playRound(humanChoice,computerChoice);
const result = playGame();
console.log("Your final result:"+" "+result);
console.log(computerScore);
console.log(humanScore);