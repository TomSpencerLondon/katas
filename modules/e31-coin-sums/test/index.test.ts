import { allCoinsFor, makeCombinationsFor } from '../src';

describe('allCoinsFor', () => {
  it('returns the coins a given country', () => {
    expect(allCoinsFor('uk')).toEqual([1, 2, 5, 10, 20, 50, 100, 200]);
  });
});

describe('makeCombinations', () => {
  it('returns one combination', () => {
    const result = makeCombinationsFor(2, 'uk');
    expect(result).toEqual(2);
  });

  it('returns one combination', () => {
    const result = makeCombinationsFor(5, 'uk');
    expect(result).toEqual(4);
  });

  it('returns one combination', () => {
    const result = makeCombinationsFor(10, 'uk');
    expect(result).toEqual(11);
  });

  it('returns one combination', () => {
    const result = makeCombinationsFor(200, 'uk');
    expect(result).toEqual(73682);
  });
});
