function minimumBribese(q) {
  const maxBribeIndex = 3;
  let numberOfBribes = 0;
  for (let i = q.length-1; i >= 0; i--) {
    if(i < q[i] - maxBribeIndex) {
      return 'Too chaotic';
    }
    for (let j = i - 1; j >= Math.max(0, q[i] - 2); j--) {
      if (q[j] > q[i]) {
        numberOfBribes++;
      }
    }
  }
  return numberOfBribes;
}

console.log(minimumBribes([2, 5, 1, 3, 4]));
