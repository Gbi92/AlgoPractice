/*
Create a function that takes a string(text), looks for HUF values in it and replaces them to EUR values. 
The exchange rate should be 300 HUF for 1 EUR for simplicity. Please ask the mentor what kind of string to number conversion can you use.

Example cases:

moneyExchange("Apples cost 300 HUF in my city.");
Should return "Apples cost 1 EUR in my city.".
*/

function moneyExchangeHUFtoEUR(text) {
  const exchangeRate = 300;
  const textArray = text.split(" ");
  const amount = textArray.find(el => !isNaN(+el));
  const eur = (amount/exchangeRate).toFixed(2);
  return textArray.join(' ').replace(amount, eur).replace('HUF', 'EUR');
}

console.log(moneyExchangeHUFtoEUR("Apples cost 350 HUF in my city."));
