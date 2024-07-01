//  -------------------------------------------- DataTypes --------------------------------------------

// Data types in JavaScript define the data type that a variable can store.
// JavaScript includes primitive and non-primitive data types.
// The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol.
// The non-primitive data type includes the object. A variable of primitive data type can contain only a single value.
// We can find the type of value or data by using the ‘typeof’ JavaScript operator

// 1.Primitive Data Types in JavaScript

// The predefined data types provided by JavaScript language are known as primitive data types.
//  Primitive data types are also known as in-built data types. and they can hold a single value.
// All primitives are immutable; that is, they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value.
// The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
//  The language does not offer utilities to mutate primitive values.
// Primitives have no methods but still behave as if they do. When properties are accessed on primitives,
//  JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.
//  For example, "foo".includes("f") implicitly creates a String wrapper object and calls String.prototype.includes() on that object.
//  This auto-boxing behavior is not observable in JavaScript code but is a good mental model of various behaviors —
//  for example, why "mutating" primitives does not work (because str.foo = 1 is not assigning to the property foo of str itself, but to an ephemeral wrapper object
// (Promitive data types mai value hum reassign kr skte hai but usse pichli value delete nhi hogi or new value store ho jaegi on different memory location)

// a. types of primitive datatypes
// 1. Number  var a=250;

// 2. String  var str1 = “This is a string1”;

// 3. Boolean  var isEnabled = true;

// 4. Undefined  Undefined data type means a variable that is not defined. The variable is declared but doesn’t contain any value.
// var a;
// console.log(a); // This will return undefined.

// 5. Null   The null in JavaScript is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.
// var a = null;
// console.log(a);   // This returns null

// 6. Symbol  .......to be continued........

// 2.  Non-Primitive Data Types in JavaScript
// The ‘object’ is a non-primitive data type in JavaScript. Arrays and Functions in JavaScript belong to the ‘object’ data type.
// Object, Array, Function are the three non primitive in js

// Undefined Vs Null in JavaScript

// A. undefined
// 1 .When a variable is declared but not initialized, or when a function does not return a value, the variable or the function’s result is undefined.
// 2. Accessing an object property or array element that does not exist also results in undefined.
// 3. It is a primitive value.

// B. null
// 1. It is a deliberate assignment that represents the absence of any object value.
// 2. It is often used to explicitly indicate that a variable or object property should have no value or no reference to any object.
// 3. It is also a primitive value.

null == undefined // true
null === undefined // false
