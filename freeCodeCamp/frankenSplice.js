function frankenSplice(arr1, arr2, n) {
  let arr0 = arr2.slice();
  arr0.splice(n, 0, ...arr1);
  return arr0;
}