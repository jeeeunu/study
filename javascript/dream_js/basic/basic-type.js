// number,string,boolean,null,undefined,symbol
// number,string,boolean,null,undefined,symbol을 제외한건 모두 object
// 최소한 1,2가지의 데이터를 한군데에 묶어둔 것.
let number = 2;
let num = '2';

let number2 = number;  // 선언하면 무조건! 메모리에 어느정도 바이트 사이즈의 공간이 확보됨.
console.log(number); //2
console.log(number2); //2

number2 = 3;
console.log(number); //2
console.log(number2); //3


console.clear();
// # object
let obj = {
  name: 'ellie',
  age: 5,
};

console.log(obj.name); //ellie

let obj2 = obj;
// obj2 변수에 그대로 복사되서 가지고 와짐
console.log(obj.name);

obj.name = 'james';
console.log('-------');
console.log(obj.name); // james
console.log(obj2.name); // james
// 변수와 오브젝트와 결과가 다름
// 변수 = 데이터 자체가 복사됨
// 오브젝트 = 주소를 가져오는것