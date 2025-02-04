console.log("Linked");
// Reference variable for interval time
let intervalId;

// Function to generate random number
const generateRandomNumber = function () {
  let color = "#";
  let hex = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to change background color of document
function changeBackground() {
  document.body.style.backgroundColor = generateRandomNumber();
}

// Function to change background color after every start btn click
const onStartHandler = function () {
  intervalId = setInterval(() => {
    changeBackground();
  }, 1000);
};

// Function to stop background color change after stop btn click
const stopHandler = function () {
  clearInterval(intervalId);
};
