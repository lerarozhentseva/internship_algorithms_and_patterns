// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} умеет ходить`)
  }

  swim() {
    console.log(`${this.name} умеет плавать`)
  }
}

class Dog extends Animal {
  fly() {
    return null;
  }
}

class Whale extends Animal {
  walk() {
    return null;
  }
}

const dog = new Dog('Рэкс');
const whale = new Whale('Джэкс')
dog.walk()
whale.swim()


class Animal2 {
  constructor(name) {
    this.name = name;
  }
}
const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`)
  }
}
const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`)
  }
}

class Cat extends Animal2{}
class Fish extends Animal2{}

Object.assign(Cat.prototype, walker, swimmer);
Object.assign(Fish.prototype, swimmer);

const cat = new Cat('Tom')
cat.swim()
const fish = new Fish('Larry')
fish.swim()

