// Guess the number

// Input name and return message
function nameEnter() {
    var doc = prompt("Please enter your name",
        "Name");
    if (doc != null) {
        document.getElementById("n").innerHTML =
            "Hey, " + doc + " . Let's play a game!";
    }
}

// Random number picked by computer
const min = 0;
const max = 25;
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Enter a number between 0 and 25 to start guessing the number I have in mind
function numberEnter() {
    var doc = prompt("Enter a number between 0 and 25 to start guessing the number I have in mind",
        "Number");
    if (doc != null) {
        document.getElementById("x").innerHTML =
            "You typed number " + doc;
    }
}

// Compare numbers and if-else message loop: Enter number in loop
if (numberEnter != randomNumber) {
    document.write("Unfortunately, that is not correct");
} else {
    document.write("Congratulations, you won the game!");
    document.write("Bye " + doc + ", see you!");
}