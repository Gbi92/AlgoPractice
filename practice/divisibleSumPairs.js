/*
Create a function called divisibleSumPairs that

takes an array of integers (array) and an integer (n) as an input,
returns how many (i,j) pairs exist where i < j and n is divisible by array[i] + array[j]
Example cases:

divisibleSumPairs([1, 2, 3, 4, 5], 10);
Should return 2, because 10 is divisible by the sum of both [1, 4] and [2, 3]

divisibleSumPairs([1, 2, 3, 4, 5], 4);
Should return 1, because 4 is divisible only by the sum of [1, 3]

divisibleSumPairs([], 1);
Should return 0, because there are no pairs where 1 is divisible by the sum of any two elements
*/

function divisibleSumPairs(array, n) {
  let divisiblePairsCount = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((n / (array[i] + array[j])) % 1 === 0) {
        divisiblePairsCount += 1;
      }
    }
  }
  return divisiblePairsCount;
}

console.log(divisibleSumPairs([1, 2, 3, 4, 5], 10));
