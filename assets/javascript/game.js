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
//randomly select a word
var solutions = solutions[Math.floor(Math.random() * solutions.length)];
// inform the player to pick and letter and try to guess all the letters in the mystery word

// if the letter is right show it in the solution
//if its wrong show it as wrong and keep in used letters area
// if they run out of guesses -- game over
//if they guess the word -- game over
// start the while process over