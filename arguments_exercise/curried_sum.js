const curriedSum = function (numArgs) {
  let numbers = []; 
  
  const _curriedSum = (number) => {
    numbers.push(number)    
    // debugger 
    if (numbers.length === numArgs) {
      let total = 0;
      for (i = 0; i < numArgs; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      return _curriedSum;
    };
  };
  
  return _curriedSum;
};

let sum = function(...nums) {
  total = 0;
  for(i=0; i < nums.length; i++){
      total += nums[i];
  }
  return total;
}

Function.prototype.curry = function (numArgs) {
  let args = []; 

  const _curry = (arg) => {
    args.push(arg);     
    if (args.length === numArgs) {
      // debugger
      return this.apply(this, args);
    } else {
      return _curry;
    };
  }; 
  return _curry;

};

