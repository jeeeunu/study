// const mike = {
//     name: "Mike",
// }

// const tom = {
//     name: "Tom",
// }

// function showThisName(tom) {
//     console.log(this.name);
// }


// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// };

// update.apply(mike, [1999, 'singer']);
// console.log(mike);

// update.apply(tom, [2002, 'teacher']);
// console.log(tom);




//bind

// const mike = {
//     name: "Mike",
// };

// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }

// //bind 값을 넣으면 this 값을 영구적으로 바꿀 수 있음.

// const updateMike = update.bind(mike);

// updateMike(1980,"police");
// console.log(mike);




// 예제
const user = {
    name: "Mike",
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName(); //hello, Mike

let fn = user.showName;

// fn(); //hello, 만 나옴 // this를 잃어버림
fn.call(user); //정상적으로 this 불러옴
fn.apply(user); //정상적으로 this 불러옴

let boundFn = fn.bind(user);

boundFn(); // 정상적으로 this 불러옴
