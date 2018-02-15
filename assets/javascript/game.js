
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
var letterArray = ["a","b","c","d","e","f","j","k","l", "m","n","p","q","r","s", "t", "u","v", "w", "x", "y", "z"];
var userGuess= [];
var computerAnswer;

//counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//empty array to store the guesses
var answerArray = [];

//shows information in console
console.log("guessesLeft");
console.log(guessesLeft);

//executes computer random guess and stores it into variable computerAnswer
var computerAnswer = letterArray[Math.floor(Math.random()*letterArray.length)];

//consoles computer answer
console.log("computerAnswer");
console.log(computerAnswer);

//need to execute userGuess
 function myFunction() 
 {
     document.getElementById("form").innerHTML=userGuess;
 }


//declare that onkeyup an event in the {} will occur
document.onkeyup=function(event) 
{
    //saves entered key from user as userGuess
    userGuess=event.key;
    answerArray.push(userGuess);
    //consoles answerArray - user guesses so far
    console.log("answerArray");
    console.log(answerArray);
    //displays letters guessed so far in html
    document.getElementById("gletters").innerHTML=answerArray;

    //writes guessesleft and subtracts one after event is executed
    document.getElementById("gleft").innerHTML=guessesLeft--;

    //if userGuess matches computerAnswer execute - writing the number of wins +1
    if (userGuess == computerAnswer)
        {
           document.getElementById("ganar").innerHTML=wins++;
           //displays wins
           console.log("wins");
           console.log(wins);
        }
    
    //if gueess have been depleted then increase losses by 1 and display on html
    else if (guessesLeft == 0)
    {
        document.getElementById("perder").innerHTML=losses++;
        //displays losses
        console.log("losses");
        console.log(losses);
        //resetsto 9 guesses left
        guessesLeft = 9;
    }
}
    




