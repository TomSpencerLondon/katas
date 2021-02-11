import { readFile } from '../../extract/file-reading';

async function read(filename: string) {
  const result = await readFile(filename);
  const lines = result.toString().trim().split(',').map((name) => name.replace(/["]+/g, ''));
  return lines;
}

export const asciiCount = (name: string): BigInt => {
  const characters = name.split('');
  const asciiNumbers: number[] = characters.map((char) => {
    return char.charCodeAt(0) - 64;
  });

  return BigInt(asciiNumbers.reduce((number, acc) => number + acc, 0));
};

export const namesInOrder = (names: string[]): string[] => names.sort((a, b) => a.localeCompare(b));

export const sumNames = (orderedNames: string[]): BigInt => {
  let result: BigInt = BigInt(0);
  for (let i = 0; i < orderedNames.length; i += 1) {
    const value = asciiCount(orderedNames[i]);
    const number = BigInt(BigInt(value) * BigInt(i + 1));
    result = BigInt(result) + number;
  }

  return result;
};

// eslint-disable-next-line consistent-return
function stringify(value: BigInt) {
  if (value !== undefined) {
    return JSON.stringify(value, (_, v) => (typeof v === 'bigint' ? `${v}n` : v));
  }
}

export const namesScores = async (filename: string): Promise<BigInt> => {
  const names = await read(filename);
  const orderedNames = namesInOrder(names);
  const result = sumNames(orderedNames);
  return result;
};

// Alternative/official approach to serializing BigInt:

// @ts-ignore
// eslint-disable-next-line no-extend-native
BigInt.prototype.toJSON = function () {
  return `${this.toString()}n`;
};
