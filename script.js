const age = 21;
console.log(typeof age);

const isFemale = true;
const driverStatusAsString = "drunk";

if (age > 18) {
    document.write("You are over 18!");
    console.log("the person is allowed in.")
} else {
    document.write("You are under 18!");
    console.log("the person is NOT allowed in.");
}

if (isFemale) {
    document.write("You are a Female person!");
    console.log("the person is a female.");
} else {
    document.write("You are a male person!");
    console.log("the person is a man.");
}

if (driverStatusAsString == "bob") {
    document.write("You didn't drink and can drive!");
    console.log("this person is allowed to drive.");
} else {
    document.write("You are drunk!");
    console.log("the person isn't allowed to drive.");
}