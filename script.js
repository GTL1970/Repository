// No argument
const wallPaint = function () {
    console.log('The wall has been painted red');
};
wallPaint();

// Single argument
const walPaint = function (color) {
    console.log('The wall has been painted ' + color);
};
walPaint('green');
walPaint('blue');

//Call function without argument --> undefined
walPaint();

//Multiple arguments
const wallsPaint = function (direction, color) {
    console.log('The ' + direction + ' wall has been painted ' + color);
};
wallsPaint('north', 'orange');
wallsPaint('south-east', 'grey');

//Does the order of the arguments matter? Yes
//What happens if you switch them in the function definition or order arguments.
// The color wall has been painted direction
const wollsPaint = function (direction, color) {
    console.log('The ' + color + ' wall has been painted ' + direction);
};
wollsPaint('north', 'orange');
wollsPaint('south-east', 'grey');

//What happens if you switch the function arguments order.
// The color wall has been painted direction
const wollsPaints = function (color, direction) {
    console.log('The ' + direction + ' wall has been painted ' + color);
};
wollsPaints('north', 'orange');
wollsPaints('south-east', 'grey');