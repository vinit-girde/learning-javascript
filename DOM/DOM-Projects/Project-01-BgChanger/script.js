// Get all buttons elements
const allButtons = document.querySelectorAll(".button");
console.log(allButtons); // NodeList collection of all button class elements

// get body element
const mainBody = document.querySelector("body");
console.log(mainBody);

// function to change color of body
function changeBgColor(colorName) {
  switch (colorName) {
    case "grey":
      mainBody.style.backgroundColor = colorName;
      break;
    case "white":
      mainBody.style.backgroundColor = colorName;
      break;
    case "blue":
      mainBody.style.backgroundColor = colorName;
      break;
    case "yellow":
      mainBody.style.backgroundColor = colorName;
      break;
    case "green":
      mainBody.style.backgroundColor = colorName;
      break;
    default:
      mainBody.style.backgroundColor = "#212121";
      break;
  }
}
allButtons.forEach(function (buttonItem) {
  // "buttonItem" holds each individual span element
  console.log(buttonItem);
  //   add event listener on buttonItem
  buttonItem.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    // call function to change background color
    changeBgColor(event.target.id);
  });
});
