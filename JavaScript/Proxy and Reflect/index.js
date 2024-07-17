// A JavaScript Proxy is an object that allows you to intercept and customize operations performed on another object (called the target object).
// Proxies are used for a variety of purposes, such as logging, validation, formatting, and so on.
// In JavaScript, both Proxy and Reflect are advanced features that provide ways to intercept and manipulate object behavior, but they serve different purposes and work in distinct ways.

// Proxy
// A Proxy object allows you to create an intermediary that can intercept and redefine fundamental operations for another object (the target object). Proxies are useful for logging, validation, formatting, and more.

// Reflect
// The Reflect object provides methods for interceptable JavaScript operations. These methods are used within Proxy traps to ensure the default behavior of operations while allowing custom logic.

// Traps
// A trap is a method that provides property access. Here are the most commonly used traps:

// get: Intercepts getting a property value.
// set: Intercepts setting a property value.
// has: Intercepts the in operator.
// deleteProperty: Intercepts the delete operator.
// getOwnPropertyDescriptor: Intercepts Object.getOwnPropertyDescriptor.
// defineProperty: Intercepts Object.defineProperty.
// ownKeys: Intercepts Object.getOwnPropertyNames, Object.getOwnPropertySymbols, and similar methods.
// apply: Intercepts function calls.
// construct: Intercepts the new operator.
// isExtensible: Intercepts Object.isExtensible.
// preventExtensions: Intercepts Object.preventExtensions.
// getPrototypeOf: Intercepts Object.getPrototypeOf.
// setPrototypeOf: Intercepts Object.setPrototypeOf.

const myObject = {
  firstName: "Shivangi",
  lastName: "Bhardwaj",
  age: 30,
  getAge(currentAge) {
    return `old age is ${this.age} but current age is ${currentAge}`;
  },
};

const myNewFunc = (currentAge) => {
  return `old age is ${this.age} but current age is ${currentAge}`;
};

const functionProxy = new Proxy(myNewFunc, {
  apply(target, thisArg, argumentsList) {
    console.log("calling a function", { target, thisArg, argumentsList });
    target.apply(thisArg, argumentsList);
  },
  
});

const myObjectProxy = new Proxy(myObject, {
  get(target, props, receiver) {
    if (props == "age") {
      if (target[props] > 30) {
        return "to old";
      }
      return target[props];
    }
    return target[props];
  },
  set(target, key, value) {
    if (value == "delhi") {
      console.log(key, "needs to be added");
      Reflect.set(target, key, value);
      return true;
    }
    console.log("city is invalid");
    console.trace("set function executed");
  },
  apply(target, thisArg, argumentsList) {
    console.log("function called", target);
  },
});

console.log(functionProxy(40));
