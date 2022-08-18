//JSON

// #1 Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"] < ""로 들어가는건 JSON의 규격사항임 (배열처럼 들어감)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
//{"name":"tori","color":"white","size":null,"birthDate":"2022-08-18T15:03:15.593Z"}
// jump 함수는 json에 포함되지 않음. object의 데이터가 아니기 때문에.
// symbol도 json에 포함되지 않음.

json = JSON.stringify(rabbit, ["name"]);
// 원하는 프로퍼티만 선언
console.log(json);
// {"name":"tori"}

json = JSON.stringify(rabbit, (rabbit, (key, value) => {
    console.log(`key: ${key},value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value; //name ellie로 바꾸기
}));
// 원하는 프로퍼티만 선언
console.log(json);
// {"name":"tori"}


// #2 JSON to Object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump(); // 에러 발생, 함수 포함없이 JSON으로 변경된 데이터이기 때문에..

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // 에러 발생, "birthDate":"2022-08-18T15:03:15.593Z" 가 스트링 형태로 만들어졌기때문에 다시 object로 들어올때도 string으로 불러옴.
// 그래서 콜백함수로 불러와야함. 아래코드 참고
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key:${key},value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // key가 birthDate일 시에 new Date로 변경되어서 나타남.
});
console.log(rabbit.birthDate.getDate()); // 19