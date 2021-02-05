import { getFactorialDigitSum } from '../../src';

describe('getFactorialDigitSum for 100', () => {
  it('should return the correct count', () => {
    const sundays = getFactorialDigitSum(100);
    expect(sundays).toBe(648);
  });
});
