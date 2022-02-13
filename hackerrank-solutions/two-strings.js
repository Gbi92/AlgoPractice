function twoStrings(s1, s2) {
  let answer = 'NO';
  let charObj = {};
  for (let i =0; i < s1.length; i++) {
      charObj[s1[i]] = true;
  }
  for (let j = 0; j < s2.length; j++) {
      if (charObj[s2[j]]) {
          answer = 'YES';
          return answer; 
      }
  }
  return answer;
}