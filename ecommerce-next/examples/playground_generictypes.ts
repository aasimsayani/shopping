interface Person {
	name: string;
    city: string;
}

interface Student extends Person{
    age: number;
}

interface PostGraduateStudent extends Person{
    age: number
    projects: string[]

}

// Interface below is the same as this type they are interchangeable
// T extends Student is the important conditional
// T extends any allows us to do StudentInfo<Whatever>
// Ternary operator with generic type
type StudentInfo <T extends any = Student> = T extends Student ? {
    data: T
    grades?: number[] //optional
} : string

type Cat = {breed: string}

// interface StudentInfo <T extends Student = Student>  {
//     data: T
//     grades?: number[] //optional
// }

// this is a similar declaration as above
// type StudentInfo = {
//     data: Student
//     grades: number[]
// }

// extend PostGrad by: (info: StudentInfo<PostGraduateStudent>)
export default function play() {
    function logStudentInfo(info: StudentInfo<Cat>) {
        // console.log(info.data.age)
        // console.log(info.data.city)
        // console.log(info.data.projects)
        console.log(info)
    }

    const info = {
        data: { 
            name: 'Jeff',
            age: 21,
            city: 'Buenos Aires',
            projects: ['Inequities in Rural Buenos', 'Deforestation in the Rain Forest', 'German colonization post-1940'],
        },
        grades: [95, 92, 92, 97],
    }

   // logStudentInfo(info)
}