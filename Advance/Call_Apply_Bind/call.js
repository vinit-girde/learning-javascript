// In JavaScript, call() is a method that allows you to call a function with a specified 'this' value and individual arguments. i.e Function Borrowing

// call() method allows to call a borrowed function with specified 'this' value i.e current context and individual arguments.

// Object Example
let user = {
  name: "Alan Border",
  introduce: function (nativeCountry) {
    console.log(`I am ${this.name} from ${nativeCountry} `);
  },
};

user.introduce("Australia"); // I am Alan Border from Australia

let anotherUser = { name: "Rahul Dravid" };

user.introduce.call(anotherUser, "India");

//---------------------------------------------------------

// Function Example

function printName(country) {
  console.log("My name is", this.name + " and play for " + country);
}

const userOne = {
  name: "Steve Smith",
};

printName.call(userOne, "Australia"); // My name is Steve Smith and play for Australia

const userTwo = {
  name: "Joe Root",
};
printName.call(userTwo, "England"); // My name is Joe Root and play for England
