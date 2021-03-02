import { pandigitalProductSum, pandigitalProductSum2 } from '../src';

describe('pandigitalProductSum', () => {
  it('returns the product of the sum of the numbers which are pandigital', () => {
    const result = pandigitalProductSum();
    expect(result).toEqual(45228);
  });
});

describe('pandigitalProductSum2', () => {
  it('returns the product of the sum of the numbers which are pandigital', () => {
    const result = pandigitalProductSum2();
    expect(result).toEqual(45228);
  });
});
