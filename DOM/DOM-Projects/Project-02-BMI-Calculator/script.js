// grab form element
const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // grab height and weight from input box
  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  // grab results id to display messages
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid input value of height `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid input value of weight `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    // Add BMI classification (example)
    let classification;
    classification =
      bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : "Overweight";
    results.innerHTML += `<p>Classification: ${classification}</p>`;
  }
});
