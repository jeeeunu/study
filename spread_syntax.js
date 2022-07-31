// 전개 구문
// arr1을 [4,5,6,1,2,3] 으로 , 기존 방식

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// })

// console.log(arr1);



// 위의 방식을 전개구문을 이용해 작성을 해보자
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr1 = [...arr2,...arr1];

// console.log(arr1);





// 객체
// // 전개구문 사용하지 않을 시에

// let user = { name: "Mike" };
// let info = { age: 30 };
// let fe = ["JS", "React"];
// let lang = ["Korean", "English"];

// user = Object.assign({},
//     user,
//     info,
//     {
//         skills: []
//     }
// );

// fe.forEach((item) => {
//     user.skills.push(item)
// })
// lang.forEach((item) => {
//     user.skills.push(item);
// })

// console.log(user);



// 객체
// // 전개구문 사용

let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
}

console.log(user);