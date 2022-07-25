// 다른 개발자가 만들어 놓은 객체
const user = {
    name: "Mike",
    age: 30,
}

// 내가 작업
// user.showName = function () {}; //"His showName is function () {}." , 심볼을 넣어서 해결
const showName = Symbol('show name');
user[showName] = function() {
    console.log(this.name);
}

user[showName]();


// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`)
}