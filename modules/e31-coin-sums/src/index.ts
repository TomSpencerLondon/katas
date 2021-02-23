const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
const sums: Set<string> = new Set();

export function waysOfChangeFor(amount: number, coin: number, route: number[]): number {
  if (amount === 0) {
    const numbers: number[] = route.sort((a, b) => a - b);
    sums.add(JSON.stringify(numbers));

    return 0;
  }

  if (amount < 0) {
    return 0;
  }

  coins.forEach((c) => {
    waysOfChangeFor(amount - c, c, [c, ...route]);
  });
  return sums.size;
}
