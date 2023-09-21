const assert = require('assert');
const { sortByFrequency } = require('./charFrequencySort');

describe('sortByFrequency', () => {
  it('should return an empty string when given an empty string', () => {
    const inputStr = '';
    const expectedOutput = '';
    const actualOutput = sortByFrequency(inputStr);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should return the same string when given a string with only one character', () => {
    const inputStr = 'a';
    const expectedOutput = 'a';
    const actualOutput = sortByFrequency(inputStr);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should sort the characters in the string by their frequency', () => {
    const inputStr = 'hello world';
    const expectedOutput = 'lllooeh wrd';
    const actualOutput = sortByFrequency(inputStr);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should handle strings with repeated characters', () => {
    const inputStr = 'aaabbbccc';
    const expectedOutput = 'aaabbbccc';
    const actualOutput = sortByFrequency(inputStr);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should handle strings with mixed case characters', () => {
    const inputStr = 'Hello World';
    const expectedOutput = 'lllooeh wrdH';
    const actualOutput = sortByFrequency(inputStr);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should handle strings with special characters', () => {
    const inputStr = 'Hello, World!';
    const expectedOutput = 'lllooeh wrdH,!';
    const actualOutput = sortByFrequency(inputStr);
    assert.strictEqual(actualOutput, expectedOutput);
  });
});