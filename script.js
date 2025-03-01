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
 humanChoice = prompt("Choose'rock, paper, or scissors!");
 humanChoice = humanChoice.toLowerCase();
 if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
  return humanChoice;
 } else {
  console.log ('Invalid choice');
  return humanChoice;
 }
};


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

   if (humanChoice === computerChoice) {
   console.log("It's a draw. Try again!")
   } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')){
    humanScore++;
    console.log ('You win! ' + humanChoice + ' beats ' + computerChoice + '.');
  } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'scissors')) {
    computerScore++;
    console.log ('You lose! ' + computerChoice + 'beats ' + humanChoice + '.');
  } else console.log ('Choose again: ' + humanChoice + ' ' + computerChoice);
}
  

function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      console.log(playRound(humanSelection, computerSelection));
      console.log(playRound(humanSelection, computerSelection));
      console.log('You chose ' + humanChoice);
      console.log('Computer chose ' + computerChoice);
      console.log(humanScore + ' - ' + computerScore);
      if (humanScore > computerScore) {
        return 'You win!';
      } else if (humanScore < computerScore){
        return 'You lose';
      }
      else return 'It\'s a tie!';
    }
};
 
console.log(playGame(playRound));