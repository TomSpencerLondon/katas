export function cycleCount(numerator: number, denominator: number): number {
//  0.14285714285714285
  const number: string = (numerator / denominator).toString();
  const digits = number.slice(2).split('');
  const firstInCycle: string = digits[0];
  const secondInCycle: string = digits[1];
  let count: number = 0;

  for (let i = 2; i < digits.length; i += 1) {
    if (firstInCycle === secondInCycle) {
      count = 1;
      break;
    } else if (digits[i] === firstInCycle) {
      count = i;
      break;
    } else if (digits[i] === secondInCycle) {
      count = i - 1;
      break;
    }
  }

  return count;
}

export function longestRecurringCycle(limit: number): number {
  let currentMax: number = 0;
  let result: number = 0;

  for (let i = 0; i <= limit; i += 1) {
    const count = cycleCount(1, i);
    if (count > currentMax) {
      currentMax = count;
      result = i;
    }
  }
  return result;
}
