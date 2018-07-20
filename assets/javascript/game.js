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
// var choices = [
    // "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    // "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// ];

//Global Varibles
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var correctGuesses = [];
var bank = [];

//Reset and start over
function startOver(){
    guessesLeft = 10;
    document.querySelector("#remain").innerHTML = guessesLeft;
    correctGuesses = [];
    incorrectGuesses = [];
    document.querySelector("#guess").innerHTML = "";
    bank = [];
    wordPick();
    solutionSplit();
    visualAnswer();
}
window.onload = startOver;
console.log("startOver Fired")

//selects the word
function wordPick(){
    // Randomly Select A Word
    solutionPicked = solutions[Math.floor(Math.random() * solutions.length)];
    console.log(solutionPicked);
    // var tester = solutionPicked.replace(/\s+/g, '');
    // console.log(tester);
    // console.log(solutionPicked);
    return solutionPicked;    
}

//simply defining solutionPicked outside of the function
var solutionPicked = wordPick();

//Split the answer and store it
function solutionSplit(){
    for (i = 0; i<solutionPicked.length; i++){
        bank.push(solutionPicked[i]);
        console.log(bank);
    }
} 

//Adds the underscores for the solution to the page
function visualAnswer(){
    // var underScores = indexOf(solutionPicked);
    // document.querySelector("#currentWord").innerHTML = solutionPicked;
    // underScores.push("_ ");
    // solutionPicked[i] = "_ ";
    for(var i = 0; i < bank.length; i++){
        bank[i] = "_ ";
        console.log(bank);
        document.querySelector("#currentWord").innerHTML = bank;
    }
    return bank;
}

// player picks a letter
document.onkeyup = function(event){
    var letterPicked = event.key;
    letterPicked.toLowerCase();
    console.log("The keypressed was: " + letterPicked);
}

//check the letter against the solution
// if the letter is right show it in the solution
//if its wrong show it as wrong and remove a guess
// if they run out of guesses -- game over
//if they guess the word -- game over
//Update the wins and losses
// start the while process over