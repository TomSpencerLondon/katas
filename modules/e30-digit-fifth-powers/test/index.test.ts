import { isSumOfPowersOf } from '../acceptance/index.test';

describe('isSumOfPowersOf', () => {
  it('returns true if digits can be written as sum of powers of n', () => {
    const result = isSumOfPowersOf(1634, 4);
    expect(result).toEqual(true);
  });

  it('returns true if digits can be written as sum of powers of n', () => {
    const result = isSumOfPowersOf(8208, 4);
    expect(result).toEqual(true);
  });

  it('returns true if digits can be written as sum of powers of n', () => {
    const result = isSumOfPowersOf(9474, 4);
    expect(result).toEqual(true);
  });

  it('returns true if digits can be written as sum of powers of n', () => {
    const result = isSumOfPowersOf(400, 4);
    expect(result).toEqual(false);
  });
});
