export function cycleCount(denominator: number): number {
  let remainder: number = 1 % denominator;
  const seenRemainders: Map<number, number> = new Map();
  let index: number = 0;
  while (remainder !== 0 && !seenRemainders.has(remainder)) {
    seenRemainders.set(remainder, index);
    remainder *= 10;
    remainder %= denominator;
    index += 1;
  }

  if (remainder === 0) {
    return 0;
  }
  return index - (seenRemainders.get(remainder) as number);
}

export function longestRecurringCycle(limit: number): number {
  let longestCycle: number = 0;
  let bestDenominator: number = 0;
  for (let i = 0; i <= limit; i += 1) {
    const cycleLength = cycleCount(i);
    if (cycleLength > longestCycle) {
      bestDenominator = i;
      longestCycle = cycleLength;
    }
  }
  return bestDenominator;
}
