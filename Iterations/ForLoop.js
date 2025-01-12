// For Loop , break and continue keywords

// Print num from 1 to 10
for (let index = 1; index <= 10; index++) {
  const element = index;
  //   console.log(element);
}

// Nested Loops
for (let i = 1; i <= 20; i++) {
  //   console.log("Outer Loop Value :", i);
  for (let j = 1; j <= 10; j++) {
    // console.log("Inner Loop", j);
  }
  //   console.log("---------------------------------");
}

// To print star pattern using nexted loops
for (let index = 0; index < 5; index++) {
  let text = "";
  for (let j = 0; j <= index; j++) {
    text = "*" + text;
  }
  console.log(text);
}
// // Table Printing from 1 to 20

for (let i = 1; i <= 20; i++) {
  //   console.log("Table of " + i + " ==> ");
  for (let j = 1; j <= 10; j++) {
    // console.log(i + " * " + j + " =", i * j);
  }
  //   console.log("---------------------------------");
}

// break => break keyword breaks out of execution loop and stops further execution.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // console.log("5 is deducted so it terminates from loop");
    break;
  }
  //   console.log("Value of i =", i);
}

// ---------------------------------------------------------------------

// continue => This keyword terminates the execution of statements in current iteration of loop and continues execution of loop from next iteration.

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  //   console.log(i); // Excluding 5 it will print every value from 1 to 10.
}
