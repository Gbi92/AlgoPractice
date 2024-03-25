/*
Create a function called secondLargestPerimeter that

takes an array of triangles (triangles) as an input, (a triangle is represented by an array with 3 integers which are the length of its sides)
returns the index of the triangle which has the second largest perimeter
should return -1 if the size of the array is less than 2
note: you don't have to create a Triangle class and you might assume that all triangles are valid

Example cases:

secondLargestPerimeter([[2, 3, 4], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);
Should return 2, because the [7, 8, 9] triangle has the second largest perimeter

secondLargestPerimeter([[2, 3, 4], [4, 5, 6]]);
Should return 0, because the [2, 3, 4] triangle has the second largest perimeter

secondLargestPerimeter([]);
Should return -1
*/

function secondLargestPerimeter(triangles) {
  if (triangles.length < 2) {
    return -1;
  }
  const perimeterIndex = {};
  const perimeters = [];
  triangles.forEach((el, i) => {
    const perimeter = el.reduce((acc, curr) => acc+curr, 0);
    perimeterIndex[perimeter] = i;
    perimeters.push(perimeter);
  });
  perimeters.sort((a, b) => a - b);
  const secondLargestPerimeter = perimeters[perimeters.length - 2];
  return perimeterIndex[secondLargestPerimeter];
}

console.log(secondLargestPerimeter([[2, 3, 4], [7, 8, 9], [13, 14, 15], [4, 5, 6], [10, 11, 12]]));
