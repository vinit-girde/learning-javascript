//  We can declare string using : ""(double quotes) , ''(single quotes) , ``(backtick i.e string interpolation).

let playerName = "Magnus Carlsen";
let worldChampionCount = 8;
console.log(
  `Player name is ${playerName} and he has been world champion for record ${worldChampionCount} times.`
);

// We can also declare string using new String('') which gives string object.

let tournamentName = new String(" World Chess Rapid And Blitz Champions");

console.log(tournamentName); // [String: ' World Chess Rapid And Blitz Champions']
console.log(typeof tournamentName); // object

console.log(tournamentName.length); // 38

console.log(tournamentName.toUpperCase()); //  WORLD CHESS RAPID AND BLITZ CHAMPIONS

console.log(tournamentName.toLowerCase()); //  world chess rapid and blitz champions

console.log(tournamentName[0]); //      i.e This shows empty space

// To find characters at specific positions/indexes use "chartAt(position_number)"
console.log(tournamentName.charAt(2)); // o

// To find indexes of characters position from string use "indexOf('character')"
console.log(tournamentName.indexOf("o")); // 2

// subString() and slice() are both used to extracts portions of strings.
console.log(tournamentName.substring(0, 10)); //  World Che

console.log(tournamentName.slice(0, 10)); //  World Che

/* 
  Note : 
  slice() can take negative values as start/end index and start the count from the end of the string.
  substring() takes neative values as 0.
*/

console.log(tournamentName.slice(-10, 30)); // C

console.log(tournamentName.substring(10, 0)); //  World Che

// trim() is used to remove trailing white spaces from start and end

console.log(tournamentName.trim()); // World Chess Rapid And Blitz Champions

let newTournament = "Candidates - Winner - Gukesh";

// To replace a character use replace() and replaceAll()
console.log(newTournament.replace("-", " ")); // Candidates   Winner - Gukesh

console.log(newTournament.replaceAll("-", "")); // Candidates  Winner  Gukesh

// split using split(character_name) returns in array of each split result
console.log(newTournament.split("-")); // [ 'Candidates ', ' Winner ', ' Gukesh' ]

//TO check if substring is present in an original string use includes() ,it returns true id searched string is found else false.

console.log(newTournament.includes("Gukesh")); // true
