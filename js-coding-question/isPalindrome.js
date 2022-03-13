// JS Coding Question #3: Is Palindrome
// Palindrome happens when a string forms the same word when it is reversed.

function isPalindrome(string) {
  let reversedStr = string.split('').reverse().join('');

  return reversedStr === string;
}

// Other solution:

function isPalindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

//The every() method tests whether all elements in the array pass the test implemented by 
//the provided function. It returns a Boolean value.