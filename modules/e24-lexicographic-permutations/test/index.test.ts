import { permutations } from '../src';

describe('permutations', () => {
  it('returns an empty string', () => {
    const result: string[] = permutations('');
    const expected: string[] = [''];
    expect(result).toEqual(expected);
  });

  it('returns [1] for 1', () => {
    const result: string[] = permutations('1');
    const expected: string[] = ['1'];
    expect(result).toEqual(expected);
  });

  it('returns [12, 21] for 12', () => {
    const result: string[] = permutations('12');
    const expected: string[] = ['12', '21'];
    expect(result).toEqual(expected);
  });

  xit('returns all permutations from 123', () => {
    const result: string[] = permutations('123');
    const expected: string[] = ['123', '132', '213', '231', '312', '321'];
    expect(result).toEqual(expected);
  });

  xit('returns all permutations from 123', () => {
    const result: string[] = permutations('1234');
    const expected: string[] = [
      '1234',
      '1243',
      '1324',
      '1342',
      '1423',
      '1432',
      '2134',
      '2143',
      '2314',
      '2341',
      '2413',
      '2431',
      '3124',
      '3142',
      '3214',
      '3241',
      '3412',
      '3421',
      '4123',
      '4132',
      '4213',
      '4231',
      '4312',
      '4321',
    ];
    expect(result).toEqual(expected);
  });
});
