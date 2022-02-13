function hackerrankInString(s) {
  let hack = 'hackerrank'.split('');
  let j = 0;

  if (s.length < hack.length) {
    return 'NO';
  }

  for (let i = 0; i < s.length; i++) {
    if(s[i] === hack[j]) {
      j++;
    }
  }

  return j === hack.length ? 'YES' : 'NO';
}