function getIndexToIns(arr, num) {
  if (num < 0) {
    return 0;
  }
  if (Math.max(...arr) < num) {
    return arr.length;
  }

  let sorted = arr.sort((a,b) => a-b);

  for(let i =0; i < sorted.length; i++) {
    if(sorted[i] >= num) {
      return i;
    }
  }
}
