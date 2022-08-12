'use strict';

// #1 Function
// 프로그램 구성하는 중요한 빌딩 구성
// 재사용 가능함
// 값을 계산하기 위해 쓰임.

// 자바스크립트: 함수 function
// 하나의 함수는 한가지의 일만 하도록 만듬
// 함수의 이름을 만들때는 (변수는 명사), do something , 커멘드 형태, 통사형태로 지정해야 함 
// 예: createCardAndPoint -> 라는 함수가 있다면 createCard/createPoint로 나눌 수 있을지에 대해 생각해봐야 함.
// 자바스크립트에서 함수(function)는 object 이다. -> 변수 할당 가능,파라미터 전달 가능,함수 리턴 가능 할 수 있는 이유


// 기본 방식 (보다는 파라미터 전달 방식을 사용)
function printHello() {
    console.log('Hello');
}

printHello();

// 파라미터 전달 방식 (권장)
function log(message) {
    console.log(message);
}

log('Hello@');
// 타입 불명확
log(1234); //물론 num 으로 자동으로 값을 출력 하긴 함.




// #2 Parameters
// 메모리에 value 전달
// object -> 메모리 레퍼런스가 전달됨.

function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
//메모리에는 object가 만들어진 레퍼런스가 들어가고 이 레퍼런스는 이 object는 메모리 어딘가에 가리키고 있음. , 메모리에 그대로 변경됨.
changeName(ellie);
console.log(ellie); //name: "corder"



// #3 Default parameters (added in ES6)
function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    } // 해당 코드 사용X 아래 코드 참조
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// from 이 지정되어 있지 않기때문에 Hi undefined가 나옴
// 그래서 if 문을 통해 from이 undefined일 시(작성하지 않았을 시)에 나오는 값을 설정 했었음.
// 하지만 위의 방식을 사용하지 않고 아래처럼 사용함

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// 위의 코드도 마찬가지로 from 입력 안할 시에 unknown 으로 출력됨.


// #4 Rest parameters (added in ES6)
// 배열상태로 전달하는 것

// 정통 for문
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

}
printAll('dream', 'coding', 'ellie');

// 위의 코드를 간소화한 for of 문법 사용 코드
function printAllForOf(...args) {
    for (const arg of args) {
        console.log(arg);
    }

    // 더 간단하게?
    args.forEach((arg) => console.log(arg));

}
printAllForOf('dream', 'coding', 'ellie');





// #5 Local scope
// 스코프란? "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다."
let globalMessage = 'global'; //global variable (전역변수)
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable (지역변수)
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //오류

    // 이것처럼 return 타입이 없는 함수는 아래 코드가 생략되어 있는것임.
    return undefined;
}
printMessage();



// #6 Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);


// #7 Early return, early exit 를 해라.

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic..
        // 블록 안에서 로직을 많이 작성하면 가독성 떨어진다.
    }
}

// good!! 
function upgradeUser(user) {
    if (user.point <= 10) {
        return; // 조건이 맞지 않으면 빠르게 함수종료
    }

    // long upgrade logic..
}



// #8 Function Expression
const print = function () { // anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));




// ## Callback
// 파라미터에 함수들을 전달할 수 도 있음. -> 콜백 function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// 아래: anonymous function
const printYes = function () {
    console.log('yes!');
}

// 아래: named function
// 디버깅할때 함수의 이름이 나오기 위해 쓰는 것.
const printNo = function print() {
    console.log('no!');
    // print(); // < 이 코드로 인해 console에 no! 가 무한대로 찍히는중
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);





// # Arrow Function
// 함수를 간결하게 만들어 주는 함수!! 
// anonymous function
const simplePrint = function () {
    console.log('simplePrint!');
};

//는 아래코드와 동일
const simplePrintArrow = () => console.log('simplePrint!');
const add = (a, b) => a + b;

// 함수안에서 다양한 일을 해야해서 블록이 필요하다면? 블록을 넣을수도 있음.
// !!!! 대신, 블록을 쓰게되면 return을 사용해 값을 리턴해야 함.
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};



// ## IIFE : Immediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
hello(); //< 당연하게 함수를 호출해야함.
// 하지만 선언함과 동시에 함수를 호출하는 방법! 
(function helloIIFE() {
    console.log('IIFE fast');
}());