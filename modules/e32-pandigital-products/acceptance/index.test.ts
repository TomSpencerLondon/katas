import { pandigitalProductSum } from '../src';

describe('pandigitalProductSum', () => {
  it('returns the product of the sum of the numbers which are pandigital', () => {
    const result = pandigitalProductSum();
    expect(result).toEqual(123123);
  });
});
