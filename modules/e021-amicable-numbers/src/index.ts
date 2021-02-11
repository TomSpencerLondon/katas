import { getFactorial } from '../../e020-factorial-digit-sum/src';

export const properDivisors = (input: number): number[] => {
  const result: number[] = [];
  for (let i = 0; i <= Math.sqrt(input); i += 1) {
    if (input % i === 0) {
      result.push(i);
      result.push(input / i);
    }
  }

  return result.filter((n) => n !== input);
};

// eslint-disable-next-line max-len
export const sumOfDivisorsOf = (input: number): number => properDivisors(input).reduce((number, acc) => number + acc, 0);

export const isAmicableNumber = (input: number): boolean => {
  const sumOfDivisorsOfInput = sumOfDivisorsOf(input);
  return sumOfDivisorsOf(sumOfDivisorsOfInput) === input && sumOfDivisorsOfInput !== input;
};

export const amicableSumOfNumbersBelow = (input: number): number => {
  let result: number = 0;
  for (let i = 0; i < input; i += 1) {
    if (isAmicableNumber(i)) {
      result += i;
    }
  }

  return result;
};
