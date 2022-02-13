function rotateLeft(d, arr) {
  while (d > 0) {
    arr.push(arr.shift());
    d--;
  }

  return arr;
}