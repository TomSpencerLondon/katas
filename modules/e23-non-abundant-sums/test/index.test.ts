import {
  isAbundantNumber,
  listOfAbundantNumbers,
  listOfSumsOfAbundantsUpTo,
  sumOfUncreatableItegersByAbundance
} from '../src';

describe('isAbundantNumber', () => {
  it('returns true for 12', () => {
    const result = isAbundantNumber(4);
    expect(result).toEqual(false);
  });

  it('returns true for 12', () => {
    const result = isAbundantNumber(12);
    expect(result).toEqual(true);
  });

  it('returns false for 15', () => {
    const result = isAbundantNumber(15);
    expect(result).toEqual(false);
  });

  it('returns true for 20', () => {
    const result = isAbundantNumber(20);
    expect(result).toEqual(true);
  });

  it('returns false for 21', () => {
    const result = isAbundantNumber(21);
    expect(result).toEqual(false);
  });

  it('returns true for 24', () => {
    const result = isAbundantNumber(24);
    expect(result).toEqual(true);
  });
});
// 12, 18, 20, 24, 30, 36, 40, 42, 48, 54, 56, 60, 66
describe('listOfAbundantNumbers', () => {
  it('returns a list of abundant numbers', () => {
    const result: number[] = listOfAbundantNumbers(60);

    expect(result).toEqual([12, 18, 20, 24, 30, 36, 40, 42, 48, 54, 56, 60]);
  });
});

describe('listOfSumsOfAbundantsUpTo', () => {
  it('returns a list of numbers created from two abundant numbers', () => {
    const input: number = 30;
    const result: number[] = listOfSumsOfAbundantsUpTo(input);
    expect(result).toEqual([24]);
  });
});

describe('sumOfUncreatableItegersByAbundance', () => {
  it('returns sum numbers that cannot be made by abundant numbers', () => {
    const result: number = sumOfUncreatableItegersByAbundance(30);
    expect(result).toEqual(441);
  });
});
