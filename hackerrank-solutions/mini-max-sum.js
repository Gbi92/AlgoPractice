function miniMaxSum(arr) {
  let sumArr = [];
  //let sum = arr.reduce((prev,curr) => prev + curr); 

  // sum-ot szamolni reduce nelkul
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  for(let i = 0; i < arr.length; i++) {
      sumArr.push(sum - arr[i]);
  }
  
  let min = Math.min(...sumArr);
  let max = Math.max(...sumArr);
  
  console.log(min, max);
}

miniMaxSum([1, 3, 5, 7, 9]);