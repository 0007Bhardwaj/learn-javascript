// SCOPE

// Scope defines where variables and functions are accessible in your code.;

// JavaScript has several types of scope:

// 1.  Global Scope
// Variables declared outside any function are globally scoped and can be accessed from anywhere in your program.;

let globalVariable = "I'm available everywhere";

function someFunction() {
    console.log(globalVariable); // Can access global variable here
}

console.log(globalVariable); // Can access here too


// 2. Function / Local Scope
// Variables declared inside a function are only accessible within that function.

function exampleFunction() {
    let localVariable = "I'm only available inside this function";
    console.log(localVariable); // Works fine
}

// console.log(localVariable); // Would cause an error - localVariable isn't accessible here



// 3. Block Scope
// Introduced with let and const in ES6, block scope limits variables to the block they're defined in (like within if statements or loops).;


if (true) {
    let blockScoped = "I'm only available in this block";
    const alsoBlockScoped = "Me too!";
    var notBlockScoped = "I'll be function/globally scoped";
}

// console.log(blockScoped); // Error
// console.log(alsoBlockScoped); // Error
console.log(notBlockScoped); // Works (but not recommended)


//  ----------------------------   Lexical Scope;   ----------------------------

// In JavaScript, lexical scope is the concept of determining the scope of a variable based on its declaration.
// This means that the scope of a variable is determined by the block of code in which it is declared, not by the block of code in which it is used;
// In simpler terms, inner functions can access variables from their outer scope based on where they're physically written in the code.;

function outer() {
    let message = "Hello from outer scope!";

    function inner() {
        // inner() has access to variables in its own scope,
        // in outer(), and in the global scope
        console.log(message); // Can access message from outer scope
    }

    inner();
}

outer(); // Prints: "Hello from outer scope!"

//  ----------------------------   Lexical Environment   ----------------------------

// A lexical environment in JavaScript is a data structure that stores variables and functions defined in the current scope, along with references to all outer scopes.
// It is also known as the lexical scope.

let globalMessage = "Global";

function outer() {
    let outerMessage = "Outer";

    function middle() {
        let middleMessage = "Middle";

        function inner() {
            let innerMessage = "Inner";

            // inner()'s lexical environment has access to all parent scopes
            console.log(innerMessage);  // "Inner"
            console.log(middleMessage); // "Middle"
            console.log(outerMessage);  // "Outer"
            console.log(globalMessage); // "Global"
        }

        inner();
    }

    middle();
}

outer();


// In this example, when inner() runs, it creates a chain of lexical environments:

// inner's environment (with innerMessage)
// → middle's environment (with middleMessage)
// → outer's environment (with outerMessage)
// → global environment(with globalMessage)

// This chain, often called the scope chain, is what allows inner functions to access variables from their outer scopes.;



// ----------------------------   Closure    ----------------------------

// A closure is a function that has access to variables in its outer(enclosing) scope, even after the outer function has returned.

function createGreeting(name) {
    // The outer function creates a variable 'name'

    function greet() {
        // The inner function forms a closure, 
        // maintaining access to 'name' even after createGreeting finishes
        return `Hello, ${name}!`;
    }

    return greet;
}

const greetJohn = createGreeting('John');
const greetMary = createGreeting('Mary');

console.log(greetJohn()); // "Hello, John!"
console.log(greetMary()); // "Hello, Mary!"


// Each call to createGreeting creates a new closure with its own private 'name' variable.
// This is why greetJohn and greetMary remember their own names - each has its own separate lexical environment preserved in its closure.



// USE CASES

// 1. creating a private counter:

function createCounter() {
    let count = 0;  // This becomes a private variable

    return {
        increment() {
            // This function can access 'count' through closure
            count++;
            return count;
        },
        decrement() {
            // This function can also access the same 'count' variable
            count--;
            return count;
        },
        getCount() {
            // Provides read-only access to count
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// count variable is not accessible directly
// console.log(count); // ReferenceError

// This pattern is powerful because it creates true private variables in JavaScript.
// The count variable is only accessible through the methods we've defined, making it impossible to modify it incorrectly from outside.


// 2. Creating a function that remembers its previous results (memoization)


function createMemoizedFunction() {
    // The cache object becomes private through closure
    const cache = {};

    return function (n) {
        // This function maintains access to the cache
        if (n in cache) {
            console.log('Fetching from cache...');
            return cache[n];
        }

        console.log('Calculating result...');
        const result = n * 2; // Some expensive computation
        cache[n] = result;
        return result;
    };
}

const memoizedDouble = createMemoizedFunction();

console.log(memoizedDouble(5)); // Calculating result... 10
console.log(memoizedDouble(5)); // Fetching from cache... 10



// One important thing to understand about closures is that they capture references to variables, not values.
// Here's an example that demonstrates this

function createFunctions() {
    const functions = [];

    // Wrong way - all functions will share the same 'i'
    for (var i = 0; i < 3; i++) {
        functions.push(function () {
            return i;
        });
    }

    // Right way - each function gets its own 'j'
    for (let j = 0; j < 3; j++) {
        functions.push(function () {
            return j;
        });
    }

    return functions;
}

const functions = createFunctions();
console.log(functions[0]()); // 3 (using var)
console.log(functions[0]()); // 0 (using let)


// ADVANTAGES OF CLOSURE

// 1.  Data Privacy and Encapsulation
// Closures provide a way to create private variables and methods in JavaScript.
// This is particularly valuable for encapsulating data and protecting it from external interference.


function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited ${amount}. New balance: ${balance}`;
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
// balance cannot be accessed directly, protecting it from unauthorized changes



// DIS-ADVANTAGES OF CLOSURE

// 1.  Memory Management Issues

// The most significant disadvantage of closures is that they can lead to memory leaks if not handled carefully.
// When a closure maintains references to large objects in its parent scope, those objects can't be garbage collected even if they're no longer needed:

function createLargeDataProcessor() {
    // This large array will be kept in memory as long as processData exists
    const largeData = new Array(1000000).fill('some data');

    return function processData(index) {
        return largeData[index];
    };
}

const processor = createLargeDataProcessor();
// largeData array remains in memory even if we only need occasional access

// To mitigate this, you can explicitly remove references when they're no longer needed:

let processor = createLargeDataProcessor();
// Use the processor...
processor = null; // Allow garbage collection



// 2. Performance Implications

// Closures can impact performance because they maintain scope chain references.
// Each time you access a variable through a closure, JavaScript needs to look up the scope chain:

function createCounter() {
    let count = 0;  // Variable in closure scope

    return function () {
        // Accessing count requires looking up the scope chain
        return ++count;
    };
}

// More performant version with local variable
function createFasterCounter() {
    let count = 0;

    return function () {
        let localCount = count; // Local variable for faster access
        localCount++;
        return (count = localCount);
    };
}


// Question 1: How would you use a closure to create a function that can only be called once ?

function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return result;
    };
}

const initialize = once((x) => `Initialized with ${x}`);
console.log(initialize('A')); // "Initialized with A"
console.log(initialize('B')); // "Initialized with A" (first result is returned)



// Question 2: Explain how closures can cause memory leaks and how to prevent them


function potentialLeak() {
    const largeData = new Array(1000000);

    // This keeps reference to largeData even if we don't need it
    return function () {
        console.log(largeData.length);
    };
}

// Better version with cleanup
function preventLeak() {
    let largeData = new Array(1000000);

    const result = function () {
        console.log(largeData.length);
    };

    // Clean up reference when no longer needed
    result.cleanup = function () {
        largeData = null;
    };

    return result;
}

// Question 3: How would you implement caching / memoization using closures?

function createMemoizedFunction(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            console.log('Fetching from cache');
            return cache[key];
        }

        console.log('Calculating result');
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const memoizedAdd = createMemoizedFunction((a, b) => a + b);
console.log(memoizedAdd(2, 3)); // Calculating result: 5
console.log(memoizedAdd(2, 3)); // Fetching from cache: 5


