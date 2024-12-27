console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true
console.log("String Ex", "hello" > 2); //false
console.log("String Ex-2", "" == 0); // true

/* 
    "2" and "02" is converted into number and then checked.
    "hello" this string cannot be converted into number so it is treated as NaN. ANd with NaN any operation is false.
*/

console.log("------------------------");
console.log("------------------------");
console.log("------------------------");

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null >= 0); // true

console.log("------------------------");

console.log(null === null); // true
console.log(null == null); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log("------------------------");
/*
    Note: 
         Comparisions (<,>,<=,>=) and Equality checks (=== , ==) works differently. In comparisions operations null gets converted into Number i.e 0. 
         Therefore , Line no 13 console returns true.
         "null" is only equal to itself and undefined without strict check .
*/

console.log(undefined == 0); //false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

/*
   Note :: undefined is converted into NaN value.
           Therefore , NaN is never equal to any value , including itself.
*/

// === --> Checks both value and datatype

console.log("2" === 2); // false
