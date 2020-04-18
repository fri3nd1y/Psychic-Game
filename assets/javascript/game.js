var guessPool = "abcdefghijklmnopqrstuvwxyz"; // List of characters to be converted to array for user to guess.
var guessArray = guessPool.split(""); //  [ 0 - 26 ]
var answer = 0; // Single element out of array, to be randomized via function.
var guessedArray = [];
var userInput = "0";

var play = 1; // Boolean if user wants to keep playing, currently true for 1st game.
// var playAgainBoo = 1; // Boolean to allow only f or t key input for restarting the game.
var wins = 0;
var losses = 0;
var lives = 10; // How many guesses left.

function renderLetter() {
    if (play > 0) {
        lives = 10;
        randomizedAnswer();
    }
    else {
        document.querySelector("#prompt").innerHTML = "Game Over!";
    }
}

function playAgain () {
    document.querySelector("#prompt").innerHTML = ("Would you like to play again?");
    if (userInput === "t") {
        play = 1;
        renderLetter();
        document.querySelector("#prompt").innerHTML = ("Guess what letter I'm thinking of");
    }
    if (userInput === "f") {
        throw new Error("GAME OVER.");
    }
    else {
        alert("Type only [t] or [f] to play again.")
    }
}

function randomizedAnswer() {
    answer = guessArray[Math.floor(Math.random() * guessArray.length)]; // Randomly picks one letter out of array to be the key "answer"
}

function updateValues () {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessCt").innerHTML = "Guess Left: " + lives;
    document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + guessedArray.toString();
}

renderLetter();

document.onkeyup = function(event) {

    userInput = event.key.toLowerCase();

    if (userInput === answer) {
        alert("Correct!");
        wins++;
        updateValues();
        playAgain();
      }
    if (lives === 1) {
        losses++;
        updateValues();
        playAgain();
        lives = 10;
      } 
    else {
        lives--;
        guessedArray.push(userInput);
        updateValues();
      }

    /* if (userInput === guessArray.includes(userInput)) {

      if (userInput === answer) {
        alert("Correct!");
        wins++;
        updateValues();
      }
      if (lives === 0) {
          losses++;
          updateValues();
          playAgain();
          renderLetter();
      } else {
          lives--;
          guessedArray.push(userInput);
          updateValues;
      }

    }
    else {
        alert("Guess is invalid, must be alphabetical!");
      } */
  };

  console.log(userInput);
