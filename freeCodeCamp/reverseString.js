function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

//Other solution:

function reverseString2(str) {
  return str.split("").reverse().join("");
}

//Other solution:

function reverseString3(str) {
  return str.split('').reduce((prev, curr) => curr + prev, '')
}
