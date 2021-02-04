export const getFactorial = (input: number): bigint => {
  if (BigInt(input) === BigInt(1)) {
    return 1n;
  }

  return BigInt(input) * getFactorial(input - 1);
};

export const getFactorialDigitSum = (input: number): number => {
  const factorial = getFactorial(input);
  const numberString = factorial.toString().split('');
  return numberString.reduce((acc: number, string) => acc + parseInt(string, 10), 0);
};
