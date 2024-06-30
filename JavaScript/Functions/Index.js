//  -------------------------------------------- Functions --------------------------------------------
// A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.
// A function is a set of instructions that can be used repeatedly in a program.
// In JavaScript, functions are objects that can be declared, assigned, and passed as parameters to other functions.

// 1. Type of functions

// 1.1 Named Functions
// Named functions are function declarations that include a name.
// They are also sometimes referred to as traditional functions or function declarations.
// function helloWorld() {
//     console.log('Hello World!');
//   }

// 1.2 Anonymous Functions
// Anonymous functions are function expressions that do not have a name associated with them.
//  They are also sometimes referred to as lambda functions or function expressions.
// let helloWorld = function () {
//     console.log('Hello World!');
//   }

// 1.3 Immediately invoked function expression (IIFE)
// Invoked function expression runs as soon as the browser encounters it.
// The benefit of this function is that it runs immediately where it’s located in the code and produces a direct output.
// That means it is unaffected by code which appears further down in the script which can be useful.

// (function iifeFunction() {
//     console.log("Immediately invoked function expression");
// })()

// 1.4 Generator Functions
// Generator functions allow you to define iterative algorithms using a single function.
// Their execution is not continuous, allowing you to pause and resume the function's execution using the yield keyword.
// function* idGenerator() {
//     let id = 1;
//     while (true) {
//         yield id++;
//     }
// }
// const gen = idGenerator();
// console.log(gen.next().value); // Output: 1
// console.log(gen.next().value); // Output: 2

// 1.5 Constructor Functions
// Constructor functions are used to create objects. They follow the new keyword and typically start with a capital letter.
// They define the properties and methods associated with the objects they create.
// function Person(name) {
//     this.name = name;
// }
// const john = new Person("Alex");
// console.log(john.name); // Output: Alex

// 1.6 Arrow Functions
// Arrow functions were introduced with ECMAScript 6 (ES6). They give you a more concside way of defining functions in JavaScript.

// 2. Difference between Arrow functions and function declarations
// 2.1 writing syntax

// a. Regular function syntax
// function sayHello(name) {
//     return 'Hello ' + name
//   }
// To return a value from a regular function, you have to explicitly use the return keyword. Otherwise the function will return undefined

// b. Arrow function syntax
// const sayHello = (name) => {
//     return 'Hello ' + name
//   }
// Unlike regular functions, you don't have to use an explicit return if there's only one statement
// const sayHello = (name) => 'Hello ' + name
// Note how the curly braces are also removed to implicitly return the result of the expression. You can even remove the parenthesis too if there is only one argument
// const sayHello = name => 'Hello ' + name

// 2.2 arguments
// You can access all the arguments passed to a regular function using the arguments object.
// The arguments object is an array-like object that holds all the arguments passed to the function.

// function logNumbers(num1, num2) {
//     console.log(arguments)
//   }
//   logNumbers(8, 24)

// The arguments object is not available in arrow functions. If you try to access it in arrow functions, JavaScript will throw a reference error.
// const logNumbers = (num1, num2) => {
//     console.log(arguments)
//   }
//   logNumbers(8, 24) // Uncaught ReferenceError: arguments is not defined

// To access the arguments passed to an arrow function, you can use the rest parameter syntax
// const logNumbers = (...args) => {
//     console.log(args)
//   }

//   logNumbers(8, 24)

// 2.3 hoisting
// Hoisting in JavaScript is a behaviour where variables and functions are moved to the top of their containing scope during compilation, before the code is executed.
// Regular functions are hoisted to the top. And you can access and call them even before they are declared.

// regularFunction()
// function regularFunction() {
//   console.log("This is a regular function.") //This is a regular function.
// }

// Arrow functions, on the other hand, cannot be accessed before they are initialised.

// arrowFunction()
// const arrowFunction = () => {
//   console.log("This is an arrow function.") // reference error
// }

// 2.4 this binding
// Regular functions have their own this context. And this is determined dynamically depending on how you call or execute the function.
// Arrow functions, on the other hand, do not have their own this context. Instead, they capture the this value from the surrounding lexical context in which the arrow function was created.
// For regular functions, a simple function call sets the this value to the window object (or to undefined if you're using the "strict mode"):

// function myRegularFunction() {
//     console.log(this)
//   }
//   myRegularFunction() // window

// With arrow functions, a simple function call sets the this value to the surrounding context whether you're using strict mode or not. 
// In the example below, the surrounding context is the global window object.

// const myArrowFunction = () => {
//     console.log(this);
//   };
//   myArrowFunction()

// When you invoke a method whose value is a regular function, the this value is set to the object on which the method is called. 
// But when the value of the method is an arrow function, the this value is set to the global window object.



// 2.5 Duplicate Named Parameters
// When a regular function has duplicate names in the parameters, the last parameter with the duplicate name will take precedence.

// function exampleFunction(a, b, a) {
//     console.log(a, b)
//   }
//   exampleFunction("first", "second", "third") // third second
// But in "strict mode", using a duplicate named parameter will result in a syntax error.

// Arrow functions don't allow for the same parameter name to be used more than once in the parameter list. Doing so will result in a syntax error.

// const exampleFunction = (a, b, a) => {
//     console.log(a, b)
//   }
//   exampleFunction("first", "second", "third") //sytanx error



// 2.6  Use Functions as Constructors
// For regular functions, you can create a new instance using the new keyword. And this sets the this value to the new instance you've created.
// For arrow functions, you cannot use them as constructors. This is because the value of this in arrow functions is lexically scoped – that is, determined by the surrounding execution context.
//  This behaviour does not make them suitable to be used as constructors.
