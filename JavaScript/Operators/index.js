
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
