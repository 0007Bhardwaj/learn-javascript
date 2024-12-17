// question 1

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); // 5 5 5 5 5
//   }, 1000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); // 0 1 2 3 4
//   }, 1000);
// }

// we have to get the output same as let but using for

// for (var i = 0; i < 5; i++) {
//   function inner(index) {  // using closure index is now the local variable and new memory location is created each new time
//     setTimeout(function () {
//       console.log(index); // 0 1 2 3 4
//     }, 1000);
//   }
//   inner(i);
// }

// questions 2

// let func = [];
// for (var i = 0; i < 5; i++) {
// function inner(index) {
//   console.log("🚀 ~ inner ~ index:", index);
//   func[index] = function () {
//     return index;
//   };
// }
// inner(i);
//   func[i] = function () {
//     console.log("iiii" + i); // 5 5 5 5 5
//     return i;
//   };
// }

// same as above example
// using var result is 5 5 5 5 5
// using let result is 0 1 2 3 4
// using inner function we can fix issue here as well

// console.log("🚀 ~ func: after loop 0 ", func[0]());
// console.log("🚀 ~ func: after loop1", func[1]());
// console.log("🚀 ~ func: after loop 2 ", func[2]());
// console.log("🚀 ~ func: after loop 3 ", func[3]());
// console.log("🚀 ~ func: after loop 4 ", func[4]());

// func[3]();
// explanation this happens because when we use var- var has a function scope so settimeout doesnt run immediatley it will run after all the code has completed so reference to the var
//  variable has been updated with 5 because the loop have completed running and let have a block scope so a new reference is created for each value of 1 and event loop has worked

// example 3

// (function () {
//   var a = (b = 5);
// })();
// console.log(a);
// console.log(b);
// explaination :   But in fact, var a = b = 5; is actually shorthand for:
// b = 3;
// var a = b;
// so a is declared with var so it have a function scope and b is not declared with var so its have a global scope and can be accessed outside scope
//  but it will give error in strict mode

// example 4

// function calculate(operator) {
//   return function (a) {
//     return function (b) {
//       const resultantObj = {
//         "+": a + b,
//         "*": a * b,
//       };
//       console.log(resultantObj[operator]);
//     };
//   };
// }

// calculate("+")(1)(2); // 3
// calculate("*")(2)(3); // 6

// example 5

// var sum = function () {
//   return function firstFunc(first) {
//     if (!first) return 0;
//     return function (second) {
//       if (!second) return first;
//       return firstFunc(first + second);
//     };
//   };
// };
// var s = sum();
// console.log(s()); // 0
// console.log(s(1)()); // 1
// console.log(s(1)(2)()); //3
// console.log(s(3)(4)(5)()); // 12

// example 6

// (function (x) {
//   return (function (y) {
//     console.log(x, y);  // 1 2
//   })(2);
// })(1);

// example 7

// const fn = () => {
//   let a = 1;
//   return () => {
//     a++;
//     return a;
//   };
// };
// const fnRes = fn();
// console.log(fnRes()); // 2
// console.log(fnRes()); // 3

// const fnRes2 = fn();
// console.log(fnRes2()); // 2
// console.log(fnRes2()); // 3
// // output is same with var also

// example 8

/*
- Do you understand the closure?
- Yes!
- Write a function, that does this next:
*/
// const func = (a, b, c, d, e) => a + b + c + d + e;

// function yourFunction(...firstArgs) {
//   const combinedFirstArgs = firstArgs.reduce((a, b) => a + b, 0);
//   return function (...secondArgs) {
//     const combinedSecondArgs = secondArgs.reduce((acc, val) => acc + val, 0);
//     if (combinedSecondArgs) {
//       return yourFunction(combinedFirstArgs + combinedSecondArgs);
//     }
//     // return combinedFirstArgs;
//     return combinedFirstArgs;
//   };
// } // this function we can used if we dont want to return the function

// function yourFunction(fn) { // this function gives the expected result
//   const expectedArgsLength = fn.length;
//   return function curryFunc(...args) {
//     if (args.length >= expectedArgsLength) {
//       return fn(...args);
//     } else {
//       return (...nextArgs) => curryFunc(...args, ...nextArgs);
//     }
//   };
// }

// const hof = yourFunction(func);

// console.log(hof(1, 2, 3, 4, 5)); // 15
// console.log(hof(2, 3, 4)(5, 6)); // 20
// console.log(hof(3, 4)(5, 6)(7)); // 25
// console.log(hof(4, 5)(6)(7, 8)); // 30
// console.log(hof(5)(6)(7)(8)(9)); // 35

//  example 9
// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }

//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message); // 0
//     console.log("count" + count); // 3
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log(); // What is logged?  // count is 0
// explaination : The increment function correctly increments count, but the message variable is not updated because it's not part of the closure that references the updated count.

// example 10

// function createStack() {
//     const items = [];
//     return {
//       push(item) {
//         items.push(item);
//       },
//       pop() {
//         return items.pop();
//       },
//     };
//   }

//   const stack = createStack();
//   stack.push(10);
//   stack.push(5);
//   console.log(stack.pop()); // => 5

//   console.log(stack.items); // => undefined because you have to return items as well

//   example 11

// function outer() {
//     let counter = 0;

//     function incrementCounter() {
//       // we have access to counter here even though it's defined in the parent scope
//       counter += 1;
//       return counter;
//     }
//     return incrementCounter;
//   }

//   let myFunc = outer();
//   console.log(myFunc());  // 1
//   console.log(myFunc()); // 2

// exapmple 12

// function add(a) {
//   var x = "Sum of two numbers is ";
//   return function (b) {
//     var sum = a + b;
//     console.log(x + sum);
//   };
// }

// var totalSum = add(5);
// totalSum(20); // Sum of two numbers is 25

// example 13

// function outer() {
//   var x = 10;
//   function inner() {
//     console.log(x);
//   }
//   x = 20;
//   return inner;
// }

// var innerFunc = outer();
// innerFunc();  // 20
// explaination  The output will be 20. This is because the inner function has access to the x variable in the outer function's scope,
//  and that variable is assigned the value of 20 before the inner function is returned.
// When innerFunc is called, it logs the current value of x, which is 20.

// example 14
// function outest() {
//   var c = 12;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c); // try printing b and c  here
//     }
//     let a = 10; 
//     return inner;
//   }
//   return outer;
// }

// let a = 100;
// // Passing argument here
// var close = outest()("Hi Closures"); // this will give you outer function
// close(); // 10 Hi Closures 12