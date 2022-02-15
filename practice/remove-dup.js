function removeDuplicates(array) {
  let clean = [];

  array.sort((a,b) => a-b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i+1]) {
      clean.push(array[i]);
    }
  }

  return clean;
}


console.log(removeDuplicates([4, 2, 1, 1, 1, 2, 3, 2, 3, 4]));

// Solution B

function removeDuplicates2(arr) {
  let returnarr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!returnarr.includes(arr[i])) {
      returnarr.push(arr[i])
    }
  }
  
  return returnarr
}