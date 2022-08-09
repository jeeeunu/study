'use strict';

const brendan = 'brendan'
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(helloBob);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//string이 같은 symbol을 만들고 싶다면?
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true


// symbol 출력방법
console.log(`value: ${symbol1.description},type:${typeof symbol1}`)

// object
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;