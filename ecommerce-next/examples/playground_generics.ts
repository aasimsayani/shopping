interface Person {
	name: string;
    age: number;
    city: string;
}

class Student implements Person{
    name = ''
    age = 0
    city = ''
}

class BusinessPerson implements Person {
    name = ''
    age = 0
    city = ''
    salary = 10000
}

//default value if extending has to have properties in common with interface being extended
type Car = { 
    brand: string, 
    years: number,
    name: string,
    age: number,
    city: string,
}

// this way provides a default value of generics
class Logger<T extends Person = Car> {
//class Logger<T extends Person> { (old way)
    log(items: Array<T>, callback: (i: T) => void) {
      items.forEach((item) => {
          callback(item)
      })  
    }
}

/*interface Car {
    name: string
}*/

export default function play() {

    // const logger = new Logger<BusinessPerson>()
    const logger = new Logger()

    const persons = [{name: 'Ralph', age: 24, city: 'Chicago', brand: 'Toyota', years: 10, salary: 100000},{name: 'Cynthia', age: 22, brand: 'Lexus', years: 2, city: 'Nairobi', salary: 200000}]
    logger.log(persons, (person) => {
        console.log(person)
    })
}