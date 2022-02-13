function birthdayCakeCandles(candles) {
  let maxHeight = Math.max(...candles);
  let countTallest = 0;

  candles.forEach(el => {
    if (el === maxHeight) {
      countTallest++;
    }
  });

  return countTallest;
}