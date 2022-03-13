// JS Coding Question #10: Is Balanced Parentheses
// A string of parentheses is balanced if each left parenthesis has a matching right parenthesis and the matched pairs are well nested.

// input (()()((())()((()()(())))))

// Solution A

function isBalanced(str) {
  const stack = [];

  for (let char of str) {
    if ( char === '(' ) {
      stack.push(char);
    } else if ( stack.pop() !== '(' ) {
      return false;
    }
  }

  return stack.length === 0;
}

// Solution B

function isBalanced(str) {
  let count = 0;
  
  for (let char of str)
  {
      if (char === '(') { count++; }
      else if (char === ')')
      {
          if (count === 0) { return false; }
          count--;
      }
  }

  return count === 0;
}