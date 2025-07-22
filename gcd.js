const a = 20;
const b = 28;

let x = a;
let y = b;


while (y !== 0) {
  const temp = y;
  y = x % y;
  x = temp;
}

console.log(`GCD (HCF) of ${a} and ${b} is: ${x}`);
