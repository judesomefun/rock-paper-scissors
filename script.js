console.log("Hello World")



function getComputerChoice(){
 return Math.floor(Math.random() * 3);
 
};

console.log(getComputerChoice());

function getHumanChoice(){
 let sign = prompt("Choose rock, paper, or scissors!");
 //return Math.floor(Math.random()*3);
};

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   if (humanChoice === computerChoice){
    console.log("It's a draw. Try again!");
    else if (humanChoice >)
   }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);