// object

// #1 Literals and properties
const name = 'ellie';
const age = 4;
Print(name, age);
function Print(name, age) {
    console.log(name);
    console.log(age);
}
// 위의 코드는 비효율적이기때문에 object로 관리함.
// const ellie = { name: 'ellie', age: 4 };

function Print(person) {
    console.log(person.name);
    console.log(person.age);
}

// Print(ellie);



// object 만드는 방식
const obj = {};  // 'object literal' 문법 오브젝트 리터럴
const obj2 = new Object(); // 'object constructor' 문법



// object에 바로바로 추가 시킬수 있음. (유지보수에 힘듬)
const ellie = { name: 'ellie', age: 4 };
// ellie.hasJob = true;
delete ellie.hasJob;



// object = {key,value}; 



// #2 Computed properties
console.log(ellie.name); //ellie
console.log(ellie['name']); //ellie
// 동일하게 ellie의 프로퍼티에 접근함.
// string 타입으로 접근 필요 ''

// console.log(ellie['name']); 를 사용하는 예
function printValue(obj, key) {
    // console.log(obj.key); //undefined
    console.log(obj[key]); true
}
printValue(ellie, 'name'); //ellie에 key라는 프로퍼티가 들어있니? 확인용 코드


ellie.hasJob = true;
ellie['hasJob'] = true;
console.log(ellie.hasJob);



// #3 Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// ~ Constructor function
function Person(name, age) {
    // this = {}; < 생략
    this.name = name;
    this.age = age;
    //  return this; < 생략
}


// #5 in operator (key in obj)
console.log('name' in ellie); //true
console.log('age' in ellie); //true
console.log('random' in ellie); //false
console.log(ellie.random); //undeifined



// #6 for..in vs for..of

// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
} //ellie의 모든 키 가 key에 불러짐

//  for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value)
} // 배열 나열



// #7 Fun cloning (오브젝트 클론)
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // user의 name도 coder로 변경됨. 당연한것 !! user나 user2는 동일한 객체를 가리키고 있기때문에.

// 그렇다면 object를 그대로 복제하는것은??

// old way!!
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// this way!!
const user4 = {};
Object.assign(user4, user);
const user5 = Object.assign({}, user);
console.log(user5);


// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);