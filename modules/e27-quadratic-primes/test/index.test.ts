import { numberOfPrimes } from '../src';

describe('numberOfPrimes', () => {
  it('returns count of primes for coefficients a and b', () => {
    const count = numberOfPrimes(1, 41);
    expect(count).toEqual(40);
  });
});
