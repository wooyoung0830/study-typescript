// 🌱배열 타입 
//let 배열이름 : 아이템타입[]

let numArr : number[] = [1,2,3]
let strArr : string[] = ['Hello', 'World']

type Iperson = {name : string, age? : number}
let personArr : Iperson[] = [
    {name : 'Kim'},
    {name : 'Park', age : 33}
]

// 🌱문자열 -> 배열
//split(구분자 : stirng) : string[]

// 🌱배열 -> 문자열
//join(구분자 : stirng) : string[]

//🌱 제너릭 타입 가능 <T>