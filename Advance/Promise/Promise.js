/*
    Promise -> Promise represents eventual completion or failure of asynchronous operation an it's resulting value.

    It has three states : 

    a. Pending : Initial state, neither fulfilled nor rejected.

    b. Resolve / Fulfilled : meaning the operation was completed successfully.

    c. Rejected : meaning the operation failed.

    To handle promises in js: 
    1. we can use either .then .catch blocks
    2. async await keyword with try catch block to handle errors
*/

// To create promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async operation started");
    // To execute then block we have call resolve()
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise fullfiled");
});

//  We can also declare variable to hold promise

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
    console.log("Promise One started executing");
  }, 2000);
});
promiseOne.then(function () {
  console.log("Then block of promise one is fullfiled");
});

// We can send data with resolve() to then block

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async operation of promiseTwo started");
    resolve({ userName: "Luka", clubName: "LA Lakers", jerseyNumber: 77 });
  }, 2000);
});

promiseTwo.then(function (response) {
  console.log("then block of PromiseTwo is fullfiled");
  console.log(response);
});

// Above examples of promises only displays the fullfilment of promises , if some errors occur then we have to use catch block to handle them.

const promiseThree = new Promise(function (resolve, reject) {
  // Condition if any error occur while fetching any req or any error
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("");
      resolve({
        userName: "AD",
        clubName: "Dallas Mavericks",
        jerseyNumber: 2,
      });
    } else {
      reject("Error: Something went Wrong");
    }
  }, 2000);
});

promiseThree
  .then((userName) => console.log("UserName:", userName))
  .catch((error) => console.log(error))
  .finally(() => console.log("Either promise is fullfiled or rejected"));

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFour() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFour();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     console.log(typeof response);
//     const data = await response.json();
//     console.log("Data", data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
