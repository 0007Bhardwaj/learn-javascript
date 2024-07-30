// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

// function convertToCuryying(func = () => {}) {
//   return function curry(...args) {
//     console.log(
//       `args recevied is ${args} and function params length is ${func.length}`
//     );

//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...rest) {
//         return curry.apply(this, args.concat(rest));
//       };
//     }
//   };
// }

// const resultedFunction = convertToCuryying(sum);
// console.log(resultedFunction?.(1)(2)(3)(5));

function infiniteCurryWithInfiniteArgs(...args) {
  const firstArgs = args.reduce((acc, value) => acc + value, 0);

  return function (...nextArgs) {
    const secondArgs = nextArgs.reduce((acc, value) => acc + value, 0);

    if (secondArgs) {
      return infiniteCurryWithInfiniteArgs(firstArgs + secondArgs);
    }
    return firstArgs;
  };
}
console.log(infiniteCurryWithInfiniteArgs(12,13)(17,13)());