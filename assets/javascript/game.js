
//Psychic Game


//generate random letter - computer guess
//ask for a guess -- user input with onkeyup
//if guess is correct (userguess ==computerguess), increase win +1, alert guess is correct, and restart game
//if guess is incorrect, decrease guess chances to -1, and alert guess is incorrect
//When exhausted all 9 guesses, increase loss by 1, alert loss
//set number of guesses to 9
//display letters guessed & make sure repeated letters will not decrease left over guesses
//display scoreboard


//need a forloop that will generate a computerguess first, a variable = to userguess, if the guess matches you win.........................else if = guess chances decreases by 1 


//variable for game
var computerGuess = ["a","b","c","d","e","f","j","k","l", "m","n","p","q","r","s", "t", "u","v", "w", "x", "y", "z"];
var userGuess;
var totalGuesses = 9;
var correctGuess = false;
var computerAnswer;
var wins = 0
var guessesLeft;




//executes computer random guess//
//math.random returns a decimal <1
var computerGuess = computerGuess[Math.floor(Math.random()*computerGuess.length)];
//shows random answer
console.log(computerGuess);


//need to execute userGuess

//if statement gets userGuess and compares it to (computerGuess) -- if this evaluates to true then {you are very wise}. If evaluates as false go to else.
if (computerGuess === userGuess) {
    wins + 1;
    console.log (wins);
};



//if above statement evaluates as false, then else statement runs and user is not wise at all.

else {
    (totalGuesses-1);
   console.log (totalGuesses);
};