function game(){
  playRound();
}

function playRound(){
  let playerSelection = playerChoice();
  let computerSelection = computerChoice();
}

let choices = ["Rock", "Paper", "Scissors"];



function computerChoice(){
  return choices[Math.floor(Math.random()* choices.length)]
}


function playerChoice(){
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt ("Type Rock, Paper, or Scissors");
  }
}



function play(playerSelection, computerSelection){
   console.log(playerSelection)
}
const PlayerChoice = "Rock"

game();