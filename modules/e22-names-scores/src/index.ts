import { readFile } from '../../extract/file-reading';

async function read(filename: string) {
  const result = await readFile(filename);
  const lines = result.toString().trim().split(',').map((name) => name.replace(/["]+/g, ''));
  return lines;
}

export const asciiCount = (name: string): bigint => {
  const characters = name.split('');
  const asciiNumbers: number[] = characters.map((char) => char.charCodeAt(0) - 64);

  return BigInt(asciiNumbers.reduce((number, acc) => number + acc, 0));
};

export const namesInOrder = (names: string[]): string[] => names.sort((a, b) => a.localeCompare(b));

export const sumNames = (orderedNames: string[]): bigint => {
  let result: bigint = 0n;
  for (let i = 0; i < orderedNames.length; i += 1) {
    const value: bigint = asciiCount(orderedNames[i]);
    const number = value * BigInt(i + 1);
    result = BigInt(result) + number;
  }

  return result;
};

export const namesScores = async (filename: string): Promise<bigint> => {
  const names = await read(filename);
  const orderedNames = namesInOrder(names);
  const result = sumNames(orderedNames);
  return result;
};
