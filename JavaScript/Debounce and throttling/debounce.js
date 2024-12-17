// ------ What is debouncing? -----
// Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed.

function expensiveApiCall() {
  console.log("🚀 ~ expensiveApiCall ~ is fetching data.....");
}

const debouneAFunc = (func = () => {}, delay = 300) => {
  return function (...args) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const debouncedFunc = debouneAFunc(expensiveApiCall, 300);
debouncedFunc();
