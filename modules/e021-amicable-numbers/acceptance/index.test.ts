import { amicableSum } from '../src';

describe('amicableNumbers', () => {
  it('returns the sum of proper divisors', () => {
    const number = amicableSum(10000);
    expect(number).toEqual(31626);
  });
});
