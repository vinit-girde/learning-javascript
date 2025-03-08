// In JavaScript, a prototype is an object from which other objects inherit properties. Every JavaScript function (which can act as a constructor) has a prototype property, and this property is used to set up prototype chaining for objects created using that function.

// In JS everything is object .i.e Object is superset and everything derives through object.

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.userX = function () {
  console.log(`userX is present in all objects`);
};

Array.prototype.heyUserX = function () {
  console.log(`userX says hello`);
};

heroPower.userX(); // userX is present in all objects
myHeros.userX(); // userX is present in all objects
myHeros.heyUserX(); // userX says hello
// heroPower.heyUserX(); // TypeError: heroPower.heyUserX is not a function

// Add an function to String Object which calculates the length and prints true length of any passed string.

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"vinit".trueLength();
"iceTea".trueLength();
