
//if else function
function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
};
console.log("You scored an ", assignGrade(97));
console.log("You scored a ", assignGrade(87));
console.log("You scored a ", assignGrade(77));
console.log("You scored a ", assignGrade(67));
console.log("You scored a ", assignGrade(57));


//for loop grade assigner
for (var n = 60; n <= 100; n++) {
    console.log('For scoring ' + n + ', you get an ' + assignGrade(n));
    function assignGrade(score) {
        if (score > 90) {
            return "A";
        } else if (score > 80) {
            return "B";
        } else if (score > 70) {
            return "C";
        } else if (score > 65) {
            return "D";
        } else {
            return "E";
        }
    }
};
