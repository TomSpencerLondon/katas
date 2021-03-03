import { cubeFinder } from '../src';

describe('cubeFinder', () => {
  it('returns all the cubes from 0.1 to 10.0', () => {
    const number: {} = cubeFinder();

    // @ts-ignore
    expect(number['0.1']).toEqual(0.001);
    // @ts-ignore
    expect(number['0.2']).toEqual(0.008);
  });
});
