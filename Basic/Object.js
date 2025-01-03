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
console.log("One", JsUser);
// console.log(JsUser.email) // vinit@google.com
// console.log(JsUser["email"]) // vinit@google.com
// console.log(JsUser["full name"]) // vinit girde

// To access symbol datatype value use [] with key name without string.
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "vinit@chatgpt.com";
console.log("Two", JsUser);
// Object.freeze(JsUser);
JsUser.email = "vinit@microsoft.com";
// console.log("After Freeze", JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

JsUser.greeting(); // Hello JS user
JsUser.greetingTwo(); // Hello JS user vinit
