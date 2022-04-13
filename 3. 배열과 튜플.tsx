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

//🌱for ... in : 배열의 인덱스값 순환
let names = ['kim', 'park', 'lee']

for(let nameIndex in names){
    const name = names[nameIndex]
    console.log(name)
}
//🌱for ... of : 배열의 아이템값
for(let name of names){
    console.log(name)
}

//🌱 전개연산자(...) : 객체의 속성을 모두 전개해 새로운 객체를 만든다

//🌱 range 함수
// range는 배열임(number [])
const range = (from: number, to: number) : number[] => from < to ? [from, ...range(from+1, to)] : []
let numbers: number[] = range(1,10)
console.log(numbers)