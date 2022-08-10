'use strict';

// #1 String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:''' 1 + 2=${1 + 2}`);

console.log("ellie's \n\tbook")

// #2 Numeric operators
console.log(1 + 1) //add
console.log(1 - 1) //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation


// #3 Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

// 위의 코드는 아래와 동일하다.
// counter = counter + 1; //3
// preIncrement = counter; //3
console.log(`preIncrement:${preIncrement}, counter: ${counter}`)


const postIncrement = counter++;
// 위의 코드는 아래와 동일하다.
// postIncrement = counter; //3
// counter = counter + 1; //4
console.log(`preIncrement:${preIncrement}, counter: ${counter}`)



// #4 Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// #5 Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6) //greater than or equal



// #6 Logical operators: || (or) , && (and) , ! (not)
const value1 = true;
const value2 = 4 < 2; //false

// || (or) ,finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// check의 consoleㅠㅠ가 찍히지 않는이유, value1이 이미 true 이기 때문에 그 뒤는 무시함.
// 고로 check() 같이 연산을 많이 한 함수를 맨 앞에다 두면, 비효율적인 코드가 된다. 그러니 check() 같은 함수들은 맨 뒤에 배치하는것이 좋다.

// && (and) , finds the first falsy value
console.log(`and: ${value2 && value2 && check()}`);
// or 과 마찬가지로 heavy한 함수는 맨 뒤로 배치.
// null 체크할때도 많이 씀. nullableObject가 null이 아닐때만 something이라는 value를 받아오게 됨.
// if (nullableObject != null) {
//     nullableObject.something;
// }

// ! (not)
console.log(!value1); //true를 false로 변환해줌


function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('ㅠㅠ');
    }
    return true;
} //true 



// #7 Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// 엘리1과 엘리2는 같은 object 처럼 보이지만 각자 다른 레퍼런스(레퍼런스 값이 다르다.)를 가지고 있습니다.
// 그리고 엘리3은 엘리1의 똑같은 레퍼런스를 가지고 있으니까 같다..



// Quiz
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); // 특이하게도 true
console.log(null === undefined) // false



// #8 Conditional operators: if
// if , else if , else
const names = 'ellie';
if (names === 'ellie') {
    console.log('Welcome,Ellie!');
} else if (names === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log(unknown);
}



// #9 Ternary operator: ?
// condition ? value1 :value2;
// 간단한 작업일시에만
console.log(names === 'ellie' ? 'yes' : 'no');




// #10 Switch statement
// if 에서 else if else if 반복할 바엔 스위치문을 사용하자.
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break
}



//  #11 loops (while)
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while
// do를 실행한 후에 , while 보고 중단.
do {
    console.log(`do while:${i}`);
    i--;
} while (i > 0);


//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${1}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`);
}

// nested loops (for문 안에 for문)
// CPU에 좋지않으니 피하는 것이 좋다.
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// 