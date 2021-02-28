import { convertToBinary } from '../src';

describe('convertToBinary', () => {
  it('converts decimal to binary', () => {
    const number = convertToBinary(8);

    expect(number).toEqual(1000);
  });
});
