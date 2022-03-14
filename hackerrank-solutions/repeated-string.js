function repeatedString(s, n) {
  let countA = 0;
  let countRemainA = 0;
  let repeat = Math.floor(n / s.length);
  let remain = n % s.length;

  for (const el of s) {
    if (el === 'a') {
      countA++;
    }
  }

  for (let i = 0; i < remain; i++) {
    if (s[i] === 'a') {
      countRemainA++;
    }
  }

  return repeat * countA + countRemainA;
}