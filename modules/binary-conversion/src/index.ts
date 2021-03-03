// def binary(x):
// for i in range(floor(log(x)/log(2))+1):
// print x%2
// x=(x-x%2)/2

const bigInt = require('big-integer');

export function convertToBinary(input: number): number {
  let amount: number = input;
  let bin: number = 0;
  let remainder: number = 1;
  let i: number = 1;
  while (amount !== 0) {
    remainder = amount % 2;
    amount = parseInt(String(amount / 2), 10);
    bin += remainder * i;
    i *= 10;
  }
  return bin;
}

export function bitsNeeded(value: number, exponent: number): number {
  return Math.ceil((Math.log(value) + exponent * Math.log(10)) / Math.log(2));
}

export function convertNumberToBinary(input: number): string {
  // eslint-disable-next-line no-bitwise
  return (input >>> 0).toString(2);
}

export function decimalConversionToBinary(input: number, precision: number): number {
  let amount: number = input;
  const digits: number = precision;
  let i: number = 0;
  const result: number[] = [];
  while (amount !== 0 && i !== digits) {
    i += 1;
    const m: number = 2 * amount;
    if (m > 1) {
      result.push(1);
    } else {
      result.push(0);
    }
    const intPart = Math.trunc(m);
    const floatPart = Number((m - intPart));
    amount = floatPart;
  }

  return parseFloat(`0.${result.join('')}`);
}

export function fullFloatToBinary(input: number): string {
  const intPart = Math.trunc(input);
  const floatPart = Number((input - intPart));
  const integer = convertToBinary(intPart);
  const decimal = decimalConversionToBinary(floatPart, 10);

  return `${integer}${decimal.toString().substring(1)}`;
}
