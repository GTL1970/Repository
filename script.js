
//take 2 numbers
//each number will be squared
//the squared numbers will be added together
//the sum will be squared
//the resulting value is returned

//function declaration
function squareIt1(num1, num2) {
    const sqNum1 = num1 * num1;
    const sqNum2 = num2 * num2;
    const sumNum = sqNum1 + sqNum2;
    return sumNum * sumNum;
}
console.log(squareIt1(4, 2));//400
console.log(squareIt1(2, 3));//169
console.log(squareIt1(21, 34));//2550409


//function expression
const squareIt2 = function (num3, num4) {
    const sqNum3 = num3 * num3;
    const sqNum4 = num4 * num4;
    const sumNum2 = sqNum3 + sqNum4;
    return sumNum2 * sumNum2;
}
console.log(squareIt2(4, 2));//400
console.log(squareIt2(2, 3));//169
console.log(squareIt2(21, 34));//2550409

//arrow function
const squareIt3 = (num5, num6) => {
    const sqNum5 = num5 * num5;
    const sqNum6 = num6 * num6;
    const sumNum3 = sqNum5 + sqNum6;
    return sumNum3 * sumNum3;
}
console.log(squareIt3(4, 2));//400
console.log(squareIt3(2, 3));//169
console.log(squareIt3(21, 34));//2550409

