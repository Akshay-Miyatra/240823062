const num = 153;
const digits = num.toString().split('');
const power = digits.length;

let sum = 0;
for (const digit of digits) {
  sum += Math.pow(Number(digit), power);
}

if (sum === num) {
  console.log(num + ' is an Armstrong number');
} else {
  console.log(num + ' is NOT an Armstrong number');
}
