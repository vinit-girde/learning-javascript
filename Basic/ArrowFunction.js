// 'this' keyword in javascript refers to current context i.e scope.
/*
    On logging value of 'this' keyword on node environment it logs empty {} , whereas on browser it logs window object. This is becoz in earlier days javascript was only running on browser and then with node  js with separate js engine it was been executed locally. 
*/

const user = {
  username: "vinit",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage(); // vinit , welcome to website
// user.username = "sam";
// user.welcomeMessage(); // sam , welcome to website

// console.log(this); // {} on node environment but on browser it logs window object.

// function chai() {
//   let username = "vinit";
//   console.log(this.username); // undefined
// }

// chai();

// const chai = function () {
//   let username = "vinit";
//   console.log(this.username); // undefined
// };

// chai();

// const chai = () => {
//   let username = "vinit";
//   console.log(this.username); // undefined
//   console.log(this); // {}
// };

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "vinit" });

// console.log(addTwo(3, 4)) // {username:'vinit'}

// -----------------------------------------------------

const obj = {
  value: 10,
  method: function () {
    console.log(this.value); // Works as expected
  },
  arrowMethod: () => {
    console.log(this.value); // `this` refers to the outer scope, not `obj`
  },
};
obj.method(); // Output: 10
obj.arrowMethod(); // Output: undefined
