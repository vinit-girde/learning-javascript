// grab clock id element
const clock = document.getElementById("clock");

// Call a function every one sec to update clock time
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
