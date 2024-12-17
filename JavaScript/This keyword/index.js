// In JavaScript, the this keyword always refers to an object.
// The thing about it is that the object it refers to will vary depending on how and where this is being called.
// An important comment is that this is not a variable – it's a keyword, so its value can't be changed or reassigned.
// console.log(this)  // If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.

// How to Call this in an Object Method
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    return this;
  },
};
// console.log('this in object method', person.getThis()); // retrun entire object

// How to Call this in a Function
function test() {
  // console.log('this in a function', this);
}
test(); // referrs to window object

// A note about arrow functions
// In arrow functions, JavaScript sets the this lexically.
// This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.

const arrowThis = () => {
  // console.log(this);  // this will refer to the window object
};
arrowThis();

// When using strict-mode, calling this within a function will return undefined. *********************

// ********************* this Methods (call, apply and bind) *********************

// 1. How to Use the Call Method
// With call we can invoke a method passing an owner object as an argument.
// Said in a simpler way, we can call a method indicating to which object the keyword this will refer to.

// const person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName: function(city, country) {
//         return this.name + " " + this.surname + ", " + city + ", " + country;
//     }
// }

// const person2 = {
//     name: 'Jimena',
//     surname: 'Juarez'
// }

// console.log(person1.sayName.call(person2, "DF", "Mexico"));  // Jimena Juarez, DF, Mexico

// By doing this, we're indicating that when the sayName method executes, the this keyword won't refer to the object that "owns" the method (person1) but to the object we passed as parameter (person2).

// 2. How to Use the Apply Method
// The apply method works very similarly to call.
// The only difference between them is that call accepts parameters as a list separated by colons, and apply accepts them as an array.

// let person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName: function(city, country) {
//         return this.name + " " + this.surname + ", " + city + ", " + country;
//     }
// }

// const person2 = {
//     name: 'Jimena',
//     surname: 'Juarez'
// }

// console.log(person1.sayName.apply(person2, ["DF", "Mexico"])); // Jimena Juarez, DF, Mexico

// 3. How to Use the Bind Method
// Same as call and apply , the bind method indicates the object to which the this keyword will refer when a given method executes.
// But the difference with bind is that it will return a new function, without executing it.
//  While with call and apply the function executed right away, using bind we must execute it separately.

// const person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName: function() {
//         return this.name + " " + this.surname
//     }
// }

// const person2 = {
//     name: 'Jimena',
//     surname: 'Juarez'
// }

// const sayPerson2Name = person1.sayName.bind(person2) //Jimena Juarez

// console.log(sayPerson2Name())

// const myValue = 20;
// const myOjb = {
//   name: "ankit",
//   myValue: 10,
//   simpleFunc() {
//     console.log("this in normal function" + JSON.stringify(this));
//   },
//   arrowFunc: () => {
//     console.log("this in arrow function" + this);
//   },

//   parentFunc() {
//     const insideArrowFunc = () => {
//       console.log(
//         "this in arrow function nested inside normal function" + this.myValue
//       );
//     };
//     insideArrowFunc();
//   },
// };
// myOjb.simpleFunc();
// myOjb.arrowFunc();
// myOjb.parentFunc();
// in arrow function this refers to the parent function if the parent function is in a object that it can refer to the parent function parent object.

// output based questions
// 1.
//  const name = 'outerScope'
// function makeUser() {
//   return {
//     name: "ankit",
//     ref(){
//         return this
//     }
//   };
// }

// const user = makeUser()
// console.log("🚀 ~ newobj:", user.ref().name)
// var name = "hello";

// const user = {
//   name: "ankit",
//   logMessage() {
//     console.log(this);
//   },
// };

// setTimeout(function() {
//     user.logMessage()
// }, 1000);

// const myobj = {
//   name: "ankit",
//   age: "28",
//   myFunc() {
//     var self = this;
//     console.log(`this in myFunc refers to ${this.name} and self is ${self.name} in the outer function`);
//     ( ()=> {
//         console.log(`this.name in myFunc refers to ${this.name} and self.name is ${self.name} in the arrow iife function`);

//     })()

//     const arrowFunc = () =>{
//         console.log(`this.name in myFunc refers to ${this.name} and self.name is ${self.name} in the inner arrow function`);
//     }

//     function normalFunc(params) {
//         console.log(`this.name in myFunc refers to ${this.name} and self.name is ${self.name} in the inner normal  function`);

        
//     }
//     arrowFunc()
//     normalFunc()
    
//   },
// };

// myobj.myFunc()


