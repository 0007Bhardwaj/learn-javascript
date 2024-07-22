// const a = {};
// const b = {};

// const myMap = new Map([
//   [a, "ankit"],
//   [b, "yadav"],
// ]);

// const myobj = {
//   [a]: "ankit",
//   [b]: "yadav",
// };

// const emptyObjects = {};
// console.log(`undefined  ${Object.prototype.toString.call(undefined)}`); // undefined  [object Undefined]
// console.log(`null  ${Object.prototype.toString.call(null)}`); // null  [object Null]
// console.log(`{}  ${Object.prototype.toString.call({})}`); // {}  [object Object]
// console.log(`[]  ${Object.prototype.toString.call([])}`); // []  [object Array]
// console.log(`()=>{}  ${Object.prototype.toString.call(() => {})}`); // ()=>{}  [object Function]
// console.log(`false  ${Object.prototype.toString.call(false)}`); // false  [object Boolean]
// console.log(`Proxy  ${Object.prototype.toString.call(Proxy)}`); // Proxy  [object Function]
// console.log(`'Bhardwaj'  ${Object.prototype.toString.call("Bhardwaj")}`); // 'Bhardwaj'  [object String]
// console.log(`55  ${Object.prototype.toString.call(55)}`); // 55  [object Number]
// console.log(`Map  ${Object.prototype.toString.call(Map)}`); // Map  [object Function]
// console.log(`Set  ${Object.prototype.toString.call(Set)}`); // Set  [object Function]

// console.log(Object.arguments);



// proof that let and const are also hoisted

// function hello() {
//   var a = 10;
//   let data = 20
//   function b() {
//     var data = 100;
//     console.log("🚀 ~ b ~ data:", data)
//     let a = 20;
//     console.log(a);
//   }
//   b();
// }
// hello();

// let fruit = "apple";
// let hungry = true;

// if (hungry) {
//   var fruit = "mange";
// }

// const myStringArray = ["ankit", "yadav", "shivangi", "bhardwaj"];

// const result = myStringArray.reduce((acc, current)=>{
//   return acc.concat(current)
// },'')
// console.log("🚀 ~ result ~ result:", result)

// const myMssgArray = [
//   {
//     address: "9354987789",
//     body: "jai shree ram.",
//     thread_id: "8",
//     date: "1721205932000",
//     type: "1",
//     _id: "8",
//     read: "1",
//     seen: "0",
//     service_center: "8",
//     finalName: "",
//   },
//   {
//     address: "8888888",
//     body: "Hello, kese ho aap.",
//     thread_id: "6",
//     date: "1721205860000",
//     type: "1",
//     _id: "6",
//     read: "1",
//     seen: "0",
//     service_center: "6",
//     finalName: "",
//   },
//   {
//     address: "844250007",
//     body: "Hello, this is a test message.",
//     thread_id: "5",
//     date: "1721205339000",
//     type: "1",
//     _id: "5",
//     read: "1",
//     seen: "0",
//     service_center: "5",
//     finalName: "",
//   },
//   {
//     address: "5551235",
//     body: "Hello, this is a test message.",
//     thread_id: "4",
//     date: "1721205291000",
//     type: "1",
//     _id: "4",
//     read: "1",
//     seen: "0",
//     service_center: "4",
//     finalName: "",
//   },
//   {
//     address: "8447650007",
//     body: "haa bhai kya haal hai",
//     thread_id: "3",
//     date: "1721204115044",
//     type: "2",
//     _id: "3",
//     read: "1",
//     seen: "1",
//     service_center: "3",
//     finalName: "",
//   },
//   {
//     address: "5551234",
//     body: "Hello, this is a test message.",
//     thread_id: "2",
//     date: "1721203964000",
//     type: "1",
//     _id: "1",
//     read: "1",
//     seen: "0",
//     service_center: "2",
//     finalName: "",
//   },
// ];

// const updateReadStatus = (array = [], thread_id = 0) => {
//   const resultArray = array.map((messageObj, index) => {
//     if (messageObj["thread_id"] == thread_id) {
//       let { read, ...remaining } = messageObj;
//       return {
//         read: "0",
//         ...remaining,
//       };
//     }
//     return messageObj;
//   });
//   return resultArray;
// };

// const result = updateReadStatus(myMssgArray, "2");
// console.log("🚀 ~ result:", result);

// const numberArray = [1, 2, 3, 4, 5, 6];
// let keyToCheckFor = 5;
// const newArray = numberArray.map((val) => {
//   if (val == keyToCheckFor) {
//     return 10;
//   }
//   return val;
// });
// console.log("🚀 ~ newArray ~ newArray:", newArray)

// function createClosure(num1) {
//   function addSix(numb2) {
//     return num1 + numb2;
//   }
//   return addSix;
// }

// var addSix = createClosure(6);

// console.log(addSix(20));
// console.log(addSix(10));

// take use of the closure and advantages of closure

// const findValue = (value) => {
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

// const heavyFunctions = (numb1, numb2) => {
//   for (let index = 0; index <= 1000000; index++) {

//   }
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

// function evaluate(operation = "sum") {
//   return function (a) {
//     return function (b) {
//       const myOperations = {
//         sum: a + b,
//         multiply: a * b,
//         subtract: a - b,
//       };
//       return myOperations[operation];
//     };
//   };
// }

// console.log(evaluate("subtract")(2)(4));

// infinite currying

// function infiniteCurrying(a) {
//   return function (b) {
//     if (b) return infiniteCurrying(a + b);
//     return a;
//   };
// }
// console.log(infiniteCurrying(2)(4)(7)());

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

// const a = {name:"ankit"}
// const b ={name:"ankit"}
// console.log(a==b);

// copying object referece and value only

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

// currying with async functions
// const asyncAdd = a => async b => a + b;

// (async function() {
//   const addFive = asyncAdd(5);
//   console.log(await addFive(10));  // Outputs: 15
// })();

// n functions composition

// const compose =
//   (...functions) =>
//   (initialValue) =>
//     functions.reduce((value, func) => func(value), initialValue);

// // Example usage
// const add = (x) => x + 2;
// const multiply = (x) => x * 3;
// const subtract = (x) => x - 1;

// const composedFunction = compose(add, multiply, subtract);

// console.log(composedFunction(4)); // Output: 11

// problem

// for (var index = 0; index < 3; index++) {
//   setTimeout(() => {
//     console.log("🚀 ~ index:", index);
//   }, 1000);
// }
