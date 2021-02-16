export function fib(length: number): number {
  const number: number = parseInt('9'.repeat(length), 10);

  const cache: bigint[] = [];

  cache[0] = 0n;
  cache[1] = 1n;

  let index: number = 0;
  for (let i = 2; i <= number; i += 1) {
    cache[i] = cache[i - 1] + cache[i - 2];
    if (cache[i].toString().length >= length) {
      index = i;
      break;
    }
  }

  return index;
}

export function firstFib(length: number): number {
  return fib(length);
}
