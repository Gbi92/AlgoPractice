function superReducedString(s) {
  if (s === '') {
    return 'Empty String';
  }

  let full;
  let result = s;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      let firstHalf = s.substring(0, i);
      let secondHalf = s.substring(i + 2);
      full = firstHalf + secondHalf;

      return superReducedString(full);
    }
  }

  return result;
}