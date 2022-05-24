// interface Person {
//     name: string
//     age: number
// }

// Difference between type and interface
// Not entirely true, conventions where you will use type over interfaces

// Typescript recommends interfaces over types 
// Special place for types (types still get used quite a bit)
// Similar in that features are interchangeable
// Interface describe data structure in a natural way (biz object/Next JS application)
// Describing objects is the example (interface Person) - (i.e. typically objects -- another example Shipment)

// Type Aliases
type Data = string // cannot do this with interface
//  to describe function types, where you can alias your primitive types

// type Person = {
//     name: string
//     age: number
// }

// interface PersonLogInterface {
//     (name, age)
// }

class Person {
    name: string
    age: number

    constructor(name: string, age:number) {
        this.name = name
        this.age = age
    }
}

// Optional parameters through a question mark
type PersonLoggerFn = (name: string, age?: number) => string

export default function play() {
    console.log("Hello World")
    const name = 'Aasim'
    const age = 42

    // const person = {
    //     name: 'John',
    //     age: 34,
    // }

    /*function logPersonInfo(personName: string, personAge: number): string {
        // const info = "Name: " + personName + "Age: " + personAge
        const info = `Name: ${personName} Age: ${personAge}`
        return info
    }*/

    const logPersonInfo: PersonLoggerFn = (personName: string, age: number = 0): string => {
        const info = `Name: ${personName} Age: ${age}`
        return info
    }

    /*function logPersonInfo2(person: {name: string, age: number}) {
        // const info = "Name: " + personName + "Age: " + personAge
        const info = `Name: ${person.name} Age: ${person.age}`
        return info
    }*/

    function logPersonInfo2(person: Person) {
        // const info = "Name: " + personName + "Age: " + personAge
        const info = `Name: ${person.name} Age: ${person.age}`
        return info
    }

    // const log = logPersonInfo(name, age)
    const log = logPersonInfo(name)
    logPersonInfo2(new Person('Yerba', 12))
}