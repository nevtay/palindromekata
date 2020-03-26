const isPalindrome = require('./index.js');

describe('palindrome function', () => {
  it('should return a value that isn\'t undefined or null', () => {
    const anything = isPalindrome('soba');
    expect(anything).toEqual(expect.anything());
  });

  it('should return true if argument is a valid palindrome', () => {
    const validrome = isPalindrome('10001');
    expect(validrome).toBeTruthy();
  });

  it('should work if argument is a valid whole number', () => {
    const number = isPalindrome(10001);
    const numberTwo = isPalindrome(-23);
    expect(number).toBeTruthy();
    expect(numberTwo).toBeFalsy();
  });

  it('should return false if argument is an invalid palindrome', () => {
    const invalidrome = isPalindrome('🚹💕🚺 = 🚼');
    expect(invalidrome).toBeFalsy();
  });

  it('should return true if argument is empty', () => {
    const emptyPalindrome = isPalindrome('');
    expect(emptyPalindrome).toBeTruthy();
  });

  it('should return true if argument is a valid palindrome AND has spaces', () => {
    const palindromeSentence = isPalindrome('murder for a jar of red rum');
    expect(palindromeSentence).toBeTruthy();
  });

  it('should return true if argument is a valid palindrome but has mixed casing', () => {
    const palindromeSentence = isPalindrome('MuRder FoR a JaR oF rEd RUM');
    expect(palindromeSentence).toBeTruthy();
  });

  it('should return true if argument is single character', () => {
    const oneCharPalindrome = isPalindrome('a');
    const oneCharPalindromeTwo = isPalindrome('b');
    expect(oneCharPalindrome).toBeTruthy();
    expect(oneCharPalindromeTwo).toBeTruthy();
  });

  it('should return true if argument is a single space', () => {
    const oneSpacePalindrome = isPalindrome(' ');
    expect(oneSpacePalindrome).toBeTruthy();
  });

  it('should return true if argument is made of only a single character', () => {
    const oneSpacePalindrome = isPalindrome('🥱 🥱🥱 🥱🥱🥱 🥱🥱🥱🥱 🥱🥱');
    expect(oneSpacePalindrome).toBeTruthy();
  });

  it('should return true if argument is a valid palindrome from a non-english language', () => {
    const oneSpacePalindrome = isPalindrome('莫妮卡郑 郑卡妮莫');
    expect(oneSpacePalindrome).toBeTruthy();
  });
});
