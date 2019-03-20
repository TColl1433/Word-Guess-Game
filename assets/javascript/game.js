



// All of the below variables are outside of the functions they are what's known as a global scope. 
//They can be used in any function below.

//declaring variable Arrays answers
var game = ["MADONNA", "PRINCE", "TINA TURNER", "CINDI LAUPER", "BOY GEORGE"]

//this variable gives you random options from "var game"
var choice = Math.floor(Math.random() * game.length);
//this takes the choice from above line and picks a choice from the random array
var answer = game[choice];
//this takes the length of the answer and gives the correct number of spaces for the answer. It counts the letters in the word answer.
var myLength = answer.length;
console.log(answer)
//this is going to put and underscore for each letter in the word
var display = [myLength];
console.log(display)
// this is the number of letters that need to be guessed correctly in order to win the game
var win = myLength;
//this takes the letters from the answer variable & splits it into a separate character array. Now each character is at an index (mind blowing!). 
//I orginally thought I was going to have to declare a separate array for each letter in the alphabet; I think the above takes care of that!
var letters = answer.split("");

//my array.join("")

//Pretty self explanatory!
var attemptsLeft = 10;
//Output is equal to nothing. This is how the blank spaces will be displayed in the GUI
var output = "";
//My attempt to add a start button
var startBtn = document.getElementById("StartBtn");
console.log(typeof (startBtn));

//here I am attempting to make a functioning start button
document.getElementById("StartBtn").addEventListener('click', function () {
    location.reload();
    // initialize()
})
// document.onclick = function () {
//     output = startBtn;


// }


//this "iterates" through the variable array and displays an underscore for each letter          
function initialize() {

    console.log("initialized")




    //this is a for loop
    //var i (i stands for integer)
    //this 

    for (var i = 0; i < answer.length; i++) {

        display[i] = "_ ";
        output = output + display[i];
        //console.log ("i:"+i);
        //console.log("answer.length:"+answer.length);
    }
    //below displays the output on the DOM
    document.getElementById("empty-div").innerHTML = output;
    output = "";
}


//The below code enables the function of using the keyboard for the letter guesses. 
//document.onkeyup is an event listener
//function tells program what to do when the key is pressed
document.onkeyup = function () {
    //UserGuess is taking in the value of the key pressed
    var userGuess = event.key;
    //console.log(event)
    output = "";
    //console.log(userGuess)

    //This for loop is looping through answer length 
    for (var j = 0; j < answer.length; j++) {


        //letters is an array of just the characters [j] and it's checking if the key pressed is equal to one of the characters
        //if it is it is going to change the display to display the character guessed
        if (userGuess.toUpperCase() == letters[j]) {
            display[j] = userGuess.toUpperCase();
            //the win decreases by one character for each letter guessed correctly
            win--;
        }
        //console.log("before:"+output)
        output = output + display[j] + " ";
        //console.log("after:"+output)
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
// window.onload = initialize();
initialize()

//I tried to add functionality to the start button. I wanted to make it refresh the page. I ran outta time. couldnt't figure it out:-(
// function onclick() {
//     window.onload = initialize();
// }