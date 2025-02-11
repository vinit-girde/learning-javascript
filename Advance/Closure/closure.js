/* Closure --> 
                Function along with it's lexical scope bundled together forms a closure.

                Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting .

                A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing.
*/

function x() {
  let a = 5;
  function y() {
    console.log(a);
  }
  return y;
}

let z = x();
z();

// ---------------------------------------------------------------
function outer() {
  let count = 0; // Outer function variable

  function inner() {
    count++; // Inner function accesses 'count'
    console.log(count);
  }

  return inner;
}

let counter = outer(); // 'outer' executes and returns 'inner'
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

/*
    The inner function is returned and assigned to counter.
    Even after outer has finished execution, counter() can still access count, thanks to closure.
*/
