// intro :
alert("Welcome to the number guessing game");
let playarOne = prompt("player 1 pelase enter your name :");
let playarTwo = prompt("player 2 pelase enter your name :");
alert("let's play ");

let guessOne, guessTwo;
let pointOne = 0,
  pointTwo = 0;
let rounde = 0;

while (rounde <= 5) {
  // angka pilihan computer
  let answer = Math.ceil(Math.random() * 5);
  console.log(answer);

  guessOne = parseInt(prompt(`${playarOne}, enter the numbers between 1 to 5`));
  if ((guessOne, guessTwo < 0 || guessOne, guessTwo > 5)) {
    alert("may not enter a number more than 5, less than 1");
    continue;
  }

  if (guessOne == guessTwo) {
    alert("cannot enter the same number");
    continue;
  }

  if (guessOne == answer) {
    pointOne++;
    alert(`your guess is right :
    __________________________
    player 1 ${playarOne} : ${pointOne} point.
    player 2 ${playarTwo} : ${pointTwo} point.`);
  } else if (guessOne > answer) {
    alert("the number you entered too large");
  } else if (guessOne < answer) {
    alert("the number you entered too small");
  }

  guessTwo = parseInt(prompt(`${playarTwo}, enter the numbers between 1 to 5`));
  if (guessTwo == answer) {
    pointTwo++;
    alert(`your guess is right :
    __________________________
    player 1 ${playarOne} : ${pointOne} point.
    player 2 ${playarTwo} : ${pointTwo} point.`);
  } else if (guessTwo > answer) {
    alert("the number you entered too large");
  } else if (guessTwo < answer) {
    alert("the number you entered too small");
  }

  rounde++;

  if (rounde == 5) {
    let question = confirm("want to play again ?");
    if (question == true) {
      rounde = 0;
    } else {
      rounde = 6;
    }
  }
}
