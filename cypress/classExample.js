class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    wave() {
        console.log('Hi')
    }
    info() {
        console.log(`I'm ${this.name} ${this.lastName}, I'm ${this.age} years old and I have a constructor`)
    }
}

class Car {
    constructor(color, date, speed) {
        this.color = color,
        this.date = date,
        this.speed = speed
    }
    carInfo() {
        console.log(`My car is ${this.color} and has a speed of ${this.speed}`)
    }
}

class nonConstructedPerson {
  constructor() {
      this.name = 'Name',
      this.lastName = 'Last Name'
  }
  nonCosntructedInfo() {
    console.log(`I'm ${this.name} ${this.lastName} and I don't have a constructor`)
  }
}

//const Person1 = new Person()
//Person1.wave()

//module.exports = Person, Car
exports.Person = Person
exports.Car = Car
exports.nonConstructedPerson = nonConstructedPerson