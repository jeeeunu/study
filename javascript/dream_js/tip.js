// #Ternary Operator (삼항연산자)

// ❌
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👌'
  } else if (score <= 5) {
    result = '👎'
  }
  return result;
}

// ✅
// 조건이 2가지이기떄문에 삼항연산자를 이용해 리턴 가능
function getResult(score) {
  return score > 5 ? '👌' : '👎';
}



// #Nullish Coalescing Operator , (null,undefined 일 시에 특정 텍스트 나타내기, if문 x , nullish coalescing 사용)
// ❌
{
  function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
      message = 'Nothing to display';
    }

    console.log(message);
  }
}

// ✅
function printMessage(text) {
  const message = text ?? 'Nothing to display';

  console.log(message);
}

printMessage('Hello');  // hello
printMessage(undefined);  // Nothing to display
printMessage(null); // Nothing to display

// ❓default parameter 을 사용하면 되지 않을까?❓ 
// null 전달한 경우에는 null이 출력됨. -> undefined일 경우에만 적용됨!!!
{
  function printMessage(text = 'Nothing to display') {
    console.log(text);
  }
  printMessage('Hello');  // hello
  printMessage(undefined);  // Nothing to display
  printMessage(null); // null

}



// #object Destructuring
const person = {
  name: 'Julia',
  age: 20,
  phone: '010777777',
};
// ❌
function displayPerson(person) {
  displayAvator(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// ❌
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvator(name);
  displayName(name);
  displayProfile(name, age);
}

// ✅
function displayPerson(person) {
  const { name, age } = person;
  displayAvator(name);
  displayName(name);
  displayProfile(name, age);
}


// #Spread Syntax - Object
const item = { type: '셔츠', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌
item['price'] = detail.price; // 수동적

// ❌
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;
// ,, 등등 수동적인 코드들은 다별로

// ✅
// 새로운 오브젝트를 만들것! 
const shirt0 = Object.assign(item, detail);

// ✅✅✅
// Better
const shirt = { ...item, ...detail };
// 기존 키,값은 유지한상태로 덮어씌우기도 가능함

// 배열도 사용가능
let fruits = ['수박', '오렌지', '바나나'];
// fruits.push('딸기)';
fruits = [...fruits, '딸기']; // 기존 배열에서 맨뒤에 딸기 추가! 
// fruits.unshift('산딸기');
fruits = ['딸기', ...fruits]; // 기존 배열에서 맨앞에 산딸기 추가!

// #Optional Chaining
const bob = {
  name: 'Julia',
  age: 20,
};
// 일자리가 없는 bob
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};
// 일을 가지고 있는 anna

// ❌
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅
function displayJobTitle(person) {
  if (person.job?.title) { // job이 없다면 실행되지 않음.
    console.log(person.job.title);
  }
}

// ✅
function displayJobTitle(person) {
  const title = person.job?.title ?? 'No Job Yet'; // job이 없거나 title이 없다면 'No Job Yet'
  console.log(title);
}

// #Template Literals
const person = {
  name: 'Julia',
  score: 4
}