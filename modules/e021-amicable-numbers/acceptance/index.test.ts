import { amicableSumOfNumbersBelow } from '../src';

describe('amicableNumbers', () => {
  it('returns the sum of proper divisors', () => {
    const number = amicableSumOfNumbersBelow(10000);
    expect(number).toEqual(31626);
  });
});
