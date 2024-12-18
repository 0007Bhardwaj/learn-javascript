// What is Hoisting ?;

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.
//     It's important to understand that only declarations are hoisted, not initializations.


// Function Hoisting
// Function declarations are completely hoisted, meaning both the declaration and definition are moved to the top:

// This works because sayHello is hoisted
sayHello(); // "Hello!"

function sayHello() {
    console.log("Hello!");
}

// However, function expressions are not fully hoisted
sayGoodbye(); // Error: sayGoodbye is not a function

var sayGoodbye = function () {
    console.log("Goodbye!");
};

// -------------------------------- Advantages of Hoisting --------------------------------

// 1. Function Declaration Flexibility:

// Cleaner code organization - main function at top
function processUserData() {
    validateUser();
    updateProfile();
    sendNotification();

    // Support functions below
    function validateUser() {
        // validation logic
    }

    function updateProfile() {
        // update logic
    }

    function sendNotification() {
        // notification logic
    }
}

// -------------------------------- DIS-Advantages of Hoisting --------------------------------

// 1. Unexpected Variable Values:

function buggyFunction() {
    console.log(counter); // undefined, not 0
    var counter = 0;
}


// Understanding Hoisting in Different Scopes;

var globalVar = "I'm global";

function scopeExample() {
    console.log(globalVar); // undefined
    var globalVar = "I'm local";
    console.log(globalVar); // "I'm local"
}

// Each scope has its own hoisting behavior