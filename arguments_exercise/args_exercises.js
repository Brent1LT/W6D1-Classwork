// using arguments:
// function sum() {
//   let arr = Array.prototype.slice.call(...arguments);
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   };

//   return sum;
// };

// using rest operator:
function sum(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  };

  return sum;
};

