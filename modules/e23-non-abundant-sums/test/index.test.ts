import { isAbundantNumber, listOfAbundantNumbers } from '../src';

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
    const result: number[] = listOfAbundantNumbers();

    expect(result.slice(0, 11)).toEqual([12, 18, 20, 24, 30, 36, 40, 42, 48, 54, 56]);
  });
});
