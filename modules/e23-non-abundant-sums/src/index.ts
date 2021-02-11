export const properDivisors = (input: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i <= Math.sqrt(input); i += 1) {
    if (input % i === 0) {
      result.push(i);
      result.push(input / i);
    }
  }

  const final = new Set(result.filter((n) => n !== input));

  return Array.from(final);
};

// eslint-disable-next-line max-len
export const sumOfDivisorsOf = (input: number): number => properDivisors(input).reduce((number: any, acc: any) => number + acc, 0);

export const isAbundantNumber = (input: number): boolean => {
  const sumOfDivisorsOfInput = sumOfDivisorsOf(input);
  return sumOfDivisorsOfInput > input;
};

export const listOfAbundantNumbers = (input: number):number[] => {
  const result: number[] = [];
  for (let i = 0; i <= input; i += 1) {
    if (isAbundantNumber(i)) {
      result.push(i);
    }
  }

  return result;
};

export const listOfSumsOfAbundantsUpTo = (input: number): number[] => {
  const numbers = listOfAbundantNumbers(input);
  const result: number[] = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i; j < numbers.length - 1; j += 1) {
      if (numbers[i] + numbers[j] < input) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }

  return result;
};

function sumOfSumsOfAbundants(input: number) {
  return listOfSumsOfAbundantsUpTo(input)
    .reduce((number, acc) => number + acc, 0);
}

export const sumOfUncreatableItegersByAbundance = (input: number): number => {
  const sum = sumOfSumsOfAbundants(input);
  const result: number = ((input * (input + 1)) / 2);
  return result - sum;
};
