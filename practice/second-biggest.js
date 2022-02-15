function secondBiggest(arr) {
  arr.sort((a,b) => b-a);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      return arr[i];
    }
  }
}


console.log(secondBiggest([5, 1, 2, 7, 9, 2, 4]));