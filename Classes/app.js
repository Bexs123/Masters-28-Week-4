// Monday 13th September 2021

// - Make 3 variables; one storing a string, one a number and the other a bool
let str = "Good Morning";
let num = 25;
let bool = true;


// - Make an array that stores 4 items; add something to the end of the array using a method
let arr = ["Deep Blue Sea", "Lake Placid", "Day After tomorrow", "Lethal Weapon"];
arr.push("Braveheart");
console.log(arr);


// - Create a loop to cycle through the array to print out all the values
let arr = ["Deep Blue Sea", "Lake Placid", "Day After tomorrow", "Lethal Weapon"];
for(let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }


// - Create a function that when called asks you to withdraw an amount. Balance should reduce as appropriate.
let balance = 850;
const withdrawal = (amount) => {
  balance - amount;
  return "Withdrawal was successful";
};

console.log(withdrawal(10));


// An example of an class
class Animal {
  constructor(name) {
    this._name = name;
    this._hunger = 0;
    this._sleep = 100;
    this._thirst = 0;
  }

  get name() {
    return this._name;
  }

  get stats() {
    return {
      hunger: this._hunger,
      thirst: this._thirst,
      sleep: this._sleep,
    };
  }
}

class Bunny extends Animal {
  constructor(name) {
    super(name);
    this._hops = 0;
  }

  get hops() {
    return this._hops;
  }

  increaseHops() {
    this._hops++;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this._mouseCaught = 0;
  }

  hunting() {
    this._mouseCaught++;
  }
}

const Sherlock = new Bunny("sherlock");
const Bugs = new Bunny("Bugs");
const Spot = new Cat("Spot");

console.log(Spot);


// Let’s create a class for cars with manufacturer, model and colour constructors and create 3 instances of it.
// The car should have functions for accelerate, brake, turning and beeping!

class Car {
  constructor(manu, model, colour) {
    this._manu = manu;
    this._model = model;
    this._colour = colour;
    this._speed = 0;
  }

  speedUp() {
    this._speed++;
    console.log("Car is speeding up");
  }

  brake() {
    this._speed--;
    console.log("Car is slowing down");
  }

  turn(direction) {
    if (direction == "left") {
      console.log("Car is turning left");
    } else if (direction == "right") {
      console.log("Car is turning right");
    } else {
      console.log("Your car is upside down...");
    }
  }

  beepbeep() {
    console.log("beep beep");
  }
}

let myCar = new Car("VW", "Golf", "Black");
console.log(myCar);
myCar.turn("right");


//Promises Demo
let users = ["Jess", "Lucas", "Alex"];

const addUser = (newUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (newUser.length < 2) {
        error = true;
      } else {
        users.push(newUser);
      }

      if (!error) {
        resolve();
      } else {
        reject("Oops");
      }
    }, 2000);
  });
};

const showUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user);
      }

      resolve();
    }, 3000);
  });
};

// addUser("P")
//   .then(showUsers)
//   .catch((err) => {
//     console.log(err);
//   });

const init = async () => {
  await addUser("Amina");
  await showUsers();
  console.log("Thats all folks");
};

init();