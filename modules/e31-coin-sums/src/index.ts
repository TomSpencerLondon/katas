const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
const sums: Set<string> = new Set();

export function waysOfChangeFor(target: number): number {
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
