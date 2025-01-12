/*
    while and do while difference is that do while loop will execute atleast one time before checking and meeting the condition.
*/

let index = 1;
while (index <= 10) {
  //   console.log("Value of index =", index);
  index = index + 1;
}

let i = 155;
do {
  console.log("Value of i :", i); // Value of i : 155
  i++;
} while (i < 5);
