import { firstFib } from '../src';

describe('fistFib', () => {
  it('returns the index of the first fibonacci number with 1000 digits', () => {
    const result = firstFib(1000);
    expect(result).toEqual(4782);
  });
});
