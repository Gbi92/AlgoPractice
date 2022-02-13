function hourglassSum(arr) {
  let sums = [];
  
  for (let i = 0; i <= arr.length / 2; i++) {
    for (let j = 0; j <= arr.length / 2; j++) {
      let sum = 0;
      sum += arr[i][j];
      sum += arr[i][j + 1];
      sum += arr[i][j + 2];
      sum += arr[i + 1][j + 1];
      sum += arr[i + 2][j];
      sum += arr[i + 2][j + 1];
      sum += arr[i + 2][j + 2];
      sums.push(sum);
    }
  }

  return Math.max(...sums);
}