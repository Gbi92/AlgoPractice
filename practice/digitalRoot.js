function digitalRoot(n) {
  let digitsArray = integerToArray(n);
  let sum = digitsArray.reduce((acc, curr) => acc + curr, 0);
  if (integerToArray(sum).length > 1) {
    return digitalRoot(sum);
  }
  return sum;
}

function integerToArray(n) {
  return n.toString(10).split('').map(Number);
}

console.log(digitalRoot(942));