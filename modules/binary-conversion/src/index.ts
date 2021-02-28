// def binary(x):
// for i in range(floor(log(x)/log(2))+1):
// print x%2
// x=(x-x%2)/2

export function convertToBinary(input: number): number {
  let amount: number = input;
  let bin: number = 0;
  let remainder: number = 1;
  let i: number = 1;
  while (amount !== 0) {
    remainder = amount % 2;
    amount = parseInt(String(amount / 2), 10);
    bin += remainder * i;
    i *= 10;
  }
  return bin;
}
