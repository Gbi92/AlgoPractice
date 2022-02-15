function difference(arr1, arr2) {
  let diff = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      diff.push(arr1[i]);
    }
  }

  return diff;
}


console.log(difference([1, 2, 3, 5], [2, 3, 4]));