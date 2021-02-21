import { integerCombinations } from '../src';

describe('integerCombinations', () => {
  it('returns sequence of distinct terms for integers within a range', () => {
    const result = integerCombinations(5, 5);

    expect(result).toEqual(15);
  });

  it('returns sequence of distinct terms for integers within a range', () => {
    const result = integerCombinations(100, 100);

    expect(result).toEqual(9183);
  });
});
