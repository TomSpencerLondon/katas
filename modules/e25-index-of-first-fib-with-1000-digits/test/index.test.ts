import { fib } from '../src';

describe('fib', () => {
  it('returns index from first length parameter', () => {
    const result = fib(3);

    expect(result).toEqual(12);
  });
});
