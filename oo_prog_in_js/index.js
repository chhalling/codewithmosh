// This file was created in Visual Studio Code using the StandardJS linter.
// Hence, tabs are 2 spaces and semicolons are not required.

// This course is for intermediate programmers who have some experience
// with JavaScript. If you don't have this experience, take Mosh Hamedani's
// JavaScrpt Basics for Beginners course first.

// ###########################################################################
// Getting started.
console.log('Getting started.')

// Object-oriented program is a paradigm for software development.

// The four pillars of OOP:
//  Encapsulation
//  Abstraction
//  Inheritance
//  Polymorphism

// An object has properties (nouns) and methods (verbs).
// In the browser, there is a JavaScript object named localStorage.
// (Enter localStorage in the Console.)

// An example of procedural code.
const baseSalary = 30000
const overtime = 10
const rate = 20

function getWage (baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}

const wage = getWage(baseSalary, overtime, rate)
console.log(wage)

// Object-oriented code has fewer parameters for its functions.
// Encapsulation groups related properties and functions together.
const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + (this.overtime * this.rate)
  }
}
const wage2 = employee.getWage()
console.log(wage2)

// Abstraction makes for a simpler interface by hiding details and complexity.
// It also helps reduce the impact of change. It is possible to change
// the inner code without affecting the use of the objects.

// Inheritance [is evil].
// Inheritance helps eliminate redundant code.

// Polymorphism helps get rid of if .. else or case statements.
// Different objects can all have render methods for drawing themselves.

// Setting up the environment.
// The course uses Visual Studio Code with the Live Server extension.

// Create the index.html file.
// In the empty file, enter a single exclamation point and press tab to
// generate the HTML boilerplate code.

// Create the index.js file and initialize it with:
console.log('Hello World')
console.log('')

// In VS Code, start Live Server. This starts an HTML server that renders
// the index.html page and executes the code in the index.js file.
// Open the page in Google Chrome (http://127.0.0.1/5500). Right-click
// on the window and select "Inspect" to view the output sent to the Console.

// ECMAScript 6 or ECMAScript 2015 (ES6 or ES2015).
// This course covers the following:
//  Objects
//  Prototypes
//  Prototypical Inheritance
//  ES6 Classes
//  Modules

// ###########################################################################
// Objects.
// This part of the course is a review of the material presented in
// JavaScript Basics for Beginners.

// Object literals.
console.log('Object literals.')
