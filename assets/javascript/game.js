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
//Variables for wins and losses
var wins = 0;
var losses = 0;
//randomly select a word and show the #of possible letters
var solutions = solutions[Math.floor(Math.random() * solutions.length)];
// player picks a letter

// if the letter is right show it in the solution
//if its wrong show it as wrong and keep in used letters area
// if they run out of guesses -- game over
//if they guess the word -- game over
// start the while process over