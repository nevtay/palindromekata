const isPalindrome = require('./index.js');

describe('palindrome function', () => {
  it('should return a value that isn\'t undefined or null', () => {
    const anything = isPalindrome('soba');
    expect(anything).toEqual(expect.anything());
  });
  it('should return the string if said string is a palindrome', () => {
    const stringType = isPalindrome('10001');
    expect(stringType).toEqual('10001');
  });
  it('should return the string if said string is a palindrome AND has spaces', () => {
    const palindromeSentence = isPalindrome('Murder for a jar of red rum');
    expect(palindromeSentence).toEqual('Murder for a jar of red rum');
  });
});
