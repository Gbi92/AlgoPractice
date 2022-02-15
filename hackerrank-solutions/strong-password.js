function minimumNumber(n, password) {
  const hasDigit = /.*[0-9].*/;
  const hasLowerCase = /.*[a-z].*/;
  const hasUpperCase = /.*[A-Z].*/;
  const hasSpecial = /.*[!@#$%^&*()\-+].*/;
  let countAddedChars = 0;

  if (!hasDigit.test(password)) {
    countAddedChars++;
  }

  if (!hasLowerCase.test(password)) {
    countAddedChars++;
  }

  if (!hasUpperCase.test(password)) {
    countAddedChars++;
  }

  if (!hasSpecial.test(password)) {
    countAddedChars++;
  }

  if (n + countAddedChars < 6) {
    countAddedChars += 6 - (n + countAddedChars);
  }

  return countAddedChars;
}

// solution B:

function minimumNumber(n, password) {
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  
  let nn = 0, l = 0, u = 0, s = 0;

  password.split('').forEach(x => {
      if (numbers.indexOf(x) !== -1)
          nn = 1;
      if (lower_case.indexOf(x) !== -1)
          l = 1;
      if (upper_case.indexOf(x) !== -1)
          u = 1;
      if (special_characters.indexOf(x) !== -1)
          s = 1;
  });

  if(password.length > 6) {
      return 4 - nn -l -u-s;
  } else {
      if( (password.length +  (4 - nn -l -u-s)) > 6)
        return (4 - nn -l -u-s)  ;
      else
      return 6 - password.length; 
  }

}