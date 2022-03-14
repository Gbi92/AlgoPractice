/*
The sum of a range

Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.

As a bonus assignment, modify your range function to take an optional third argument that indicates
the “step” value used when building the array. If no step is given, the elements go up by increments of 
one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]
*/

function range(a,b, step) {
  let arr = [];
  if(a > b) {
      while (a >= b) {
          arr.push(a);
          if (step) {
              a += step;    
          } else {
              a--;
          }
      }
  } else {
      while (a <= b) {
          arr.push(a);
          if (step) {
              a += step;    
          } else {
              a++;
          }
      }
  }
  return arr;
}

//book's solution

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}


//Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

function sum(numbers) {
  let total = 0;
  numbers.forEach(num => {
      total += num;
  });
  return total;
}

/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as 
argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
  let revArr = [];
  array.forEach(el => {
      revArr.unshift(el);
  });
  return revArr;
}

function reverseArrayInPlace(arr) {
  for(let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

//book's solution

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}