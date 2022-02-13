function funnyString(s) {
  let reversed = '';
  let sDiff = [];
  let rDiff = [];

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  for (let j = 0; j < s.length - 1; j++) {
    sDiff.push(Math.abs(s.charCodeAt(j) - s.charCodeAt(j+1)));
  }

  for (let k = 0; k < reversed.length - 1; k++) {
    rDiff.push(Math.abs(reversed.charCodeAt(k) - reversed.charCodeAt(k+1)));
  }

  for (let l = 0; l < sDiff.length; l++) {
    if (sDiff[l] !== rDiff[l]) return 'Not Funny';
  }

  return 'Funny';

}