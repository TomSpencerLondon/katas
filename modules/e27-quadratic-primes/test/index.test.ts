import { isPrime, numberOfPrimes } from '../src';

describe('numberOfPrimes', () => {
  it('returns count of primes for coefficients a and b', () => {
    const count = numberOfPrimes(-79, 1601);
    expect(count).toEqual(80);
  });

  it('returns count of primes for coefficients a and b', () => {
    const count = numberOfPrimes(1, 41);
    expect(count).toEqual(40);
  });
});

describe('isPrime', () => {
  it('tells whether a number is prime', () => {
    const result = isPrime(17);
    expect(result).toEqual(true);
  });

  it('returns false for non prime number', () => {
    const result = isPrime(42);
    expect(result).toEqual(false);
  });
});
