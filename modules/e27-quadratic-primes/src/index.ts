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
  for (let n = 0; ; n += 1) {
    const number = (n * n) + (a * n) + b;
    if (!isPrime(number)) {
      return n;
    }
  }
}

export function productOfCoefficients(a: number, b: number): number {
  let result: number = 0;
  let maximum: number = 0;
  for (let i = -a; i <= a; i += 1) {
    for (let j = -b; j <= b; j += 1) {
      const number = numberOfPrimes(i, j);
      if (number > maximum) {
        result = i * j;
        maximum = number;
      }
    }
  }
  return result;
}
