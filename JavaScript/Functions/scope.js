//  -------------------------------------------- Scope --------------------------------------------

// scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.
// It dictates the visibility and lifetime of a variable, determining where in your code a particular variable is valid and accessible.
// JavaScript offers various types of scope, with the three primary ones being global, local, and block scope.
// These scopes control the accessibility of variables in different parts of your code and play a pivotal role in maintaining code organization and preventing variable conflicts

// 1. Global Scope
// In JavaScript, global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code,
//  whether it's inside functions, conditional statements, loops, or other blocks of code.

// 1.1  Variables Declared in Global Scope
// Variables declared in global scope are typically defined outside of any functions or code blocks. For example:
// var globalVariable = "I'm in global scope";

// function myFunction() {
//   // This function can access globalVariable
//   console.log(globalVariable);
// }

// myFunction();
// Here, globalVariable is declared in global scope, and myFunction can access and use it directly.

// 1.2 Potential Issues with Global Scope
// Since global variables are accessible from anywhere, they are susceptible to unintended changes and conflicts.

// 2. Local Scope
// When you declare a variable in local scope, it is limited in visibility to the block of code, function, or conditional statement in which it is defined.
// Variables in local scope are protected from interference or modification by code outside their scope, providing a level of isolation.

// 2.1 Variables Declared in Local Scope
// Variables in local scope are typically declared within functions, conditional statements, loops, or other code blocks.
// function myFunction() {
//     var localVariable = "I'm in local scope";
//     console.log(localVariable);
//   }
  
//   myFunction();
  // Accessing localVariable here would result in an error

// ***************  The Concept of Variable Shadowing  ***************
// Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.
// var message = "Global message";

// function showMessage() {
//   var message = "Local message"; // This "shadows" the global variable
//   console.log(message); // Accessing the local variable
// }

// showMessage();
// console.log(message); // Accessing the global variable
// In this code, the local variable message shadows the global variable with the same name when you're inside the showMessage function.

// Benefits of Using Local Scope
// 1. Isolation: It prevents unintended interference with variables in other parts of your code, reducing the risk of bugs and conflicts.
// 2  Modularity: It allows you to compartmentalize your code, making it more manageable and easier to maintain.
// 3. Reusability: Variables in local scope can be defined and used within specific functions or blocks, promoting code reusability without affecting the rest of your program.

// 3. Block Scope
// Unlike global and local scopes, which are defined by functions or global context, block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).
// Variables declared in block scope are confined to that block, offering a high degree of isolation.

// 3.1 Variables Declared in Block Scope
// Variables declared in block scope are only accessible within the block in which they are defined. 

// *************** Differences between Block Scope and Local Scope ***************
// a. In local scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.
// b. Local scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.

// function myFunction() {
//     if (true) {
//       var localVariable = "I'm in block scope";
//       let blockVariable = "I'm also in block scope";
//     }
//     console.log(localVariable); // Accessible
//     console.log(blockVariable); // Error: blockVariable is not defined
//   }


// *************** What is Lexical Scope in JavaScript? ***************
// Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.

// const myFunction = () => {
//     let myValue = 2;
//     console.log(myValue);
//     const childFunction = () => {
//          console.log(myValue += 1);
//     }
//     childFunction();
// }

// myFunction();
// In this example, childFunction has access to the variable myValue which is defined in the parent scope of myFunction.
// The lexical scope of childFunction allows access to the parent scope


// *************** What is a Closure in JavaScript? ***************
// A closure is a function having access to the parent scope, even after the parent function has closed.

const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
// console.log(result);
result();
result();
result();

