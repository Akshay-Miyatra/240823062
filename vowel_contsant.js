let char = process.argv[2];

if (!char) {
  console.log('Please provide a character as an argument.');
} else {
  char = char.toLowerCase();

  if (char.length !== 1 || !char.match(/[a-z]/)) {
    console.log('Enter a single alphabet letter.');
  } else if ('aeiou'.includes(char)) {
    console.log('vowel');
  } else {
    console.log('consonant');
  }
}
