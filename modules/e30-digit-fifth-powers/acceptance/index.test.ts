export function sumOfPowers(power: number): number {
  throw new Error('Unimplemented!');
}

export function sumOfPowersOf(input: number, power: number): number {
  const digits = input.toString().split('');
  return digits.reduce((acc, digit) => acc + (parseInt(digit, 10) ** power), 0);
}

export function isSumOfPowersOf(input: number, power: number): boolean {
  return input === sumOfPowersOf(input, power);
}
