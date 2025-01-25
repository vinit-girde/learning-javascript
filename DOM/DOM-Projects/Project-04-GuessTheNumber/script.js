let randomNumber;
// Function to get random number betweeen 1 to 100
function getRandomNumber() {
  randomNumber = parseInt(Math.random() * 100 + 1);
}
// calling function to return random number
getRandomNumber();

// get user input value and select other fields value
let userInput = document.getElementById("guessField");
const submit = document.querySelector("#subt");
const previousGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const showhints = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// create paragraph for future ref
const p = document.createElement("p");

// storing previous guesses of user
let previousGuessesOfUser = [];

// number of guess per user i.e only 10 guesses per user allowed
let guessCount = 1;

// variable to check if user can play the game
let playGame = true;

// check if user is allowed to play and hold guess value
if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    let inputValue = parseInt(userInput.value);
    validateGuess(inputValue);
  });
}

// Function to validate if input guess is correct and follows our criteria
function validateGuess(guessNum) {
  if (isNaN(guessNum)) {
    alert("Enter a valid a number");
  } else if (guessNum < 1) {
    alert("Enter a number higher than 1");
  } else if (guessNum > 100) {
    alert("Number can not be larger than 100");
  } else {
    // if above conditions are met than push the guess value into previous guess and check if it matches our random number
    previousGuessesOfUser.push(guessNum);
    if (guessCount <= 10) {
      updateGuessValues(guessNum);
      isGuessEqualToRandomNumber(guessNum);
    } else {
      endGame();
      displayMessage(
        `Game Over ! You have no guesses remaining..., Generated Random Number was , ${randomNumber}`
      );
    }
  }
}

// Function to check if input guess matches random number and show hints.
function isGuessEqualToRandomNumber(guessNum) {
  if (guessNum === randomNumber) {
    displayMessage(`Your guess is correct`);
    endGame();
  } else if (guessNum < randomNumber) {
    displayMessage(`Your guess too low`);
  } else if (guessNum > randomNumber) {
    displayMessage(`Your guess too High`);
  }
}

// function to clear and update guess , count and previous values
function updateGuessValues(guessNum) {
  // clear previour value of input
  userInput.value = "";
  if (guessCount === 11) endGame();
  previousGuesses.innerHTML += `${guessNum}, `;
  guessCount++;
  remainingGuesses.innerHTML = `${11 - guessCount} `;
}

// Function to display messages and modify dom element to show message
function displayMessage(message) {
  showhints.innerHTML = `<h3>${message}</h3>`;
}

// function to end the game
function endGame() {
  // clear previour value of input
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("btn");
  p.innerHTML = `<h2 id='new-game'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  resetGame();
}

// function to reset the game i.e to start new game
function resetGame() {
  const newGameButton = document.querySelector("#new-game");
  newGameButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuessesOfUser = [];
    guessCount = 1;
    previousGuesses.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - guessCount} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
