import { integerCombinations } from '../src';

describe('integerCombinations', () => {
  it('returns sequence of distinct terms for integers within a range', () => {
    const result = integerCombinations(5, 5);

    expect(result).toEqual(15);
  });
});
