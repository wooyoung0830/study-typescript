// π±λ°°μ΄ νμ 
//let λ°°μ΄μ΄λ¦ : μμ΄ννμ[]

let numArr : number[] = [1,2,3]
let strArr : string[] = ['Hello', 'World']

type Iperson = {name : string, age? : number}
let personArr : Iperson[] = [
    {name : 'Kim'},
    {name : 'Park', age : 33}
]

// π±λ¬Έμμ΄ -> λ°°μ΄
//split(κ΅¬λΆμ : stirng) : string[]

// π±λ°°μ΄ -> λ¬Έμμ΄
//join(κ΅¬λΆμ : stirng) : string[]

//π± μ λλ¦­ νμ κ°λ₯ <T>

//π±for ... in : λ°°μ΄μ μΈλ±μ€κ° μν
let names = ['kim', 'park', 'lee']

for(let nameIndex in names){
    const name = names[nameIndex]
    console.log(name)
}
//π±for ... of : λ°°μ΄μ μμ΄νκ°
for(let name of names){
    console.log(name)
}

//π± μ κ°μ°μ°μ(...) : κ°μ²΄μ μμ±μ λͺ¨λ μ κ°ν΄ μλ‘μ΄ κ°μ²΄λ₯Ό λ§λ λ€

//π± range ν¨μ
// rangeλ λ°°μ΄μ(number [])
const range = (from: number, to: number) : number[] => from < to ? [from, ...range(from+1, to)] : []
let numbers: number[] = range(1,10)
console.log(numbers)