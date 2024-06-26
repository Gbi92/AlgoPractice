/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
*/

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);


/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by 
both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

//my solution:

for (let number = 1; number <= 100; number ++) {
  if (number % 3 == 0 && number % 5 == 0) {
  	console.log('FizzBuzz');
  } else if (number % 5 == 0) {
  	console.log('Buzz');
  } else if (number % 3 == 0) {
    console.log('Fizz'); 
  } else {
  	console.log(number);
  }
}

//book's solution:

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to 
separate lines. At each position of the grid there is either a space or a "#" character. The characters 
should form a chessboard. When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, outputting a grid of the given width and height.
*/

//my solution:
let board = '';
let size = 8;

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
    	if ((i + j) % 2 == 0) {
        	board += ' ';
        } else {
        	board += '#';
        }
    }
  board += '\n';
}

console.log(board);

//same as book's solution :)