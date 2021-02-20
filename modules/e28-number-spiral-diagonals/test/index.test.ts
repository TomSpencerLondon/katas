import { spiralFromCenter, spiralFromTopLeft } from '../src';

describe('spiralFromCenter', () => {
  it('returns a spiral of numbers from center to top right for 1', () => {
    const result: number[][] = spiralFromCenter(1, 1);
    expect(result).toEqual([[1]]);
  });

  it('returns a spiral of numbers from center to top right for 9', () => {
    const result: number[][] = spiralFromCenter(3, 3);
    expect(result).toEqual([
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ]);
  });

  it('returns a spiral of numbers from center to top right for 25', () => {
    const result: number[][] = spiralFromCenter(5, 5);
    expect(result).toEqual([
      [21, 22, 23, 24, 25],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });
});

describe('spiralFromTopLeft', () => {
  it('returns a matrix from left to center', () => {
    const result: number[][] = spiralFromTopLeft(1, 1);
    expect(result).toEqual([[1]]);
  });

  it('returns a matrix from left to center', () => {
    const result: number[][] = spiralFromTopLeft(3, 3);
    expect(result).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });
});
