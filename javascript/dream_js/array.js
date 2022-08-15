'use strict';

// Array (자료구조)


// #1 Declaration (배열 선언하기)
const arr1 = new Array(); //[]
const arr2 = [1, 2];

// #2 Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]); // 배열은 index에 접근하면 나옴
console.log(fruits[3]); // undefined

console.clear();


// #3 Looping over an array
// print all fruits

// 첫번째 방법
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 두번째 방법
for (let fruit of fruits) {
    console.log(fruit);
}

// 세번째 방법 콜백 함수를 가져옴. ,ctrl누르고 forEach 누르면 문서 나오는데 문서 읽는 습관 기르기.
fruits.forEach((fruit) => console.log(fruit));



// #4 Addtion, deletion,copy
fruits.push('딸기', '복숭아');
console.log(fruits); //사과,바나나,딸기,복숭아

// pop : 맨 뒤에서 하나씩 빼기
fruits.pop();
fruits.pop();
console.log(fruits); //사과,바나나


// unshift : 배열 앞에서부터 넣기
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift : 배열 앞에서부터 빼기
fruits.shift();
fruits.shift();

// shift와 unshift는 pop,push 보다 훨씬 느리고 무겁다!!!! 배열의 길이가 길면 길수록 더 심함.
// 되도록이면 pop과 push를 사용하자.
// 중간에 넣고빼는것 (index 이용) 은 느리지 않다.
// -> 정렬,알고리즘과 관련된 내용임.



// ## splice
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
// fruits.splice(1);
console.log(fruits); // 사과 // 몇개를 지울지 지정하지 않으면 1만 제외하고 다 지워버림

// fruits.splice(1, 1); 
console.log(fruits); // 사과,딸기,복숭아,레몬 (바나나 빠짐) // 1개를 1번째 배열에서 삭제

// splice에서 원하는 데이터를 더 추가할 수도 있다.
fruits.splice(1, 1, '풋사과', '수박');
// fruits.splice(1, 0, '풋사과', '수박'); // 해당 방식처럼 작성하면, 지우지는 않고 1번째에 추가만 할 수 있음.
console.log(fruits); // 딸기가 지워진 자리에 풋사과,수박이 추가되었다.

// ## combine two arrays (배열 두개 합치기)
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// #5 Searching api (index 번호 찾기)
// find the index
console.clear();
// indexOf
console.log(fruits);
console.log(fruits.indexOf('사과')); // 0
console.log(fruits.indexOf('수박')); // 2
// includes
console.log(fruits.includes('수박')); // true
console.log(fruits.includes('없음')); // false
console.log(fruits.indexOf('코코넛')); // -1
// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')) // 사과가 두개면 맨 앞 index값 출력
console.log(fruits.lastIndexOf('사과')) // 맨 뒤의 index값 출력