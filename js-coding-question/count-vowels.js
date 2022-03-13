//JS Coding Question #1: Count all vowels

function countVowels(string) {
  let count = 0;
  let vowels = 'aeiou';

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++
    }
  }

  return count;
}

console.log(countVowels('Almamater'));