function countingValleys(steps, path) {
  let seaLevel = 0;
  let landscape = [0];
  let valleyCount = 0;

  for (let i = 0; i < steps; i++) {
    path[i] === 'U' ? seaLevel += 1 : seaLevel -= 1;
    landscape.push(seaLevel);
  }
  
  for (let j = 0; j < landscape.length; j++) {
    if (landscape[j] === 0 && landscape[j+1] < 0) {
      valleyCount += 1;
    }
  }

  return valleyCount;
}


console.log(countingValleys(8, 'UDDDUDUU'));