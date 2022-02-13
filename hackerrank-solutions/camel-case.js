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

//atirni for ciklussal!