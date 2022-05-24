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

export default function play() {

//     type Type1 = SingleType<string[]>
//     type Type2 = SingleType<number[]>
//     type Type3 = SingleType<Person>
//     type type4 = string[][number]

const items: CustomArray = ["1","3","4"]

const itemList: CustomArrayAlt<string> = ["1","2","3"]
const itemList2: CustomArrayAlt<number> = [1,2,3]
// type Single = CustomArray[number]

    
}