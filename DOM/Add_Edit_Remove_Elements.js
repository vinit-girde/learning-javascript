// We will learn how to select , add , edit and remove elements using DOM Manipulation.

// Selecting list element
const listItem = document.querySelector(".languages");
// console.log(listItem);

// Initially 2 list items are present
// selecting first child value of ul element
const firstItemValue = listItem.firstElementChild.innerHTML;
// console.log(firstItemValue); // Javascript

// selecting last child value of ul element
const secondItemValue = listItem.lastElementChild.textContent;
// console.log(secondItemValue); // Typescript

// --------------------------------------------------------

// Add 3 li items i.e Python , Java , Go-Lang
function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  listItem.appendChild(li);
}
addLanguage("Python");
addLanguage("Java");
addLanguage("Go-Lang");

/*
    Another way to add element

     function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('Rust')
*/

// --------------------------------------------------------------

// Edit Go-Lang to C++
listItem.lastElementChild.textContent = "C++";
//                          OR
// const lastLang = listItem.lastElementChild;
// console.log(lastLang);
// lastLang.replaceWith((document.createElement("li").textContent = "C++"));

//                          OR
// Edit Javascript to JAVASCRIPT.
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>JAVASCRIPT</li>";

// -------------------------------------------------------------------

// TO remove --> remove()
// Remove C++ from list items
const lastlanguage = listItem.lastElementChild;
console.log(lastlanguage); // returns <li>C++</li>
lastlanguage.remove(); // removes C++ from lists
