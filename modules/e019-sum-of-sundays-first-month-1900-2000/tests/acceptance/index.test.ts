import { getSundays } from '../../src';

describe('getSundays 1900 - 2000', () => {
  it('should return the correct count', () => {
    const sundays = getSundays(1901, 2000);
    expect(sundays).toBe(171);
  });
});
