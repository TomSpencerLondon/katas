import {
  bitsNeeded,
  convertNumberToBinary,
  convertToBinary,
  decimalConversionToBinary,
  fullFloatToBinary,
} from '../src';

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

  it('converts decimal to binary', () => {
    const number = convertToBinary(5894);

    expect(number).toEqual(1011100000110);
  });
});

describe('bitsNeeded', () => {
  it('converts decimal to binary', () => {
    const number = bitsNeeded(2.8, 14);

    expect(number).toEqual(48);
  });
});

describe('decimalConversionToBinary', () => {
  it('converts decimal fraction to binary', () => {
    const number = decimalConversionToBinary(0.376, 10);

    expect(number).toEqual('0.0110000001');
  });

  it('converts decimal fraction to binary', () => {
    const number = decimalConversionToBinary(0.0387, 30);

    expect(number).toEqual('0.000010011110100000111110010000');
  });
});

describe('fullFloatToBinary', () => {
  it('converts decimal fraction to binary', () => {
    const number = fullFloatToBinary(5894.376, 23);

    expect(number).toEqual('1011100000110.0110000001');
  });

  it('converts decimal fraction to binary', () => {
    const number = fullFloatToBinary(0.0387, 32);

    expect(number).toEqual('0.0000100111101000001111100100001');
  });
});
