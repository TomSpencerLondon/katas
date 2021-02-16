import { cycleCount } from '../src';

describe('cycleCount', () => {
  it('returns the count of the length of the recurring cycle before it repeats', () => {
    const count = cycleCount(1, 7);
    expect(count).toEqual(6);
  });

  it('returns the count of the length of the recurring cycle before it repeats', () => {
    const count = cycleCount(1, 6);
    expect(count).toEqual(1);
  });

  it('returns the count of the length of the recurring cycle before it repeats', () => {
    const count = cycleCount(1, 9);
    expect(count).toEqual(1);
  });

  it('returns the count of the length of the recurring cycle before it repeats', () => {
    const count = cycleCount(1, 13);
    expect(count).toEqual(6);
  });
});
