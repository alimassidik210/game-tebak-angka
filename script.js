// prompt user to input name for both players
const playerOneName = prompt("Enter player one name: ");
const playerTwoName = prompt("Enter player two name: ");

alert(`Welcome ${playerOneName} and ${playerTwoName}`);

// varibale for quiz
let playerOneScore = 0;
let playerTwoScore = 0;
let round = 1;

// loop for the game (max of 5 rounds)
while (round <= 5) {
  alert(`START ROUND: ${round}`);

  // generate correct answer
  const correctAnswer = Math.ceil(Math.random() * 3);

  const playerOneAnswer = Number(
    prompt(`${playerOneName} please enter the number between 1 - 3: `)
  );
  // validate player 1 answer
  if (playerOneAnswer < 1 || playerOneAnswer > 3 || isNaN(playerOneAnswer)) {
    alert("Incorrect number!");
    continue;
  }
  const playerTwoAnswer = Number(
    prompt(`${playerTwoName} please enter the number between 1 - 3: `)
  );
  // validate player 2 answer
  if (playerTwoAnswer < 1 || playerTwoAnswer > 3 || isNaN(playerTwoAnswer)) {
    alert("Incorrect number!");
    continue;
  }

  // validate both answer cannot be the same
  if (playerOneAnswer === playerTwoAnswer) {
    alert("Both players cannot have the same answer");
    continue;
  }

  // determine winner
  if (playerOneAnswer == correctAnswer) {
    alert(`${playerOneName} wins round ${round}`);
    playerOneScore++; // playerOneScore = playerOneScore + 1;
  } else if (playerTwoAnswer == correctAnswer) {
    alert(`${playerOneName} wins round ${round}`);
    playerTwoScore++;
  } else {
    alert(`It's a DRAW!`);
  }

  alert(`ROUND ${round} results`);
  alert(`${playerOneName} - ${playerOneScore}`);
  alert(`${playerTwoName} - ${playerTwoScore}`);

  if (round < 5) {
    const nextGame = prompt("Continue? (Y/N): ");
    if (nextGame.toUpperCase() == "Y") {
      round++;
    } else {
      break;
    }
  } else {
    break;
  }
}
