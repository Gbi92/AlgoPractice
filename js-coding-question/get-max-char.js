// JS Coding Question #9: Get Max Character In A String

function getMaxChar(string) {
  let cleanStr = string.toLowerCase().replace(/[^a-z]/g,''); // regex: /[^\w]/g
  let letters = {};
  let max = 0;
  let maxChar = '';
  
  for (let i = 0; i < cleanStr.length; i++) {
    letters[cleanStr[i]] ? letters[cleanStr[i]] += 1 : letters[cleanStr[i]] = 1;
  }

  Object.keys(letters).forEach(key => {
    if(letters[key] > max) {
      max = letters[key];
      maxChar = key;
    }
  });

  return maxChar;
}

console.log(getMaxChar('prooouguguubbbb@4U&%#987'));