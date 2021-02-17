import { longestRecurringCycle } from '../src';

describe('longestRecurringCycle', () => {
  it('returns the longest recurring cycle in its decimal fraction part', () => {
    const number = longestRecurringCycle(10);
    expect(number).toEqual(7);
  });
});
