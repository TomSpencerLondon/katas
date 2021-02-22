import { sumOfPowers } from '../src';

describe('sumOfPowers', () => {
  it('returns the sum of all the numbers that can be written as sum of fourth powers of their digits', () => {
    const result = sumOfPowers(4);
    expect(result).toEqual(19316);
  });

  it('returns the sum of all the numbers that can be written as sum of fifth powers of their digits', () => {
    const result = sumOfPowers(5);
    expect(result).toEqual(443839);
  });
});
