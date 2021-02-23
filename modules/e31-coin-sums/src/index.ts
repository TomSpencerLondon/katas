const coins: number[] = [1, 2, 5];

export function waysOfChangeFor(amount: number): number {
  if (amount === 1) {
    return 1;
  }

  const remainingCoins: number[] = coins.filter((c) => c <= amount);
  let count: number = 0;
  remainingCoins.forEach((c) => {
    if (amount - c === 0) {
      count += 1;
    } else if (amount % c === 0) {
      count += 1;
    }
  });

  return amount;
}
