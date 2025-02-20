console.log("Hello World")



function getComputerChoice(){
 const choices = ['rock', 'paper', 'scissors'];
 const randomNumber = Math.floor(Math.random() * choices.length);
 return choices[randomNumber];
};

console.log(getComputerChoice());

function getHumanChoice(){
 let sign = prompt("Choose rock, paper, or scissors!");
 return sign;
};

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   const computerChoice = getComputerChoice();
   const humanChoice = getHumanChoice().toLowerCase;

   
   if (humanChoice === computerChoice) {
   console.log("It's a draw. Try again!)")
   } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log ("You lose! Paper beats Rock");
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log ("You win! Paper beats Rock");
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log ("You win! Rock beats Scissors");
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log ("You lose! Rock beats Scissors");
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log ("You lose! Scissors beats Paper");
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log ("You win! Scissors beats Paper");
  }
}




playGame(humanSelection, computerSelection);

function playGame(humanSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter Rock, Paper or Scissors - CaseSensetive");
      let computerSelection = getComputerChoice();
      console.log(playRound(humanSelection, computerSelection));
    }
};
 
playGame();