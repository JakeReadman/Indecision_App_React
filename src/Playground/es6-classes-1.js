class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I live in ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveller('Andrew Mead', 26, 'Gaytown');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
