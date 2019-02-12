class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    console.log(this);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


Function.prototype.myBind = function(obj, ...bindTime) {
  // let bindTime = Array.prototype.slice.call(arguments,1);

  return (...callTime) => { 
    let allArgs = bindTime.concat(callTime);
    
    return this.apply(obj, allArgs);
  };

};

