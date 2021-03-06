import {
  isAmicableNumber, areAmicableNumbers, properDivisors, sumOfDivisorsOf, amicableSumOfNumbersBelow,
} from '../src';

describe('properDivisors', () => {
  it('returns a list of numbers that perfectly divide into input', () => {
    const result = properDivisors(15);
    expect(result).toEqual([1, 3, 5]);
  });

  it('returns list from 284', () => {
    const result = properDivisors(284);
    expect(result).toEqual([1, 2, 4, 71, 142]);
  });

  it('returns list from 220', () => {
    const result = properDivisors(220);
    expect(result).toEqual([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]);
  });
});

describe('sumOfDivisorsOf', () => {
  it('returns correct sum', () => {
    const result = sumOfDivisorsOf(284);
    expect(result).toEqual(220);
  });

  it('returns correct sum', () => {
    const result = sumOfDivisorsOf(220);
    expect(result).toEqual(284);
  });
});

describe('areAmicableNumbers', () => {
  const result: boolean = areAmicableNumbers(284, 220);
  expect(result).toEqual(true);
});

describe('amicableNumbersSum', () => {
  it('returns correct sum for amicable numbers from 300', () => {
    const sum = isAmicableNumber(284);
    expect(sum).toEqual(504);
  });
});

describe('amicableSum', () => {
  it('returns correct sum for 300', () => {
    const number = amicableSumOfNumbersBelow(300);
    expect(number).toEqual(504);
  });

  it('returns correct sum for 2000', () => {
    const number = amicableSumOfNumbersBelow(2000);
    expect(number).toEqual(2898);
  });

  it('returns correct sum for 3000', () => {
    const number = amicableSumOfNumbersBelow(3000);
    expect(number).toEqual(8442);
  });

  it('returns correct sum for 6000', () => {
    const number = amicableSumOfNumbersBelow(6000);
    expect(number).toEqual(19026);
  });

  it('returns correct sum for 6000', () => {
    const number = amicableSumOfNumbersBelow(10000);
    expect(number).toEqual(31626);
  });
});
