// Inheritance
class Animal {
  constructor(name = 'Unknown') {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Foxer');
d.speak();

// Composition
class Engine {
  constructor(type) {
    this.type = type;
  }
  
  start() {
    console.log(`Starting ${this.type} engine.`);
  }
}

class Car {
  constructor(make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
  }
  
  start() {
    this.engine.start();
    console.log(`Starting ${this.make} ${this.model}.`);
  }
}

let e = new Engine('V6');
let c = new Car('Ford', 'Mustang', e);
c.start(); // Output.