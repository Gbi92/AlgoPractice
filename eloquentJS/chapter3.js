/*
Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now. 
Write a function min that takes two arguments and returns their minimum.
*/

function min(a, b) {
  if (a < b) return a;
  else return b;
}

/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd 
by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

//my solution:

function isEven(n) {
if (n === 0) {
      return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
      return isEven(n+2);       
  } else {
    return isEven(n-2);
  }
}

//book's solution:

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

/*
Bean counting

You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters there are in the string.
Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

//my solution:

function countBs(str) {
  let count = 0;
  for(let i=0; i<str.length; i++) {
      if(str[i] === 'B') {
        count++;
      }
  }
  return count;
}

function countChar(str, char) {
  let count = 0;
  for(let i=0; i<str.length; i++) {
      if(str[i] === char) {
        count++;
      }
  }
  return count;
}

//book's solution:

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
