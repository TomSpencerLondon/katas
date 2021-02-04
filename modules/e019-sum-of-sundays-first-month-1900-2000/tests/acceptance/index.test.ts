import { getSundays, getSundaysWithCalendar } from '../../src';

describe('getSundays 1900 - 2000', () => {
  it('should return the correct count', () => {
    const sundays = getSundays(1901, 2000);
    expect(sundays).toBe(171);
  });

  it('should return the correct count', () => {
    const sundays = getSundays(2000, 2002);
    expect(sundays).toBe(5);
  });
});

describe('getSundaysWithCalendar', () => {
  it('returns correct count', () => {
    const sundays = getSundaysWithCalendar(1901, 2000);
    expect(sundays).toBe(171);
  });
});
