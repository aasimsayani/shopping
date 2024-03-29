interface Person {
	name: string;
    age: number;
    grades: number[]
}

// type PersonKey = keyof Person
type Logger<
FP = string, 
SP = number, 
RT = string 
> = (param1: FP, param2: SP) => RT


export default function play() {

    const personKey: keyof Person = "grades"

    // const supperLogger: Logger<string, number, string> = (name, age) => {
    //     return "Hello World"
    // }
    const logger: Logger = (brand, age)=> {
        return brand + age
    }
}
