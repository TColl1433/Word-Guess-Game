
//var $ = function (id) {
//return document.getElementById();
//}

// Create variables that hold references to the places in the HTML where we want to display things.


//declaring variable Arrays answers
var game = ["Madonna", "Prince", "Tina Turner", "Cindi Lauper"]

//these variables give you random options from "var game"
var choice = Math.floor(Math.random() * 4);
//this takes the choice from above line and applys the random array
var answer = game[choice];
//
var myLength = answer.length;

var display = [myLength];
var win = myLength;
var letters = answer.split("");
var attemptsLeft = 10;
var output = "";



//this "iterates" through the variable array and displays an underscore for each letter          
var setup = function () {
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

        if (userGuess == letters[j]) {
            display[j] = userGuess;
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
