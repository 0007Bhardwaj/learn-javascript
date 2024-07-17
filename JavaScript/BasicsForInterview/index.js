// 1. "use strict";
// JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode".
// Strict mode isn't just a subset: it intentionally has different semantics from normal code.

// Strict mode makes several changes to regular JavaScript semantics:
// a. Eliminates some JavaScript silent errors by changing them to throw errors.
// b. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

// 2. Slice and Splice method

// a. slice method ()
// The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
//  syntax ---->  slice(optional start parameter, optional end parameter)
const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

// console.log(cities);  [ 'Tokyo', 'Cairo', 'Los Angeles', 'Paris', 'Seattle' ]
// console.log(cities?.slice(2,4)); [ 'Los Angeles', 'Paris' ]
// console.log(cities?.slice(-1)); [ 'Seattle' ]
// console.log(cities?.slice(1)); [ 'Cairo', 'Los Angeles', 'Paris', 'Seattle' ]
// console.log(cities?.slice(0,-1)); [ 'Tokyo', 'Cairo', 'Los Angeles', 'Paris' ]
// console.log(cities?.slice(0,-3));  [ 'Tokyo', 'Cairo' ]

// b. splice method ()

// Unlike the slice() method, the splice() method will change the contents of the original array. 
// The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

// syntax ----->  splice(start, optional delete count, optional items to add)
const food = ['pizza', 'cake', 'salad', 'cookie'];
food.splice(1,0,"burrito")
console.log(food);
