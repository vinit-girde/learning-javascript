// <,>,<=,>=,!=,==,=== using these operators it checks if expression is true or false.

// if (true) {
//   console.log("Print True"); // Print True
// }
// console.log("False"); // False

let temperature = 35;

// if (temperature < 30) {
//   console.log("Today is not very hot day.");
// } else {
//   console.log("It's hot today."); // It's hot today.
// }

// === --> It checks both the value and datatype of expression.

// console.log(2 == "2"); // true
// console.log(2 === "2"); // false

// Nested If -Else -->

if (temperature < 20) {
  console.log("It's cold today");
} else if (temperature > 35) {
  console.log("It's a hot today.");
} else {
  console.log("Temperature is great today");
}

// Temperature is great today

// ----------------------------------------------------------------

// Logical && , ||

let isEggAvailable = true;
let isGasAvailable = true;

if (isEggAvailable && isGasAvailable) {
  console.log("We can make omelette for breakfast");
} else {
  console.log("Let's have some fruits ");
}

// We can make omelette for breakfast

// && --> Both conditions should be true.
// || --> Any one condition should be true to make it true.
