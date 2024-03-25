/*
Create a function called threeSum(array) that takes array of integers (array) as an input. 
It finds 3 different elements (they might have the same value, they need to differ in index) in the array for which their sum is the smallest.

Function then returns indexes of these 3 elements (either as an array or list) in any order.
Example cases:

threeSum([1, 2, 3, 4, 5]);
Should return [0, 1, 2], because 1, 2 and 3 adds up to the smallest number and these are their indexes.

threeSum([100, 450, 200, 5]);
Should return [0, 2, 3], because 100, 200 and 5 adds up to the smallest number and these are their indexes.
*/

function threeSum(array) {
  const indexArray = [];
  const increasingArray = array.toSorted((a, b) => a - b);
  let i = 0;
  while (i < 3) {
    indexArray.push(array.indexOf(increasingArray[i]));
    i++;
  }
  return indexArray;
};

console.log(threeSum([100, 450, 200, 5]));
