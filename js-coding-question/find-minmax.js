// JS Coding Question #5: Find Min and Max

function findMinMax(array) {
  let sorted = array.sort((a, b) => a-b);

  return {
    min: sorted[0],
    max: sorted[sorted.length - 1]
  };
}

// Solutino B

function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  }
}