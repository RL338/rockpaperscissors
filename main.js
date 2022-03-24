let choices = ["rock", "paper", "scissors"];
let winners = [];

//5 Rounds
function game(){
  for(let i=1; i<=5; i++){
    playRound(i);
  }
  logWins();
}

//Each round function

function playRound(round){
  let playerSelection = playerChoice();
  let computerSelection = computerChoice();
  let winner = checkWinner(playerSelection,computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

//Player-side function

function playerChoice(){
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt ("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input =prompt(
      "Type Rock, Paper, or Scissors. Spelling needs to be exact but capitalization doesn't matter."
    );
    while (input == null) {
      input = prompt ("Type Rock, Paper, or Scissors");
    }
    input= input.toLowerCase();
    check= validateInput(input);
  }
  return input;
}

//Computer-Side function

function computerChoice(){
  return choices[Math.floor(Math.random()* choices.length)]
}


//Validate Input
function validateInput(choice){
  return choices.includes(choice);
}


//Who wins?
 
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ){
    return "Player";
  } else {
    return "Computer";
  }
}

//logging wins

function logWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties", ties);
}

function logRound(playerChoice, computerChoice, winner,round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("---------------------");
}



game();