interface Person {
	name: string;
}

// type ReturnType<T> = T extends () => string ? string : number
// you can get to number by providing a parameter
type ReturnType<T> = T extends () => infer R ? R : number

export default function play() {

    // any array of parameters for multiple params
	// function logger(...args: any[]) {
	// 	return 'hello world';
	// }

    // function logger(name: string) {
	// 	return 'hello world';
	// }
    // function logger() {
	// 	return 'hello world';
	// }
    function logger() {
		return true;
	}

	//const kindaLogger: typeof logger = (solid: string, id: number) => 'Hi Guys!';

    // const loggerReturn: ReturnType<typeof logger> = 23 
    const loggerReturn: ReturnType<typeof logger> = true
    

    
    
    const person = {
        name: "Jalim",
        age: 30,
    }

    const person2: typeof person = {
        name: 'John',
        age: 40
    }
}
