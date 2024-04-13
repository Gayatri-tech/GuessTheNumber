let randNum = Math.floor(Math.random() * 10);
let input;
let chances = 0;
do {
  input = prompt("Guess the number");
  chances++;
  if (input < randNum) {
    console.log("Your number is less than the actual number");
  } else if (input > randNum) {
    console.log("Your number is greater than the actual number");
  } else {
    console.log("Congratulations! You guessed it right");
    break;
  }
} while (input != randNum);
console.log("The actual number is:", randNum);
console.log("No. of chances you took to guess it:", chances);
console.log("Your score is:", 100 - chances);
