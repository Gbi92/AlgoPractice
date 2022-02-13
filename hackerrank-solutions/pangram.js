function pangrams(s) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let lowerStr = s.toLowerCase();

  for (let i = 0; i < letters.length; i++) {
    if (!lowerStr.includes(letters[i])) {
      return 'not pangram';
    }
  }

  return 'pangram';
}