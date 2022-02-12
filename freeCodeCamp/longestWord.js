function findLongestWordLength(str) {
  let lengthCollect = [];
  str.split(' ').forEach(word => {
    lengthCollect.push(word.length);
  });

  return Math.max(...lengthCollect);
}