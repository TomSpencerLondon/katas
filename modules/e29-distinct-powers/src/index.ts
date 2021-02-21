export function integerCombinations(a: number, b: number): number {
  const distinctPowers: Set<Number> = new Set();
  for (let i = 2; i <= a; i += 1) {
    for (let j = 2; j <= b; j += 1) {
      const number = i ** j;
      distinctPowers.add(number);
    }
  }

  return distinctPowers.size;
}
