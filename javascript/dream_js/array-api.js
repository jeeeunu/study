'use strict';

// #1 배열을 string으로 바꾸기 (join)
{
    const fruits = ['apple', 'banana', 'orange'];
    let result = fruits.join();

    console.log(result);
    // apple,banana,orange

    result = fruits.join(',and ');
    console.log(result);
    // apple,and banana,and orange
}

// #2 string을 배열로 바꾸기 (split)
{
    const fruits = '사과,키위,바나나,체리';
    let result = fruits.split(','); // ',' 구분자를 꼭 전달해야 함.
    console.log(result);
    // (4) ['사과', '키워', '바나나', '체리']

    result = fruits.split(',', 2);
    console.log(result);
    // (2) ['사과', '키워']
}

// #3 배열을 거꾸로 나열하기 [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    // (5) [5, 4, 3, 2, 1]
    console.log(array); // 주의: 배열 자체가 리턴됨.
    // (5) [5, 4, 3, 2, 1]
}

// #4 1,2번째 요소를 제외한 나머지 요소만 포함해 새로운 배열을 만들기
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result);
    // (2) [1, 2]
    console.log(array);
    // (3) [3, 4, 5]
    // X : 기존 배열은 유지시키고 새로운 배열을 만드는것이 목적

    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2, 5);
    console.log(result2);
    // (2) [1, 2]
    console.log(array2);
    // (5) [1, 2, 3, 4, 5]
    // O
}

console.clear();

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];


// #5 90점 이상 학생 찾기 (find)
{
    // true가 되면 함수를 멈춤
    // const result = students.find(function (student, index) {
    //     // console.log(student, index);
    //     return student.score === 90;
    // })
    // console.log(result);

    // 위 코드 그대로 화살표 함수로 변경 ,function,return 생략 가능
    const result = students.find((student) => student.score === 90);
    console.log(result);
}


// #6 수업에 등록한 학생 찾기 (filter)
// filter : true 값만 return 함.
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}



// #7 학생들의 점수만 나오는 배열 만들기 (map)
// mapping : 배열안에 있는 요소들을 콜백함수를 통해 배열을 fn대로 값을 변환해주는것
{
    // 그대로 mapping 하기
    // const result = students.map((student) => student);
    // console.log(result);

    const result = students.map((student) => student.score * 2);
    console.log(result);

    // 콜백함수에 들어가는 인자는 직관적으로 알 수 있도록 student 처럼 정확한 의미를 담은 이름으로 넣기.
    // 아래 방식 X
    // const result = students.map((value) => value.score *2);
    // const result = students.map((item) => item.score *2);
}


// #8 50점 미만 학생들 확인하기 (some)
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); // true , 한명이라도 있으면 true return된것.

    const result2 = students.every((student) => student.score < 50);
    console.log(result2); // false , 모두가 50보다 낮아야 true가 return됨.

    const result3 = !students.every((student) => student.score < 50);
    console.log(result3); // true
}


// #9 score 평균값 (reduce - 복습필요)
// reduce: 우리가 원하는 시작점 부터 모든 배열을 돌면서 어떤 값을 누적할때 쓰는것.
// prev: 이전에 콜백함수에서 리턴된 값이 전달됨
// curr: 배열된 아이템을 순차적으로 받음.
{
    const result = students.reduce((prev, curr) => {
        console.log('-----');
        console.log(prev);
        console.log(curr);

        return prev + curr.score;
    }, 0); // initial 이 0부터 시작

    console.log(result); // 369


    // 최종
    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);

}

// #10 학생 점수를 전부 string으로 바꾸기 , api 묶어서 사용하기
{
    console.clear();
    const result = students.map((student) => student.score).join();
    const result2 = students.map((student) => student.score).filter(score => score >= 50).join();
    console.log(result);
    console.log(result2);
}


// #11 Quiz - '45,66,80,88,90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => b - a)
        .join();
    console.log(result);
}