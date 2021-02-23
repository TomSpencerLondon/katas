import { waysOfChangeFor } from '../src';

describe('waysOfChangeFor', () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 2],
  ])('returns number of ways for 1', (amount: number, expected: number) => {
    const result = waysOfChangeFor(amount);
    expect(result).toEqual(expected);
  });
});
