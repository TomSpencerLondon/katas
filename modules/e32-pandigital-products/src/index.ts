export function pandigitalProductSum(): number {
  const products: Set<number> = new Set();

  for (let i = 1; i < 10_000; i += 1) {
    for (let j = 1; j < 10_000 / i; j += 1) {
      const result = i * j;
      const resultString: string = `${result}${i}${j}`;
      // eslint-disable-next-line no-use-before-define
      if (resultString.length === 9 && pandigitalCheck(resultString)) {
        products.add(result);
      }
    }
  }

  return Array.from(products).reduce((acc, number) => acc + number, 0);
}

// 1, 2, 3, 4, 5, 6, 7, 8, 9
// 1. check if string is pandigital
// 2. Nested loop each step check if pandigital

export function pandigitalCheck(input: string): boolean {
  const digits: Set<string> = new Set(input.split('')
    .filter((el) => parseInt(el, 10) > 0));
  return digits.size === input.length;
}
