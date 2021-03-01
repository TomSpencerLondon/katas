import { bitsNeeded, convertToBinary } from '../src';

describe('convertToBinary', () => {
  it('converts 8 decimal to binary', () => {
    const number = convertToBinary(8);

    expect(number).toEqual(1000);
  });
  it('converts 29803 decimal to binary', () => {
    const number = convertToBinary(29803);

    expect(number).toEqual(111010001101011);
  });

  it('converts decimal to binary', () => {
    const number = convertToBinary(8155);

    expect(number).toEqual(1111111011011);
  });
});

describe('bitsNeeded', () => {
  it('converts decimal to binary', () => {
    const number = bitsNeeded(2.8, 14);

    expect(number).toEqual(48);
  });
});
