




// All of the below variables are outside of the functions they are what's known as a global scope. 
//They can be used in any function below.

//declaring variable Arrays answers
var game = ["MADONNA", "PRINCE", "TINA TURNER", "CINDI LAUPER"]

//these variables give you random options from "var game"
var choice = Math.floor(Math.random() * 4);
//this takes the choice from above line and picks a choice from the random array
var answer = game[choice];
//this takes the length of the answer and gives the correct number of spaces for the answer. It counts the letters in the word answer.
var myLength = answer.length;
//this is going to put and underscore for each letter in the word
var display = [myLength];
// this is the number of letters that need to be guessed correctly in order to win the game
var win = myLength;
//this takes the letters from the answer variable & splits it into a separate character array. Now each character is at an index (mind blowing!). 
//I orginally thought I was going to have to declare a separate array for each letter in the alphabet; I think the above takes care of that!
var letters = answer.split("");
//Pretty self explanatory!
var attemptsLeft = 10;
//Output is equal to nothing. This is how the blank spaces will be displayed in the GUI
var output = "";




//this "iterates" through the variable array and displays an underscore for each letter          
var setup = function () {
    //this is a for loop
    //var i (i stands for integer)
    //this 
    for (var i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("empty-div").innerHTML = output;
    output = "";
}



document.onkeyup = function () {
    var userGuess = event.key;
    output = "";

    for (var j = 0; j < answer.length; j++) {

        if (userGuess.toUpperCase() == letters[j]) {
            display[j] = userGuess.toUpperCase();
            win--;
        }

        output = output + display[j] + " ";
    }
    document.getElementById("empty-div").innerHTML = output;
    output = " ";
    attemptsLeft--;
    if (win < 1) {
        document.getElementById("guesses").innerHTML = "YOU WIN!";
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = "YOU LOSE!";
    } else {
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left"
    }
}
window.onload = setup();
