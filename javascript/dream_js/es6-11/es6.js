'use strict';
// #shorthand property names
{
  const ellie1 = {
    name: 'Ellie',
    age: '18',
  };

  const name = 'Ellie';
  const age = '18';

  // 기존 방식
  const ellie2 = {
    name: name,
    age: age,
  }

  // 새로운 방식
  const ellie3 = {
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
  // 모두 같은 값 나옴.
};

// #Destructuring assignment
{
  const animals = ['개', '고양이'];

  // 기존 방식
  const first = animals[0];
  const second = animals[1];
  console.log(first, second);

  // 새로운 방식
  {
    const [first, second] = animals;
    console.log(first, second);
  }
  // 모두 같은 값 나옴.
}

// #Spread Syntax
// object 안에 있는 애들을 복사해서 가져오는게 아니라 주소값만 가져오는것이기 때문에 변경하면 모두다 변경됨.
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; //array 각각 낱개로 가져오는것
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation, object도 동일하게 이용가능. 
  // 다만 object끼리 동일한 key를 가지고 있을다면 맨 뒤에있는 오브젝트 값이 앞의 값에 덮어씌워진다.
  const fruits1 = ['복숭아', '딸기'];
  const fruits2 = ['바나나', '키위'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits)
}

// #Default parameters
// 기존 방식
{
  function printMessage(message) {
    if (message == null) {
      message = 'default message';
    }
    console.log(message);
  }

  printMessage('hello');
  printMessage();
}

// 새로운 방식 =''  ---> 초기값!! 
{
  function printMessage(message = 'default message') {
    console.log(message);
  }

  printMessage('hello');
  printMessage();
}

// #Ternary Operator, true,false에 따른 값
{
  const isCat = true;
  // 기존 방식 (XXXXX)
  {
    let component;
    if (isCat) {
      component = '고양이';
    } else {
      component = '개';
    }
    console.log(component);
  }

  // 좋은 방식
  {
    const component = isCat ? '고양이' : '개';
    console.log(component);
  }
}

// #Template Literals (텍스트 합치기 + 연산자 등)
{
  const weather = '해';
  const temperature = '16도';

  // 기존 방식
  console.log(
    'Today weather is ' + weather + 'and temperature is' + temperature
  )

  // 새로운 방식
  console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}


// ###ES11
// #Optional chaining
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      }
    }
  };
  const person2 = {
    // 일이 없는 상태
    name: 'Bob',
  };

  // Xx
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job);
    }

    printManager(person1);
    printManager(person2);
    // $$연산자, if 문 등등.. 여러가지 방법이 있음.., 하지만 코드가 중복되는 일이 생김
  }

  // OO!
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

// #Nullish Coalescing Operator
{
  // false: false, '', 0, null, undefined
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);  // Ellie
    // 버그 발생 가능성 높읍! !!!
    // name 이 '' 일 경우 똑같이 false로 처리됨.
    // name 이 0 일 경우 똑같이 false로 처리됨. 
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);  // Guest
  }

  // 명확하게 코딩하고 싶을땐 아래의 방식으로
  {
    const name = '';
    const userName = name ?? 'Guest';
    // name이 있다면 name을 이용하고 없다면 guest 를 이용
    console.log(userName); // 공백

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message); // 0
  }
}