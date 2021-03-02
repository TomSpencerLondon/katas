export function pandigitalProductSum(): number {
  const products: Set<number> = new Set();

  for (let i = 1; i < 100; i += 1) {
    for (let j = Math.max(i + 1, Math.floor(1000 / i)); j < 10_000 / i; j += 1) {
      const result = i * j;
      const resultString: string = `${result}${i}${j}`;
      // eslint-disable-next-line no-use-before-define
      if (pandigitalCheck(resultString)) {
        products.add(result);
      }
    }
  }

  return Array.from(products).reduce((acc, number) => acc + number, 0);
}

export function getAllPermutations(input: string): string[] {
  if (input.length === 1) {
    return [input];
  }

  const result: string[] = [];

  for (let i = 0; i < input.length; i += 1) {
    const firstChar = input[i];
    const charsLeft = input.substring(0, i) + input.substring(i + 1);
    const innerPermutatations = getAllPermutations(charsLeft);
    innerPermutatations.forEach((str) => {
      result.push(firstChar + str);
    });
  }

  return result;
}

// 1, 2, 3, 4, 5, 6, 7, 8, 9
// 1. check if string is pandigital
// 2. Nested loop each step check if pandigital

export function pandigitalCheck(input: string): boolean {
  if (input.length !== 9) {
    return false;
  }
  const digits: Set<string> = new Set(input.split('')
    .filter((el) => parseInt(el, 10) > 0));
  return digits.size === input.length;
}

export function pandigitalProductSum2(): number {
  const products: Set<number> = new Set();

  const allPermutations: string[] = getAllPermutations('123456789');

  allPermutations.forEach((permutation) => {
    for (let i = 1; i < 5; i += 1) {
      for (let j = i; j < i + 5; j += 1) {
        const multiplier = parseInt(permutation.substring(0, i), 10);
        const multiplicand = parseInt(permutation.substring(i, j), 10);
        const result = parseInt(permutation.substring(j), 10);

        if (multiplier * multiplicand === result) {
          products.add(result);
        }
      }
    }
  });

  return Array.from(products).reduce((acc, number) => acc + number, 0);
}
