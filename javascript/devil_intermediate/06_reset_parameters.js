// 나머지 매개변수
// 전달받은 모든 수를 더해야함.

// function add(...numbers) {
//     let result = 0;
//     numbers.forEach((num) => (result += num));
//     console.log(result);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




// // 나머지 매개변수
// // 전달받은 모든 수를 더해야함.

// function add(...numbers) {
//     let result = numbers.reduce((prev, cur) => (prev + cur));
//     console.log(result);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);





// 나머지 매개변수
// user 객체를 만들어 주는 생성자 함수
// 나머지 매개변수는 항상 마지막에 위치 해야 한다..
function User(name, age, ...skills) {
    this.name = name;
    this.add = age;
    this.skills = skills;  //스킬의 개수는 여러개 일 수 있음.
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "Js", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);