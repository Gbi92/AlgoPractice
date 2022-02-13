// Create a function named isSymmetric that takes an n×n integer matrix (two dimensional array/list) as a parameter and 
//returns true if the matrix is symmetric or false if it is not.

// Symmetric means it has identical values along its diagonal axis from top-left to bottom-right, as in the first example.

function isSymmetric(matrixArr) {
  for (let i = 0; i < matrixArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (matrixArr[i][j] !== matrixArr[j][i]) {
        return false;
      }
    }
  }
  return true;
}