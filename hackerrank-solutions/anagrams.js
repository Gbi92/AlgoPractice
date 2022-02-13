function makeAnagram(a, b) {
  let charA = {};
  let charB = {};
  let sameCount = 0;

  a.split('').forEach(item => {
    charA[item] ? charA[item]++ : charA[item] = 1;
  });

  b.split('').forEach(item => {
    charB[item] ? charB[item]++ : charB[item] = 1;
  });

  Object.keys(charA).forEach(key => {
    if (charB[key]) {
      sameCount += Math.min(charA[key], charB[key]);
    }
  })

  return (a.length - sameCount) + (b.length - sameCount);
}
