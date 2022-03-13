// JS Coding Question #8: Capitalize All Words In A Sentence

function capitalize(sentence) {
  let myArray = sentence.split(' ');
  let newSentence = [];

  myArray.forEach(word => {
    newSentence.push(word[0].toUpperCase() + word.substring(1))
  });

  return newSentence.join(' ');
}

// Array.map solution

function capitalize2(str) {
  return str
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// Array.reduce solution

function capitalize3(str) {
  return str
      .split(' ')
      .reduce((prev, current) => `${prev} ${current[0].toUpperCase() + current.slice(1)}`, '')
}