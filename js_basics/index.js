// ###########################################################################
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
// This file is formatted with the StandardJS extension for Visual Studio Code.
// Getting Started.

// There are other output options for console, including
// console.info(), console.error(), console.assert(), etc.
// See https://developer.mozilla.org/en-US/docs/Web/API/Console.
console.log('Hello, World!')

// Declare and initialize a const.
// A const must be initialized.
// A const can't be reassigned, but if it is a reference type, the
// properties can be changed.
// In general, variables should be const unless they are reassigned,
// and StandardJS enforces this.
const name = 'Mosh'
console.log(name)

// Declare a variable without initializing it.
let firstName1
console.log(firstName1)

// ###########################################################################
// Basics.

// Primitives.
// let name = 'Mosh';  // SyntaxError error because name was already declared.
const firstName = 'Moshe'
console.log(firstName)
const age = 30.1
const isApproved = true
let lastName
const selectedColor = null
console.log(typeof name) // string
console.log(typeof undeclared) // undefined
console.log(typeof age) // number
console.log(typeof isApproved) // boolean
console.log(typeof lastName) // undefined
console.log(typeof selectedColor) // typeof null is "object"

// Objects.
const person = { name: 'Mosh', age: 30.1 }
console.log(person)
console.log(person.name)
// Use this notation when the name of the property is not known until
// the code runs.
const targetProperty = 'name'
console.log(person[targetProperty])

// Arrays.
const selectedColors = ['red', 'blue']
console.log(selectedColors[1])

// In VS Code, type "selectedColors." to see the properties and methods of the
// array.
console.log(selectedColors.values()) // Array Iterator {}

// Functions.
function greet (name) {
  console.log('Hello, ' + name)
}
greet('John')
greet('Mary')

function greet2 (firstName, lastName) {
  console.log('Hello, ' + firstName + ' ' + lastName)
}

// There is no error if you don't supply an argument. The missing
// argument is undefined.
greet2('John')
greet2('Mary', 'Jones')

// Create a function that calculates and returns a value.
function square (number) {
  return number * number
}
const number = square(2)
console.log(number)
console.log(square(2))
console.log('')

// ###########################################################################
// Operators
// A JavaScript expression produces a value.
// +, -, *, /, %, and ** operators.
let x = 10
const y = 3

// Toggle commenting code with cmd-/ in VS Code.
// Arithmetic operators.
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

// Increment operators.
console.log(x)
console.log(++x)
console.log(x++)
console.log(x)

// Decrement operators.
console.log(x)
console.log(--x)
console.log(x--)
console.log(x)

// Assignment operators.
let w = 10
w++
w = w + 5
w += 5
w = w * 3
w *= 3
console.log(w)

// Comparison operators.
x = 1
console.log(x > 0)
console.log(x = 1)
console.log(x < 1)
console.log(x <= 1)

// Equality
console.log(x === 1)
console.log(x !== 1)
console.log(x === 1) // Strict equality -- same type and value.
// The linter flags the next line.
// console.log(x == 1) // Loose equality.

console.log(x === '1') // false
// The linter flags the next line.
// console.log('1' == 1) // true

// Ternary operator.
const points = 110
const type = points > 100 ? 'gold' : 'silver'
console.log(type)

// This is how Moshe is looking at the console in these tutorials:
// He has started Live Server from within VS Code, and he is using the
// index.html page, which executes the index.js page.
// In Google Chrome, he has right-clicked on the window and chosen Inspect
// to view Console output in the Console tab.
//
// It is also possible to execute the index.js script using node.

// Logical operators.
// && ||
const highIncome = false
const goodCreditScore = true
let eligibleForLoan = highIncome && goodCreditScore
console.log('Eligible', eligibleForLoan)
eligibleForLoan = highIncome || goodCreditScore
console.log('Eligible', eligibleForLoan)
const applicationRefused = !eligibleForLoan
console.log('Application refused', applicationRefused)

// Logical operators with non-boolean values.
// The || operator returns the earliest of any truthy values or false.
// The && operator appears to return the latest of any truthy values
// and the first falsy value. This is short-circuiting.
console.log(false || 'Moshe') // 'Moshe'
console.log(false || 1) // 1
console.log('Moshe' || 1) // 'Moshe'
console.log('Moshe' && 1) // 1
console.log('Moshe' && 'Walter') // 'Walter'
console.log(false || 1 || 2) // 1
console.log(false && 1 && 2) // false
console.log(0 && 1 && 2) // 0
console.log(1 && 2 && 3) // 3

// Provide a default value and use it if the user has not
// chosen a value.
const userColor = undefined
const defaultColor = 'blue'
const currentColor = userColor || defaultColor
console.log(currentColor) // 'blue'

// Bitwise operators.
console.log(1 | 2) // 3
console.log(1 & 2) // 0

// Implement access control system using bitwise operators.
const readPermission = 4
const writePermission = 2
const executePermission = 1
let myPermission = 0
myPermission = myPermission | readPermission | writePermission | executePermission
console.log(myPermission) // 7
const message = (myPermission & readPermission) ? 'yes' : 'no'
console.log(message) // 'yes'

// Operator precedence.
console.log(2 + 3 * 4) // 14
console.log((2 + 3) * 4) // 20

// Exercise: swapping values.
let a = 'red'
let b = 'blue'
const c = a
a = b
b = c
console.log(a)
console.log(b)
console.log('')

// ###########################################################################
// Control flow
const hour = 10

if (hour >= 6 && hour < 12) {
  console.log('Good morning')
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon')
} else {
  console.log('Good evening')
}

const role = 'user'
switch (role) {
  case 'guest':
    console.log('Guest User')
    break
  case 'modeerator':
    console.log('Moderator User')
    break
  case 'admin':
    console.log('Admin user')
    break
  default:
    console.log('Unknown User')
}

// JavaScript loops.
//   for
//   while
//   do ... while
//   for ... in
//   for ... of

// for loops
for (let i = 0; i < 5; i++) {
  console.log('Hello, World!', i)
}

// Display the odd numbers from 1 to 5.
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// Display the odd numbers from 5 to 1.
for (let i = 5; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// while loop
let i = 0
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i)
  }
  i++
}

// do ... while loop
// tests after executing the code in the loop.
let j = 9
do {
  if (j % 2 !== 0) {
    console.log(j)
  }
  j++
} while (j <= 5)

// infinite loops
// Examples of infinite loops.
// An infinite loop might crash the browser.

// for ... in loops
// This does *not* work as in Python. The iterator returns
// keys into objects or indexes into arrays.
const person2 = {
  name: 'Mosh',
  age: 30
}

for (const key in person2) {
  console.log(key, person2[key])
}

const colors = ['red', 'green', 'blue']
for (const k in colors) {
  console.log(colors[k])
}

// for ... of loops
// This type of loop was introduced in ES6.
// This works with Array and certain other objects.
for (const color of colors) {
  console.log(color)
}

// break and continue
let l = 0
while (l <= 10) {
  if (l === 3) {
    l++
    continue
  }
  if (l === 5) {
    break
  }
  console.log(l)
  l++
}

// Exercises.
// Exercise 1.
// Write a function that takes two numbers and returns the maximum of the 2.

function maximum (x, y) {
  let maxval
  if (x > y) {
    maxval = x
  } else {
    maxval = y
  }
  return maxval
}

console.log(maximum(3, 4))
console.log(maximum(20, -3))

// Course solution is:
function max (a, b) {
  return (a > b) ? a : b
}

console.log(max(3, 4))
console.log(max(4, 3))
console.log(max(3, 3))

// Exercise 2. Landscape or portrait.
const dimensionArrays = [[5, 3], [3, 5], [3, 3]]
for (const dimensions of dimensionArrays) {
  console.log(dimensions, isLandscape(dimensions[0], dimensions[1]))
}
console.log('')

function isLandscape (width, height) {
  return width > height
}

// Exercise 3: FizzBuzz
for (let i = 1; i <= 30; i++) {
  console.log(i, fizzBuzz(i))
}
const input = 'three'
console.log(input, fizzBuzz(input))

function fizzBuzz (num) {
  let output = ''
  if (typeof num !== 'number') {
    output = 'Not a number'
  } else {
    let divFlag = false
    if (num % 3 === 0) {
      output += 'Fizz'
      divFlag = true
    }
    if (num % 5 === 0) {
      output += 'Buzz'
      divFlag = true
    }
    if (!divFlag) {
      output = num
    }
  }
  return output
}

// JavaScript allows initializing a variable without using
// let, var, or const. However, the linter flags this as an error.
// zz = 30
// ff = 40
// console.log(zz, ff)

// Exercise 4: Check speed, where speed limit is 70.
// If speed is less than or equal to 70 km/hr, return 'Ok'.
// Assign one demerit point for every 5 km/hr above 70. (72 km/hr
// results in 0 points.
// More than 12 points results in license suspension.
// Use Math.floor.
const testSpeeds = [20, 69, 70, 71, 75, 129, 130, 170]
for (const testSpeed of testSpeeds) {
  console.log(testSpeed, checkSpeed(testSpeed))
  console.log('')
}

function checkSpeed (speed) {
  const speedLimit = 70
  const speedMargin = 5
  const suspensionPoints = 12
  if (speed <= speedLimit) {
    return 'Ok'
  }
  const points = Math.floor((speed - speedLimit) / speedMargin)
  if (points >= suspensionPoints) {
    return 'License suspended'
  } else {
    return 'Points ' + points
  }
}

// Exercise 5: Even and odd numbers.
// Given an input number, count up to the number from 0 and
// print each number and whether it is 'EVEN' or 'ODD'
const testNumbers = [0, 1, 10, 15, 20]
for (const testNumber of testNumbers) {
  showNumbers(testNumber)
  console.log('')
}

function showNumbers (limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i, 'EVEN')
    } else {
      console.log(i, 'ODD')
    }

    // An alternative solution.
    // const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
    // console.log(i, message)
  }
}

// Exercise 6: Count Truthy.
// Given an array, return the number of truthy items in the array.

const testArrays = [
  [true, false, 1, ''],
  [4, 'Harold', '0', 0, undefined, null, NaN]]
for (const testArray of testArrays) {
  const truthyCount = countTruthy(testArray)
  console.log(testArray, truthyCount)
  console.log('')
}

function countTruthy (array) {
  let truthyCount = 0
  for (const item of array) {
    if (item) {
      truthyCount++
    }
  }
  return truthyCount
}

// Exercise 7.
// Given an object, show the object properties that are strings.
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
}

showProperties(movie)
console.log('')

function showProperties (obj) {
  for (const property in obj) {
    // Can't use dot notation for the property here because
    // the name of the property is dynamic.
    if (typeof obj[property] === 'string') {
      console.log(property, obj[property])
    }
  }
}

// Exercise 8.
// Sum of multiples of 3 and 5.
const testLimits = [0, 2, 6, 10]
for (const testLimit of testLimits) {
  console.log(testLimit, sum(testLimit))
}
console.log('')

function sum (limit) {
  let total = 0
  for (let i = 0; i <= limit; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      total += i
    }
  }
  return total
}

// Exercise 9.
// Grade.
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const scores = [80, 80, 50]
console.log(calculateGrade(scores))
console.log(calculateGrade2(scores))
console.log('')

function calculateGrade (scores) {
  // Calculate the average score.
  let scoreTotal = 0
  for (const score of scores) {
    scoreTotal += score
  }
  const averageScore = scoreTotal / scores.length

  // Convert the average score to a grade.
  let grade
  if (averageScore >= 90) {
    grade = 'A'
  } else if (averageScore >= 80) {
    grade = 'B'
  } else if (averageScore >= 70) {
    grade = 'C'
  } else if (averageScore >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }
  return grade
}

// Apply separation of responsibilities.
function calculateAverage (values) {
  let total = 0
  for (const value of values) {
    total += value
  }
  return total / values.length
}

function calculateGrade2 (scores) {
  const averageScore = calculateAverage(scores)

  // Convert the average score to a grade.
  let grade
  if (averageScore >= 90) {
    grade = 'A'
  } else if (averageScore >= 80) {
    grade = 'B'
  } else if (averageScore >= 70) {
    grade = 'C'
  } else if (averageScore >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }
  return grade
}

// Exercise 10.
// Show stars.
const counts = [1, 2, 5, 10]
for (const count of counts) {
  showStars(count)
}
console.log('')

function showStars (count) {
  for (let i = 1; i <= count; i++) {
    let stars = ''
    for (let j = 1; j <= i; j++) {
      stars += '*'
    }
    console.log(stars)
  }
}

// Exercise 11
// Prime numbers.
const values2 = [5, 10, 100]
for (const value2 of values2) {
  showPrimes(value2)
}

function showPrimes (value) {
  for (let number = 2; number < value; number++) {
    if (isPrime(number)) {
      console.log(number)
    }
  }
}

function isPrime (number) {
  for (let factor = 2; factor < i; factor++) {
    if (number % factor === 0) {
      return false
    }
  }
  return true
}

// ###########################################################################
// Objects.
// Basics.
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function () {
    console.log('draw')
  }
}
circle.draw()

// Factory functions.
function createCircle (radius, location, isVisible) {
  return {
    radius,
    location,
    isVisible,
    draw () {
      console.log('draw')
    }
  }
}

// Create and display the objects in the console.
// In Google Chrome, in the Console, one can see the attributes of each object
// by logging the object.
const circle1 = createCircle(1, { x: 1, y: 1 }, true)
console.log(circle1)

const circle2 = createCircle(2, { x: 1, y: 1 }, false)
console.log(circle2)

// Constructor functions.
// Use Pascal notation by convention for constructors.
function Circle (radius, location, isVisible) {
  this.radius = radius
  this.location = location
  this.isVisible = isVisible
  this.draw = function () {
    console.log('draw')
  }
}

const circle3 = new Circle(3, { x: 2, y: 0 }, false)
console.log(circle3)

// The difference between factory functions and constructor functions.
// Both patterns are equally good. The constructor function feels more
// natural to C++ or C# programmers.
// Pick one pattern and stick to it.

// Dynamic nature of objects.
// It is possible to add more properties and methods to an existing object.
// It is also possible to delete a property or method using the delete operator.
// Note that the const declaration means only that we cannot reassign the
// variable name circle4; however we can still modify the properties and methods
// of the circle4 object. (I hate JavaScript.)
const circle4 = {
  radius: 1
}
console.log(circle4)

circle4.color = 'yellow'
circle4.draw = function () {}
console.log(circle4)

delete circle4.color
delete circle4.draw
console.log(circle4)

// The constructor property of an object.
// Every object has a constructor property that records the function
// that created the object.
// In the Chrome Console, enter
// circle4.constructor
// The constructor is Object().
// circle3.constructor
// Strings can be created as literals using '', "", or ``.
// StandardJS says to not use the String and Boolean constructors.
// const str1 = new String('String 1')
// console.log(str1)
// const bool1 = new Boolean(true)
// console.log(bool1)

const str2 = 'String 2'
console.log(str2)
const bool2 = true
console.log(bool2)

// Functions are objects.
// Enter Circle. to see the properties and methods of the Circle function.
// Circle.
// In the Console, enter Circle.name (returns "Circle").
// Circle.length returns the number of arguments.
// Circle.constructor -- the constructor was Function.
// Use Function to create a function that acts as a constructor.
// StandardJS doesn't like this.
// const Circle1 = new Function('radius', `
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw')
//   }
//   `)

// // Must use new here to create a Circle2 object.
// const circ1 = new Circle1(2)
// // Convert the object {} into a Cirlce object, passing 1 for the radius.
// // This is horribly obscure. But this is what happens when new Circle1()
// // is called -- an empty object is created, which is then passed to
// // Circle1.call().
// const another = Circle1.call({}, 1)
// console.log(Circle1)
// console.log(another)
// console.log(circ1)
// // Use Circle1.apply({}, [1, 2, 3]) if you have an array of arguments.

// Value types versus reference types.
// Value types are primitives.
// The primitives are Number, String, Boolean, Symbol, undefined, and null.
// Reference types are Object, Function, and Array.
let xx = 10
const yy = xx
xx = 20
console.log(xx, yy)

// Reference types. xo and yo are references to the same object.
const xo = { value: 10 }
const yo = xo
xo.value = 20
console.log(xo, yo)

// This doesn't change the value of num1 because the value of a primitive
// is copied into the function's parameter variable.
const num1 = 10
function increase (num1) {
  num1++
}
increase(num1)
console.log(num1)

// Now do this with a reference type.
const obj1 = { value: 10 }
function increase1 (obj) {
  obj.value++
}
console.log(obj1)
increase1(obj1)
console.log(obj1)

// Enumerating properties of an object.
const circ5 = {
  radius: 1,
  draw () {
    console.log('draw')
  }
}
// Can use 'key in circ5' but not 'key of circ5' because
// circ5 is not iterable.
for (const key in circ5) {
  console.log(key, circ5[key])
}
// This fails because circ5 is not iterable.
// for (const value of circ5) {
//   console.log(value)
// }

// Another way to iterate through the keys of the object.
for (const key of Object.keys(circ5)) {
  console.log(key, circ5[key])
}

// Entries are key and value pairs.
for (const entry of Object.entries(circ5)) {
  console.log(entry)
}

// Search for keys in an object.
if ('radius' in circ5) {
  console.log('yes')
}

// Cloning an object.
const circ6 = {
  radius: 1,
  draw () {
    console.log('draw')
  }
}

// This is not recommended.
const another6 = {}
for (const key in circ6) {
  another6[key] = circ6[key]
}
console.log(circ6)
console.log(another6)

// Copy object entries to another object this way.
// This example clones the object because the destination is
// an empty object.
const another7 = Object.assign({}, circ6)
console.log(another7)

// This adds entries to another object that already has an entry.
const another8 = Object.assign({ color: 'yellow' }, circ6)
console.log(another8)

// A more elegant way to clone an object is through use of the spread operator.
// The spread operator expands an iterable in a place where zero or
// more arguments or elements are expected or an object expression
// to be expanded in places where zero or more key-value pairs tor
// object literals are expected.
const another9 = { ...circ6 }
console.log(another9)

// Garbage collection.
// The coder has no control over garbage collection.

// Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// String primitives are turned into String objects temporarily to provde
// properties and methods as needed.
const message1 = 'This is my first message'
console.log(typeof message1) // 'string'
console.log(message1.length)
console.log(message1[0])
console.log(message1.includes('my'))
console.log(message1.substring(0, 6))
console.log(message1.indexOf('i', 3))
console.log(message1.replace('first', 'second'))
console.log(message1)
console.log(message1.startsWith('This'))
console.log(message1.endsWith('age'))
console.log(message1.toUpperCase())
console.log(message1.toLocaleLowerCase())
console.log(message1.split(' '))
console.log('\'' + '  this is a string  '.trim() + '\'')
// const message2 = new String('h1')
// console.log(typeof message2) // 'object'

// Template literals.
// These were introduced in ES6.
const message3 = 'This is my\n \'first\' message'
console.log(message3)
const message4 = `This is my
'first' message`
console.log(message4)

const message5 =
`Hi John,

Thank you for joining my mailing list.

Regards,
Mosh`
console.log(message5)

const name6 = 'Walter'
const message6 =
`Hi ${name6},

Thank you for joining my mailing list.

Regards,
Mosh`
console.log(message6)
console.log('')

// Dates
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const now = new Date()
console.log(now)
const date1 = new Date(-62167201438000)
console.log(date1)
const date2 = new Date('May 11 2018 00:00:00 CDT')
console.log(date2)
const date3 = new Date(2020, 0, 2, 16, 30, 45)
console.log(date3)
date3.setFullYear(2019)
console.log(date3.toDateString())
console.log(date3.toISOString())
console.log('')

// Exercises.
// Exercises 1 & 2.
// Create an Address object with the following properties:
//  street
//  city
//  zipCode
//  method showAddress that prints the property and its value.

// Using an object literal and an associated function.
const address1 = {
  street: 'Cambria Street',
  city: 'Somerville',
  zipCode: '02143'
}
function showAddress (address) {
  for (const key in address) {
    console.log(key, address[key])
  }
}
console.log('showAddress(address1)')
showAddress(address1)
console.log('')

// Using an object factory.
function createAddress (street, city, zipCode) {
  const address = {
    street: street,
    city: city,
    zipCode: zipCode,
    show: function () {
      for (const key of ['street', 'city', 'zipCode']) {
        console.log(key, this[key])
      }
    }
  }
  return address
}
const address2 = createAddress('Cambria Street', 'Somerville', '02143')
console.log('address2', address2)
console.log('address2.show()')
address2.show()
console.log('')

// Using a constructor with a method.
function Address (street, city, zipCode) {
  this.street = street
  this.city = city
  this.zipCode = zipCode
  this.show = function () {
    for (const key in this) {
      console.log(`${key}:`, this[key])
    }
  }
}
const address3 = new Address('Cambria Street', 'Somerville', '02143')
console.log('address3.show()')
address3.show()
console.log('')

// Exercise 3.
// Testing object equality and equivalence.
const address4 = new Address('a', 'b', 'c')
const address5 = new Address('a', 'b', 'c')
const address6 = address5

function areEqual (address1, address2) {
  // Test all keys, properties and methods.
  for (const key in address1) {
    if (address1[key] !== address2[key]) {
      console.log(`areEqual failed with key '${key}'`)
      return false
    }
  }
  return true
}

function areEqual2 (address1, address2) {
  // Test only the properties and not the method.
  return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
}

function areSame (address1, address2) {
  return address1 === address2
}

// address4 and address5 have different show methods.
console.log(areEqual(address4, address5)) // false
console.log(areEqual2(address4, address5)) // true
console.log(areSame(address4, address5)) // false
console.log(areSame(address5, address6)) // true
console.log('')

// Exercise 4
// Blog post object.
// Create an object with the following properties using object literal syntax:
//  title
//  body
//  author
//  views
//  comments
//    author
//    body
//  isLive
const post1 = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 23,
  comments: [
    { author: 'd', body: 'e f g' },
    { author: 'h', body: 'i j k' }
  ],
  isLive: true
}
console.log(post1)
console.log('')

// Exercise 5
// Constructor functions.
// Accomplish the previous exercise using constructor functions.
function Comment (author, body) {
  this.author = author
  this.body = body
}

function Post (title, body, author) {
  // Set some properties to default values.
  this.title = title
  this.body = body
  this.author = author
  this.views = 0
  this.comments = []
  this.isLive = false
  this.incrementViews = function () {
    this.views++
  }
  this.addComment = function (comment) {
    this.comments.push(comment)
  }
  this.setIsLive = function (value) {
    this.isLive = value
  }
}

const post2 = new Post('a', 'b', 'c')
// See the value of post2 at the moment it is logged.
// Otherwise, we see a reference to the object, which is updated
// later on.
console.log(JSON.stringify(post2))
console.log(JSON.parse(JSON.stringify(post2)))
const comment1 = new Comment('d', 'e f g')
const comment2 = new Comment('h', 'i j k')
post2.addComment(comment1)
post2.addComment(comment2)
post2.incrementViews()
post2.setIsLive(true)
console.log(post2)
console.log('')

// Exercise 6.
// Price range object.
// Create objects for the price ranges used by Yelp
//  $: Inexpensive
//  $$: Moderate
//  $$$: Pricey
//  $$$$: Ultra High-End
// Needed properties are:
//  description
//  symbol
//  monetaryUnit
//  lowPrice
//  highPrice
function PriceRange (symbol, description, monetaryUnit, lowPricePerPerson, highPricePerPerson) {
  this.symbol = symbol
  this.description = description
  this.monetaryUnit = monetaryUnit
  this.lowPricePerPerson = lowPricePerPerson
  this.highPricePerPerson = highPricePerPerson
}

const inexpensive = new PriceRange('$', 'Inexpensive', 'US dollar', 0, 20)
const moderate = new PriceRange('$$', 'Moderate', 'US dollar', 20, 50)
const pricey = new PriceRange('$$$', 'Pricey', 'US dollar', 50, 200)
console.log(inexpensive, moderate, pricey)
console.log('')

// ###########################################################################
// Arrays
// Adding array elements.
const numbers = [3, 4]
console.log(numbers)
numbers.push(5, 6)
console.log(numbers)
numbers.unshift(1, 2)
numbers.splice(2, 1, 'a', 'b')
console.log(numbers)
console.log('')

// Finding elements (primitives).
const numbers2 = [1, 2, 3, 1, 4]
console.log(numbers2.indexOf('a')) // -1
console.log(numbers2.indexOf(2)) // 1
console.log(numbers2.indexOf('1')) // -1
console.log(numbers2.lastIndexOf(1)) // 3
console.log(numbers2.includes(1)) // true
console.log(numbers2.indexOf(1)) // 0
console.log(numbers2.indexOf(1, 1)) // 3

// Finding elements (reference types).
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
]
// Not found by .includes() because these are two different objects.
console.log(courses.includes({ id: 1, name: 'a' })) // false
console.log(courses.includes(courses[1])) // true

// The .find() method requires a callback function that returns true or false.
// The callback is a predicate function, a function that returns a boolean.
// .find() returns undefined or the object that meets the criteria in the
// callback function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const course1 = courses.find(
  function (course) {
    return course.name === 'a'
  }
)
console.log(course1) // { id: 1, name: 'a' }

const course2 = courses.find(
  function (course) {
    return course.name === 'xyz'
  }
)
console.log(course2) // undefined

const course3 = courses.findIndex(
  function (course) {
    return course.name === 'a'
  }
)
console.log(course3) // 0

// Arrow functions.
// Introducted in ES6. These make it easier to write small functions.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Arrow functions are ill-suited as methods, and they cannot be used
// as constructors.
const course4 = courses.findIndex(course => course.name === 'b')
console.log(course4)

// Removing elements.
// From the end:
const numbers3 = [1, 2, 3, 4]
const last = numbers3.pop()
console.log(numbers3) // [1, 2, 3]
console.log(last) // 4

// From the start:
const first = numbers3.shift()
console.log(numbers3)
console.log(first)

// From the middle:
const numbers4 = [5, 6, 7, 8]
const deleted = numbers4.splice(2, 1) // at index 2, remove 1 element
console.log(deleted) // [7]
console.log(numbers4) // [5, 6, 8]

// Emptying an array.
// Reassignment to the empty array.
let numbers5 = [1, 2, 3, 4]
const another5 = numbers5
numbers5 = []
console.log(numbers5) // []
console.log(another5) // [1, 2, 3, 4]

// Set the length property.
// This is the recommended method.
// (There should be a truncate method.)
const numbers6 = [3, 4, 5, 6]
numbers6.length = 0
console.log(numbers6) // []

// Delete elements using splice.
const numbers7 = [4, 5, 6, 7]
numbers7.splice(0, numbers7.length)
console.log(numbers7) // []

// Delete using unshift or pop.
const numbers8 = [2, 3, 6, 7]
while (numbers8.length > 0) {
  numbers8.pop()
}
console.log(numbers8) // []

// Combining and slicing arrays.
const first1 = [1, 2, 3]
const second1 = [4, 5, 6]
const combined = first1.concat(second1)
console.log(combined)

// combined.slice(begin, end)
// The element at coordinate end is not included in the result.
// If end is omitted, all elements beginning at begin are included.
// For reference types, the references are copied.
const slice = combined.slice(2, 4)
console.log(slice)
const copy = combined.slice()
console.log(copy)

const first2 = [{ id: 1 }]
const combined2 = first2.concat(second1)
first2[0].id = 10
console.log(combined2[0].id) // 10

// The spread operator. This is cleaner than using concat.
const first3 = [1, 2, 3]
const second3 = [4, 5, 6]
const combined3 = [...first3, 'a', ...second3, 'b']
console.log(combined3)
// A quick copy.
const copy2 = [...combined3]
console.log(copy2)

// Iterating an array.
const numbers9 = [1, 2, 3]
for (const number of numbers9) {
  console.log(number)
}

// Iteration using forEach, which needs a callback function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Apply a function to each value of the array.
numbers9.forEach(function (number) { console.log(number) })
numbers9.forEach(number => console.log(number))
numbers9.forEach((number, index) => console.log(index, number))

// Joining arrays to create a string.
const joined = numbers9.join(',')
console.log(joined) // '1,2,3'

// Splitting a string into numbers.
const strInts = joined.split(',')
console.log(strInts)
const ints = strInts.map(num => parseFloat(num))
console.log(ints)

// Splitting and rejoining.
// This can be used to build a URL slug.
// https://stackoverflow.com/questions/9543518/creating-arrays-in-javascript
// Take a title such as 'Creating arrays in Javascript' and convert it to
// the URL slug 'creating-arrays-in-javascript'.
const message7 = 'This is my first message'
const parts = message7.split(' ')
const combined4 = parts.join('-')
console.log(combined4)

// Sorting arrays.
const numbers10 = [2, 3, 1]
numbers10.sort()
console.log(numbers10)
numbers10.reverse()
console.log(numbers10)

// Sorting objects using case-insensitive sorting.
const courses2 = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javaScript' }
]
courses2.sort(function (a, b) {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
})
console.log(courses2)
console.log('')

// Testing every element of an array.
console.log('Testing every element of an array.')
const numbers11 = [1, 2, 3, -1]
const allPositive = numbers11.every(function (value) {
  return value >= 0
})
console.log(allPositive)
const allPositive2 = numbers11.every(value => value >= 0)
console.log(allPositive2)
console.log('')

// Testing some elements of an array.
console.log('Testing some elements of an array.')
const somePositive = numbers11.some(function (value) {
  return value >= 0
})
console.log(somePositive)
const somePositive2 = numbers11.some(value => value >= 0)
console.log(somePositive2)
console.log('')

// Filtering an array.
console.log('Filtering an array.')
// This can be expanded to filtering objects based on their properties.
const filtered = numbers11.filter(function (value) {
  return value >= 0
})
console.log(filtered)
const filtered2 = numbers11.filter(value => value >= 0)
console.log(filtered2)
console.log('')

// Mapping an array.
const numbers12 = [1, -1, 2, 3]
const filtered12 = numbers12.filter(n => n >= 0)
const items12 = filtered12.map(n => '<li>' + n + '</li>')
const html12 = '<ul>' + items12.join('') + '</ul>'
console.log(html12)

// Mapping values to new objects.
const items13 = filtered12.map(n => {
  return { value: n }
})
console.log(items13)

// Can this be simplified? JavaScript confuses object literal
// creation with a code block, so surround the object literal
// with parentheses.
// items14 below is [undefined, undefined, undefined]
// const items14 = filtered12.map(n => { value: n })
const items14 = filtered12.map(n => ({ value: n }))
console.log(items14)

// Chain the array methods. Use the convention of putting each
// method on its own line.
const numbers15 = [1, -1, 2, 3]
const items15 = numbers15
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value)
console.log(items15)
console.log('')

// Reducing an array.
// A simple summation function.
const numbers16 = [1, -1, 2, 3]
let sum16 = 0
for (const n of numbers16) {
  sum16 += n
}
console.log(sum16) // 5

// The Array.reduce method takes two arguments, where the first
// is the accumulator.
const sum17 = numbers16.reduce((sum, n) => sum + n)
console.log(sum17) // 5

// Here is how to set the initial value using arrow functions
// or a standard function.
const sum18 = numbers16.reduce((sum, n) => sum + n, 12)
console.log(sum18) // 17

const sum19 = numbers16.reduce(function (sum, n) { return sum + n }, 17)
console.log(sum19)
console.log('') // 22

const product = numbers16.reduce(
  (multiplicand, multiplier) => multiplicand * multiplier)
console.log(product) // -6

const quotient = numbers16.reduce((dividend, divisor) => dividend / divisor)
console.log(quotient) // -0.1666666666666666 [-1/6]
console.log('')

// Exercises.
// Exercise 1.
// Array from range.
// For other approaches, see
// https://stackoverflow.com/questions/8273047/javascript-function-similar-to-python-range.
const numbers20 = arrayFromRange(-10, -4)
console.log(numbers20)
function arrayFromRange (min, max) {
  const result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}
console.log('')

// Exercise 2.
// Includes.
// Write a function that implements the Array.prototype.includes method.
const numbers21 = [1, 2, 3, 4]
console.log(numbers21.includes(1))
console.log(includes(numbers21, 1))
function includes (array, searchElement) {
  for (const element of array) {
    if (element === searchElement) {
      return true
    }
  }
  return false
}
console.log('')

// Exercise 3.
// Except.
// Given an existing array and an array of values to remove (except) from
// the original array, return a new array with the values removed.
const numbers22 = [1, 2, 3, 4, 1, 1, 1]
const exclude22 = [1, 2]
const output22 = except(numbers22, exclude22)
console.log(output22)
console.log(numbers22)
const output23 = except2(numbers22, exclude22)
console.log(output23)
console.log('')

function except (array, excluded) {
  // My solution.
  // Somehow this function does not modify the input array.
  for (const item of excluded) {
    array = array.filter(value => value !== item)
  }
  return array
}

function except2 (array, excluded) {
  // This is Mosh's solution.
  const output = []
  for (const element of array) {
    if (!excluded.includes(element)) {
      output.push(element)
    }
  }
  return output
}

// Exercise 4.
// Move an element.
// [1, 2, 3, 4]
// 0, 1 => [2, 1, 3, 4]
// 1, -1 => [2, 1, 3, 4]
console.log('Exercise: Move an element.')
const numbers24 = [1, 2, 3, 4]
const index = 1
const offset = 2
try {
  const output24 = move(numbers24, index, offset)
  console.log(output24)
} catch (error) {
  console.error(error)
}

try {
  const output25 = move2(numbers24, index, offset)
  console.log(output25)
} catch (error) {
  console.error(error)
}

const output26 = move3(numbers24, index, offset)
console.log(output26)
console.log('')

// Create an exception for invalid input.
function UserException (message) {
  this.message = message
  this.name = 'UserException'
}

function move (array, index, offset) {
  // Check inputs.
  if ((index >= array.length) ||
  (index < 0) ||
  (index + offset >= array.length) ||
  (index + offset < 0)) {
    throw new UserException('Invalid index-offset commbination: ' + index + ', ' + offset)
  }

  // This algorithm works, but it's not as simple as I would hope.
  // All other elements stay in the same order except the one being moved
  // from position index to position index + offset.
  const output = []

  if (offset >= 0) {
    for (let i = 0; i < index; i++) {
      output.push(array[i])
    }

    for (let i = index + 1; i <= index + offset; i++) {
      output.push(array[i])
    }

    output.push(array[index])

    for (let i = index + offset + 1; i < array.length; i++) {
      output.push(array[i])
    }
  } else {
    for (let i = 0; i < index + offset; i++) {
      output.push(array[i])
    }

    output.push(array[index])

    for (let i = index + offset; i < index; i++) {
      output.push(array[i])
    }

    for (let i = index + 1; i < array.length; i++) {
      output.push(array[i])
    }
  }

  return output
}

function move2 (array, index, offset) {
  // Check inputs. We should raise an exception here.
  if ((index >= array.length) ||
  (index < 0) ||
  (index + offset >= array.length) ||
  (index + offset < 0)) {
    throw new UserException('Invalid index-offset commbination: ' + index + ', ' + offset)
  }

  // This is a better algorithm. Move the item into the new array
  // and then copy the other elements in order, skipping the already
  // moved item.
  const output = []
  output[index + offset] = array[index]
  let src = 0
  let dest = 0
  while (src < array.length && dest < array.length) {
    if (src === index) {
      // Skip this source because it was already copied.
      src += 1
    } else {
      if (dest === index + offset) {
        // Skip this destination because it is already occupied.
        dest += 1
      } else {
        // Copy the item.
        output[dest] = array[src]
        src += 1
        dest += 1
      }
    }
  }
  return output
}

// Mosh's algorithm is much simpler; he is using splice.
function move3 (array, index, offset) {
  // Validate inputs. splice() doesn't weird things with invalid inputs.
  const position = index + offset
  if ((position >= array.length) || (position < 0)) {
    console.error('Invalid offset')
    return
  }

  // Copy the array using the spread operator.
  const output = [...array]
  // Remove an element using splice, keeping the removed element.
  const element = output.splice(index, 1)[0]
  // Insert the element without deleting anything.
  output.splice(position, 0, element)
  return output
}

// Exercise 5.
// Count occurrences of an element in an array.
console.log('Count occurrences.')
const numbers25 = [1, 2, 3, 4, 1]
const count = countOccurrences(numbers25, 1)
console.log(count)
console.log('')

function countOccurrences (array, searchElement) {
  return array.reduce((acc, cur) => acc + (cur === searchElement ? 1 : 0), 0)
}

// Exercise 6.
// Get max.
console.log('Get max.')
const numbers26 = [1, 4, 2, 3]
const max26 = getMax(numbers26)
console.log(max26)
console.log('')

function getMax (array) {
  if (array.length === 0) {
    return undefined
  }
  return array.reduce((acc, cur) => acc > cur ? acc : cur)
}

// Exercise 7.
// Movies.
// Select all movies in 2018 with rating > 4.
// Sort them by their rating in descending order.
// Pick their title.
console.log('Movies.')
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
]

const result = movies
  .filter(val => val.year === 2018)
  .filter(val => val.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(val => val.title)
console.log(result)
console.log('')

// ###########################################################################
// Function declarations vs. expressions.
console.log('Functions.')

// Function declaration.
function walk () {
  console.log('walk')
}

// Function expression using an anonymous function.
const run = function () {
  console.log('run')
}

const move1 = run

walk()
run()
move1()
console.log('')

// Hoisting.
// A function created using a function definition is hoisted: It can
// be called before it is defined. This does not work with a function
// expression.
console.log('Hoisting.')

walk1()
// run1() // ReferenceError.

function walk1 () {
  console.log('walk1')
}

const run1 = function () {
  console.log('run1')
}
run1()
console.log('')

// Arguments.
// Every function has a property named 'arguments', an iterator
// containing the keys of the arguments passed to the function.
console.log('Arguments.')
function sum3 (a, b) {
  console.log(arguments)
  return a + b
}

console.log(sum3(1, 2)) // 3
console.log(sum3(1)) // NaN
console.log(sum3()) // NaN
console.log(sum3(1, 'a')) // '1a'
console.log(sum3('a', 'b')) // 'ab'
console.log(sum3(1, 2, 3, 4, 5)) // 3

// Because we have access to the arguments iterator, we can
// generate the sum using arguments. Later we'll see a better
// way to do this.
function sum4 () {
  let total = 0
  for (const value of arguments) {
    total += value
  }
  return total
}
console.log(sum4(1, 2, 3, 4, 5))
console.log('')

// The rest operator.
console.log('Rest operator.')
function sum5 (...args) {
  return args.reduce((acc, val) => acc + val, 0)
}
console.log(sum5(1, 2, 3, 4, 5, 10))

function sum6 (discount, ...prices) {
  const total = prices.reduce((acc, val) => acc + val, 0)
  return total * (1 - discount)
}
console.log(sum6(0.1, 20, 30))
console.log('')

// Default parameters.
// Introduced in EC6.
// As a best practice (not enforced by EC6), only the
// last parameters in a function should have default values.
console.log('Default parameters.')
function interest (principal, rate = 3.5, years = 5) {
  return principal * (rate / 100) * years
}
console.log(interest(10000)) // 1750.0000000000002

// Look at how unfriendly the language is. This can be the source
// of many bugs.
function interest2 (principal, rate = 3.5, years) {
  return principal * (rate / 100) * years
}
console.log(interest2(10000)) // NaN
console.log(interest2(10000, 5)) // NaN
console.log(interest2(10000, 3.5, 5)) // 1750.0000000000002
console.log(interest2(10000, undefined, 5)) // 1750.0000000000002
console.log('')

// Getters and Setters.
// This is a good example.
console.log('Getters and setters.')

// We might want to use a person's full name in several places in the code.
// It is inconvenient to always have to do:
const person3 = {
  firstName: 'Mosh',
  lastName: 'Hamedani'
}
console.log(`${person3.firstName} ${person3.lastName}`)

// Instead, we could add a method that delivers this string.
const person4 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(person4.fullName())

// This can be coded as:
const person5 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(person5.fullName())

// So what if we want to set a fullName property or get the full name as if
// it were a property (person.fullName)? This is where we use getters and
// setters.
const person6 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName (value) {
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}
console.log(person6.fullName)

// Now we can set the property.
person6.fullName = 'John Smith'
console.log(person6)
console.log('')

// try and catch.
console.log('try and catch.')
const person7 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName (value) {
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

// This returns a TypeError exception:
// person7.fullName = true
console.log(person7.fullName)

// One approach is defensive: add error-handling to the setter.
const person8 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName (value) {
    // Ignore invalid input.
    if (typeof value !== 'string') {
      return
    }
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}
person8.fullName = true
person8.fullName = null
console.log(person8.fullName)

// Exception handling.
const person9 = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName (value) {
    // Raise an exception by throwing an Error object.
    // Error is window.Error.
    if (typeof value !== 'string') {
      throw new Error('Value is not a string.')
    }
    const parts = value.split(' ')
    if (parts.length !== 2) {
      throw new Error('Value does not contain a first name and a last name')
    }
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

// Using window.alert is bad programming practice.
// The form should be invalidated and an error message should be
// displayed on the page.
// try {
//   person9.fullName = true
// } catch (e) {
//   window.alert(e)
// }
// try {
//   person9.fullName = 'Bob'
// } catch (e) {
//   window.alert(e)
// }

console.log(person9.fullName)
console.log('')

// Local vs. global scope.
console.log('Scope.')

// let vs. var.
console.log('let vs. var')
// var creates function-scoped variables (which are hoisted).
// In global scope, using var attaches the variable to the window object.
// A let variable is not attached to the window object.
// A function is also attached to the window object. This is prevented
// by using modules.
console.log('')

// The this keyword.
console.log('The this keyword.')
// In a function attached to an object (a method), this refers to the
// object associated with the method.
// In a global function, this refers to window (in the browser)
// or to global (in Node.js).
const video = {
  title: 'a',
  play () {
    console.log(this)
  }
}
video.play()

// Using new with a function causes creation of an empty object {}
// that is referred to by the this keyword. It also causes the function
// to return the object to the caller.
function Video (title) {
  this.title = title
  console.log(this)
}

const v = new Video('b')
console.log(v)

const video2 = {
  title: 'x',
  tags: ['a', 'b', 'c'],
  showTags () {
    this.tags.forEach(tag => console.log(tag))
  }
}

video2.showTags()

// The callback function used in forEach uses this to refer to the
// window object.
const video3 = {
  title: 'x',
  tags: ['a', 'b', 'c'],
  showTags () {
    this.tags.forEach(function (tag) {
      console.log(this, tag)
    })
  }
}

video3.showTags()

// One way to fix this is to pass the this argument as the second argument
// to forEach.
const video5 = {
  title: 'x',
  tags: ['a', 'b', 'c'],
  showTags () {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag)
      },
      this)
  }
}

video5.showTags()

// I discovered that if I use an arrow function as the callback function, this
// problem doesn't occur. So far, Mosh hasn't mentioned this.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions.
// "An arrow function does not have its own this. The this value of the
// enclosing lexical scope is used; arrow functions follow the normal variable
// lookup rules. So while searching for this which is not present in current
// scope, an arrow function ends up finding the this from its enclosing scope."
const video4 = {
  title: 'x',
  tags: ['a', 'b', 'c'],
  showTags () {
    this.tags.forEach(tag => console.log(this.title, tag))
  }
}

video4.showTags()
console.log('')

// Changing this.
// The problem is obtaining the correct this reference in a callback
// function. Mosh describes three ways to achieve this.
console.log('Changing this.')

// Solution using self or that.
// This is the trick of declaring another variable named self or that that
// references this.
// "Don't use this approach. But you'll see this in a lot of JavaScript code."
const video6 = {
  title: 'x',
  tags: ['a', 'b', 'c'],
  showTags () {
    const self = this // const that = this
    this.tags.forEach(
      function (tag) {
        // Here, self comes from the enclosing scope.
        console.log(self.title, tag)
      })
  }
}

video6.showTags()
console.log('')

// Using a function as an object.
// This is an area where I hate JavaScript.
// Function.prototype.call.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// "The call() method calls a function with a given this value and arguments
//  provided individually."
function playVideo (a, b) {
  console.log(this, a, b)
}

// The call method's first argument can be an object, for which this becomes
// a reference; subsequent arguments are scalars.
playVideo.call({ name: 'Mosh' }, 1, 2)

// When using apply, subsequent arguments must be in a array.
playVideo.apply({ name: 'Mosh' }, [1, 2])

// Using bind.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// bind() returns a new function with the specified object bound to this.
const fn = playVideo.bind({ name: 'Mosh' })
fn(1, 2)

// A shorter version of this, omitting creation of the intermediate object.
playVideo.bind({ name: 'Mosh' })(1, 2)

// Here, this is a reference to the window object.
playVideo() // Window ..., undefined, undefined

// So here's the solution using bind. (This is arcane.)
// Compare to video6.
const video7 = {
  title: 'x',
  tags: ['a', 'b', 'c'],
  showTags () {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag)
      }.bind(this))
  }
}

video7.showTags()
console.log('')

// At this point, Mosh explains about using the arrow function
// to solve the problem, as I discovered above. See above, video4.

// Exercises.

// Exercise 1.
// Create a sum function that accepts a variable number of
// arguments and returns the sum. Enhance the function to
// accept an array as the sole argument and return the sum of the
// elements of the array, using the Array.isArray() function.

// The ...rest operator passes the arguments in an array.
// A single argument that is a list results in a list containing
// a single element that is a list.
console.log(sum2(1, 2, 3, 4))
console.log(sum2([2, 3, 4, 5, 6]))
function sum2 (...values) {
  if ((values.length === 1) && (Array.isArray(values[0]))) {
    // Spread the list in values[0] into the list values.
    // values = [...values[0]]
    // Or (simpler) reassign the list.
    values = values[0]
  }
  return values.reduce((acc, cur) => acc + cur, 0)
}
console.log('')

// Exercise 2.
// Area of a circle.
// Create a Circle object with a radius property that is read/write.
// The Circle object should have an area property that is read-only.
const circle5 = {
  radius: 1,
  get area () {
    return Math.PI * this.radius ** 2
  }
}
console.log(circle5.area)
circle5.radius = 2
console.log(circle5.area)

// The property change is silently ignored.
// (I expected an exception.)
circle5.area = 20
console.log(circle5.area)
console.log('')

// Exercise 3. Error handling.
// Add error handling to the countOccurrences function from above.
// Modify the function to throw an exception if the argument is not
// an array. Then use a try/catch block to test for an exception.
const numbers27 = [1, 2, 3, 4, 1]
console.log(countOccurrences2(numbers27, 1))
try {
  console.log(countOccurrences2(true, 1))
} catch (e) {
  console.log(e.message)
}

try {
  console.log(countOccurrences2({ a: 'b' }, 1))
} catch (e) {
  console.log(e.message)
}

try {
  console.log(countOccurrences2(null, 1))
} catch (e) {
  console.log(e.message)
}

function countOccurrences2 (array, searchElement) {
  if (!Array.isArray(array)) {
    throw Error('Input is not an array!')
  }
  return array.reduce((acc, cur) => acc + (cur === searchElement ? 1 : 0), 0)
}

// ...and I'm finished!
// The next course to take is Object-Oriented Programming in JavaScript.
