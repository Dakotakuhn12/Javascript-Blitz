// Inheritance - one of the most important concepts of OOP (Objects Oriented Programming)
// Inheritance allows one class (the child class) to inherit the properties and methods of another class (the parent class).
// Allows for more code reuse

// A parent class will contain general properties and methods.
// A child class can us ehtose properties and methods as well as add some that are more specific.

class Animal {
  alive = true;
  eat() {
    console.log(`${this.name} is eating.`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`); // we will define name later
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
  run() {
    if (this.alive) {
      console.log(`${this.name} is swimming`);
    } else {
      console.error(`Sorry, ${this.name} is dead`);
    }
  }
}

class Fish extends Animal {
  name = "Fish";
  swim() {
    if (this.alive) {
      console.log(`${this.name} is swimming`);
    } else {
      console.error(`Sorry, ${this.name} is dead`);
    }
  }
}

const r = new Rabbit();
const f = new Fish();

r.eat();
f.sleep();

r.alive = false;
console.log(r.alive);
console.log(f.alive);

r.run();
f.swim();

// r.swim();

// Why inheritence - it helps with the DRY principle - Don't Repeat Yourself!

// Practice:
// Create a class called Vehicle
// - Give it a property called wheels and set it to 4
// give it start and stop methods that print messages saying what they did

// create 2 child classes - Car, Motorcylce
// - Car should have a method called honk() that logs "beep, beep"
// - Motorcylce should set wheel to 2 and has a method called putOnHelmet() that just logs "helmet is on"

// Test it all

class Vehicle {
  wheels = 4;
  start() {
    console.log(`${this.name} engine has started`);
  }
  stop() {
    console.log(`${this.name} engine has turned off`);
  }
}

class Car extends Vehicle {
  name = "LeBron";
  honk() {
    console.log("beep, beep");
  }
}

class Motorcycle extends Vehicle {
  wheels = 2;
  name = "Hi";
  putOnHelmet() {
    console.log(`helmet is on`);
  }
}

const c = new Car();
const m = new Motorcycle();

c.start();
m.stop();

c.honk();
m.putOnHelmet();
