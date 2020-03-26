function isPalindrome (s) {
  const argsInString = String(s);

  const stringToLowerCase = argsInString.toLowerCase();

  const removeSpaces = [...stringToLowerCase].filter(char => char !== ' ').join('');

  const reverseString = [...removeSpaces].reverse().join('');

  const isValidPalindrome = reverseString === removeSpaces;

  return isValidPalindrome;
};

module.exports = isPalindrome;
