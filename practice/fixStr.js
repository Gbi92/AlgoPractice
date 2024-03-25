/* ## 31. Fix String
Create a function called fixString that
- takes a string as an input where all the vowels are repeated a few times,
- returns a string where the duplicate vowels are removed,
- you are not allowed to use built-in functions like replace()

Example cases:
fixString("heellooo");

Should return "hello"

fixString("hiiiiiiii");

Should return "hi"

fixString("");

Should return ""
*/

function fixString(string) {
  const vowels = 'aeiou';
  const fixedString = [];
  let prevEl = '';
  string.split('').forEach(el => {
    if (!vowels.includes(el)) {
      fixedString.push(el);
    } else if (prevEl !== el) {
      fixedString.push(el);
    }
    prevEl = el;
  });
  return fixedString.join('');
}

console.log(fixString("heellooo"));
