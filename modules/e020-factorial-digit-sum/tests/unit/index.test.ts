import { getFactorial } from '../../src';

describe('getFactorial', () => {
  it('returns factorial for 1', () => {
    const result = getFactorial(1);
    expect(result).toBe(1);
  });

  it('returns factorial for 2', () => {
    const result = getFactorial(2);
    expect(result).toBe(2);
  });

  it('returns factorial for 3', () => {
    const result = getFactorial(3);
    expect(result).toBe(6);
  });

  it('returns factorial for 3', () => {
    const result = getFactorial(100);
    expect(result).toEqual(93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n);
  });
});
