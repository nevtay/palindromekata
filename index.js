function isPalindrome (s) {
  const convertToString = String(s);
  const convertToLowerCase = convertToString.toLowerCase();
  const removeSpaces = [...convertToLowerCase].filter(char => char !== ' ').join('');
  const reverseString = [...removeSpaces].reverse().join('');
  const palindromeConfirmed = reverseString === removeSpaces;
  return !!(palindromeConfirmed || s === '');
};

module.exports = isPalindrome;
