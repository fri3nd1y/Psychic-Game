var guessPool = "abcdefghijklmnopqrstuvwxyz"; // List of characters to be converted to array for user to guess.
var guessArray = guessPool.split(""); //  [ 0 - 26 ]
var answer = 0; // Single element out of array, to be randomized via function.
var guessedArray = [];
var userInput = "0";

var play = 1; // Boolean if user wants to keep playing, currently true for 1st game.
var wins = 0;
var losses = 0;
var lives = 10; // How many guesses left.

function renderLetter() {

    randomizedAnswer();
/*     if (play === 1) {
        randomizedAnswer();
    }
    if (play === 0) {
        document.querySelector("#prompt").innerHTML = "Game Over!";
    } */
}

function randomizedAnswer() {
    answer = guessArray[Math.floor(Math.random() * guessArray.length)]; // Randomly picks one letter out of array to be the key "answer"
}

/* function playAgain () {
    document.querySelector("#prompt").innerHTML = ("Would you like to play again?");
    if (userInput === "t") {
        play = 1;
        renderLetter();
        document.querySelector("#prompt").innerHTML = ("Guess what letter I'm thinking of");
    }
    if (userInput === "f") {
        play = 0;
    }
    else {
        alert("Type only [t] or [f] to play again.")
    }
} */

function updateValues () {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessCt").innerHTML = "Guess Left: " + lives;
    document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + guessedArray.toString();
}

function reset () {
    lives = 10;
    guessedArray = [];
    renderLetter();
}

renderLetter();

document.onkeyup = function(event) {

    userInput = event.key.toLowerCase(); {

        if (userInput === answer) {
            wins++;
            lives = 10;
            guessedArray = [];
            updateValues();
            alert("Hey, you won. Resetting the game. Answer was: " + answer);
            reset();
          }
        if (lives === 0) {
            losses++;
            lives = 10;
            guessedArray = [];
            play = 0;
            updateValues();
            alert("Hey, you lost. Resetting the game. Answer was: " + answer);
            reset();
          } 
        else {
            lives--;
            guessedArray.push(userInput);
            updateValues();
          }
    }

/*     if (play === 1) {
        if (userInput === answer) {
            alert("Correct!");
            wins++;
            lives = 10;
            guessedArray = [];
            updateValues();
            playAgain();
          }
        if (lives === 0) {
            losses++;
            lives = 10;
            guessedArray = [];
            play = 0;
            updateValues();
            playAgain();
            updateValues();
          } 
        else {
            lives--;
            guessedArray.push(userInput);
            updateValues();
          }
    } */
}