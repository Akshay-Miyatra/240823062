const num = 123;
let sum = 0;

for (const digit of num.toString()) {
  sum += Number(digit);
}

console.log(sum);  
