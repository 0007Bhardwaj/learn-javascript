const myObject = {
  name: "bhardwaj",
  age: 28,
  isMarried: true,
};

const myObject2 = {
  name: "Ankit",
  age: 20,
  getMarriedStatus() {
    return this.isMarried;
  },
  // isMarried:false
};

Object.defineProperty(myObject2, "isMarried", {
  value: false,
  // writable: false,
  // enumerable: false,
});

myObject2.isMarried = "Yes";
Object.setPrototypeOf(myObject, { profession: "Teacher" });
Object.setPrototypeOf(myObject2, { profession: "Developer" });
console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject2));

// Enumerability and ownership of properties
// Every property in JavaScript objects can be classified by three factors:

// 1. Enumerable or non-enumerable;
// 2. String or symbol;
// 3. Own property or inherited property from the prototype chain.

// Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such are not enumerable by default. Most iteration means (such as for...in loops and Object.keys) only visit enumerable keys.
// Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain.
// All properties, enumerable or not, string or symbol, own or inherited, can be accessed with dot notation or bracket notation. In this section, we will focus on the means provided by JavaScript to visit a group of object properties one-by-one.

// 1. Object.assign()
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const assignObject = Object.assign(myObject, myObject2);
// console.log(assignObject); // { name: 'Ankit', age: 20, isMarried: true } it overwrites the properties
// it doesnt overwrite isMarried because its enumerable is set to false

// console.log(myObject2); // { name: 'Ankit', age: 20 } becasue console only get enumerable own properties

// 2. Object.create()
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// const myObject3 = Object.create(myObject2)
console.log("🚀 ~ myObject3:", Object.getOwnPropertyDescriptors(myObject2));
