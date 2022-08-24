function add(a, b) {
  return a + b;
}

// { } -> 코드블록, 함수

const doSomething = add; // 같은 레퍼런스를 가리키고 있음.


function print() {
  console.log('print');
}

print();


function divide(num, num2) {
  return num / num2;
}

function surprise(operator) {
  const result = operator(2, 3); // = add(2,3)
  console.log(result);
}

surprise(divide); //5