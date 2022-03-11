/*
Create a function called checkStringsLengths(words, lengths), which accepts:

strings, which is an array of strings
lengths, which is an array of integers
This function is supposed to check whether there is at least one string of fitting length for each of the lengths in lengths array.

Return true or false depending on this.
Example 1
checkStringsLengths(
    ["Word", "Sea", "Golden pearls", "Bookworm"],
    [3, 4, 8]
)
returns true, as there is "Sea" for length 3, "Word" for length 4 and "Bookworm" for length 8.

Example 2
checkStringsLengths(
    ["Word", "Sea", "Golden pearls", "Bookworm"],
    [3, 8, 1]
)
returns false as there is no string of length 1.
*/

function checkStringsLengths(words, lengths) {
  let wordsLengths = [];
  
  words.forEach(word => {
    wordsLengths.push(word.length);
  });

  for (let i = 0; i < lengths.length; i++) {
    if (!wordsLengths.includes(lengths[i])) {
      return false;
    }
  }
  return true;
}

console.log(checkStringsLengths(["Word", "Sea", "Golden pearls", "Bookworm"], [3, 8, 4]));