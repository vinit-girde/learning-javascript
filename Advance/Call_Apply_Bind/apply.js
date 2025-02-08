// This method is similar to call method but the arguments are passed in the array. i.e [arg1,arg2,...]

let nameObj = {
  fName: "Sachin",
  lName: "Tendulkar",
};

let anotherNameObj = {
  fName: "Virat",
  lName: "Kohli",
};

function introducePlayers(state, teamName) {
  console.log(
    `I'm ${this.fName} ${this.lName} born in ${state} and I play for ${teamName} in Ranji Tournament`
  );
}

introducePlayers.apply(nameObj, ["Maharashtra", "Mumbai"]); // I'm Sachin Tendulkar born in Maharashtra and I play for Mumbai in Ranji Tournament
introducePlayers.apply(anotherNameObj, ["Delhi", "Delhi"]);
// I'm Virat Kohli born in Delhi and I play for Delhi in Ranji Tournament
