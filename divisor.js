const n = 10; 

console.log(`Divisors of ${n} are:`);

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
