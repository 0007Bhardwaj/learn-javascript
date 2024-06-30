//  In JavaScript, variables are used to store data values.
//  They play a fundamental role in programming as they allow us to manipulate and work with data in various ways.
//  A variable is a named container that holds a value, and can be used to store and manipulate data in a program.

//  In JavaScript, you declare variables using the var, let, or const keywords:

// 1. -------------------------------------------- var --------------------------------------------

//  "var" is the oldest way to declare a variable in JavaScript. Variables declared with "var" have a function-level scope,
//  meaning they are only accessible within the function in which they were declared.
//  They also have "hoisting" behavior, which means they are accessible throughout the entire scope of the function,
//   regardless of where they were declared. However, because of its function-level scope,
//   variables declared with var can lead to unexpected behavior and are generally not recommended.

// A. scope of var

// Scope essentially means where these variables are available for use.
// var declarations are globally scoped or function/locally scoped.
// The scope is global when a var variable is declared outside a function.
// This means that any variable that is declared with var outside a function block is available for use in the whole window.
// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
// *********** var variables can be re-declared and updated ***********

// B. Hoisting of var

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello";

// So var variables are hoisted to the top of their scope and initialized with a value of undefined

// C. Problem with var

// There's a weakness that comes with  var. I'll use the example below to
// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//   var greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

// So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined,
//  it becomes a problem when you do not realize that a variable greeter has already been defined before.
// If you have used greeter in other parts of your code, you might be surprised at the output you might get. 
// This will likely cause a lot of bugs in your code. This is why let and const are necessary.


// 2. -------------------------------------------- let --------------------------------------------

//  "let" was introduced in ECMAScript 6 (also known as ES6) as an alternative to "var".
//   Variables declared with "let" have the block-level scope, meaning they are only accessible within the block in which they were declared.
//   They also have the concept of the temporal dead zone, which means they are not accessible before they are declared.
//   let declarations limit variables to the block where they are specified. Because of this,
//   let is especially helpful for preventing unintentional variable hoisting and lowering the possibility of scope-related errors.
//   let is block scoped
//    A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
//    So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:


// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let hello = "say Hello instead";
//      console.log(hello);// "say Hello instead"
//  }
// console.log(hello) // hello is not defined

// let can be updated but not re-declared.
// Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope.

// let greeting = "say Hi";
// greeting = "say Hello instead";
// let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// However, if the same variable is defined in different scopes, there will be no error:

// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// Why is there no error? This is because both instances are treated as different variables since they have different scopes.
// This fact makes let a better choice than var. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.
// Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not happen.

//  B. Hoisting with let

// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized.
//  So if you try to use a let variable before declaration, you'll get a Reference Error.


// 3. -------------------------------------------- const --------------------------------------------

//  "const" was also introduced in ECMAScript 6 and is used to declare variables that cannot be reassigned.
//   This makes "const" variables useful for declaring constants, such as pi or the gravitational constant,
//   which have a fixed value. Like "let", "const" variables have the block-level scope, and, they are not accessible before they are declared.
//   const cannot be updated or re-declared
//   Every const declaration, therefore, must be initialized at the time of declaration.
//   This behavior is somehow different when it comes to objects declared with const.
//   While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

//  const greeting = {
//     message: "say Hi",
//     times: 4
//   }
//  while we cannot do this:

//   greeting = {
//     words: "Hello",
//     number: "five"
//   } // error:  Assignment to constant variable.
//   we can do this:
//   greeting.message = "say Hello instead";

// B. Hoisting of const

// Just like let, const declarations are hoisted to the top but are not initialized.


// key Differences

// 1. Scope
// 2. Reassignable
// 3. Hoisting
// 4. Temporal Dead Zone







