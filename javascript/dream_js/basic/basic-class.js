class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
            // this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`yo! ${num}`);
}
function alertNum(num) {
    alert(`wow! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);


// const coolCounter = new Counter(printSomething);

// coolCounter.increase(); // 1
// coolCounter.increase(); // 2
// coolCounter.increase(); // 3
// coolCounter.increase(); // 4
// coolCounter.increase(); // 5

// class 안에 함수 만들때는 function 안써도됨.