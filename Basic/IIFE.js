// IIFE --> Immediately Invoked Function Expressions (IIFE)

/*
    IIFE is a javaScript function that is executed immediately after it is defined. It allows you to create a scope isolated from the global scope, often used to avoid polluting the global namespace or to implement module patterns.   
    
    Syntax -->
    (function defination)();
*/

(function greetUser() {
  console.log("Hello User !"); // Hello User !
})();

// If we want to run 2 iife functions then at end of first semicolon is compulsory.

(() => {
  console.log("First Function"); // First Function
})();

(function secondFunction() {
  console.log("Second Function"); // Second Function
})();
