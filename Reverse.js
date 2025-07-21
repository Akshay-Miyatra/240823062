let num = 1234;
let reversed = 0;
let number = num;

while (number > 0) {
  let digit = number % 10;
  reversed = reversed * 10 + digit;
  number = Math.floor(number / 10);
}

console.log("Original Number:", num);
console.log("Reversed Number:", reversed);

