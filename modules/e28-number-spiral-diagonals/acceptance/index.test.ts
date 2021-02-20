import { numberSpiralDiagonals } from '../src';

describe('numberSpiralDiagonals', () => {
  it('returns sum of diagonals on a spiral', () => {
    const result = numberSpiralDiagonals(1001, 1001);
    expect(result).toEqual(6_69_171_001);
  });
});
