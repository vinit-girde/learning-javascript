// // Arrays are collection of values stored in a variable.They are resizable.

let arr = [1, 2, 3, 4, 5, 67, 80];
// console.log(arr); // [ 1,  2,  3, 4, 5, 67, 80]
// console.log(typeof arr, arr.length); // object 7

// // push(),pop(),unswift(),swift(),includes(),indexof(),slice(),splice() and join().

// // push() --> The push method adds element at last position in array.
// console.log("123", arr.push(99)); // it gives length count .
// console.log("2345", arr); // [ 1,  2,  3, 4, 5, 67, 80,99]

// // To add multiple elements using push()
// arr.push(10, 20, 30, 40, 50, 60);
// console.log("Multiple elements-", arr, "Length-", arr.length); // [ 1,  2,  3, 4, 5, 67, 80, 99,10, 20, 30, 40, 50, 60] Length- 14

// // pop() --> The pop() removes last element position from array.
// arr.pop(619);
// console.log(arr, arr.length); //  [ 1,  2,  3, 4, 5, 67, 80, 99,10, 20, 30, 40, 50] 13

// // To remove multiple elements using pop().
// arr.pop(); //  [ 1,  2,  3, 4, 5, 67, 80, 99,10, 20, 30, 40] 12
// console.log(arr, arr.length);

// //unswift() --> This method inserts element at starting position in array.
let newArr = [1, 2, 3, 4, 5];
newArr.unshift(100);
// console.log(newArr); // [ 100, 1, 2, 3, 4, 5 ]

// To add multiple elements to starting position.
newArr.unshift(0, 1000, 4000);
// console.log(newArr); // [ 0 , 1000 , 4000 , 100 , 1, 2, 3, 4, 5 ]

// // shift() --> This method removes element from starting position from array.
newArr.shift();
// console.log(newArr); // [ 1000 , 4000 , 100 , 1, 2, 3, 4, 5 ]

// // includes() --> Searches the element passed to it and returns true or false.
let arrEx = new Array(10, 20, 30, 40, 50);
// console.log(arrEx);

// console.log(arrEx.includes(55)); // false

// indexof() --> get the index of the searched element by passing as parameter and if element is not present it returns -1 else it's index.

// console.log(arrEx.indexOf(40)); // 3
// console.log(arrEx.indexOf(134)); // -1

// join() --> Returns the combine elements in string format separated by comma.

let joinedArr = arrEx.join();
// console.log("ArrEx", arrEx, typeof arrEx); // ArrEx [ 10, 20, 30, 40, 50 ] object
// console.log("JoinedArr", joinedArr); // JoinedArr 10,20,30,40,50
// console.log(typeof joinedArr); // string

// slice --> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// let originalArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let slicedArr = originalArr.slice(1, 5);
// console.log("Original Arr", originalArr); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log("Sliced Arr", slicedArr); // Sliced Arr [ 20, 30, 40, 50 ]

// splice() --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// let originalArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let splicedArr = originalArr.splice(0, 3);
// console.log("Original Arr", originalArr); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log("SPliced Arr", splicedArr); // SPliced Arr [ 10, 20, 30 ]
// console.log("Original Arr after splice() operation", originalArr); // Original Arr after splice() operation [40,50,60,70,80,90,100]

/* 
    Note: 
    //  When we console the value at push or pop it gives length. ex at line no 10.
    1. push() --> 
                 We can add single or multiple elements at last position
                using push().

    2. pop()  --> 
                We cannot remove more than single element from last position using pop().
    
    3. unshift() -->
                    We can add single or multiple elements to starting position using unswiht().

    4. shift()  -->
                    We cannot remove more than single element from first position using shift().
    
    5. includes() --> 
                    Returns true/ false based on if the searched element is found or not.

    6. indexof() --> 
                    Returns the index of the element and if element is not present it returns -1.

    7. join()  --> 
                    Returns the combine elements in string format separated by comma.

    8. slice() --> 
                    Returns copy of section of original array.
                    If starting position is not present it starts with 0.
                    For any negative values for indexes , it starts from the end i.e -2 will second last position.

    9. splice() -->
                    It makes changes to original array .
                    Adds or deletes element from array.
*/
