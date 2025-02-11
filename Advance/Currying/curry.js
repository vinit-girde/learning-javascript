/*
    Currying is a functional programming technique where a function is transformed into a sequence of functions, each taking a single argument. Instead of passing all arguments at once, the function takes them one at a time.
    
    Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

    What is currying in JavaScript?

    Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.

    In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.
*/

function add(a) {
  return function (b) {
    return a + b;
  };
}

let add2 = add(2); // Returns a function that adds 2
console.log(add2(3)); // Output: 5
console.log(add(4)(6)); // Output: 10

console.log(add2("a")); // 2a

console.log(add(4)(7)); // Output: 11
