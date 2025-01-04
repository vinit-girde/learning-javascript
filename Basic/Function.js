// Function is a set of statements which performs certain tasks.
// Function Defination / Declaration
function greetUser() {
  console.log("Good Afternoon");
}

// Function calling
// greetUser(); // Good Afternoon

// Function referencing
greetUser;

// Write a function to add two numbers.
function addNumber(numOne, numTwo) {
  if (
    numOne &&
    numTwo &&
    typeof numOne === "number" &&
    typeof numTwo === "number"
  ) {
    return numOne + numTwo;
  } else {
    return "Both parameters should be only of number type.";
  }
}

// console.log(addNumber(1, 5)); // 6

// console.log(addNumber()); // Both parameters should be only of number type.

// console.log(addNumber("vinit", 20)); // Both parameters should be only of number type.

function loginUserMessage(username) {
  if (!username) {
    return `Please enter username`;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Steph")); // Steph just logged in
// console.log(loginUserMessage("")); // Please enter username
// console.log(loginUserMessage()); // Please enter username

// to handle n number of paramters in functions use rest operator.
function addCartValues(...cartValues) {
  return cartValues;
}

console.log(addCartValues(100, 240, 499, 666)); // [ 100, 240, 499, 666 ]
