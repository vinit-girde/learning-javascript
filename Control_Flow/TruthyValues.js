/* 
    Truthy Values in JS :
        true , any number greater than 0 , " " , "string_value", [] , {} , function(){}.

    Above are some truthy values which is treated as true in javascript.
*/

/*
    Falsey Values in JS :
        false , "" , 0 , -0 , BigInt 0n , null , undefined , NaN.
    
    Above are some falsely values which is treated as false in javascript.
*/

let userLists = [];

// if (userLists) {
//   console.log("True Values"); // True Values
// } else {
//   console.log("False Values");
// }

userLists = "";

// if (userLists) {
//   console.log("True Values");
// } else {
//   console.log("False Values"); // False Values
// }

// -------------------------------------------------------

// TO check if the array is empty or not:

let myArr = [];
// if (myArr.length === 0) {
//   console.log(`myArr is empty array`);
// } else {
//   console.log(`myArr is not an empty array`);
// }
// O/P -> myArr is empty array

//----------------------------------------------------------

//  To check if object is empty or not:

let obj = {};
// if (Object.keys(obj).length === 0) {
//   console.log("Obj is empty");
// } else {
//   console.log("Obj is not empty");
// }
// O/P -> Obj is empty

// -----------------------------------------------------------

// Nullish Coalescing Operator (??) : This operator depends on null and undefined keyword. The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

let val1;
val1 = null ?? 19;

console.log(val1); // 19

val1 = 10 ?? null;

console.log(val1); // 10

val1 = undefined ?? 24;

console.log(val1); // 24

// Ternary Operator (?) ==>

46 > 34
  ? console.log(" Number Greater  than 34")
  : console.log("Number Less than 34");

//  Number Greater  than 34
