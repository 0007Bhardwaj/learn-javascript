// -------------------------------------------- Operators--------------------------------------------

// an operator refers to the one that operates on something,
// JavaScript operators are special symbols used in scripts to perform operations on operands, such as arithmetic calculations, logical comparisons, or value assignments

// 1. Assignment operators
// An assignment operator assigns a value to its left operand based on the value of its right operand.
// The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand.

// 2. Comparison operators
// A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

// 3. Arithmetic operators
// An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.

// 4. Bitwise operators
// A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.
// For example, the decimal number nine has a binary representation of 1001.

// 5. Logical operators
// Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.
//  However, the && and || operators actually return the value of one of the specified operands,
//  so if these operators are used with non-Boolean values, they may return a non-Boolean value.

// example
// expr1 && expr2 :
//  Returns expr1 if it can be converted to false; otherwise, returns expr2.
//  Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false

// 5.1  Short-circuit evaluation
// As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:
// a. false && anything is short-circuit evaluated to false.
// b. true || anything is short-circuit evaluated to true.
// Note that for the second case, in modern code you can use the Nullish coalescing operator (??) that works like ||, but it only returns the second expression,
//  when the first one is "nullish", i.e. null or undefined.

// 5.2  Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// === and ==
// Double equals (==) is often referred to as 'loose equality' because it performs type coercion before making any comparison.
// This means that if the datatypes of the operands we are comparing are different, then the JavaScript Engine automatically converts one of the operands to be the same as the other one in order to make the comparison possible.
const a = 100;
const b = "100";
console.log(a == b); // true

// Triple equals (===), also referred to as "strict equality", works similarly to how double equals (==) works, with one important difference:
//  it does not convert the types of the operands before comparing.
// While comparing the variables, it first checks if the types differ. If they do, it returns false. If the types match, then it checks for the value.
//  If the values are same and are not numbers, it returns true

// What is Type Coercion?

// Type coercion refers to the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types.
// By using Type Coercion, JavaScript attempts to make the data types compatible to complete the operation or comparison.
// So, here are the rules for type coercion in JavaScript:
// 1. If either operand is a string, the other operand will be converted to a string.
// 2. If either operand is a number, the other operand will be converted to a number.
// 3. If either operand is a boolean, it will be converted to a number (true becomes 1 and false becomes 0).
// 4. If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
// 5. If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise it will return false.

// What is Type Conversion?
// Type conversion, also known as type casting, refers to the explicit transformation of a value from one data type to another.
// It involves intentionally changing the data type of a value using built-in functions or operators provided by the language.
// Type conversion allows developers to ensure that a value is of the desired data type before performing specific operations, comparisons, or assignments.
// It provides control over how data is interpreted and manipulated within the program.
var str = "42";
var num = Number(str); // Conversion: string to number
console.log(num); // Output: 42
