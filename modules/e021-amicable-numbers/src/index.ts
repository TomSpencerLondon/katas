import { getFactorial } from '../../e020-factorial-digit-sum/src';

type Numbers = {[key: string]: number[]};
const numbers: Numbers = {};

export const properDivisors = (input: number): number[] => {
  const result: number[] = [];
  if (!(input.toString() in numbers)) {
    numbers[input.toString()] = [];
  } else {
    return numbers[input.toString()];
  }
  for (let i = 0; i < (input / 2) + 1; i += 1) {
    if (input % i === 0) {
      result.push(i);
      numbers[input.toString()].push(i);
    }
  }

  return result;
};

// eslint-disable-next-line max-len
export const sumOfDivisorsOf = (input: number): number => properDivisors(input).reduce((number, acc) => number + acc, 0);

// eslint-disable-next-line max-len
export const areAmicableNumbers = (input: number, friend: number): boolean => ((sumOfDivisorsOf(input) === friend) && (sumOfDivisorsOf(friend) === input));

export const findAmicableSum = (input: number): number => {
  const result: number[] = [];
  for (let i = input - 1; i > 0; i -= 1) {
    if (areAmicableNumbers(i, input)) {
      result.push(i);
      result.push(input);
    }
  }

  return result.reduce((number, acc) => number + acc, 0);
};

export const amicableSum = (input: number): number => {
  let result: number = 0;
  for (let i = 0; i < input; i += 1) {
    result += findAmicableSum(i);
  }

  return result;
};
