export function waysOfChangeFor(input: number): number {
  throw new Error('Unimplemented');
}

const denominations: Map<string, number[]> = new Map();
denominations.set('uk', [1, 2, 5, 10, 20, 50, 100, 200]);

export function allCoinsFor(country: string): number[] {
  // @ts-ignore
  return denominations.get(country);
}

export function combinations(target: number, coins: number[]): number {
  const ways: number[] = [1];
  for (let i = 1; i < target + 1; i += 1) {
    ways[i] = 0;
  }

  for (let i = 0; i < coins.length; i += 1) {
    const coin = coins[i];
    for (let j = coin; j <= target; j += 1) {
      ways[j] += ways[j - coin];
    }
  }

  return ways[target];
}

export function makeCombinationsFor(input: number, country: string): number {
  const result: number = 0;
  const coins: number[] = allCoinsFor(country);
  return combinations(input, coins);
}
