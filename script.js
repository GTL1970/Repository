
//Hey Kiddo
const trueAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};
console.log(trueAge(25));
console.log(trueAge(15));



const greetings = function (age) {
    if (trueAge(age)) {
        return "Hello there";
    } else {
        return "Hello Kiddo";
    }
};
console.log(greetings(25));
console.log(greetings(15));


// VAT calculations 1
// Example:
// const price = 1000
// const vat = 21%
// amountVat = 1000 * (vat/100) = 1000 * (21/100) = 210
// const totalPrice = 1000 + vat = 1000 + 210 = 1210

const amountVat = function (price, percVat) {
    const totalVat = price * (percVat / 100);
    return totalVat;
};
console.log(amountVat(1000, 21));

const totalprice = function (price, percVat) {
    const vat = amountVat(price, percVat);
    return price + vat;
};
console.log("Most goods 21% VAT:", totalprice(1000, 21));
console.log("Food 9% VAT:", totalprice(3, 9));
console.log("Others 0% VAT:", totalprice(500, 0));

//VAT calculations 2
// price incl VAT = 1210
// VAT = 21% = totalprice / (100+vat)= totalprice/(100+21)
// calculate baseprice = price excl. vat = price - vat
const basePrice = function (totalAmount, vatPerc) {
    const vatTot = totalAmount / ((100 + vatPerc) / 100);
    return vatTot;
};

const vatPrice = function (totalAmount, vatPerc) {
    const basisPrice = basePrice(totalAmount, vatPerc);
    const vatCalc = totalAmount - basisPrice;
    console.log("Total Price is:", totalAmount);
    return vatCalc;
};
console.log("The price without VAT is:", basePrice(1210, 21));
console.log("The VAT is:", vatPrice(1210, 21));
console.log("The price without VAT is:", basePrice(3.27, 9));
console.log("The VAT is:", vatPrice(3.27, 9));
console.log("The price without VAT is:", basePrice(500, 0));
console.log("The VAT is:", vatPrice(500, 0));

//VAT calc.2 return as Array
const basePrice1 = function (totalAmount, vatPerc) {
    const vatTot = totalAmount / ((100 + vatPerc) / 100);
    return vatTot;
};

const vatPrice1 = function (totalAmount, vatPerc) {
    const basisPrice = basePrice1(totalAmount, vatPerc);
    const vatCalc = totalAmount - basisPrice;
    return [basisPrice, vatCalc];
};
console.log(vatPrice1(1210, 21)); // [1000, 210]
console.log(vatPrice1(2.18, 9)); // [2, 0.18]

