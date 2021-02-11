import {
  asciiCount, sumNames, namesInOrder,
} from '../src';

describe('asciiNumbers', () => {
  it('converts a name to an array of ascii character numbers', () => {
    const name: string = 'BARBARA';
    const result: BigInt = asciiCount(name);
    expect(result).toEqual(43n);
  });

  it('converts a name to an array of ascii character numbers', () => {
    const name: string = 'LINDA';
    const result: BigInt = asciiCount(name);
    expect(result).toEqual(40n);
  });

  it('converts a name to an array of ascii character numbers', () => {
    const name: string = 'MARY';
    const result: BigInt = asciiCount(name);
    expect(result).toEqual(57n);
  });
});
describe('namesInOrder', () => {
  it('orders name arrays', () => {
    const names: string[] = ['MARY', 'DAVID', 'JERRY'];
    const result: string[] = namesInOrder(names);
    expect(result).toEqual(['DAVID', 'JERRY', 'MARY']);
  });
});

describe('sumNames', () => {
  it('returns correct sum for ordered names array', () => {
    const names: string[] = ['BARBARA', 'LINDA', 'MARY'];
    const result: BigInt = sumNames(names);
    expect(result).toEqual(294n);
  });
});
