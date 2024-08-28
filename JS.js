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

// function getHumanChoice () {
//     let choice = prompt("Which do you choose, Rock, Paper or Scissors?");
//     if (choice.toUpperCase() === "ROCK" || choice.toUpperCase() === "PAPER"|| choice.toUpperCase() === "SCISSOR"){
//         return choice.toLowerCase();
//     }
//     else if (choice === null) {
//         return "prompt canceled";     
//     } else {
//         return "wrong input!";    
//     }
// }


function playRound (humanChoice, computerChoice) {
    
    const div=document.createElement("div");
    ul.appendChild(div);
    
    if (humanChoice===computerChoice){
        div.textContent="It's a tie!";
    }
    else if (humanChoice==="rock" && computerChoice==="scissor"){
        humanScore++;
        div.textContent=" You won! Rock beats scissor!";
    } 
    else if (humanChoice==="paper" && computerChoice==="rock") {
        humanScore++;
        div.textContent = " You won! Paper beats rock!";
    }
    else if (humanChoice==="scissor" && computerChoice==="paper") {
        humanScore++;
        div.textContent = " You won! Scissor beats paper!";
    }
    else {
        computerScore++;
        div.textContent = "You lose!";
    }
    scoreDisplay.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = document.querySelector("#winner");
        if (humanScore === 5) {
            winner.textContent = "You win the game!";
        } else {
            winner.textContent = "You lost, the computer wins the game!";
        }

        // Disable buttons after a winner is decided
        // rock.disabled = true;
        // paper.disabled = true;
        // scissor.disabled = true;
    }
}

// function playGame () {    
    
//     const computerChoice = getComputerChoice();
//     const humanChoice = getHumanChoice(); 
//     const message = playRound(humanChoice,computerChoice);
//     console.log(message);
    

//     if (humanScore>computerScore) {return "You won!"}
//     else if (humanScore==computerScore) {return "It's a tie!"}
//     else {return "You lose!"}
// }




// const computerChoice=getComputerChoice();
// const humanChoice = getHumanChoice(); 
// const message = playRound(humanChoice,computerChoice);
// const result = playGame();
// console.log("Your final result:"+" "+result);
// console.log(computerScore);
// console.log(humanScore);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");


const ul = document.querySelector("#myList");
rock.textContent="Rock";
ul.appendChild(rock);
paper.textContent="Paper";
ul.appendChild(paper);
scissor.textContent="Scissor";
ul.appendChild(scissor);

humanScore=0;
computerScore=0;
scoreDisplay=document.querySelector("#score");
scoreDisplay.textContent=`Human Score: ${humanScore}, Computer Score: ${computerScore} `;


rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});  
scissor.addEventListener("click", function() {
    playRound("scissor", getComputerChoice());
});



