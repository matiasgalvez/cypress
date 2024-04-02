const importedClasses = require('./classExample')

let person1 = new importedClasses.Person('Matias', 'Galvez', 27)
let person2 = new importedClasses.nonConstructedPerson()
let car1 = new importedClasses.Car('Black', 100, 100)

person1.wave()
person1.info()
person2.nonCosntructedInfo()
car1.carInfo()

let person = {
    name: 'Gonzalo',
    lastName: 'something',
    age: 25
}

let person3 = new Object({
    name:'something',
    lastName:'other'
})

console.log(`This person here is ${person.name} ${person.lastName} and he is ${person.age} years old`)
console.log(`This person here is ${person3.name} ${person3.lastName}`)

