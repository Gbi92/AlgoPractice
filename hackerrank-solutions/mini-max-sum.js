function miniMaxSum(arr) {
  let sumArr = [];
  let sum = arr.reduce((prev,curr) => prev + curr); //reduced atirni for ciklussal
  
  for(let i = 0; i < arr.length; i++) {
      sumArr.push(sum - arr[i]);
  }
  
  let min = Math.min(...sumArr);
  let max = Math.max(...sumArr);
  
  console.log(min, max);
}