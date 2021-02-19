export function productOfCoefficients(): number {
  throw new Error('Unimplemented!');
}

export function isPrime(input: number): boolean {
  if (input < 2 || input % 2 === 0) {
    return false;
  }

  if (input === 2) {
    return true;
  }

  for (let i = 3; i <= input / 2; i += 2) {
    if (input % i === 0) {
      return false;
    }
  }

  return true;
}

export function numberOfPrimes(a: number, b: number): number {
  let total: number = 0;
  for (let n = 0; n <= 39; n += 1) {
    const number = (n * n) + (a * n) + b;
    if (isPrime(number)) {
      total += 1;
    }
  }
  return total;
}
