export const sumOfUncreatableItegersByAbundance = (): BigInt => {
  throw new Error('Unimplemented!');
};

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

export const listOfAbundantNumbers = ():number[] => {
  const result: number[] = [];
  for (let i = 0; i <= 28123; i += 1) {
    if (isAbundantNumber(i)) {
      result.push(i);
    }
  }

  return result;
};
