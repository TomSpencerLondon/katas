import { cycleCount } from '../src';
// 1. change numerator to 10
// 2. Divide new numerator by denominator
// 3. Multiply remainder by 10
// 4. Divide new numerator by denominator
// 5. Multiply remainder by 10
// 6. Stop when new numerator === is equal to original numerator * 10 / denominator
describe('cycleCount', () => {
  it.each([
    [2, 0],
    [3, 1],
    [4, 0],
    [6, 1],
    [7, 6],
  ])('returns 0 for 2', (denominator: number, expected: number) => {
    expect(cycleCount(denominator)).toEqual(expected);
  });
});
