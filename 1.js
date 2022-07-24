// let n = "name";
// let a = "age";

// const user = {
//     [n] : 'Mike',
//     [a] : 30,
//     [1+4]: 5,
// }

// console.log(user);







// function makeObj(key, val) {
//     return {
//         [key] : val
//     }
// }

// const obj = makeObj("나이",33);

// console.log(obj);




// const user = {
//     name: 'Mike',
//     age : 30,
// };

// const user2 = Object.assign({},user);
// user2.name = 'Sam'

// console.log(user);
// console.log(user2);





const user = {
    name: 'Mike',
    age : 30,
};

// const result = Object.keys(user);
// const result = Object.values(user);
const result = Object.entries(user); //두개의 배열 <-> 반대되는게 fromEntries

console.log(result);

let arr = [
    ['mon','월'],
    ['tue','화'],
]

const result2 = Object.fromEntries(arr)

console.log(result2);

