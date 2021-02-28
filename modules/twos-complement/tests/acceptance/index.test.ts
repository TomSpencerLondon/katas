import { twosComplement } from '../../src';

describe('twosComplement', () => {
  it('finds twos complement of 1011', () => {
    expect(twosComplement([1, 0, 1, 1])).toEqual([1, 0, 1]);
  });

  it('finds twos complement of 11010100', () => {
    expect(twosComplement([1, 1, 0, 1, 0, 1, 0, 0])).toEqual([0, 1, 0, 1, 1, 0, 0]);
  });
});
