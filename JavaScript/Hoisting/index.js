// -------------------------------------------- Temporal Dead Zone --------------------------------------------

// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
// Suppose you attempt to access a variable before its complete initialization. In such a case, JavaScript will throw a ReferenceError

// Where Exactly Is the Scope of a Temporal Dead Zone?
// A block’s temporal dead zone starts at the beginning of the block’s local scope. It ends when the computer fully initializes your variable with a value.

// {
    // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
//   }

//  A. How Does Var’s TDZ Differ from Let and Const Variables?

// The main difference between the temporal dead zone of a var, let, and const variable is when their TDZ ends.

// {
    // bestFood’s TDZ starts and ends here
    // console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
    // var bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
    // console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
//   }


  // -------------------------------------------- Hoisting --------------------------------------------

//   In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. 
//   In turn, this allows us to use functions, variables, and classes before they are declared


//   1. Function hoisting.

// Under the hood, function declarations are put into memory at compile time. As such, this makes it possible to, on execution, call a declared function before it is defined. For example:

// console.log(greeting()); // "Hello there!"

// function greeting() {
//  return "Hello there!";
// }

// Since the function is hoisted to the top of the local scope, we're able to access it before the line where it was actually declared.
// , it's also worth noting that hoisting does not occur on function expressions
// Note that this differs from invoking a function that is never declared:
// console.log(bhardwaj()); // ReferenceError: greeting is not defined
// Since the function is never defined anywhere, the JavaScript interpreter evaluates the expression as a ReferenceError.


//   2. Variable hoisting with var.

// When a var is hoisted, the JavaScript engine still moves it to the top of its scope – but it initializes the variable with a value of undefined. 
// As such, until a is actually declared on the next line, its actual value won’t be assigned. Then, after declaration, we can finally log its value to the console: “a“.

// print()
// console.log(name)
// // ReferenceError: name is not defined
// function print() {
//   var name = "Dillion"
// }

// Here, we get a reference error: name is not defined. Remember, variables are hoisted but only to the top of the scope they were declared in.


//   3.Variable hoisting with let and const.

// Similar to declaring a variable with var, the declaring a variable with let or const still sees the variable declaration hoisted to the top of its scope. 
// However, rather than initializing that variable with a value (i.e., undefined, as shown above), the JavaScript engine forgoes that step entirely.
//  As such, by not being initialized, the JavaScript interpreter will throw an error if we try to access the variable:
// The reason why we see these errors, even though variable a is properly hoisted, is due to the variable being in the temporal dead zone (TDZ). 
// That is, while the variable is in scope, we cannot access or use the variable at all before it is explicitly declared.
//  This same behavior also applies when declaring a class with the class keyword:



// 3.1  Hoisting let variables
// Although variables declared with let are also hoisted, they have a different behavior. Let's see an example:

// console.log(name)
// // ReferenceError: Cannot access 'name' before initialization

// let name = "Dillion"

// Here, we get a reference error: Cannot access 'name' before initialization. Do you notice that the error does not say name is not defined?
//  That's because the interpreter is "aware" of a name variable because the variable is hoisted.
// "Cannot access 'name' before initialization" occurs because variables declared with let do not have a default value when hoisted. 
// As we saw in var, the variables have a default value of undefined until the line where the declaration/initialization is executed.
//  But with let, the variables are uninitialized.
// The variables are hoisted to the top of the scope they are declared in (local, global, or block), but are not accessible because they have not been initialized. 


//  3.2  Hoisting const variables

// Just like let, variables declared with const are hoisted, but not accessible. For example:

// console.log(name)
// // ReferenceError: Cannot access 'name' before initialization

// const name = "Dillion"

// The same concept of a temporal dead zone applies to const variables. 
// Such variables are hoisted to the top of the scope they are defined in (local, global, or block), but they remain inaccessible until the variables are initialized with a value.



// 4. Class Hoisting
// Classes in JavaScript are also hoisted. Let's see an example:

// const Dog = new Animal("Bingo")
// // ReferenceError: Cannot access 'Animal' before initialization

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
// }

// Here, we declare a class called Animal. We try to access this class (instantiate a Dog object) before it was declared. 
// We get a reference error: Cannot access 'Animal' before initialization. What does this error remind you of?

// Just like let and const variables, classes are hoisted to the top of the scope they are defined in, but inaccessible until they are initialized. 
// We do not get "Animal is not defined", which shows that the interpreter "knows" that there is an Animal class (due to hoisting). 
// But we cannot access that class until the line of initialization is executed.