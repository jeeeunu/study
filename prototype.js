// // car 라는 상위개념의 객체를 만듬.
// const car = {
//     wheels:4,
//     drive() {
//         console.log("drive..");
//     },
// };



// const bmw = {
//     color: "red",
//     navigation: 1,
// }

// const benz = {
//     color: "black",
// }

// const audi = {
//     color: "blue",
// }


// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;


// const x5 = {
//     color: "white",
//     name: "x5",
// }

// x5.__proto__ = bmw;















// // 생성자 함수 이용해보기

// // const car = {
// //     wheels: 4,
// //     drive() {
// //         console.log("drive..");
// //     },
// // }

// const Bmw = function (color) {
//     this.color = color;
// };

// // Bmw.prototype.wheels = 4;
// // Bmw.prototype.drive = function () {
// //     console.log("drive..");
// // };

// // Bmw.prototype.navigation = 1;
// // Bmw.prototype.stop = function () {
// //     console.log("STOP!");
// // };

// Bmw.prototype = {
//     constructor: Bmw,
//     wheels :4,
//     drive() {
//         console.log("drive..");
//     },
//     navigation:1,
//     stop() {
//         console.log("STOP!");
//     }
// }


// const x5 = new Bmw('red');
// const z4 = new Bmw('blue');



// // x5.__proto__ = car;
// // z4.__proto__ = car;
























const Bmw = function(color) {
    const c = color;
    this.getColor = function() {
        console.log(c);
    }
};

const x5 = new Bmw("red");