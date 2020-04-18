var guessPool = "abcdefghijklmnopqrstuvwxyz"; // List of characters to be converted to array for user to guess.
var guessArray = guessPool.split(" "); //  [ 0 - 23 ]

var play = 0; // Boolean if user wants to keep playing, currently false.
var wins = 0;
var loses = 0;
var lives = 10; // How many guesses left.
var guesses = 0; // How many guesses the user has guessed. 

function renderLetter() {
    if (play > 0) {
        
    }
    else {
        document.querySelector("#prompt").innerHTML = "Game Over!";
    }
}