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

// example 15

//-------- Trick one caching using map

// const cache = new Map();
// function memoiseFunction(func) {
//   return function (first, second) {
//     if (cache.has(`${first}+${second}`)) {
//       return cache.get(`${first}+${second}`);
//     }
//     const result = func(first, second);
//     cache.set(`${first}+${second}`, result);

//     return result;
//   };
// }

// const addTwoNumbers = (a, b) => {
//   console.log("function called ");
//   return a + b;
// };

// const myMemoFunction = memoiseFunction(addTwoNumbers);
// console.log("🚀 ~ calculatedRes:", myMemoFunction(2, 5));
// console.log("🚀 ~ calculatedRes:", myMemoFunction(2, 5));
// console.log("🚀 ~ calculatedRes:", myMemoFunction(5, 5));
// console.log("🚀 ~ calculatedRes:", myMemoFunction(5, 5));
// console.log("🚀 ~ cache:", cache);

// example 16

// let count = 0;
// function closure() {
//   setTimeout(() => {
//     console.log(value);
//   }, 0);
//   let value = 0;
//   value++
// }

// closure(); // logs 1 as set timeout goes to event loop, when it comes back to call stack the value of value is 1

// example 17    Flattern Array

// const array1 = [1, 2, 3, { name: "ankit" }, [[[[4]]]], 5, [[6], [[7]]]];
// const flattenArray = (arrayToFlat = [], expected = []) => {
//   for (let index = 0; index < arrayToFlat.length; index++) {
//     if (Array.isArray(arrayToFlat[index])) {
//       flattenArray(arrayToFlat[index], expected);
//     } else {
//       expected.push(arrayToFlat[index]);
//     }
//   }
//   return expected;
// };
// const result = flattenArray(array1);

// console.log("🚀 ~ result:", result);

// example 18

// take use of the closure and advantages of closure
// const findValue = () => {
//   let array = [];
//   for (let index = 0; index < 1000000; index++) {
//     array[index] = index * index;
//   }

//   return function () {
//     console.log(array[0]);
//   };
// };
// const newValue = findValue();

// console.time("6");
// newValue(0);
// console.timeEnd("6");

// console.log("---------");

// console.time("1000");
// newValue(1000);
// console.timeEnd("1000");

// example 19

// const heavyFunctions = (numb1, numb2) => {
//   for (let index = 0; index <= 1000000; index++) {}
//   return numb1 + numb2;
// };

// function memoised(func, context) {
//   const cache = {};
//   return function (...args) {
//     var argsCache = JSON.stringify(args);
//     if (!cache[argsCache]) {
//       cache[argsCache] = func.call(context || this, ...args);
//     }
//     return cache[argsCache];
//   };
// }

// const memoisedFunction = memoised(heavyFunctions);

// console.time("1");
// console.log(memoisedFunction(1, 2));
// console.timeEnd("1");
// console.log("---------");

// console.time("2");
// console.log(memoisedFunction(100, 2));
// console.timeEnd("2");

// example 20

// infinite currying

// function infiniteCurrying(a) {
//   return function (b) {
//     if (b) return infiniteCurrying(a + b);
//     return a;
//   };
// }
// console.log(infiniteCurrying(2)(4)(7)());

// example 21

// make a function currying
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

// function convertToCuryying(func = () => {}) {
//   return function curried(...args) {
//     if (args?.length >= func?.length) {
//       return func.apply(this, args)
//     } else {
//       return function (...rest) {
//         return curried.apply(this,args.concat(rest))
//       };
//     }
//   };
// }

// const resultedFunction = convertToCuryying(sum);
// console.log(resultedFunction?.(1, 2, 3, 4));

// example 22

// const obj = {
//   name: "ankit",
//   age: "25",
// };

// function changeRefernce(object) {
//   object.name = 'bhardwaj';
//   object = {};
//   return object

// }
// const obj2 =changeRefernce(obj)
// console.log("🚀 ~ obj:", obj)
// console.log("🚀 ~ obj2:", obj2)

// example 23
// infinite currying with infinite arguments

// function add(...args) {
//   let a = args.reduce((a, b) => a + b, 0);
//   return function (...args) {
//     let b = args.reduce((a, b) => a + b, 0);

//     if (b) {
//       return add(a + b);
//     }
//     return a;
//   };
// }
// console.log("====================================");
// console.log(add(1, 2, 3, 4)(4, 3, 2, 1)(5, 6)());
// console.log("====================================");

// example 24
// Another way to partially apply a function in JavaScript is to use a closure. Here’s an example:

// function multiply(a, b) {
//   return a * b;
// }

// function partiallyApply(func, ...fixedArgs) {
//   return function (...remainingArgs) {
//     return func.apply(null, fixedArgs.concat(remainingArgs));
//   };
// }

// const multiplyBy3 = partiallyApply(multiply, 3); // Fix the first argument to 3
// console.log(multiplyBy3(10)); // Returns 12

// example 25
//  currying with async functions
// const asyncAdd = a => async b => a + b;

// (async function() {
//   const addFive = asyncAdd(5);
//   console.log(await addFive(10));  // Outputs: 15
// })();

// ---- n functions composition-------

// const compose =
//   (...functions) =>
//   (initialValue) =>
//     functions.reduceRight((value, func) => func(value), initialValue);

// // Example usage
// const add = (x) => x + 2;
// const multiply = (x) => x * 3;
// const subtract = (x) => x - 1;

// const composedFunction = compose(add, multiply, subtract);

// console.log(composedFunction(4)); // Output: 11

// example 26

// let x = 20;
// function logsSomething() {
//   console.log("🚀 ~ logsSomething ~ x:", x); // undefined and error with let and const
//   var x = 20;
// }
// logsSomething();

// ---- closure quesions-------

// function counter(start = 0) {
//   let count = start;
//   function addCounter(addBy) {
//     count += addBy || 1;
//   }
//   function reduceCounter(reduceBy) {
//     count -= reduceBy || 1;
//   }
//   function getValue() {
//     return count;
//   }
//   function clearCounter() {
//     count = 0;
//   }

//   return {
//     addCounter,
//     reduceCounter,
//     getValue,
//     clearCounter,
//   };
// }

// const counter1 = counter(100);
// counter1.addCounter();
// counter1.addCounter(99);
// console.log(counter1.getValue());

// ---------- output ---------

// const age = 20;
// (function immediate(number) {
//   const message = `number is: ${number} and age is ${age}`;
//   console.log("🚀 ~ result ~ message:", message);
//   return message;
// })(100);

// ---------- Chaining ---------

// const chainObj = {
//   data: [],
//   push(val) {
//     this.data.push(val);
//     return this;
//   },
//   pop(val) {
//     this.data.pop(val);
//     return this;
//   },
//   shift(val) {
//     this.data.shift(val);
//     return this;
//   },
// };

// chainObj.push(20).push(29);
// console.log(chainObj.data);

// ---------- Output ---------

// var length = 20;
// function count() {
//   console.log(this.length);
// }
// const data = [count, "A", 0];
// data[0](); // output 3 // value of this depends on the left side of function

// ---------- Output ---------
// console.log(JSON.stringify("bhardwaj") === "bhardwaj" ); // false
// because json.stringify will add extra quotes and it will become '"bhardwaj"' === 'bhardwaj'. that why it return false
// json.parse cannot add '' to undefined

// ---------- Output ---------

// if (0) {
//   function getData() {}
// }
// console.log(getData); // undefined
// In JavaScript, if (0) evaluates to false, so the block of code inside the if statement will not execute. As a result, the getData function is not declared.
// When you try to console.log(getData), it will output undefined because getData is not defined in the current scope. Here’s a simple explanation:
// if (0) means the condition is false, so the code inside the block is ignored. Therefore, getData is never defined.Attempting to log getData shows undefined since the function does not exist.
// we can fix this issue by executing the if block by if(1) {......}

// ---------- Output ---------

// const myObj = { name: "ankit" };
// myObj.name='bhardwaj'
// console.log(myObj.name); //bhardwaj
// const means we cant reassign the variable but here we are not reassigning myObj we are just updating the value at  myObj referrence so its fine and it will not give us error
// if we try myObj = {}. then it will give error as we are reassigning it. if we want to achieve same thing with obj we can use Object.freeze()

// ---------- mount and unmount parent and child ---------
// first child will mount then parent
// during unmount first parent will unmount and then children

// ---------- Output ---------

// console.log(2 == 2); // true
// console.log((2 == 2) == 2); // false
// console.log(((2 == 2) == 2) == 0); // true
// using == the flow of exection start from left to right so 2==2 result true and then true===2 so it will convert true to number so it will become 0==2 which is false
// then false == 0 so false will  converted to 0 and  it becomes 0==0 and result is true

// ---------- Output ---------

// const output = 10 + isNaN(2) ? 0 : 20;
// console.log(output); // 0
// In js + is executed before ternary operator so it will count 10 + isNan(2) first so it will become 10 + 2 , 12 ? ) : 20 so it will return 0
// if want to fix that issue we need to wrap if else in ()

// const output = 10 +( isNaN(2) ? 0 : 20);
// console.log(output); // 30

// ---------- Output ---------

// const obj = {};
// function transform(data) {

//     data.name = "bhardwaj"; //
//     console.log(obj==data); // true

//     data = null;
//     console.log(obj==data); //false
//   return data;
// }

// const newObj = transform(obj)
// console.log(obj); // { name: 'bhardwaj' }
// console.log(newObj); // null
// data = null; reassigns the local variable data to null. This does not affect the original object obj;
//  it only changes the reference held by the local variable data within the function scope.
//  After this line, data no longer points to the original object, but the original object still exists in memory and is referenced by obj.

// ---------- Output ---------

// console.log(show); // [Function: show]

// console.log(Test); //Cannot access 'Test' before initialization

// function show() {
//   console.log(show);
// }
// class Test {}
// class const let can't be accessed before initialization

// ---------- Output ---------

// const myArray = [{name:"bhardwaj"}, 2, '4', []]
// console.log(myArray.length); // 4
// delete myArray[1]
// delete myArray[0].name
// console.log(myArray); // [ {}, <1 empty item>, '4', [] ]
// console.log(myArray.length); // 4

// ---------- Output ---------

// console.log((true+'')[3]); // e

// ---------- Output ---------

// class Magic {}
// console.log(typeof Magic); // function

// ---------- Output ---------

// const arr = ['name'];
// const obj = {}
// obj.name='Bhardwaj',
// obj[arr] = 'React'
// console.log(obj.name); // React
// console.log(arr.toString()); // React
// obj keys can be only string and symbol so when we pass array as key js will try to convert in string and is will become name so previous name key will be updated.

// const arr = ['name','hello']
// console.log(arr.toString()); //name,hello

// ---------- Output ---------

// function fetch() {
//   a = 7;
//   console.log(a);

// }
// let a;
// // fetch(); 7

// The variable a is declared using let in the global scope, which means it is block-scoped to the global context.
// Inside the fetch function, since there is no local declaration of a using let, const, or var, the assignment a = 7; refers to the global a.
// This is because JavaScript first looks for the variable a within the function's local scope and, not finding it, proceeds to the next outer scope, which in this case is the global scope.

// function fetch() { 
//     a = 7;
//     console.log(a);
//   }
  
//   fetch(); // if we try to call be declaration it will throw error
//   let a;

// explanation -  a = 7;: This line attempts to assign the value 7 to a. Since a is not declared within the function or in a higher scope at this point, 
// it would normally create a global variable a. However, because let a; exists in the block scope (even though it appears after the function call),
//  JavaScript recognizes this and treats a as if it is in the TDZ during the function execution.

// ---------- Output ---------
