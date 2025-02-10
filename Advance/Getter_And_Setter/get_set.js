/*
    In JavaScript, getters and setters are special methods that allow us to control access to an object's properties. Getters retrieve property values, while setters modify property values with additional logic like validation.

    ✅ Encapsulation – Protect and control access to properties.
    ✅ Validation – Ensure only valid data is assigned.
    ✅ Computed Properties – Generate values dynamically.
    ✅ Code Simplicity – Avoid explicit method calls (obj.getName(),  obj.setName('X')) by using property-like syntax (obj.name = 'X').

    A getter can prevent accidental modification by making a property read-only.

    ✅ Encapsulation – Control how a property is accessed.
    ✅ Computed properties – Return dynamically generated values.
    ✅ Read-only properties – Prevent unintended modifications.
    ✅ Future-proofing – Allow internal changes without breaking external code.
    ✅ Security (with #privateFields) – Enforce true data privacy.


    A setter can help to prevent modification of properties without validations.

    ✅ Setter hides the internal property and ensures it is modified only in controlled ways.
    ✅ Ensures that only valid data is stored.
    ✅ The setter allows controlled modifications, but if omitted, the property is read-only.

    "Setters in JavaScript allow us to validate input, encapsulate property modification, prevent accidental changes, trigger side effects like logging, and future-proof class design. Even though properties can be modified directly, setters provide control over how and when a property is updated, ensuring data integrity and maintainability."

    "In short, getters and setters in JavaScript help us control property access, validate input, and keep our code clean and maintainable. They're especially useful in object-oriented programming and when we need computed properties."
*/

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    // With a getter we can format, modify, or restrict access to the data before returning it .
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("Name must be at least 3 characters long.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("Donald");

console.log(user); // User { name: 'Donald' }

user.name = ""; // here anybody can modify the name propertyof user obj

console.log(user); // User { name: '' }

//To make it not be accessible and modify the value we use get and set

console.log(user._name); // Donald
console.log(user.name); // DONALD

// Since in above example code we don't have setter method we can't modify name property as we saw in line no. 28 above.

user.name = "Vinit"; // This won't work because there's no setter!
console.log(user); // User { _name: 'Donald' }

console.log(user); // User { _name: 'Vinit' } Since setter is added this will modify to Vinit.

user.name = "Al";

console.log(user); // Name must be at least 3 characters long. User { _name: 'Vinit' }
