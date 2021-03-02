import { cubeFinder } from '../src';

describe('cubeFinder', () => {
  it('returns all the cubes from 0.1 to 10.0', () => {
    const number: {} = cubeFinder();

    expect(number).toEqual({ 0.1: 0.0001 });
  });
});
