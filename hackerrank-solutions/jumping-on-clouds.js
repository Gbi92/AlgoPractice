function jumpingOnClouds(c) {
  let cloudNum = 0;
  let jumps = 0;
  
  while (cloudNum < c.length - 1) {
    if (c[cloudNum + 2] === 0) {
      cloudNum += 2;
    } else {
      cloudNum += 1;
    }
    jumps++;
  }

  return jumps;
}