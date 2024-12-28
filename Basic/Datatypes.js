// Primitive Datatypes --->

// number --> values can be  from range  2 to the power 53.
// string --> can be used either from '' or "".For ex -> str= 'Hello'
// boolean --> either 'true' or 'false'.
// null --> this is used as empty value for variable.
// undefined --> value which is yet to be defined for variable.
// typeof  --> to know the type of datatype . For Ex ->

console.log(typeof "Steph"); // string
console.log(typeof 35); // number
console.log(typeof true); // boolean

/*  
   Note : Undefined and null datatypes are different . The type of undefined is "undefined" and the type of null is "object".
*/

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// Non-Primitive Datatype  / Reference Datatype:

// Object,Arrays,Function

// Two types of memory : Stack and Heap Memory

/*
     All Primitive Datatypes are stored in Stack Memory.In stack memory 
     new copy is created for variable.
*/

/*
    Non-primitive datatype are stored in Heap Memory.In Heap memory reference of copy is stored  and if changes done once reflect everywhere.
*/

// Heap memory example:
let userOne = {
  email: "vinit@amazon.com",
  id: "12345",
};

let userTwo = userOne;

userTwo.email = "vinit@google.com";

console.log("userTwo", userTwo);
// userTwo { email: 'vinit@google.com', id: '12345' }

console.log("userOne", userOne);
// userOne { email: 'vinit@google.com', id: '12345' }

// Since userTwo points to userOne reference the changes done on line no. 44 reflect to both objects.
