//🌱 함수
// function 함수이름(매개변수 : 타입) : return 타입{}
// 예
function add1(a:number, b:number):number{
    return a+b
}
let result1 = add1(1,2);

//void 타입 : return 값이 없음
function print(name:string, age:numnber):void{
    console.log(`이름:${name}, 나이:${age}`)
}

// 매개변수가 선택적일때는 ? 를 붙임
function add2(a:number, b:number, c?:number):number{
    return a+b+c
}
let result2 = add2(1,2);

// 매개변수 기본값 지정 : c에 값이 주어지지 않을때는 c=10 
function add3(a:number, b:number, c:number=10):number{
    return a+b+c
}
let result3 = add3(1,2);

//🌱 화살표 함수
const arrow1 = (a:number, b:number):number => {return a+b}
const arrow2 = (a:number, b:number):number => a+b //{} 생략

//🌱 콜백함수 : 매개변수로 함수를 받는 함수
//const callBack = (callback : () => void) : void => callback()

