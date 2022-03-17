const choices = {"Rock", "Paper", "Scissors"}

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
}

function playerChoice(){
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt ("Type Rock, Paper, or Scissors");
  }
}

function computerPlay(){
  if (Math.floor(Math.random() * 3)) =0 {
    return "Rock";
  } else if (Math.floor(Math.random() * 3)) =1){
    return "Paper";
  }
    else if (Math.floor(Math.random() * 3)) =2{
      return "Scissors";
    }
}

function play(playerSelection, computerSelection){
   console.log(playerSelection)
}
const PlayerChoice = "Rock"
