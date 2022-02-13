function diagonalDifference(arr) {
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        leftToRightSum += arr[i][j];
      }
    }
    for (let k = arr.length - 1; k >= 0; k--) {
      if (k === arr.length - 1 - i) {
        rightToLeftSum += arr[i][k];
      }
    }
  }
  return Math.abs(leftToRightSum - rightToLeftSum);
}