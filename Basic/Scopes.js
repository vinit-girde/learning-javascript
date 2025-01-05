let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 300;
  //   console.log("INNER: ", a); // INNER: 10 i.e block/local scope
}

// console.log(a); // 300 from global variable.
// console.log(b); // Refernece Error b is not defined.
// console.log(c); // 300

console.log("--------------------------------------------------");
function one() {
  const username = "vinit";

  function two() {
    const website = "youtube";
    console.log(username); // vinit
  }
  // console.log(website); // RefeneceError : website is not defined.
  two();
}

// one();

if (true) {
  const username = "vinit";
  if (username === "vinit") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website); // ReferenceError website is not defined.
}

// console.log(username); // ReferenceError username is not defined.

// ++++++++++++++++++ interesting ++++++++++++++++++

// Entire function declarations are hoisted. As we see below on line 42 no error is generated as using such syntax for function declaration is hoisted.

console.log(addone(5)); // 6
function addone(num) {
  return num + 1;
}

// Only function declaration is hoisted and not arrow and regular functions.
// addTwo(5); // ReferenceError : Cannot access 'addTwo' before initialization
// Below declaration of functions are called function expressions.
const addTwo = function (num) {
  return num + 2;
};

/*
    Note: 
        Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This allows you to use functions and variables before they are formally declared in the code.
*/
