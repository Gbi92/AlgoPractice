function bouncer(arr) {
  let clean = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      clean.push(arr[i]);
    }
  }

  return clean;
}