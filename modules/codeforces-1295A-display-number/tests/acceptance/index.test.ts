// Example
// inputCopy
// 2
// 3
// 4
// outputCopy
// 7
// 11

import { displayNumber } from '../../src';

describe('displayNumber', () => {
  it('returns correct digits for numbers', () => {
    const testCases: number[] = [3, 4];
    const testCaseCount: number = 2;
    const result = displayNumber(testCaseCount, testCases);
    expect(result).toEqual([7, 11]);
  });

  it('returns correct digits for numbers', () => {
    const testCases: number[] = [12, 15];
    const testCaseCount: number = 2;
    const result = displayNumber(testCaseCount, testCases);
    expect(result).toEqual([111111, 7111111]);
  });

  it('returns correct digits for numbers', () => {
    const testCases: number[] = [16, 17];
    const testCaseCount: number = 2;
    const result = displayNumber(testCaseCount, testCases);
    expect(result).toEqual([11111111, 71111111]);
  });
});
