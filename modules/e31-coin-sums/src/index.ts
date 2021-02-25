const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
const sums: Set<string> = new Set();

// const coins: number[] = [1, 2, 5, 10, 20, 50, 100, 200];
// const sums: Set<string> = new Set();
//
// export function waysOfChangeFor(amount: number, coin: number, route: number[]): number {
//   if (amount === 0) {
//     const numbers: number[] = route.sort((a, b) => a - b);
//     sums.add(JSON.stringify(numbers));
//
//     return 0;
//   }
//
//   if (amount < 0) {
//     return 0;
//   }
//
//   coins.forEach((c) => {
//     waysOfChangeFor(amount - c, c, [c, ...route]);
//   });
//   return sums.size;
// }

export function waysOfChangeFor(target: number): number {
  // eslint-disable-next-line no-shadow
  const ways: number[] = [1];
  for (let i = 1; i < target + 1; i += 1) {
    ways[i] = 0;
  }
  //  0  1  2  3  4  5
  // [1, 0, 0, 0, 0, 0]; start
  // [1, 1, 1, 1, 1, 1]; 1p
  // [1, 1, 2, 2, 3, 3]; 2p
  // [1, 1, 2, 2, 3, 4]; 5p;
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

  const degreesOfFreedomForLargestCoin = Math.floor(amount / largestCoin) + 1;

  return Array
    .from({ length: degreesOfFreedomForLargestCoin })
    .map((_, i) => getNumberOfCombinationsForCoins(amount - (i * largestCoin), otherCoins))
    .reduce((a, b) => a + b);
};

export const getNumberOfCombinations = (amount: number): number => getNumberOfCombinationsForCoins(amount, COINS);

// 5, [1, 2, 5, 10, 20, 50, 100, 200]

// Amount     Largest Coin    Degrees of Freedom    Next call                                                           Return
//   5            200             0                    5, [1, 2, 5, 10, 50, 100]
//   5            100             0                    5, [1, 2, 5, 10, 50]
//   5            50              0                    5, [1, 2, 5, 10]
//   5            10              0                    5, [1, 2, 5]
//   5            5               2                    First call: 5, [1, 2] Second call: 0, [1, 2]
// 1st // 5       2               3                    First call: 5, [1] Second call: 3, [1], Third call: 0, [1]       1 + 1 + 1
// 2nd // 0       2               1                    0, [1]                                                           1
