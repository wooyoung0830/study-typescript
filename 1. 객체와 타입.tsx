// π±λ³μ μ μΈ
// let λ³μμ΄λ¦ : νμ
// const λ³μμ΄λ¦ : νμ

// μ
let num : number = 1;
let bool : boolean = true;
let str : string = "hello world";
let obj : object = {name : "kim"};

num = 'apple' //νμμ΄ λ¬λΌ μλ¬

let v1: number | string = 123; // number λλ string νμ
let a : any = 0 // λͺ¨λ  νμ κ°λ₯


// π±κ°μ²΄ νμ μ μ interface 
// interface μΈν°νμ΄μ€ μ΄λ¦{
    // μμ±μ΄λ¦ : μμ±νμ
// }

// μ
interface people{
    name : string // νμ μμ
    age : number
    address? : string // νμμμκ° μλλ (μ ν μμ)
}

let person1 : people = {name : 'kim', age : 34, address : 'seoul'}
let person2 : people = {name : 'lee', age : 78}

// μ΅λͺ μΈν°νμ΄μ€ : μ΄λ¦μ΄ μλ μΈν°νμ΄μ€λ₯Ό λ°λ‘ λ§λ€ μ μμ
let person3 : {
    name : string 
    age : number
    address? : string 
} = {name : 'park', age : 23}

//π± ν΄λμ€ μ μΈλ¬Έ
class Person{
    name : string // νμ μμ
    age : number
    address? : string 
}

let jack : Person = new Person()
jack.name = 'Jack';
jack.age = 47;

//π± κ°μ²΄ νμ λ³ν
// (<νμ>κ°μ²΄)
// (κ°μ²΄ as νμ)
let basket : object = {fruit : 'apple', drink : 'coke'};
let fruit1 = (<{fruit:string}>basket).fruit; //object νμμ string νμμΌλ‘
let fruit2 = (basket as <{fruit:string}>).fruit;

console.log(fruit1);
console.log(fruit2);