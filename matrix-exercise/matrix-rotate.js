//Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) as parameter and 
//returns a matrix which elements are rotated 90 degrees clockwise.

let testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

function rotateMatrix(matrix) {
  let rotatedMatrix = [];
  for (let i= 0; i < matrix.length; i++) {
    rotatedMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      rotatedMatrix[i].unshift(matrix[j][i]);
    }
  }
  return rotatedMatrix;
}

console.log(rotateMatrix(testMatrix));