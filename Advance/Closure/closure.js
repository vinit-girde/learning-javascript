/* Closure --> 
                Function along with it's lexical scope bundled together forms a closure.

                Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting .

                A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing.

                // ------------------------------------------------
                
                An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

                function createAdder(a) {
                    function f(b) {
                        const sum = a + b;
                        return sum;
                    }
                    return f;
                }
                const f = createAdder(3);
                console.log(f(4)); // 7

                In this example, createAdder passes the first parameter a and the inner function has access to it. This way, createAdder serves as a factory of new functions, with each returned function having different behavior.
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
