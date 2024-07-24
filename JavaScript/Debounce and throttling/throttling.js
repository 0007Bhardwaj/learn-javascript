// ------ What is Throttling? -----

// Throttling is a technique that limits how often a function can be called in a given period of time.
// It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations,
// such as animations, scrolling, resizing, fetching data, etc.

// For example, if you have a function that fetches some data from an API every time the user scrolls the page,
// you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls.
//  This way, you can avoid overloading the server or the browser with unnecessary requests and reduce the bandwidth consumption.

// ------ Why Use Throttling? ------

// Throttling can improve the performance and user experience of web pages by reducing the number of unnecessary or redundant operations. It can also prevent some issues such as:
// 1. Overloading the server or the browser with too many requests or calculations
// 2. Exceeding the rate limits or quotas of APIs or services

//------ Non Tech Example of throttling: ------
// Changing speed of Fan
// When changing speed of fan, it takes few seconds to reach at the desired speed. Thus before changing the speed again, we need to wait for few seconds so the fan reaches at a steady state

function expensiveApiCall() {
  console.log("🚀 ~ expensiveApiCall ~ is fetching data.....");
}

const throttleAFunction = (func = () => {}, delay = 300) => {
  let canCallFunc = true;
  return function (...args) {
    if (canCallFunc) {
      func.apply(this, args);
    }
    canCallFunc = setTimeout(() => {
      canCallFunc = true;
    }, delay);
  };
};

const throtlledFunc = throttleAFunction(expensiveApiCall, 300);
throtlledFunc();
