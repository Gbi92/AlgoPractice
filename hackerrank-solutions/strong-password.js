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