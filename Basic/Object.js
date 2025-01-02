// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "vinit",
  "full name": "vinit ",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "vinit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "vinit@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "vinit@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
