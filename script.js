// Guess the number

// variables
let numberToBeGuessed = null;
let userName;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

// Input name
while (userName === undefined || userName === null || userName.length === 0) {
    userName = prompt("Welcome! What is your name?");
}
// return answer
alert("Hey " + userName + "! Let's play a game!");


let selectedMinNum = parseInt(
    prompt("Choose a whole number to set your minimum parameter (standard: 0)")
);
if (!isNaN(selectedMinNum) && selectedMinNum >= 0) {
    minNum = selectedMinNum;
}

let selectedMaxNum = parseInt(
    prompt("Choose a whole number to set your maximum parameter. (standard: 25, higher than " + minNum + " )")
);
if (!isNaN(selectedMaxNum)) {
    maxNum = selectedMaxNum;
}

while (maxNum <= minNum) {
    let selectedMaxNum = parseInt(
        prompt("Choose a whole number to set your maximum parameter. (higher than " + minNum + " )")
    );
    if (!isNaN(selectedMaxNum)) {
        maxNum = selectedMaxNum;
    }
}

alert("You have 5 trials to guess the number. The number is between " + minNum + " and " + maxNum + ". Good luck!");

numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst the number is: " + numberToBeGuessed);

while (currentGuess !== numberToBeGuessed) {
    if (numberOfGuesses < 1) {
        alert(
            "Sorry, You have exhausted your trials. You have lost. We will start again with a new number! The number is still between " + minNum + " and " + maxNum + "."
        );
        numberOfGuesses = 5;
        numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }
    currentGuess = parseInt(prompt("Enter a number.."));

    while (isNaN(currentGuess)) {
        currentGuess = parseInt(
            prompt(
                "Your entry was not a number. Try again. Enter a number..."
            )
        );
    }

    alert("Your guess is: " + currentGuess);

    if (currentGuess > numberToBeGuessed) {
        numberOfGuesses--;
        if (numberOfGuesses < 1) {
            alert("This was your last trial.");
        } else {
            alert(
                "Unfortunately, that is not correct! Your guess was too high. You have " + numberOfGuesses + " left. Try again. Enter a number..."
            );
        }
    } else if (currentGuess < numberToBeGuessed) {
        numberOfGuesses--;
        if (numberOfGuesses < 1) {
            alert("This was your last trial.");
        } else {
            alert(
                "Unfortunately, that is not correct! Your guess was too low. You have " + numberOfGuesses + " left. Try again. Enter a number..."
            );
        }
    } else {
        alert("Congratulations, you have won the game! The number was: " + currentGuess);
        alert(
            "The game is over!. Thanks for playing " + userName + ". Bye, see you next time!"
        );
    }
}