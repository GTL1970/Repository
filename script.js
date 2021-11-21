const age = 24;
const firstName = "Bram"
const myDrinkOrder = 70
const myBill = 105
const totalAmount = myDrinkOrder + myBill

console.log("My age is", age);
console.log("My first name is", firstName);
console.log("My drink order is", myDrinkOrder, "euro's");
console.log("My bill is", myBill, "euro's");
console.log("Your total costs are", totalAmount, "euro's");

/*
myBill:
If myBill is lower dan 50 euro's: No present!
If MyBill is between 50-100 euro's: portion of nacho's!
Is myBill is over 100 euro's: bottle of champagne!
*/

if (age >= 18) {
    console.log("You are allowed in!");
} else {
    console.log("You are not allowed in!");
}

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!")
} else {
    console.log("You don't get any discount!");
}

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("You get a free beer!")
} else {
    console.log("You don't get any discount!");
}
if (myDrinkOrder >= 50) {
    console.log("You get free bitterballen!")
} else {
    console.log("You don't get free bitterballen!");
}

if (myBill >= 100)
    console.log("You get a bottle of champagne!");
else if (myBill >= 50 && myBill < 100)
    console.log("You get a free portion of nachos!");
else
    console.log("You don't get a present!");
