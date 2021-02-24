
const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
const sums: Set<string> = new Set();

export function waysOfChangeFor(target: number): number {
  // eslint-disable-next-line no-shadow
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

const COINS = [1, 2, 5, 10, 20, 50, 100, 200];

const getNumberOfCombinationsForCoins = (amount: number, remainingCoins: number[]): number => {
  if (remainingCoins.length === 1) {
    return 1;
  }

  const otherCoins = [...remainingCoins];
  const largestCoin = otherCoins.pop() as number;

  const degreesOfFreedomForLargestCoin = Math.floor(amount / largestCoin);

  return Array
    .from({ length: degreesOfFreedomForLargestCoin + 1 })
    .map((_, i) => getNumberOfCombinationsForCoins(amount - (i * largestCoin), otherCoins))
    .reduce((a, b) => a + b);
};

export const getNumberOfCombinations = (amount: number): number => getNumberOfCombinationsForCoins(amount, COINS);
