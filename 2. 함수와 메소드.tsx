//π± ν¨μ
// function ν¨μμ΄λ¦(λ§€κ°λ³μ : νμ) : return νμ{}
// μ
function add1(a:number, b:number):number{
    return a+b
}
let result1 = add1(1,2);

//void νμ : return κ°μ΄ μμ
function print(name:string, age:numnber):void{
    console.log(`μ΄λ¦:${name}, λμ΄:${age}`)
}

// λ§€κ°λ³μκ° μ νμ μΌλλ ? λ₯Ό λΆμ
function add2(a:number, b:number, c?:number):number{
    return a+b+c
}
let result2 = add2(1,2);

// λ§€κ°λ³μ κΈ°λ³Έκ° μ§μ  : cμ κ°μ΄ μ£Όμ΄μ§μ§ μμλλ c=10 
function add3(a:number, b:number, c:number=10):number{
    return a+b+c
}
let result3 = add3(1,2);

//π± νμ΄ν ν¨μ
const arrow1 = (a:number, b:number):number => {return a+b}
const arrow2 = (a:number, b:number):number => a+b //{} μλ΅

//π± μ½λ°±ν¨μ : λ§€κ°λ³μλ‘ ν¨μλ₯Ό λ°λ ν¨μ
//const callBack = (callback : () => void) : void => callback()

