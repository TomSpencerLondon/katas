export function cycleCount(numerator: number, denominator: number): number {
  const newNumerator: number = 10;
  const remainder: number = newNumerator % denominator;
  let nextNumerator: number = remainder * 10;
  let count = 1;
  while (nextNumerator !== newNumerator) {
    nextNumerator %= denominator;
    nextNumerator *= 10;
    count += 1;
  }

  return count;
}

export function longestRecurringCycle(limit: number): number {
  let result: number = 0;
  for (let i = limit; i > 1; i -= 1) {
    const currentResult: number = cycleCount(1, i);
    if (currentResult > result) {
      result = currentResult;
    }
  }

  return result;
}
