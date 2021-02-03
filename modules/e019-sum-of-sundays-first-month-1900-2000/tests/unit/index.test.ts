import {
  getSundays, isLeapYear, isStartsOnSunday, yearOrLeapYear,
} from '../../src';

// A leap year occurs on any year evenly divisible by 4,
// but not on a century unless it is divisible by 400

describe('yearOrLeapYear', () => {
  it('returns true for 1904', () => {
    const result = isLeapYear(1904);
    expect(result).toBe(true);
  });

  it('returns false for 1906', () => {
    const result = isLeapYear(1906);
    expect(result).toBe(false);
  });

  it('returns false for 1700', () => {
    const result = isLeapYear(1700);
    expect(result).toBe(false);
  });

  it('returns true for 1600', () => {
    const result = isLeapYear(1600);
    expect(result).toBe(true);
  });

  it('returns false for 1975', () => {
    const result = isLeapYear(1975);
    expect(result).toBe(false);
  });

  it('returns false for 1978', () => {
    const result = isLeapYear(1978);
    expect(result).toBe(false);
  });

  it('returns true for 2004', () => {
    const result = isLeapYear(2004);
    expect(result).toBe(true);
  });
});

describe('yearOrLeapYear', () => {
  it('returns year object 1700', () => {
    const { february } = yearOrLeapYear(1700);
    expect(february).toBe(0);
  });

  it('returns year object 2004', () => {
    const { february } = yearOrLeapYear(2004);
    expect(february).toBe(1);
  });
});

describe('getSundays', () => {
  it('returns number of sundays on first of months for two year period', () => {
    const sundays = getSundays(1901, 1902);
    expect(sundays).toBe(3);
  });

  it('returns number of sundays on first of months for period 1901 - 1903', () => {
    const sundays = getSundays(1901, 1903);
    expect(sundays).toBe(6);
  });

  it('returns number of sundays on first of months for period 1901 - 1904', () => {
    const sundays = getSundays(1901, 1904);
    expect(sundays).toBe(7);
  });

  it('returns number of sundays on first of months for period 1901 - 1998', () => {
    const sundays = getSundays(1901, 1998);
    expect(sundays).toBe(169);
  });

  it('returns number of sundays on first of months for period 1901 - 1996', () => {
    const sundays = getSundays(1901, 1996);
    expect(sundays).toBe(165);
  });
});

describe('isStartsOnSunday', () => {
  it('returns false for January 1901', () => {
    const isSunday = isStartsOnSunday('january', 1901);
    expect(isSunday).toBe(false);
  });

  it('returns false for September 1901', () => {
    const isSunday = isStartsOnSunday('september', 1901);
    expect(isSunday).toBe(true);
  });

  it('returns true for July 1901', () => {
    const isSunday = isStartsOnSunday('july', 1901);
    expect(isSunday).toBe(false);
  });

  it('returns false for June 1902', () => {
    const isSunday = isStartsOnSunday('june', 1902);
    expect(isSunday).toBe(true);
  });

  it('returns false for May 1904', () => {
    const isSunday = isStartsOnSunday('may', 1904);
    expect(isSunday).toBe(true);
  });
});
