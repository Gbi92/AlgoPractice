function marsExploration(s) {
  let countAltered = 0;
  let sosArr = [];
  
  for(let i=0; i < s.length; i+=3) {
    sosArr.push(s.substring(i, i+3));
  }

  sosArr.forEach(el => {
    if (el[0] !== 'S') {
      countAltered += 1;
    }
    if (el[1] !== 'O') {
      countAltered += 1;
    }
    if (el[2] !== 'S') {
      countAltered += 1;
    }
  })
  
  return countAltered;
}