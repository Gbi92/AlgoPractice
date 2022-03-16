/*
strArr will be an array consisting of the locations of 8 Queens on a 8x8 chess board.
The strArr will be the following: ["(x,y)", "(x,y)",...]
Determine if all of the queens are placed in a way where none of them are attacking each other.
If true --> true, if false --> return the first queen in the list that is attacking another.
*/

function eightQueens(strArr) {
  
}

const example = ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]; //true
const example2 = ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]; //(2,1)
const example3 = ["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"]; // (5,3)