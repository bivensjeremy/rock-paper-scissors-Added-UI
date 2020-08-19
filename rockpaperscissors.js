var playerScore = 0;
var computerScore = 0;
var houseScore = 0;
var gameRounds = 0;
var maxRounds = 5;
var computerSelection = computerPlay();
var winnerResults = finishGame();
var randomNumber;

const playerscore = document.querySelector("#playerscore");
const ps = document.createElement("div");
ps.classList.add("ps");
ps.textContent = playerScore;
playerscore.appendChild(ps);

const computerscore = document.querySelector("#computerscore");
const cs = document.createElement("div");
cs.classList.add("cs");
cs.textContent = computerScore;
computerscore.appendChild(cs);

var housescore = document.querySelector("#housescore");
var hs = document.createElement("div");
hs.classList.add("hs");
hs.textContent = houseScore;
housescore.appendChild(hs);

var playerScoreCard = document.querySelector("#playerscore");
var computerScoreCard = document.querySelector("#computerscore");
var houseScoreCard = document.querySelector("#housescore");

/*function playerPlay() {
  let option = prompt("Select an option").toLowerCase();
  return option; 
} */

function playRound(playerSelection, computerSelection) {
  gameRounds++;
  if (playerSelection === computerSelection) {
    houseScore++;
    houseScoreCard.textContent = houseScore;
    console.log("It's a draw");
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore++;
    computerScoreCard.textContent = computerScore;
    console.log("You Lose");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    playerScoreCard.textContent = playerScore;
    console.log("You Win!");
  }
  finishGame();
}
function computerPlay() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

/* function computerPlay() {
  var rps = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  return rps[random];
} */

function finishGame() {
  if (gameRounds === maxRounds) {
    if (playerScore > computerScore) {
      alert("Winner Winner, Chicken Dinner!");
      resetGame();
    } else if (playerScore < computerScore) {
      alert("Loser Loser, Hollapalooser");
      resetGame();
    } else {
      alert("A Tie! This town IS big enough for the both of us");
    }
  }
  if (gameRounds > maxRounds) {
    alert("You have exceeded the number of rounds, the game will now reset");
    resetGame();
  }
}

/*
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(computerPlay(), playerPlay()));
  }
  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (playerScore < computerScore) {
    console.log("You Lose");
  } else {
    console.log("Its a Draw!");
  }
}
console.log(game());
*/

const rockimage = document.querySelector(".rockimage");
rockimage.addEventListener("click", () => {
  playRound("rock", computerSelection);
});

const paperimage = document.querySelector(".paperimage");
paperimage.addEventListener("click", () => {
  playRound("paper", computerSelection);
});

const scissorsimage = document.querySelector(".scissorsimage");
scissorsimage.addEventListener("click", () => {
  playRound("scissors", computerSelection);
});

const reset = document.querySelector("#reset");
reset.onclick = resetGame;

function resetGame() {
  location.reload();
}
