const num = 100;

// console.log(num); // 100

const newNum = new Number(200);

// console.log(newNum); // 200

// console.log(typeof newNum, typeof num); // object number

// toFixed(num) -->Returns a string representing a number in fixed-point notation. num is Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

// console.log(newNum.toFixed(-1)); // RangeError -  toFixed() digits argument must be between 0 and 100

// console.log(newNum.toFixed(2), "and it's type", typeof newNum.toFixed(2)); // 200.00 and it's type is string.

// toString() --> Converts the given number into string.
// console.log(newNum.toString(), typeof newNum.toString()); // 200 string

// toPrecision() --> Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
let anotherNum = 200.456;
// console.log(anotherNum.toPrecision(4), typeof anotherNum.toPrecision(4)); // 200.5 string

// console.log(anotherNum.toPrecision(3)); // 200

// toLocaleString --> to improve readability of big numbers
let priceMoney = 1000000;
// console.log(priceMoney.toLocaleString("en-IN"), typeof priceMoney); // 10,00,000 number

// ----------------------------------------------------------------

// Math ---> Math Object
// abs(),round(),floor(),ceil(),min(),max(),random()

let numEx = -5;
// abs() --> Makes the negative number into positive.
// console.log(Math.abs(numEx)); // 5

// round() --> This method makes the value rounded to nearest integer
let numOne = 4.3;
// console.log(Math.round(numOne)); // 4
// console.log(Math.round(4.8)); // 5

// floor() --> This makes floor values of decimal integers
// console.log(Math.floor(4.7)); // 4
// ceil() --> This method makes values to next to ceil number
// console.log(Math.ceil(8.3)); // 9

// max() --> helps in finding the largest number from input parameter/array.
// console.log(Math.max(10, 2, 50)); // 50
// console.log(Math.max(...[10, 2, 50, 40, 55, 104])); // 104
// console.log(Math.max(...[10, 2, 50, 40, 55, 104, 600])); // 600

// min()  --> helps in finding the smallest number from input parameter/array.
// console.log(Math.min(1, 22, 4, 0)); // 0
// console.log(Math.min(...[1, 2, 44, 55, 66, 77])); // 1

// random() --> This method generates a random value between 0 to 1.

console.log(Math.random());

//  to make values into 0 to 10 we multiply by 10 and add 1 to it as values can become zero when used floor() that way min value will be 1 always.

console.log(Math.floor(Math.random() * 10) + 1);

// To generate values between to min and max values we use =>
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
