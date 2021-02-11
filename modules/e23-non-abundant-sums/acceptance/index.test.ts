// Find the sum of all the positive integers which
// cannot be written as the sum of two abundant numbers.
// 1. proper divisors method
// 2. check for abundant method ie check proper divisors > number
// 3. Create list of abundants from proper divisors that don't go above 28123
// 2. Filter numbers below 28, 123 to check for abundants
// 3. check
// check each number below 28, 123 to see if
import { sumOfUncreatableItegersByAbundance } from '../src';

describe('sumOfUncreatableItegersByAbundance', () => {
  it('returns the sum of all positive numbers which cannot be written as the sum of two abundant numbers', () => {
    const sum: number = sumOfUncreatableItegersByAbundance(28123);
    expect(sum).toEqual(5000);
  });
});
