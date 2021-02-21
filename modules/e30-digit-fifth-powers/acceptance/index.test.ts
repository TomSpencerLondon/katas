export function sumOfPowers(power: number): number {
  throw new Error('Unimplemented!');
}

export function sumOfPowersOf(input: number, power: number): number {
  const digits = input.toString().split('');
  let sum: number = 0;
  digits.forEach((number) => {
    sum += parseInt(number, 10) ** power;
  });

  return sum;
}

export function isSumOfPowersOf(input: number, power: number): boolean {
  return input === sumOfPowersOf(input, power);
}
