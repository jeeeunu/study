'use strict';

// class : template
// object : instance of a class


// #1 class 선언, class를 통한 object 생성 기본 방식
class Person {
    // constructor (생성자)
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }


    // methods
    speak() {
        console.log(`${this.name}:hello!`)
    }

}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();




// #2 Getter and setters (개터와 새터)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);
// 사용자가 작성한대로 사람의 나이가 -1일수는 없다.
// 그래서 get,set으로 값을 설정해둠




// #3 Fields (Public & Private) 
class Experiment {
    publicField = 2; //외부 접근 가능
    #privateField = 0; //클래스 내부에서만 값이 보여지고 변경할수 있음. 클래스 외부에서는 읽을수도 변경할 수도 없음.
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined




// #4 Static
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
// console.log(Article.publisher);
Article.printPublisher();



// ## 상속 & 다양성 객체지향 언어 활용!! 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw(); //부모의 메소드도 추가 가능함 !!!!
        console.log('세모'); // 새로 추가
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: $(this.color)`;
    }
} // 필요한 함수만 overwrite 가능!! 

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());




// ##6 instanceOF -> class checking
// 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스탠스인지 확인 함!
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle);  //t
console.log(rectangle instanceof Shape);  //t
console.log(triangle instanceof Object);  //t
console.log(triangle.toString());