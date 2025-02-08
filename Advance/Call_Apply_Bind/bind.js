// The bind() methods is used to keep the copy of reference of  a method and not directly invoking that method

// Returns a new function with the specified this value but does not invoke it immediately

let nameObj = {
  fName: "Sunil",
  lName: "Gavaskar",
};

let anotherNameObj = {
  fName: "Allan",
  lName: "Border",
};

function printName(state, teamName) {
  console.log(
    `I'm ${this.fName} ${this.lName} born in ${state} and I play for ${teamName} in Ranji Tournament`
  );
}

let introduceSunil = printName.bind(nameObj, "Maharashtra", "Mumbai");

console.log(introduceSunil); // [Function: bound printName]

introduceSunil(); // I'm Sunil Gavaskar born in Maharashtra and I play for Mumbai in Ranji Tournament
