// Function in js is a re-usable  piece of code that will do specific task and can be invoked whenever needed.


//    ---------------------------- Function Types ----------------------------

// 1. Function Declaration (Regular Function)

// These are hoisted, meaning you can use them before they're defined in the code: (USE KEYWORD FUNCTION)

console.log(add(2, 3)); // Works! Outputs: 5

function add(a, b) {
    return a + b;
}
// Key characteristics of Function Declaration (Regular Function)

// Gets hoisted(can be used before declaration in code)
// Must have a name
// Creates its own this binding
// Can use the arguments object;


// 2. Function Expression

// A function defined and stored in a variable.There are two types:

// Named Function Expression
const calculateArea = function calculateRect(length, width) {
    return length * width;
};

// Anonymous Function Expression
const calculatePerimeter = function (length, width) {
    return 2 * (length + width);
};

console.log(calculateArea(5, 3));      // Output: 15
console.log(calculatePerimeter(5, 3)); // Output: 16

// Key characteristics:

// Not hoisted(must be defined before use)
// Can be named or anonymous
// Often used for callbacks and functional programming
// Creates its own this binding;



// 3. Arrow Functions

// Basic Arrow Function
const add = (a, b) => a + b;

// Multiline Arrow Function
const calculateVolume = (length, width, height) => {
    const volume = length * width * height;
    return volume;
};

// Arrow Function with single parameter (parentheses optional)
const square = x => x * x;

// Arrow Function with no parameters
const sayHello = () => "Hello!";

console.log(add(5, 3));               // Output: 8
console.log(square(4));               // Output: 16
console.log(sayHello());              // Output: Hello!

// Key characteristics:

// More concise syntax
// Lexical this binding(inherits this from parent scope)
// No arguments object
// Can't be used as constructors
// Great for short callback functions



// 4. Method Functions

// Functions that are properties of objects:

const person = {
    // Method shorthand (ES6)
    sayHello() {
        return "Hello!";
    },

    // Traditional method
    greet: function (name) {
        return `Hello, ${name}!`;
    },

    // Arrow function as method (careful with 'this')
    getInfo: () => {
        return "Info";
    }
};

console.log(person.sayHello());    // Output: Hello!
console.log(person.greet("Jane")); // Output: Hello, Jane!


// 5. Constructor Functions;

// Used to create objects with shared properties and methods:
// Constructor functions in JavaScript are a traditional way to create objects and define their properties and methods.
// They use the new keyword to instantiate an object and are often used for creating multiple instances of similar objects.

function Person(name, age) {
    // Constructor function starts with capital letter by convention
    this.name = name;
    this.age = age;

    this.greet = function () {
        return `Hello, I'm ${this.name}`;
    };
}

const john = new Person("John", 30);
console.log(john.greet()); // Output: Hello, I'm John

// Advantages of constructor functions in JavaScript

//  A. Object Creation and Inheritance:

// Constructor functions allow you to create multiple instances of similar objects.
// Each time a new object is instantiated using new, the constructor is called,
// setting up the object with its own properties and methods.


// B. Reusability:

// Constructor functions allow you to define a blueprint(or template) for creating objects, making code more reusable.
// You can create many objects from the same constructor function, avoiding code duplication.



//  C. Encapsulation:

// Constructor functions can encapsulate both data(properties) and behavior(methods) within a single function, making it easier to manage and organize code.


// D.  Prototypal Inheritance:

// Constructor functions allow you to define methods on the prototype.
// This means all instances created from the same constructor function share the same method, saving memory and improving performance.
// You can define shared behavior outside of the object instances themselves.



// E.  Custom Initialization:

// You can use constructor functions to define custom initialization logic.
// For example, you can take parameters in the constructor to initialize the object with specific values.;


// Dis-Advantages of constructor functions in JavaScript

// A. Issues with this Binding: 

// The this keyword in constructor functions can be tricky.
// It's bound to the instance of the object being created, but if you're not careful(especially when passing methods around as callbacks),
//  you may run into issues where this doesn't refer to what you expect.


// B. No Superclass Inheritance (without call/apply):

// Unlike the ES6 class syntax, constructor functions require manual management of inheritance.To extend another constructor function, 
// you need to manually call Parent.call(this) within the child constructor, which can make inheritance patterns harder to understand and more error - prone. 


function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding method to the prototype to save memory
Car.prototype.drive = function () {
    console.log(`${this.make} ${this.model} is driving.`);
};

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');

car1.drive();  // Toyota Corolla is driving.
car2.drive();  // Honda Civic is driving.


// 6. Generator Functions;

// A generator function in JavaScript is a special type of function that can pause its execution and later resume from where it left off.
// It allows you to define an iterator in a more concise and readable manner.
// A generator function is defined using the function* syntax, and it uses the yield keyword to pause the function's execution.;

function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
        yield count;
        count++;
    }
}

const counter = countUpTo(3);

console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }


// Advantages of Generator Functions;

// 1. Lazy Evaluation:
// Generators compute values lazily, meaning they only generate the next value when required,
//  which can save memory and improve performance, especially for large datasets.

// 2. Pause and Resume:
// A generator can pause its execution with yield and resume later,
// making it ideal for managing asynchronous flows or creating iterators over complex sequences without loading everything into memory at once.


// 7. Async Functions

// async function: This is a function that always returns a Promise, regardless of whether you explicitly return a Promise from within the function or a regular value
// .The purpose of the async keyword is to mark a function as asynchronous.
// await expression: This can only be used inside an async function. 
// It pauses the execution of the async function until the Promise passed to it is resolved or rejected.;
// An async function always returns a Promise.If the function returns a value(not a Promise), it is wrapped in a resolved Promise.;


// 8. Factory Functions;

// A factory function is a function that returns an object, typically with methods and properties,
// and is used to create multiple instances of similar objects.Unlike classes, factory functions are simpler,
// flexible, and can be used without the new keyword.
// They are commonly used in JavaScript to create and encapsulate objects in a concise and readable manner.


function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person = createPerson('Alice', 30);
person.greet();  // "Hello, my name is Alice and I am 30 years old."


// 9. Immediately Invoked Function Expression(IIFE);

// IIFE in JavaScript: Immediately Invoked Function Expressions
// An IIFE(Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation.
// This pattern allows you to run code within a function scope without leaving variables in the global scope,

(function () {
    // Code here runs immediately
    console.log('This is an IIFE!');
})();

// Alternatively, you can also use arrow functions with IIFE syntax:
(() => {
    console.log('This is an IIFE with an arrow function!');
})();


// Advantages of Using IIFE

// A. Avoid Polluting the Global Scope:

// JavaScript has a global scope, and variables declared globally can cause naming conflicts or unintended side effects.
// IIFEs provide an isolated scope, meaning that any variables defined inside the IIFE are not accessible outside, thus avoiding polluting the global scope.

// B.Data Encapsulation:

// USE CASES OF IIFE 
// A.Initializing Libraries or Frameworks:
// B. Executing Code Once:


// 10. Higher - Order Functions

// High - Order Functions in JavaScript
// A higher - order function (HOF) is a function that either:
// Takes one or more functions as arguments, or Returns a function as its result.



// -------------------------------- Basic Parameters and Arguments --------------------------------


// name and age are parameters - placeholders in the function definition
function greet(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}

// "John" and 30 are arguments - actual values passed when calling the function
console.log(greet("John", 30)); // Output: Hello John, you are 30 years old

// DEFAULT PARAMETERS WORK WHEN  Parameters are Undefined:



// -------------------------------- Function Properties --------------------------------

// 1. function.name - Returns the function's name:

function sayHello() {
    return "Hello!";
}

const greet = function greetPerson() {
    return "Hi there!";
};

const arrowGreet = () => "Hey!";

console.log(sayHello.name);      // Output: "sayHello"
console.log(greet.name);         // Output: "greetPerson"
console.log(arrowGreet.name);    // Output: "arrowGreet"

// Anonymous functions get names from their assignments
const anonymousFunc = function () { };
console.log(anonymousFunc.name); // Output: "anonymousFunc"



// 2. function.length - Returns the number of parameters expected by the function (excluding rest parameters and parameters with default values)

function simple(a, b, c) { }
function withDefault(a, b = 5) { }
function withRest(a, b, ...rest) { }

console.log(simple.length);      // Output: 3
console.log(withDefault.length); // Output: 1 (b is not counted due to default value)
console.log(withRest.length);    // Output: 2 (rest parameter not counted)

// 3.function.caller - Returns the function that called the current function (Note: deprecated in strict mode):

function outer() {
    inner();
}

function inner() {
    console.log(inner.caller.name);
}

outer(); // Output: "outer"

// 4. function.arguments - Contains the arguments passed to the function (Note: deprecated in strict mode):

function showArgs() {
    console.log(showArgs.arguments);
}

showArgs(1, 2, 3); // Output: [1, 2, 3] (ARRAY LIKE BUT NOT ARRAY)


// DIFF BW ARROW FUNCTIONS AND FUNCTION DECLARATIONS 

// SYNTAX
// Function declarations use the 'function' keyword and require a function name, while arrow functions are typically assigned to variables and use the arrow(=> ) syntax.
// Function declarations are more verbose, while arrow functions offer a more concise syntax, especially for single - line functions.


// THIS BINDING
// The most crucial difference lies in how they handle 'this'.
// Function declarations create their own 'this' binding based on how they are called.
// In contrast, arrow functions inherit 'this' from their surrounding scope(lexical binding).
// This makes arrow functions particularly useful in callbacks and methods where you want to preserve the parent scope's 'this'.


// CONSTRUCTOR USAGE
// Function declarations can be used as constructors with the 'new' keyword because they create their own 'this' binding and have a prototype property.
// Arrow functions cannot be used as constructors - they will throw an error if you try to use 'new' with them because they don't have their own 'this' or prototype.


// ARGUMENTS OBJECT
// Function declarations have access to a special 'arguments' object that contains all arguments passed to the function.
// Arrow functions do not have their own 'arguments' object - they inherit it from the enclosing scope if one exists.
// Instead, you typically use rest parameters with arrow functions.;


// HOISTING BEHAVIOR
// Function declarations are hoisted to the top of their scope, meaning you can call them before they appear in the code.
// Arrow functions are not hoisted since they are essentially variable assignments.You must define an arrow function before you can use it.


// METHOD DEFINITION
// When used as object methods, function declarations(or the method shorthand) are usually preferred because they create a 'this' binding to the object.
// Arrow functions as methods can lead to unexpected behavior since their 'this' comes from outside the object.;


// RETURN VALUE BEHAVIOR
// Arrow functions have implicit returns when written as a single expression without curly braces.
// Function declarations always require an explicit return statement unless you're just returning undefined.;


// YIELD KEYWORD
// Function declarations can be generator functions using the 'yield' keyword.
// Arrow functions cannot be generators - they don't support the 'yield ' keyword at all.


// USE IN EVENT HANDLERS
// Function declarations are often better for event handlers because they create their own 'this' binding to the event target.
// Arrow functions in event handlers will not have access to the event target through 'this'.


// CLARITY OF PURPOSE
// Function declarations tend to be more explicit about their role as standalone functions.
// Arrow functions are often used to show that a function is being used as a callback or transformer, making code intent clearer.








