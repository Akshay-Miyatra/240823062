const a = 4;
const b = 2;
const operator = '+';

let result;

if (operator === '+') {
  result = a + b;
} else if (operator === '-') {
  result = a - b;
} else if (operator === '*') {
  result = a * b;
} else if (operator === '/') {
  result = a / b;
} else {
  result = 'Invalid operator';
}

console.log(result);
