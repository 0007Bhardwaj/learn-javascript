// var is in javascript from its creation time
// let and const comes in ES-6
// ONLY FUNCTION DECLARATIONS AND VAR CAN BE ACCESSED BEFORE INITIALIZATION  (also imports)

//SCOPE

{
    var a = 5;
}
console.log(a); // still accessible means it is a function scope

// VARIABLE SHADOWING

function test() {
    let b = "hello";
    if (true) {
        let b = "world";
        console.log(b); // 'world'
    }
    console.log(b); // 'hello'
}

test();


// ILLEGAL VARIABLE SHADOWING

function test1() {
    var c = "hello";
    let d = "world";

    if (true) {
        let c = 'inside hello';
        // var d = 'inside world'; // will throw error we can shadow var with let but shadowing let with var is not allowed
        console.log(c);
        console.log(d);

    }

}
test1();

// WE CAN NOT REDECLARE LET AND CONST WITHIN THE SAME SCOPE BUT CAN DECLARE LET 
// CONST CANNOT BE DECLARED WITHOUT INITIALIZATION BUT LET AND VAR CAN BE
// CONST CANNOT BE REASSIGNED BUT LET AND VAR CAN BE

// HOISTING OCCURS WITH VAR AND LET AND CONST BUT WE CAN ONLY ACCESS VAR BEFORE INITIALIZATION WITH VALUE UNDEFINED BUT LET AND CONST ARE HOISTED IN TDZ.
// SO ACCESSING LET AND CONST BEFORE INITIALIZATION WILL THROW REFERENCE ERROR



// INTERVIEW QUESTIONS

// 1. Block Scope Understanding

if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a); // 1
console.log(b); // ReferenceError
console.log(c); // ReferenceError



// 2. Hoisting with Functions

sayHello(); // Works
function sayHello() {
    console.log("Hello!");
}

sayGoodbye(); // TypeError
var sayGoodbye = function () {
    console.log("Goodbye!");
};
// Tests understanding that function declarations are hoisted completely, while function expressions are not.



// 3. Const with Objects

const person = {
    name: "John"
};
person.name = "Jane"; // OK
person = {}; // TypeError

// Tests understanding that const prevents reassignment but not mutation of objects.




// PROOF OF HOISTING FOR LET AND CONST
var a = 1;
{
    // If let wasn't hoisted, this would print 1 due to accessing the outer 'a'
    // Instead, it throws ReferenceError, proving 'a' is hoisted in TDZ
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 2;
}



//   TRICKY QUESTIONS
console.log(foo);
foo();
var foo = function () {
    console.log('INSIDE', 1);
};
foo();
function foo() {
    console.log(2);
}
foo();

// RESULT 
// [Function: foo];  // The function body that prints 2
// 2;               // First foo() call
// INSIDE 1;        // Second foo() call
// INSIDE 1;        // Third foo() call



// REASON 

// FIRSTLY foo IS REFERENCING TO FUNCTION EXPRESSION SO  ENTIRE FUNCTION IS HOISTED AND LOG THE COMPLETE FUNCTION 
// THEN IT WILL CALL THE FUNCTION EXPRESSION ****** This is because function declarations take precedence over variable declarations during hoisting******
// THEN The function expression assignment happens: This overwrites the previous function declaration AS BELOW
// foo = function () { console.log('INSIDE', 1); };


// QUESTION 

console.log(foo());  // TypeError: foo is not a function

if (true) {
    function foo() { return 'a'; }
}
else {
    function foo() { return 'b'; }
}

// REASON 
// In modern JavaScript(strict mode), function declarations inside blocks are block - scoped.However, this code demonstrates a "temporal dead zone" issue.

// When executing console.log(foo()):
// At this point, foo is technically in a "temporal dead zone"
// The function hasn't been initialized yet because it's inside a block
// This will result in a TypeError: foo is not a function
//     The code will throw an error before even reaching the if/else block.



// QUESTION 

// var x = 1;
// let x = 2;  //Error 


// let y = 1;
// var y = 2;  //Error 


// const z = 1;
// {
//     const z = 2;  // OK 
//     let z = 3;   // Error
// }


// QUESTION

console.log(x); // undefined
var x = 1;

function foo() {
    let x = 20;
    return x;
    console.log('here'); // this will not even run
    // let x = 50; // but this will throw error

}
console.log(foo());
// IMPORTANT NOTE ****************************************************************
// WE CAN DECLARE FUNCTIONS OUTSIDE RETURN FUNCTION EXPRESSION AS MANY TIME WE WANT AFTER RETURN STATEMENT BUT CAN NOT REDECLARE LET CONST OF FUNCTION EXPRESSION OR ANY VARIABLE WITH LET AND CONST THAT BREAK ANY RULE.



// QUESTION 

foo();  // 3   REASON - OVER WRITTEN FUNCTION DECLARATION

function foo() {
    console.log(1);
}
function foo() {
    console.log(2);
}
function foo() {
    console.log(3);
}


// **************************************************************** IMPORTANT QUESTION  ****************************************************************


for (var i = 0; i < 3; i++) {
    console.log('OUTSIDE', i);
    setTimeout(() => console.log(i), 0);
}
// OUTPUT 

// OUTSIDE 0
// OUTSIDE 1
// OUTSIDE 2;
// 3;
// 3;
// 3

// REASON 
// Here's why this happens:

// The console.log('outside', i) executes immediately in the loop, so we see 0, 1, 2 printed right away.
// Each setTimeout callback is scheduled to run after the loop completes.
// The key point is that we used var which has function scope, not block scope.This means there's only one i variable that's shared across all setTimeout callbacks.
// By the time the callbacks actually execute, the loop has finished and i has become 3(that's when the loop condition i < 3 becomes false).
// Therefore, when each callback finally runs, they all reference the same i which is now 3.

// If you wanted each setTimeout to print the value of i at the time it was scheduled, you would need to either: Use let instead of var:


for (let i = 0; i < 3; i++) {
    console.log('outside', i);
    setTimeout(() => console.log(i), 0);
}

// Output:
// outside 0
// outside 1
// outside 2
// 0
// 1
// 2

// Key reasons for this output:

// Block Scoping:

// let creates a new binding for each loop iteration
// Each iteration has its own scope with its own i value
// This means each callback function captures a different i

// Closure Behavior:

// Each setTimeout callback creates a closure
// With let, each closure captures its own unique i value from its iteration's scope
// Unlike var, these values are preserved separately for each iteration

// Execution Order:

//     First, all console.log('outside', i) statements execute immediately;
// Then, after the loop completes, the setTimeout callbacks run
// Each callback has preserved its own unique value of i

// Or create a new scope using an IIFE (Immediately Invoked Function Expression):

for (var i = 0; i < 3; i++) {
    console.log('outside', i)
        (function (j) {
            setTimeout(() => console.log(j), 0);
        })(i);
}

// Here's why this works:

// IIFE Creation:

// Each iteration creates a new IIFE
// The IIFE takes a parameter j
// The current value of i is passed as an argument to this IIFE


// Scope Isolation:

// Each IIFE creates a new function scope
// The parameter j is local to each IIFE's scope
// This effectively "captures" the current value of i in each iteration


// Closure Behavior:

// The setTimeout callback creates a closure
// This closure captures the j parameter from its containing IIFE
// Since each IIFE has its own j, each callback captures a different value

// This is equivalent to writing:

for (var i = 0; i < 3; i++) {
    console.log('outside', i);
    let closure = function (j) {
        setTimeout(() => console.log(j), 0);
    };
    closure(i);
}


// QUESTION IMPORTANT: ********************************


const settings = Object.seal({
    theme: 'dark',
    config: {
        cache: true
    }
});


// Object.seal() makes it so:

// You cannot add new properties
// You cannot delete existing properties
// You CAN modify values of existing properties

settings.theme = 'light';        // // ✅ Allowed
settings.newProp = true;         // ❌ Fails silently in non-strict mode  Fails because seal() prevents adding new properties
settings.config.cache = false;   // ✅ Allowed
settings.config = {};             // ✅ Allowed
console.log(settings);  // { theme: 'light', config: {} }



// QUESTION IMPORTANT: ********************************

function test(x = y, y = 2) {
    console.log(x, y);
}
test();  // ReferenceError: Cannot access 'y' before initialization

// Here's why this happens:

// Parameter Initialization Order:

// Parameters are initialized left to right
// When setting default value for x, it tries to use y
// At this point, y is in the temporal dead zone(TDZ)
// Even though y has a default value of 2, it hasn't been initialized yet;



// QUESTION IMPORTANT: ********************************

function test2(x) {
    // x is already declared as parameter
    // var x; would be hoisted here if allowed
    let x = 1;  // Error: can't redeclare x
    {
        var x = 2;  // Error: can't redeclare x
    }
}

// or we can use 
function test2(x) {
    x = 1;  // Just reassign the parameter
    {
        x = 2;  // Another reassignment
    }
}
// The key takeaway is that you cannot redeclare:

// Function parameters using let/var/const
// Variables declared with let /const
//     Variables in the same scope(and remember var is function-scoped)


// QUESTION IMPORTANT: ********************************


let x = 1;
{
    console.log(x);  // [Function: x]
    function x() { }  // Function declaration
}
console.log(x);  // 1

// Here's why this is happening:

// Function Declarations in Blocks:

// Function declarations in blocks in non - strict mode have special hoisting behavior
// The function x() is hoisted to the top of the block
// It creates a new binding of x in the block scope;


//QUESTION IMPORTANT: ********************************

const obj = {
    x: 1,
    print() {
        console.log(this.x, x);  //error because x refers to let x if we want to use object.x then we need to use this.x
        let x = 2;
    }
};
obj.print();



// QUESTION IMPORTANT: ********************************

let i = 0;
for (let i = i; i < 3; i++) {  // Cannot access 'i' before initialization
    console.log(i);
}

// You get the error "Cannot access 'i' before initialization" because:

// The let i = i in the for loop creates a new block - scoped variable i
// Due to the Temporal Dead Zone(TDZ) in JavaScript, you cannot access a let variable before its declaration, even if there's another variable with the same name in an outer scope
// In let i = i, the i on the right side is trying to reference the same block-scoped i that's being declared, not the outer i
// This creates a TDZ error because you're trying to use i before it's fully initialized

// This is different from my previous explanation about NaN - the code doesn't even get to that point because it throws a reference error first.;


// QUESTION IMPORTANT: ********************************

// module.js
console.log(x);  // This would throw ReferenceError
export let x = 1;

// main.js
import { x } from './module.js';
console.log(x);  // ???
var x = 2;  // ???   NEED TO CHECK



// QUESTION IMPORTANT: ********************************

var x = 1;
{
    let x = 2;
    {
        const x = 3;
        {
            console.log('INSIDE', x); // INSIDE 3
        }
    }
}
console.log('OUTSIDE', x);   //OUTSIDE 1



// ************************************************************* IMPORTANT RULES TO LEARN *************************************************************

// 1. VAR RULES:----------------------------------------------------------------

// Rule 1: Function-scoped or globally-scoped
var x = 1;
function test() {
    var x = 2;  // Different x
    if (true) {
        var x = 3;  // Same x as line above
    }
}

// Rule 2: Can be redeclared
var x = 1;
var x = 2;  // Legal

// Rule 3: Can be updated
var x = 1;
x = 2;  // Legal

// Rule 4: Hoisted with initial value undefined
console.log(x);  // undefined
var x = 1;

// Rule 5: Creates property on global object (in non-strict mode)
var global = 'x';
console.log(window.global);  // 'x' in browser


// 2. LET RULES::----------------------------------------------------------------

// Rule 1: Block-scoped
let x = 1;
if (true) {
    let x = 2;  // Different x
    console.log(x);  // 2
}
console.log(x);  // 1

// Rule 2: Cannot be redeclared in same scope
let x = 1;
let x = 2;  // SyntaxError

// Rule 3: Can be updated
let x = 1;
x = 2;  // Legal

// Rule 4: Hoisted but in TDZ (Temporal Dead Zone)
console.log(x);  // ReferenceError
let x = 1;

// Rule 5: Does not create property on global object
let global = 'x';
console.log(window.global);  // undefined


// 3. CONST RULES: ----------------------------------------------------------------
// Rule 1: Block-scoped (same as let)
const x = 1;
if (true) {
    const x = 2;  // Different x
}

// Rule 2: Cannot be redeclared
const x = 1;
const x = 2;  // SyntaxError

// Rule 3: Cannot be reassigned
const x = 1;
x = 2;  // TypeError

// Rule 4: Must be initialized at declaration
const x;  // SyntaxError

// Rule 5: Object/Array values can be modified
const obj = { a: 1 };
obj.a = 2;  // Legal
obj.b = 3;  // Legal
obj = {};   // TypeError

const arr = [1];
arr.push(2);  // Legal
arr = [];     // TypeError

// 4. HOISTING RULES: ----------------------------------------------------------------

// Rule 1: Function declarations are completely hoisted
sayHi();  // Works
function sayHi() {
    console.log('Hi');
}

// Rule 2: var declarations are hoisted with undefined
console.log(x);  // undefined
var x = 1;

// Rule 3: let/const declarations are hoisted to TDZ
console.log(x);  // ReferenceError
let x = 1;

// Rule 4: Function expressions are not hoisted
sayHi();  // TypeError
var sayHi = function () {
    console.log('Hi');
};

// Rule 5: Class declarations and expressions are not hoisted
new Car();  // ReferenceError
class Car { }

// Rule 6: Import declarations are hoisted
console.log(imported);  // Works
import { imported } from './module';


// 5. TEMPORAL DEAD ZONE(TDZ) RULES: ----------------------------------------------------------------
// Rule 1: TDZ starts at block beginning
{
    // TDZ starts here for x
    console.log(x);  // ReferenceError
    let x = 1;  // TDZ ends here
}

// Rule 2: TDZ applies to entire block
let x = 1;
{
    console.log(x);  // ReferenceError
    let x = 2;  // Local x's TDZ affects whole block
}

// Rule 3: typeof not safe in TDZ
console.log(typeof undeclaredVar);  // 'undefined'
console.log(typeof declaredLater);  // ReferenceError
let declaredLater;

// 6. CLOSURE RULES: ----------------------------------------------------------------

// Rule 1: Functions retain access to outer scope
function outer() {
    let x = 1;
    return function inner() {
        console.log(x);  // 1
    };
}

// Rule 2: Each closure gets its own scope copy
function createFunctions() {
    let funcs = [];
    for (let i = 0; i < 3; i++) {
        funcs.push(function () {
            console.log(i);
        });
    }
    return funcs;
}

// Rule 3: Closures store references, not values
function makeCounter() {
    let count = 0;
    return {
        increment: function () { count++; },
        get: function () { return count; }
    };
}

// Rule 4: Closures in loops with var vs let
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);  // 3,3,3
}
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);  // 0,1,2
}

// Rule 5: Closures and this binding
const obj = {
    value: 1,
    getValue: function () {
        return () => this.value;  // Arrow function inherits this
    }
};


// 7. SCOPE CHAIN RULES: ----------------------------------------------------------------

// Rule 1: Inner scope has access to outer scope
let a = 1;
function first() {
    let b = 2;
    function second() {
        let c = 3;
        console.log(a, b, c);  // Can access all
    }
}

// Rule 2: Scope lookup stops at first match
let x = 1;
function test() {
    let x = 2;
    console.log(x);  // 2 (uses closest x)
}

// Rule 3: Global scope is last in chain
var global = 'global';
function checkScope() {
    console.log(global);  // Checks local then global
}


// 8. MODULE SCOPE RULES: ----------------------------------------------------------------

// Rule 1: Module-level declarations are scoped to module
let moduleVar = 1;  // Only accessible within module

// Rule 2: Exports must be at top level
if (true) {
    export let x = 1;  // SyntaxError
}

// Rule 3: Imports are hoisted
console.log(imported);  // Works
import { imported } from './module';




// ****************************************************************  MORE ADVANCED RULES TO LEARN ****************************************************************

// 1. ADVANCED VAR RULES: ----------------------------------------------------------------

// Rule 1: var in eval creates variables in containing scope
function test() {
    eval('var x = 10');
    console.log(x);  // 10 - x is accessible
}

// Rule 2: var in with statement
var obj = { x: 'outer' };
with (obj) {
    var x = 'inner';  // Creates global x, doesn't modify obj
}

// Rule 3: var in catch block
try {
    throw 'error';
} catch (e) {
    var e = 5;  // Creates variable in outer scope
}


// 2. ADVANCED CLOSURE PATTERNS: ----------------------------------------------------------------

// Rule 1: Immediately Invoked Function Expression (IIFE)
var x = 10;
(function () {
    var x = 20;  // Different x
})();

// Rule 2: Module Pattern
const module = (function () {
    let private = 'private';

    return {
        getPrivate: () => private,
        setPrivate: (val) => private = val
    };
})();

// Rule 3: Partial Application
function multiply(a, b) {
    return a * b;
}
const multiplyByTwo = multiply.bind(null, 2);

// Rule 4: Currying with Closures
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return (...more) => curried.apply(this, args.concat(more));
    };
}


// 3. BLOCK SCOPE EDGE CASES: ----------------------------------------------------------------

// Rule 1: try-catch-finally blocks
let x = 1;
try {
    let x = 2;
    throw new Error();
} catch (e) {
    let x = 3;
    console.log(x);  // 3
} finally {
    let x = 4;
    console.log(x);  // 4
}

// Rule 2: Switch statement blocks
switch (true) {
    case true:
        let x = 1;  // Scoped to entire switch
        break;
    case false:
        let x = 2;  // SyntaxError: x already declared
        break;
}


// 4.TEMPORAL DEAD ZONE COMPLEXITIES:----------------------------------------------------------------

// Rule 1: TDZ in default parameters
function test(a = b, b = 2) {
    console.log(a, b);
}
test();  // ReferenceError: b not initialized

// Rule 2: TDZ with destructuring
let { prop: value = defaultValue } = obj;  // defaultValue must be declared
let defaultValue = 1;  // Too late!

// Rule 3: TDZ in class fields
class Example {
    field = this.helper();  // TDZ for other
    helper() { return this.other; }
    other = 42;
}


// 5. CONST WITH OBJECT FREEZE / SEAL: ----------------------------------------------------------------

// Rule 1: Object.freeze prevents all modifications
const frozen = Object.freeze({
    prop: 1,
    nested: { prop: 2 }
});
frozen.prop = 2;         // Fails silently or throws in strict mode
frozen.nested.prop = 3;  // Works! (shallow freeze)

// Rule 2: Object.seal prevents adding/removing properties
const sealed = Object.seal({ prop: 1 });
sealed.prop = 2;      // Works
sealed.newProp = 3;   // Fails silently or throws in strict mode
delete sealed.prop;   // Fails


// 6. HOISTING WITH CLASSES:----------------------------------------------------------------

// Rule 1: Class expressions in TDZ
let MyClass = class extends Base {  // ReferenceError if Base not declared
    static prop = MyClass.name;     // ReferenceError: MyClass in TDZ
};

// Rule 2: Class fields initialization order
class Example {
    first = this.second;   // undefined
    second = 'second';
    method() {
        return this.first; // undefined during construction
    }
}


// 7. SCOPE AND THIS BINDING: ----------------------------------------------------------------

// Rule 1: Arrow functions and this
const obj = {
    arr: [1, 2, 3],
    sum: function () {
        return this.arr.reduce((a, b) => {
            // 'this' is from outer function
            return a + b;
        }, 0);
    }
};

// Rule 2: Class fields and this binding
class Button {
    text = 'Click';
    // Arrow function preserves this
    handleClick = () => {
        console.log(this.text);
    };
    // Regular method loses this when used as callback
    handleClickBad() {
        console.log(this.text);
    }
}


// 8. MODULE IMPORT / EXPORT EDGE CASES:----------------------------------------------------------------

// Rule 1: Circular dependencies
// file1.js
export let x = 1;
import { y } from './file2.js';
x = y;

// file2.js
export let y = 2;
import { x } from './file1.js';
y = x;  // Creates dependency cycle

// Rule 2: Re-export patterns
export { default as myDefault } from './other.js';
export * from './other.js';
export { name1 as name2 } from './other.js';



// 9. CLOSURE MEMORY MANAGEMENT:----------------------------------------------------------------


// Rule 1: Avoid accidental closures
function process(data) {
    // Whole data array captured in closure
    return data.map(item => item.value);
}

// Better approach
function process(data) {
    // Only necessary data captured
    const values = data.map(item => item.value);
    return () => values;
}

// Rule 2: Clear references
function createHeavyObject() {
    let heavyData = new Array(1000000);

    return {
        cleanup: () => {
            heavyData = null;  // Allow garbage collection
        }
    };
}