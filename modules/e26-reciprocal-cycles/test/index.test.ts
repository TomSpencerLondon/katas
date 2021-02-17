import { cycleCount } from '../src';
// 1. change numerator to 10
// 2. Divide new numerator by denominator
// 3. Multiply remainder by 10
// 4. Divide new numerator by denominator
// 5. Multiply remainder by 10
// 6. Stop when new numerator === is equal to original numerator * 10 / denominator
describe('cycleCount', () => {
  it('returns 6 for 7', () => {
    const result = cycleCount(1, 7);
    expect(result).toEqual(6);
  });

  it('returns 18 for 19', () => {
    const result = cycleCount(1, 19);
    expect(result).toEqual(18);
  });

  it('returns 9999 for 999', () => {
    const result = cycleCount(1, 983);
    expect(result).toEqual(982);
  });
});
