console.log("Hello World")



function getComputerChoice(){
 const choices = ['rock', 'paper', 'scissors'];
 const randomNumber = Math.floor(Math.random() * choices.length);
  switch (randomNumber){
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
      return 'scissors';
  }
};



function getHumanChoice(){
 humanChoice = prompt("Choose rock, paper, or scissors!");
 humanChoice = humanChoice.toLowerCase();
 if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
  return humanChoice;
 } else {
  return 'Invalid choice';
 }
};


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
   const computerChoice = getComputerChoice();
   const humanChoice = getHumanChoice().toLowerCase;

   if (humanChoice === computerChoice) {
   console.log("It's a draw. Try again!)")
   } else if ((humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Paper")){
    humanScore++;
    console.log ('You win! ' + humanChoice + 'beats ' + computerChoice + '.');
  }
   else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Scissors" && computerChoice == "Rock") + (humanChoice == "Paper" && computerChoice == "Scissors")) {
    computerScore++;
    console.log ('You lose! ' + computerChoice + 'beats ' + humanChoice + ' .');
  }
}
  




playGame(humanSelection, computerSelection);

function playGame(humanSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      console.log(playRound(humanSelection, computerSelection));
      if (humanScore > computerScore) {
        return 'You win!';
      } else if (humanScore < computerScore){
        return 'You lose';
      }
      else return 'It\'s a tie';
    }
};
 
console.log(playGame(playRound));