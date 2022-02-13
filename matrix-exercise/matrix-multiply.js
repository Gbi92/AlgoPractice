let matrixOne = [
  [1, 2],
  [3, 4],
];
let matrixTwo = [
  [5, 4],
  [3, 2],
];

function multiplyMatrix(matrix1, matrix2) {
  let multiplied = [];
  let element = 0;
  for (let i = 0; i < matrix1.length; i++) {
    multiplied.push([]);
    for (let k = 0; k < matrix1.length; k++) {
      for (let j = 0; j < matrix1.length; j++) {
        element += matrix1[i][j] * matrix2[j][k];
      }
      multiplied[i].push(element);
      element = 0;
    }
  }
  return multiplied;
}

console.log(multiplyMatrix(matrixOne, matrixTwo));