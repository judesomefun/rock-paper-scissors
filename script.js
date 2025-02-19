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
 console.log = sign.toLowerCase;
};

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  
   
   if (humanChoice === computerChoice){
    console.log("It's a draw. Try again!");
    //else if (humanChoice >)
   }
   console.log("You lose! Paper beats rock!");
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){

}