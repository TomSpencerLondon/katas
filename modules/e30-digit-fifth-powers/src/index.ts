export function sumOfPowersOf(input: number, power: number): number {
  const digits = input.toString().split('');
  return digits.reduce((acc, digit) => acc + (parseInt(digit, 10) ** power), 0);
}

export function limit(power: number): number {
  let amount: number = 10;
  let sum: number = sumOfPowersOf(amount - 1, power);
  while (amount < sum) {
    amount *= 10;
    sum = sumOfPowersOf(amount - 1, power);
  }

  return sum;
}

export function isSumOfPowersOf(input: number, power: number): boolean {
  return input === sumOfPowersOf(input, power);
}

export function sumOfPowers(power: number): number {
  const powers: Set<number> = new Set();
  const number = limit(power);
  for (let i = 2; i < number; i += 1) {
    if (isSumOfPowersOf(i, power)) {
      powers.add(i);
    }
  }

  return Array.from(powers)
    .reduce((acc: number, pow: number) => acc + pow, 0);
}
