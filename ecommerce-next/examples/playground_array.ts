interface Person {
    name: string
}

// type SingleType<T> = T extends any[] ? T[number] : T
// type SingleType<T> = T extends any[] ? T[number] : unknown

type CustomArray = {
    [index: number]: string
}

type CustomArrayAlt<T = string> = {
    [index: number]: T
}

type CustomObject = {
    [index: string]: string | number | Person
}

// Restrictions and type restriction
// You can make custom type this way
type CustomObject2<T = any> = {
    [index: string]: string | number | Person
}

export default function play() {

const person: CustomObject = {
    age: "23",
    name: "Ralph",
    city: "Guadalajara",
    occupation: "Gardner",
    education: "Enrolled in University",
    person: {
        name: 'Sahani',
    }
}

//     type Type1 = SingleType<string[]>
//     type Type2 = SingleType<number[]>
//     type Type3 = SingleType<Person>
//     type type4 = string[][number]

const items: CustomArray = ["1","3","4"]

const itemList: CustomArrayAlt<string> = ["1","2","3"]
const itemList2: CustomArrayAlt<number> = [1,2,3]
// type Single = CustomArray[number]

    
}