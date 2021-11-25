
//function return number is big
const bigNumber1 = function (number1) {
    if (number1 > 100) {
        return ('true');
    } else {
        return ('false');
    }
}
console.log(bigNumber1(81));
//Function that produces something



//Bouncer at a club
const bouncerBot = function (age, maxVisit, curVisit) {
    if (age > 18) {
        if (curVisit <= maxVisit) {
            return ('Come in!');
        } else {
            return ("It's too busy, come back later!");
        }
    } else {
        return ('This is a club for adults');
    }
}
console.log(bouncerBot(26, 500, 175));
// Function that produces something



//Calculate the average
const calcAvg = function (a, b, c, d, e) {
    const sum = a + b + c + d + e;
    const average = sum / calcAvg.length;
    return average;
};
console.log(Math.round(calcAvg(28, 42, 63, 81, 22)));
//Function that does something
