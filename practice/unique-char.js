function uniqueCharacters(str) {
  let chars = {};
  let unique = [];

  for (let i = 0; i < str.length; i++) {
    chars[str[i]] ? chars[str[i]] += 1 : chars[str[i]] = 1;
  };

  Object.keys(chars).forEach(key => {
    if (chars[key] === 1) {
      unique.push(key);
    }
  });

  return unique;
}


console.log(uniqueCharacters("anagram"));