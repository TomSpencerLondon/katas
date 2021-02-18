import { longestRecurringCycle } from '../src';

describe('longestRecurringCycle', () => {
  it('returns the longest recurring cycle in its decimal fraction part', () => {
    const number = longestRecurringCycle(1000);
    expect(number).toEqual(983);
  });
});
