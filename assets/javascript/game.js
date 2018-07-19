// create an array to house all the possible solutions
var solutions = [
    "stewie",
    "peter",
    "lois",
    "meg",
    "brian",
    "quagmire",
    "chris",
    "herbert",
    "joe",
    "clevland",
    "carter pewterschmidt",
    "tricia takanawa",
    "mayor west",
    "tom tucker",
    "neil goldman",
    "dr hartman",
    "jillian",
    "loretta",
    "buzz killington",
    "angela",
    "evil monkey",
    "greased up deaf guy",
    "giant chicken"
];
// array for possible choices by players
var choices = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
//Variables for wins, losses, and Guesses Left
var wins = 0;
var losses = 0;
var guessesLeft = 10;
//Start the game, reset counters, randomly select a word, then show the #of possible letters
function startGame(){
    // Randomly Select A Word
    solutionPicked = solutions[Math.floor(Math.random() * solutions.length)];
    console.log("Start Game Fired");
    //reset all applicable sections - everything except wins and losses
    guessesLeft = 10;
    wrongGuesses = [];
    dashes = [];
    rightGuesses = 0;
    // Split the solution into individual characters and draw dashes
    solutionsplit = solutionPicked.split("");
    underscores = solutionsplit.length;
    for (var i = 0; i< underscores; i++){
        dashes.push("_ ");
        document.querySelector("#currentWord").innerHTML = dashes;
    }

}
window.onload = startGame;
// player picks a letter
document.onkeypress = function(event){
    var letterPicked = event.key;
    
}
// if the letter is right show it in the solution
//if its wrong show it as wrong and keep in used letters area
// if they run out of guesses -- game over
//if they guess the word -- game over
//Update the wins and losses
// start the while process over