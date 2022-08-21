'use strict';

// async & await
// clear style of using promise :-)

// #1 async
async function fetchUser() {
    // do network request in 10 secs.. (가정)
    return ('ellie');
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// #2 await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // ms 시간이 지나면 resolve 호출하기
}

async function getApple() {
    await delay(3000);
    // 3000 딜레이가 끝날때까지 기다려 준다.
    // throw 'error';
    return '사과';
}

async function getBanana() {
    await delay(3000);
    return '바나나';
}

// 아래: 일반적인 비동기 방식으로 작성했을때
// function getBanana() {
//     return delay(3000)
//         .then(() => '바나나');
// }

// 아래: promise를 이용했지만 콜백지옥 방식과 같음. async로 해결가능
// function pickFruits() {
//     return getApple()
//         .then(apple => {
//             return getBanana()
//                 .then(banana => `${apple} + ${banana}`);
//         });
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// #3 useful Promise APIS
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// 
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); // 바나나