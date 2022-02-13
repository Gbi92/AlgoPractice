//Create a function transposeMatrix that takes a matrix as a parameter and returns the transpose of that matrix. 
//The original matrix should remain the same.

function transposeMatrix(matrix) {
  let transposed = [];
  for (let k = 0; k < matrix[0].length; k++) {
    transposed.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      transposed[j].push(matrix[i][j]);
    }
  }
  return transposed;
}

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let matrix2 = [
  [5, 9, 3, 7],
  [3, 2, 1, 8]
];