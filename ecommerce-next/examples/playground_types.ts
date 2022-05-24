import { realpath } from "fs";

interface Person {
	//kind: 'Business' | 'Academic' | 'Philanthropist';
	name: string;
	age: number;
}

interface BusinessPerson extends Person {
	kind: 'Business';
	salary: number;
}

interface AcademicPerson extends Person {
	kind: 'Academic';
	booksWritten: string[];
}

/*interface Person {
    level: number;
    title: string;
}*/

class Logger<T> {
    log(items: Array<T>, callback: (i: T) => void) {
      items.forEach((item) => {
          callback(item)
      })  
    }
}

type NoOp  = () => any
type NoOperation = () => void

//Void Type has no call signature
export default function play() {
    function function1(x: NoOp):void {
        const result = x()
        result()
    }

    function function2(x: NoOperation): void {
        const result = x()
        // result()
    }

    // Generic Interface - Array of String 
    function iterate (items: Array<string>) {
        items.forEach((item) => {
            console.log(item.toUpperCase())
        })
    }

    iterate(['cheese', 'veggies', 'meat'])

    const logger = new Logger()
  
    const fastCars = ['Lambo', 'Rolls', 'Ferra', 'Audi', 'Nissa']
    logger.log(fastCars, (fastCar) => {
        console.log(fastCar)
    })

    const logger2 = new Logger<number>()

    const numbers = [1,2,3,4,5]
    logger2.log(numbers, (num) => {
        console.log(num.toString())
    })

    const logger3 = new Logger<Person>()

    const persons = [{name: 'Ralph', age: 24},{name: 'Cynthia', age: 22}]
    logger3.log(persons, (person) => {
        console.log(person)
    })
}