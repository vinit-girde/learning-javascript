// Objects in js can be created using 2 ways: Object.create(),let obj={}.
// Objects  consists of key value pair.
// singleton --> Object are only singleton when created using construtor.
// Object.create is used in creating object using constructor.

// object literals i.e -> obj={}

// How to use Symbol datatype in object and access that property.
const mySym = Symbol("key1");

const JsUser = {
  name: "vinit",
  "full name": "vinit girde",
  [mySym]: "mykey1",
  age: 19,
  age: 18,
  location: "Nagpur",
  email: "vinit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log("One", JsUser);

// console.log(JsUser.email) // vinit@google.com
// console.log(JsUser["email"]) // vinit@google.com
// console.log(JsUser["full name"]) // vinit girde

// To access symbol datatype value use [] with key name without string.
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "vinit@chatgpt.com";
// console.log("Two", JsUser);

// freeze() --> It stops making further any changes in object .

// Object.freeze(JsUser);
JsUser.email = "vinit@microsoft.com";
// console.log("After Freeze", JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// JsUser.greeting(); // Hello JS user
// JsUser.greetingTwo(); // Hello JS user vinit

// --------------------------------------------------------------
// singleton --> Object are only singleton when created using construtor.

let socialUser = new Object();
// console.log(socialUser); // {}

// let socialUser = {};
// console.log(socialUser); // {}

/*
  Note: Both console on line 54 and 57 logs {} same value but line 53 socialUser object is a singleton object and line 56 is not.
*/

// Nested key values
let regularUser = {
  name: "Vinit",
  fullName: {
    firstName: "Vinit",
    lastName: "Girde",
  },
  isLoggedIn: false,
  email: "vinit@gmail.com",
};

// To access nested keys in object
// console.log(regularUser?.fullName?.firstName); // Vinit
// console.log(regularUser?.fullName?.lastName); // Girde

// To concatinate / combine two or more objects
let fbUser = {
  1: "a",
  2: "b",
};

let instaUser = {
  1: "c",
  2: "d",
  3: "e",
};

let xUser = {
  1: "e",
  2: "b",
  3: "c",
};

// We can use spread operator or assign():
// Using spread operator
let obj = { ...fbUser, ...instaUser };
// console.log("Combine Object ->", obj); // Combine Object -> { '1': 'c', '2': 'd', '3': 'e' }

let obj2 = { ...fbUser, ...instaUser, ...xUser };
// console.log("Combine Object two ->", obj2); // Combine Object two -> { '1': 'e', '2': 'b', '3': 'c' }

// In above logged values , the same keys values gets overwrited and last position keys values gets logs.

let assignedObj = Object.assign({}, fbUser, instaUser, xUser);
// console.log("Assigned Obj", assignedObj); // Assigned Obj { '1': 'e', '2': 'b', '3': 'c' }

// Same keys values also gets overwrited in assign() also.

console.log("--------------------------------------------");

let user = {
  email: "user@yahoo.com",
  name: "Lebron James",
  sports: "Basketball",
  team: ["Cavs", "Heat", "Cavs", "Lakers"],
  isActive: true,
};
// Object.keys() --> Returns all the keys from object in an array.
// console.log(Object.keys(user)); // [ 'email', 'name', 'sports', 'team', 'isActive' ]
// Object.values() --> Returns all the values of keys from object in an array.
// console.log(Object.values(user));
/*[
  'user@yahoo.com',
  'Lebron James',
  'Basketball',
  [ 'Cavs', 'Heat', 'Cavs', 'Lakers' ],
  true
] 
*/

// Object.entries() --> returns an array of all key value pairs in an array.
// console.log(Object.entries(user));
/*
[
  [ 'email', 'user@yahoo.com' ],
  [ 'name', 'Lebron James' ],
  [ 'sports', 'Basketball' ],
  [ 'team', [ 'Cavs', 'Heat', 'Cavs', 'Lakers' ] ],
  [ 'isActive', true ]
]
*/

// hasOwnProperty(property_name) --> It checks the passed key is present in object and returns boolean based on condition.

// console.log(user.hasOwnProperty("sports")); // true

console.log("--------------------------------------------");

// object Destructuring

let userInfo = {
  email: "user@yahoo.com",
  name: "Lebron James",
  sports: "Basketball",
  team: ["Cavs", "Heat", "Cavs", "Lakers"],
  isActive: true,
};

// Instead of using userInfo.email everytime to access email property we can destructure that property .

// const { email } = userInfo;

// console.log(email); // user@yahoo.com
//  We could also name it diferently to access that

const { email: umail } = userInfo;
console.log(umail); // user@yahoo.com
