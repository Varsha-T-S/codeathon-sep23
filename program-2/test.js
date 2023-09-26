const assert = require('assert');
const findMaxProfit = require('./index');

describe('findMaxProfit', () => {
  it('should return the best days to buy and sell stocks and the maximum profit', () => {
    const prices = [100, 180, 260, 310, 40, 535, 695];
    const expectedOutput = 'Buy on day 5 at price 40\nSell on day 7 at price 695\nMax profit: 655';
    const actualOutput = findMaxProfit(prices);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should return -1 if no profit can be made', () => {
    const prices = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expectedOutput = -1;
    const actualOutput = findMaxProfit(prices);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should return the best days to buy and sell stocks and the maximum profit for an array with two prices', () => {
    const prices = [10, 20];
    const expectedOutput = 'Buy on day 1 at price 10\nSell on day 2 at price 20\nMax profit: 10';
    const actualOutput = findMaxProfit(prices);
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('should return -1 if the input array is empty', () => {
    const prices = [];
    const expectedOutput = -1;
    const actualOutput = findMaxProfit(prices);
    assert.strictEqual(actualOutput, expectedOutput);
  });
});