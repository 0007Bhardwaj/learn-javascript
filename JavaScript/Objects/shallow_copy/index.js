//  SHALLOW COPY

//  A shallow copy of an object or array creates a new object/array, but inserts references to the same elements found in the original.
//  In other words, the copied object/array and the original object/array still share the same references to nested objects/arrays.

// ARRAY EXAMPLE

let originalArray = [1, 2, 3];
let shallowCopyArray = originalArray.slice(); // Using slice() to create a shallow copy

originalArray[0] = 0;

//  console.log(originalArray); // Output: [0, 2, 3]
//  console.log(shallowCopyArray); // Output: [1, 2, 3]

//  In this example, shallowCopyArray contains a copy of the elements of originalArray,
//  but modifying originalArray does not affect shallowCopyArray.
//  However, if the elements themselves were objects or arrays, modifying them in one would affect both arrays.

// OBJECTS EXAMPLE

let originalObject = { age: 29, address: { city: "delhi" } };
let shallowCopyObject = Object.assign({}, originalObject); // Using Object.assign() for shallow copying
// let shallowCopyObject = {...originalObject}; // Using spread operator for shallow copying


originalObject.age = 22;
originalObject.address.city = 'gurgaon';

console.log(originalObject); // Output: { age: 22, address: { city: 'gurgaon' } }
console.log(shallowCopyObject); //{ age: 29, address: { city: 'gurgaon' } }


//  Here, shallowCopyObject is a shallow copy of originalObject.
//  Modifying originalObject.a does not affect shallowCopyObject.a, but modifying originalObject.b.c does affect shallowCopyObject.b.c
//  because they share the same nested object reference.
