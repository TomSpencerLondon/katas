export function twosComplement(input: number[]): number[] {
  let i: number = input.length - 1;
  const result: number[] = [];
  while (input[i] === 0) {
    result[i] = 0;
    i -= 1;
  }
  result[i] = 1;
  for (let j = 0; j <= i - 1; j += 1) {
    result[j] = 1 - input[j];
  }

  console.log(result);

  return result.filter((n) => n !== null);
}
