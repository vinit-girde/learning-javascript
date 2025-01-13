// for of , forEach and for in loop  and Map Object.

// for of and forEach loop is used to iterate arrays, strings, Sets and Maps.
const marvelHeros = [
  "Iron Man",
  "Captain America",
  "Hulk",
  "Thor",
  "Spider-Man",
];

for (const element of marvelHeros) {
  //   console.log(element);
}

/*
    Iron Man
    Captain America
    Hulk
    Thor
    Spider-Man
*/

marvelHeros.forEach((element) => {
  //   console.log(element);
});

/*
    Iron Man
    Captain America
    Hulk
    Thor
    Spider-Man
*/

for (const key in marvelHeros) {
  //   console.log(key); // logs index values from array
  //   console.log(marvelHeros[key]); // logs values of arrays
}

/*
    0
    Iron Man
    1
    Captain America
    2
    Hulk
    3
    Thor
    4
    Spider-Man
*/

const myObj = {
  id: 1,
  playerName: "Virat",
  batting: "Right-handed-Batsman",
  bowling: "Right-arm-slower-bowler",
};

// for (const [key, value] of myObj) {
//   console.log(key, value); // TypeError: myObj is not iterable
// }

// To loop object values use for in loop.

// for (const key in myObj) {
//   console.log(`The ${key} key value is ${myObj[key]}`);
// }

// ------------------------------------------------------------

/*
    The Map object holds key-value pairs and remembers the original insertion order of the keys. 
    It doesn't store duplicates key value pair.
    It updates it key's value if it finds another key with different value.
*/
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1, typeof map1, map1.size); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 } object 3

map1.set("a", 25);
console.log(map1, map1.size); // Map(3) { 'a' => 25, 'b' => 2, 'c' => 3 } 3

console.log(map1.has("a")); // true

map1.delete("c");

console.log(map1, map1.size); // Map(2) { 'a' => 25, 'b' => 2 } 2
