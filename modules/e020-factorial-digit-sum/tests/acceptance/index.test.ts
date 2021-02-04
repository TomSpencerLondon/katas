import { getFactorialDigitSum } from '../../src';

describe('getSundays 1900 - 2000', () => {
  it('should return the correct count', () => {
    const sundays = getFactorialDigitSum(100);
    expect(sundays).toBe(648);
  });
});
