function camelcase(s) {
  const regex = /[A-Z]/;
  let count = 1;
  
  for (let i = 0; i < s.length; i++) {
      if (regex.test(s[i])) {
          count++;
      }
  }
  
  return count;
}

// Solution B

function camelCaseCounter(string) {
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      count++;
    }
  }

  return count;
}