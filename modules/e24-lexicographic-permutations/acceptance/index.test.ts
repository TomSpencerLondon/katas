import { millionthLexicographic } from '../src';

// Brute Force:
// 1. Function that creates permutations
// 2. Sort to lexicographic order - smallest to largest
// 3. Return an index of the permutation
describe('millionthLexicographic', () => {
  it('returns millionth lexicographic permutation of 0,1,2,3,4,5,6,7,8,9', () => {
    const numbers: string = '0123456789';
    const index: number = 1000000;
    const number: string = millionthLexicographic(numbers, index);
    expect(number).toEqual('2783915460');
  });
});
