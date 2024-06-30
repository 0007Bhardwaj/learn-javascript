// DEEP COPY

//  A deep copy of an object or array creates a new object/array and recursively copies all nested objects/arrays found in the original.
//  Therefore, the copied object/array is entirely independent of the original, with no shared references.

// HOW TO ACHIEVE DEEP COPY

// Method 1 (using JSON.stringify)

const obj1 = {
  name: "Bhardwaj",
  age: 28,
  address: {
    city: "delhi",
    houseNo: 758,
  },
  socials: {
    twitter: {
      freeAccount: {
        userName: "Bhardwaj@123.com",
        photos: ["abc.png", "xyz.png"],
      },
      premiumAccount: {
        userName: "Bhardwaj@007.com",
        photos: ["abc1.png", "xyz1.png"],
      },
    },
  },
  getUserName: function () {
    return this.name;
  },
};

let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.socials.twitter.freeAccount.userName = "abc@gmail.com";

// console.log("🚀 ~ obj1:", JSON.stringify(obj1));
// {"name":"Bhardwaj","age":28,"address":{"city":"delhi","houseNo":758},"socials":{"twitter":{"freeAccount":{"userName":"Bhardwaj@123.com","photos":["abc.png","xyz.png"]},"premiumAccount":{"userName":"Bhardwaj@007.com","photos":["abc1.png","xyz1.png"]}}}}
// console.log("🚀 ~ obj2:", JSON.stringify(obj2));
// {"name":"Bhardwaj","age":28,"address":{"city":"delhi","houseNo":758},"socials":{"twitter":{"freeAccount":{"userName":"abc@gmail.com","photos":["abc.png","xyz.png"]},"premiumAccount":{"userName":"Bhardwaj@007.com","photos":["abc1.png","xyz1.png"]}}}}

// Problems with Deep Copy using JSON.stringify:

//   1. Loss of Function References:

//      Functions are not valid JSON data types. When using JSON.stringify on an object containing functions,
//      those functions will be omitted from the resulting JSON string.
//       Therefore, after parsing with JSON.parse, any methods or functions attached to the original object will be lost.

//   2. Loss of Prototype Chain:
//      If the object being deep-copied has properties that are inherited through its prototype chain, JSON.stringify will only stringify own properties, not inherited ones.
//      This means the copied object will lose its prototype chain, and all properties will be copied as if they were own properties.

//   2. Circular References:
//      JSON.stringify cannot handle circular references (where an object references itself in some way).
//      Attempting to stringify an object with circular references will result in an error.

const obj = {};
obj.prop = obj;

// const jsonString = JSON.stringify(obj); // Throws an error "TypeError: Converting circular structure to JSON"

// Alternatives for Deep Copy:

//      1. Lodash's _.cloneDeep: Lodash provides a robust cloneDeep function that handles nested objects and circular references gracefully.
//      2. Manual Deep Copy Function:

function myDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = myDeepCopy(obj[key]);
    }
  }
  return copy
}

let copiedObj = myDeepCopy(obj1)
copiedObj.address.houseNo = 777
console.log("🚀 ~ obj1:", obj1)  
//  {
//     name: 'Bhardwaj',
//     age: 28,
//     address: { city: 'delhi', houseNo: 758 },
//     socials: { twitter: { freeAccount: [Object], premiumAccount: [Object] } },
//     getUserName: [Function: getUserName]
//   }
console.log("🚀 ~ copiedObj:", copiedObj)
// {
//     name: 'Bhardwaj',
//     age: 28,
//     address: { city: 'delhi', houseNo: 777 },
//     socials: { twitter: { freeAccount: [Object], premiumAccount: [Object] } },
//     getUserName: [Function: getUserName]
//   }


// Choosing Between Shallow Copy and Deep Copy

//      1. Shallow Copy is simpler and faster but may not fully separate nested structures.
//      2. Deep Copy ensures complete independence but can be slower and more memory-intensive, especially for deeply nested or large structures.

