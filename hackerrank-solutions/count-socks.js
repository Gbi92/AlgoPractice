function sockMerchant(n, ar) {
  let pairs = {};
  let count = 0;

  ar.forEach(num => {
    pairs[num] ? pairs[num] += 1 : pairs[num] = 1;
  });

  Object.keys(pairs).forEach(key => {
    if (pairs[key] % 2 === 0) {
      count += pairs[key] / 2;
    } else {
      count += Math.floor(pairs[key] / 2);
    }
  });

  return count;
}