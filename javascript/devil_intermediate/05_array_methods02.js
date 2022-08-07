/*
arr.sort() 
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
 */

// let arr =[1,5,4,2,3];

// arr.sort();
// console.log(arr); //(5) [1, 2, 3, 4, 5]


// let arr =["a","c","d","e","b"];

// arr.sort();
// console.log(arr); //(5) ['a', 'b', 'c', 'd', 'e']


// let arr = [27, 8, 5, 13];

// arr.sort((a, b) => {
//     // 8, 27, 5,13
//     //5,8,27,13
//     //5,8,13,27


//     console.log(a, b);
//     return a - b;
// });

// console.log(arr);





// 배열의 모든 수 합치기
// let arr = [1, 2, 3, 4, 5];

// //for ,for of ,forEach

// let result = 0;
// arr.forEach((num) => {
//     result += num;  
// });

// console.log(result);



// 배열의 모든 수 합치기
// let arr = [1, 2, 3, 4, 5];

// // (누적 계산값,현재값) => { return 계산값 };
// const result = arr.reduce((prev, cur) => {
//     return prev + cur;
// }, 0)
// // 0 은 초기값은 0이라는 것 ,안써도 상관없긴함
// // 누적 계산값 0 + 현재값 1 더함
// // 누적 계산값 1 + 현재값 2 더함
// // 누적 계산값 2 + 현재값 3 더함
// // 누적 계산값 3 + 현재값 4 더함
// // 누적 계산값 4 + 현재값 5 더함

// console.log(result);


// let arr = [1, 2, 3, 4, 5];

// // (누적 계산값,현재값) => { return 계산값 };
// const result = arr.reduce((prev, cur) => {
//     return prev + cur;
// }, 100) //115

// console.log(result);



// // 성인만 뽑아서 배열로 만들기
// let userList = [
//     { name: "Mike", age: 30 },
//     { name: "Tom", age: 10 },
//     { name: "Jane", age: 27 },
//     { name: "Sue", age: 26 },
//     { name: "Harry", age: 42 },
//     { name: "Steve", age: 60 },
// ]

// let result = userList.reduce((prev, cur) => {
//     if(cur.age > 19){
//         prev.push(cur.name);
//     }
//     return prev;
// }, [])

// //누산값: []

// console.log(result);

// 전체 나이 더하기
// let userList = [
//     { name: "Mike", age: 30 },
//     { name: "Tom", age: 10 },
//     { name: "Jane", age: 27 },
//     { name: "Sue", age: 26 },
//     { name: "Harry", age: 42 },
//     { name: "Steve", age: 60 },
// ]

// let result = userList.reduce((prev, cur) => {
//     return (prev += cur.age);
// }, 0)

// console.log(result);


// 이름이 세자인 사람 찾기
let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 10 },
    { name: "Jane", age: 27 },
    { name: "Sue", age: 26 },
    { name: "Harry", age: 42 },
    { name: "Steve", age: 60 },
]

let result = userList.reduce((prev, cur) => {
    if (cur.name.length ===3) {
        prev.push(cur.name);
    }
    return prev
}, [])

console.log(result);