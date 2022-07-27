// forEach 문을 이용해서 배열 보기

// let arr = ['Mike', 'Tom', 'Jane'];

// arr.forEach((name, index) => {
//     // console.log(name);
//     console.log(`${index + 1}. ${name}`);
// });





// find / findIndex

// let arr = [1,2,3,4,5];

// const result = arr.find((item)=>{
//     return item % 2 === 0;
// });

// console.log(result); //2




// let userList = [
//     { name: "Mike", age: 30 },
//     { name: "Jane", age: 27 },
//     { name: "Tom", age: 10 },
// ]

// //indexOf 로 찾기 힘듬. 이럴때 find 를 이용하면 된다.

// const result = userList.find((user) => {
//     if (user.age < 19) {
//         return true;
//     } return false;
// })

// console.log(result);


// let userList = [
//     { name: "Mike", age: 30 },
//     { name: "Jane", age: 27 },
//     { name: "Tom", age: 10 },
// ]

// //indexOf 로 찾기 힘듬. 이럴때 find 를 이용하면 된다.

// const result = userList.findIndex((user) => {
//     if (user.age < 19) {
//         return true;
//     } return false;
// })

// console.log(result);



// filter
// let arr = [1,2,3,4,5,6];

// const result = arr.filter((item)=>{
//     return item % 2 === 0;
// });

// console.log(result);





// arr.map()

// let userList = [
//     { name: "Mike", age: 30 },
//     { name: "Mike", age: 27 },
//     { name: "Mike", age: 10 },
// ];

// let newUserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         id: index + 1,
//         isAdult: user.age > 19,
//     });
// });

// console.log(newUserList);
// console.log(userList); //변화 없음


//join
// let arr = ["안녕","나는","철수야"];

// let result = arr.join();

// console.log(result);

// // 위의 코드식으로 하면 ,도 같이 찍힘, 아래 코드 참고

// let arr = ["안녕","나는","철수야"];

// let result = arr.join(" "); //쉼표 대신 "" 안의 내용이 들어감

// console.log(result);





//join,split

// const users = "Mike,Jane,Tom,Tony";

// const result = users.split(",");

// console.log(result);



// let str = "Hello, My name is Mike.";

// const result = str.split("");

// console.log(result)



// 객체와 배열 구분하기
let user = {
    name: "Mike",
    age: 30,
}; 
// 객체

let userList = ["Mike","Tom","Jane"];
//배열

console.log(Array.isArray(user)); 
console.log(Array.isArray(userList)); 

