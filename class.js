// const User = function (name, age) {
//     this.name = name;
//     this.age = age;
//     // this.showName = function () {
//     //     console.log(this.name);
//     // };
// };

// User.prototype.showName = function() {
//     console.log(this.name);
// }

// const mike = new User("Mike", 30);




// class User2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     showName() {
//         console.log(this.name);
//     } //showname은 프로토타입으로 저장된다.
// }

// const tom = new User2("Tom", 19);

// console.log(tom)
// console.log(mike);



// extends

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}

const z4 = new Bmw("blue");