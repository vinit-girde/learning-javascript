// Datatype Conversion

let exampleStr = "alignment";
// console.log(Number(exampleStr)); // NaN

let ausScore = "474";

// console.log(ausScore, typeof ausScore); // 474 string

// Note ::  to convert string into number type use "Number()"

let ausScoreInNumber = Number(ausScore);
// console.log(ausScoreInNumber, typeof ausScoreInNumber); // 474 number

// Check and convert  special types into number type.

let firstInngings = "474aus";
// console.log(firstInngings, typeof firstInngings); // 474aus string

let numberTypefirstInnings = Number(firstInngings);
// console.log(typeof numberTypefirstInnings); // number
// console.log(numberTypefirstInnings); // NaN

let someNumber = null;
let isSomeNumberANumberType = Number(someNumber);
// console.log(typeof isSomeNumberANumberType); // number
// console.log(isSomeNumberANumberType); // 0

let undefinedType = undefined;
// console.log(Number(undefinedType)); // NaN
// console.log(typeof Number(undefinedType)); //number

let booleanType = true;
// console.log(Number(booleanType)); // 1
// console.log(typeof Number(booleanType)); // number

let booleanFalseType = false;
// console.log(Number(booleanFalseType)); // 0
// console.log(typeof Number(booleanFalseType)); // number

/*
    Note ::  Check and convert  special types into number type.
     ==> means Number(R.H.S) 
    i.e Number('35') 

    "35" ==> 35 
    "35vinit" ==> NaN (Not a Number)
    'vinit' ==> NaN
    null ==> 0
    undefined  ==> NaN (Not A Number)
    true ==> 1 
    false ==> 0
*/

// Boolean to Number and Boolean to String type.

let isLoggedIn = 0;
let convertIntoBoolean = Boolean(isLoggedIn);
// console.log(convertIntoBoolean); // true
// console.log(typeof convertIntoBoolean); // boolean

let isSignedIn = 1;
let convertIoisSignedInBoolean = Boolean(isSignedIn);
// console.log(convertIoisSignedInBoolean); // true
// console.log(typeof convertIoisSignedInBoolean); // boolean

let isCompletedOne = "";
// console.log(typeof isCompletedOne); // string
// console.log(Boolean(isCompletedOne)); // false
// console.log(typeof Boolean(isCompletedOne)); // boolean

let isCompleted = "Magic";
// console.log(typeof isCompleted); // string
// console.log(Boolean(isCompleted)); // true
// console.log(typeof Boolean(isCompleted)); // boolean
/*
  // Number to boolean
  1  ==> true
  0  ==> false

 // String to Booelan
  '' ==> false
  'Magic' ==> true
*/

let str1 = "hello";
let str2 = " john";

let str3 = str1 + str2;
console.log(str3); // hello john

console.log("1" + 2); //12
console.log(typeof ("1" + 2)); // string
console.log(1 + "2"); // 12
console.log(typeof (1 + "2")); // string
console.log("1" + 2 + 2, typeof ("1" + 2 + 2)); // 122  string
console.log(1 + 2 + "2", typeof (1 + 2 + "2")); // 32   string

console.log(+true); // 1
console.log(+""); // 0

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

let gameCount = 100;
gameCount++;
console.log(gameCount); // 101

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

*/
