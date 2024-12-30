let date = new Date();
// console.log(typeof date); //object

// console.log(date); // 2024-12-30T12:43:37.674Z
// console.log(date.toString()); // Mon Dec 30 2024 18:15:18 GMT+0530 (India Standard Time)
// console.log(date.toDateString()); // Mon Dec 30 2024
// console.log(date.toLocaleDateString()); // 30/12/2024
// console.log(date.toLocaleString()); // 30/12/2024, 6:17:43 pm
// console.log(date.toISOString()); // 2024-12-30T12:48:43.683Z
// console.log(date.toJSON()); // 2024-12-30T12:48:43.683Z

let createdDate = new Date("2024-12-30");
console.log(createdDate.toDateString()); // Mon Dec 30 2024
console.log(createdDate.getDate()); // 30
console.log(createdDate.getDay()); // 1
console.log(createdDate.getFullYear()); // 2024

// Timestamp is used to compare time in situation like poll results.
let timestamp = Date.now();
console.log(timestamp); // 1735564121393

//  To convert timestamp into seconds simply divide the number by 1000 but it gives result in decimal value to overcome this use Math obj floor,round ().
console.log(timestamp / 1000); // 1735564121.393
console.log(Math.floor(timestamp / 1000)); // 1735564121
