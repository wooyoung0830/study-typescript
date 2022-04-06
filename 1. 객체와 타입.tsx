// 🌱변수 선언
// let 변수이름 : 타입
// const 변수이름 : 타입

// 예
let num : number = 1;
let bool : boolean = true;
let str : string = "hello world";
let obj : object = {name : "kim"};

num = 'apple' //타입이 달라 에러

let v1: number | string = 123; // number 또는 string 타입
let a : any = 0 // 모든 타입 가능


// 🌱객체 타입 정의 interface 
// interface 인터페이스 이름{
    // 속성이름 : 속성타입
// }

// 예
interface people{
    name : string // 필수 요소
    age : number
    address? : string // 필수요소가 아닐때 (선택 요소)
}

let person1 : people = {name : 'kim', age : 34, address : 'seoul'}
let person2 : people = {name : 'lee', age : 78}

// 익명 인터페이스 : 이름이 없는 인터페이스를 바로 만들 수 있음
let person3 : {
    name : string 
    age : number
    address? : string 
} = {name : 'park', age : 23}

//🌱 클래스 선언문
class Person{
    name : string // 필수 요소
    age : number
    address? : string 
}

let jack : Person = new Person()
jack.name = 'Jack';
jack.age = 47;

//🌱 객체 타입 변환
// (<타입>객체)
// (객체 as 타입)
let basket : object = {fruit : 'apple', drink : 'coke'};
let fruit1 = (<{fruit:string}>basket).fruit; //object 타입을 string 타입으로
let fruit2 = (basket as <{fruit:string}>).fruit;

console.log(fruit1);
console.log(fruit2);