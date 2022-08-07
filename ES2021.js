console.clear();


//ES02021
// string.replaceAll

// const str1 = "Hello World";
// console.log(str1.replaceAll("l","~"));

// // 새로 추가된 replaceAll은 아래코드와 동일한 결과를 가졌음.
// const str1 = "Hello World";
// console.log(str1.replace(/l/g,"~")); //g는 /l/ 정규식의 전역검색을 할수 있는 g플래그를 사용했다.


// const str1 = "I'm [Mike]. This is Tom's [Car].";
// console.log(str1.replaceAll("[","~").replaceAll("]","~"));

// //아래 코드와 동일함.
// console.log(str1.replace(/[/g,"~").replace(/]/g,"~"));







//ES02021
// Promise.any

// const rejPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("fail..");
//     }, 2000);
// });

// const resPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("success");
//     }, 2000);
// })


// // promise.race : 프로미스 중에 가장 먼저 완료된 결과값으로 이행/거부
// Promise.race([rejPromise,resPromise])
//     .then(() => console.log("성공"))
//     .catch((e) => console.log(e));


// // promise.any : 프로미스 중에 가장 먼저 이행된 객체 반환 . 모두 rej 시에는, catch문 값 찍힘.
// Promise.any([rejPromise,resPromise])
//     .then(() => console.log("성공"))
//     .catch((e) => console.log(e));




//ES02021
// 논리할당연산자

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(); //NaN

// // 디폴트 값을 주기위해, 아래처럼 활용한다.
// function add(num1, num2) {
//     num1 = num1 || 0;
//     num2 = num2 || 0;
//     console.log(num1 + num2);
// }

// add(); //0

// // 위의 코드를 약간 줄여보자
// function add(num1, num2) {
//     num1 = num1 || 0;
//     num2 ||= 0;
//     console.log(num1 + num2);
// }

// add(); //0



//ES02021
// 숫자구분자
// let billion = 1,000,000,000 //1억, 보기쉽게 , 를 사용하는게 좋지만 자바스크립트에서는 허용되지 않는다.그래서
// let billion = 1_000_000_000




//ES02021
//WeakRef
let user = { name: 'Mike', age: 30 }
const weakUser = new WeakRef(user);

user = null;

const timer = setInterval(() => {
    const wUser = weakUser.deref();
    if (wUser) {
        console.log(wUser.name);
    } else {
        console.log('제거 되었습니다.');
        clearInterval(timer)
    }
}, 1000);