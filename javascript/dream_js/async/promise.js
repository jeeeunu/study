'use strict';

// # producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something..');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
  // 네트워크에 앨리라는 값을 전달.
});

// Consumers : then , catch, finally
promise
  .then((value) => { //value = ellie
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
// then : promise가 정상적으로 수행이 되어서 마지막에 최종적으로 resolve 라는 콜백함수를 통해 전달한 값이 파라미터에 전달되어 들어옴.

// #Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000)
    });
  })
  .then(num => console.log(num));

// #Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000)
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 알`), 1000)
    setTimeout(() => reject(new Error(`error! ${hen} => 알`))
      , 1000)
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000)
  });

getHen() //
  .then(getEgg)
  .catch(error => {
    return '오리';
  }) // getEgg실패시 return식 추가하고 싶음.
  .then(cook)
  .then(console.log)
  .catch(console.log);
