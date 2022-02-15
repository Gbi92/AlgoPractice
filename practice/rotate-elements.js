function rotateElements(arr, n) {
  let count = 0;

  while (count < n) {
    let temp = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      arr[i-1] = arr[i];
    } 

    arr[arr.length-1] = temp;
    
    count++;
  }

  return arr;
}


console.log(rotateElements([1, 2, 3], 2));