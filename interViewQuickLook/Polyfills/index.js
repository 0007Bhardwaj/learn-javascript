// PolyFills top 10

const myArray = [12, 15, 17, 19, 15, 19, 12, 55, 70, 23];

// 1.-------Array.map()---------

// Array.prototype.myMap = function (callBack) {
//   console.log("🚀 ~ callBack:", typeof callBack);

//   let temp = [];
//   if (!typeof callBack === "function") {
//     throw new Error("callback must be a function");
//   }
//   for (let index = 0; index < this.length; index++) {
//     temp.push(callBack(this[index], index, this));
//   }
//   return temp;
// };

// const result = myArray.myMap((val) => val * 2);
// console.log("🚀 ~ result:", result); //  [24, 30,  34,  38, 30,38, 24, 110, 140, 46]

// 2.-------Array.filter ()---------

// Array.prototype.myFilter = function (callBack) {
//   console.log("🚀 ~ callBack:", typeof callBack);

//   let temp = [];
//   if (!typeof callBack === "function") {
//     throw new Error("callback must be a function");
//   }
//   for (let index = 0; index < this.length; index++) {
//     if (callBack(this[index], index, this)) {
//       temp.push(this[index]);
//     }
//   }
//   return temp;
// };

// const result = myArray?.myFilter((val) => val % 2 === 0);
// console.log("🚀 ~ result:", result);

// 3.-------Array.reduce ()---------

// const newArray = [1,2,3,4,5]

// Array.prototype.MyReduce = function (callBack, initialValue) {

//   // initialize accumulator
//   let accumulator = initialValue !== undefined ? initialValue : 0;

//   if (!typeof callBack === "function") {
//     throw new Error("callback must be a function");
//   }

//   for (let index = 0; index < this.length; index++) {
//     accumulator = callBack(accumulator, this[index], index, this);
//   }

//   return accumulator;
// };

// const result = newArray?.MyReduce((acc, curr) => acc + curr);
// console.log("🚀 ~ MyReduce result:", result);

// 4.------- Function.call() ---------

// function displayDetails(post) {
//   console.log("Result is " + this.name + "at post of " + post);
// }

// const myObj = {
//   name: "Ankit Yadav",
// };

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (!typeof this === "function") {
//     throw new Error("not callable on non function type");
//   }
//   const func = Symbol("fn");
//   context[func] = this;
//   context[func](...args);
//   delete context[func];
// };

// displayDetails.myCall(myObj, "React Native Developer");
// console.log("🚀 ~ myObj:", myObj)

// 5.------- Function.apply() ---------

// function displayDetails(post, secondPost) {
//   console.log(
//     "Result is " +
//       this.name +
//       "at post of " +
//       post +
//       "at secondPost of " +
//       secondPost
//   );
// }

// const myObj = {
//   name: "Ankit Yadav",
// };

// Function.prototype.myApply = function (context = {}, args = []) {
//   if (!typeof this === "function") {
//     throw new Error("not callable on non function type");
//   }
//   const func = Symbol("fn");
//   context[func] = this;
//   context[func](...args);
//   delete context[func];
// };

// displayDetails.myApply(myObj, ["React Native Developer", "JS developer"]);

// 6.------- Function.bind() ---------

// function displayDetails(post, secondPost) {
//   console.log(
//     "Result is " +
//       this.name +
//       " at post of " +
//       post +
//       " at secondPost of " +
//       secondPost
//   );
// }

// const myObj = {
//   name: "Ankit Yadav",
// };

// Function.prototype.myBind = function (context = {}, ...args) {
//   if (!typeof this === "function") {
//     throw new Error("not callable on non function type");
//   }
//   const uniqueFuncId = Symbol("func");
//   const fn = this;
//   context[uniqueFuncId] = this;
//   return function (...restArgs) {
//     // return fn.apply(context, [...args, ...restArgs]); // if we can use apply method
//     return context[uniqueFuncId](...args, ...restArgs); // if we can't use apply method
//   };
// };

// const resultFucn = displayDetails.myBind(myObj, "React Native Developer");
// resultFucn("js developer");

// 7.------- once() ---------

// function logSomething() {
//   var count = 0;
//   console.log("Hello " + count);
//   ++count;
//   return { count };
// }

// function once(func = () => {}) {
//   let isFirstTime = true;
//   let result;

//   return function (...args) {
//     if (isFirstTime) {
//       isFirstTime = false;
//       result = func.apply(this, ...args);
//       return result;
//     }
//   };
// }

// const optimisedFunc = once(logSomething);
// console.log(optimisedFunc()?.count);
// console.log(optimisedFunc()?.count);
// console.log(optimisedFunc()?.count);
// console.log(optimisedFunc()?.count);

// 8.------- memoize() ---------

// function square(a, b) {
//   console.log("function called");
//   return a * b;
// }

// function memoize(func = () => {}, context = this) {
//   const responseCache = new Map();
//   return function (...args) {
//     const argsCache = JSON.stringify(args);
//     if (!responseCache.has(argsCache)) {
//       const result = func.call(context, ...args);
//       responseCache?.set(argsCache, result);
//     }
//     console.log("🚀 ~ memoize ~ responseCache:", responseCache);
//     return responseCache.get(argsCache);
//   };
// }
// const memoizeSquare = memoize(square);
// console.log("🚀 ~ memoizeSquare:", memoizeSquare(9, 10));
// console.log("🚀 ~ memoizeSquare:", memoizeSquare(9, 10));
// console.log("🚀 ~ memoizeSquare:", memoizeSquare(10, 10));
// console.log("🚀 ~ memoizeSquare:", memoizeSquare(10, 10));
// console.log("🚀 ~ memoizeSquare:", memoizeSquare(10, 10));

// 9.------- debounce() ---------

// function debounce(func = () => {}, delay = 0) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const displayDetails = (name) => {
//   console.log("function called " + name);
// };

// const debouncedFunc = debounce(displayDetails, 2000);
// debouncedFunc("ankit yadav");

// 10.------- throtle() ---------
