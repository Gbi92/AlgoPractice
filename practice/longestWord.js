function LongestWord(sen) {
  let regex = /[^A-Za-z]/;
  let wordArr = sen.split(regex);
  let longest = 0;
  let longestWord = '';

  wordArr.forEach(word => {
    if(longest < word.length) {
      longest = word.length;
      longestWord = word;
    }
  })
  
  return longestWord;
}

/*
Examples:
Input: "fun&!! time" 
Output: time

Input: "I love dogs" 
Output: love
*/